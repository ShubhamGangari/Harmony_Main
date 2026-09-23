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

    if (!key_id || !key_secret) {
      console.error("Razorpay keys are not configured in environment.");
      return NextResponse.json(
        { success: false, message: "Payment gateway is not configured." },
        { status: 500 }
      );
    }

    const razorpay = new Razorpay({
      key_id,
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

    const order = await razorpay.orders.create(options);

    return NextResponse.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: key_id,
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
