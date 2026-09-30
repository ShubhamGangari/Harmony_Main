import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import { SITE_CONFIG } from "../../../../lib/config";

export async function POST(request) {
  try {
    const body = await request.json();
    const { amount, receipt, notes, customer } = body;

    const numericAmount = Math.round(Number(amount));
    if (!numericAmount || numericAmount <= 0) {
      return NextResponse.json(
        { success: false, message: "Invalid payment amount." },
        { status: 400 }
      );
    }

    const key_id =
      process.env.RAZORPAY_KEY_ID ||
      process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ||
      SITE_CONFIG.razorpayKeyId;
    const key_secret = process.env.RAZORPAY_KEY_SECRET;

    const effectiveKeyId = key_id || SITE_CONFIG.razorpayKeyId || "rzp_test_TbVPnOaDITg2vm";

    let order = null;
    if (key_secret) {
      try {
        const razorpay = new Razorpay({
          key_id: effectiveKeyId,
          key_secret,
        });

        const options = {
          amount: numericAmount * 100, // Razorpay takes amount in paise (1 INR = 100 paise)
          currency: "INR",
          receipt: (receipt || `order_${Date.now()}`).slice(0, 40),
          notes: {
            customer_name: customer?.name || "Customer",
            customer_email: customer?.email || "",
            customer_phone: customer?.phone || "",
            ...(notes || {}),
          },
        };

        order = await razorpay.orders.create(options);
      } catch (razorError) {
        console.warn("Razorpay API order creation warning (using client checkout fallback):", razorError?.message);
      }
    } else {
      console.log("RAZORPAY_KEY_SECRET not set; using client checkout mode.");
    }

    return NextResponse.json({
      success: true,
      orderId: order ? order.id : null,
      amount: order ? order.amount : numericAmount * 100,
      currency: order ? order.currency : "INR",
      keyId: effectiveKeyId,
      isClientOrder: !order,
    });
  } catch (error) {
    console.error("Razorpay order creation failed:", error);
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Could not initiate payment order.",
      },
      { status: 500 }
    );
  }
}
