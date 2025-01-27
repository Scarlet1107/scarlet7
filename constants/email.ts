export const senderEmail = "scarlet7.net@gmail.com"; // 問い合わせフォームの送信元メールアドレス
export const adminEmail = "shougo.ushiro@gmail.com"; // 管理者のメールアドレス

export const getAdminMailOptions = (
  name: string,
  email: string,
  message: string
) => ({
  from: senderEmail, // 送信元(ユーザー情報)
  to: adminEmail, // 管理者メールアドレス
  subject: "【要返信】お問い合わせがありました",
  text: `【名前】\n${name}\n\n【メールアドレス】\n${email}\n\n【メッセージ】\n${message}\n\n【システム】scarlet.net@gmail.comから返信を行ってください。`,
  // HTML形式で送りたい場合には、html: "<p>～</p>" なども追加可能
});

export const getUserMailOptions = (
  name: string,
  email: string,
  message: string
) => ({
  from: senderEmail, // 送信元(あなたのメールアドレス)
  to: email, // ユーザーのメールアドレス
  subject: "Thank you for your inquiry / お問い合わせありがとうございます",
  text: `Thank you for your inquiry
    (Japanese translation below)

    ---------------------------
    [ English Version ]
    ---------------------------
    Hello ${name},

    Thank you for reaching out to us.
    We have received your inquiry with the following details:

    Name:
    ${name}

    Email:
    ${email}

    Message:
    ${message}

    We will get back to you as soon as possible.

    Best regards,
    Scarlet

    ---------------------------
    [ Japanese Version ]
    ---------------------------
    ${name} 様

    このたびはお問い合わせいただき、誠にありがとうございます。
    以下の内容でお問い合わせを承りました。

    【お名前】
    ${name}

    【メールアドレス】
    ${email}

    【メッセージ】
    ${message}

    内容を確認のうえ、改めてご連絡させていただきますので、しばらくお待ちいただきますようお願い申し上げます。

    ---------------------------------
    Scarlet`,
  html: `<p>Thank you for your inquiry<br />
        (Japanese translation below)</p>

        <hr />
        <h3>English Version</h3>
        <p>Hello ${name},</p>
        <p>Thank you for reaching out to us.<br />
        We have received your inquiry with the following details:</p>
        <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Message:</strong> ${message}</li>
        </ul>
        <p>We will get back to you as soon as possible.</p>
        <p>Best regards,<br />Scarlet</p>

        <hr />
        <h3>Japanese Version</h3>
        <p>${name} 様</p>
        <p>このたびはお問い合わせありがとうございます。<br />
        以下の内容でお問い合わせを承りました。</p>
        <ul>
            <li><strong>【お名前】</strong> ${name}</li>
            <li><strong>【メールアドレス】</strong> ${email}</li>
            <li><strong>【メッセージ】</strong> ${message}</li>
        </ul>
        <p>しばらくお待ちいただきますようお願いいたします。</p>
        <p>---------------------------------<br />Scarlet</p>`,
});
