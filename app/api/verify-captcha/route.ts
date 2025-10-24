import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { captchaToken } = body;
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!captchaToken) {
      return NextResponse.json(
        { success: false, message: "No captcha token" },
        { status: 400 },
      );
    }

    // Verify token with Google
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`,
      { method: "POST" },
    );

    const data = await response.json();

    if (data.success) {
      // Optional: send formData to your real backend API
      // const saveApi = process.env.NEXT_PUBLIC_SAVE_API;
      // await fetch(saveApi, { method: "POST", body: JSON.stringify(formData) });

      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, message: "Invalid captcha" },
        { status: 400 },
      );
    }
  } catch (err) {
    console.error("Captcha API error:", err);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}
