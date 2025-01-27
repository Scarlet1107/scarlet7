// app/api/contact/route.ts
import { getAdminMailOptions, getUserMailOptions } from "@/constants/email";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // 1. nodemailer用トランスポーターの作成
    //    service: "gmail" を使う場合、環境変数に各自のメールアドレスとパスワードを設定する
    //    "less secure apps" の設定が不要なように、OAuth2 など別の手段を取ることも推奨。
    //    ここでは簡易サンプルとして書いています。
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // 2. 管理者へのメールの内容
    const adminMailOptions = getAdminMailOptions(name, email, message);

    // 3. ユーザーへの自動返信メールの内容
    const userMailOptions = getUserMailOptions(name, email, message);

    // 4. メール送信の実行(管理者宛 + ユーザー宛)
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    // 5. 成功レスポンス
    return NextResponse.json({ success: true });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("メール送信失敗:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
