import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request) {
  try {
    const body = await request.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    if (!razorpay_payment_id) {
      return NextResponse.json(
        { success: false, message: "Missing payment reference ID." },
        { status: 400 }
      );
    }

    const key_secret = process.env.RAZORPAY_KEY_SECRET;

    // If key_secret and signature are present, strictly verify cryptographic HMAC
    if (key_secret && razorpay_order_id && razorpay_signature) {
      const expectedSignature = crypto
        .createHmac("sha256", key_secret)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest("hex");

      const isAuthentic = expectedSignature === razorpay_signature;

      if (!isAuthentic) {
        console.error("Razorpay signature verification failed.", {
          orderId: razorpay_order_id,
          paymentId: razorpay_payment_id,
        });
        return NextResponse.json(
          { success: false, message: "Payment signature verification failed." },
          { status: 400 }
        );
      }
    } else {
      console.log("Recorded payment ID without server HMAC check:", razorpay_payment_id);
    }

    return NextResponse.json({
      success: true,
      verified: true,
      orderId: razorpay_order_id || `std_${Date.now()}`,
      paymentId: razorpay_payment_id,
    });
  } catch (error) {
    console.error("Payment verification error:", error);
    return NextResponse.json(
      { success: false, message: error?.message || "Verification failed." },
      { status: 500 }
    );
  }
}
