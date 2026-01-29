
const emailRegisterTemplate = ({ nombre, token, frontendUrl }) => `
  <style>
    .email-wrapper { width:100%; min-height:100vh; padding:60px; background-color:#ffffff; background-position:center; background-size:cover; background-repeat:no-repeat; box-sizing:border-box; }
    .email-container { background:#ffffff; max-width:480px; margin:0 auto; border-radius:18px; box-shadow:0 2px 16px rgba(0,0,0,0.12); padding:40px 32px; text-align:center; color:#111; font-family:'Poppins',Arial,sans-serif; box-sizing:border-box; }
    .email-title { color:#111; margin-bottom:18px; font-weight:700; letter-spacing:1px; font-family:'Poppins',Arial,sans-serif; }
    .email-cta { display:inline-block; padding:12px 32px; background:#4338CA; color:#fff; border-radius:16px; text-decoration:none; font-weight:bold; font-size:16px; font-family:'Poppins',Arial,sans-serif; text-transform:uppercase; margin:20px 0; box-shadow:0 1px 8px rgba(21,94,117,0.15); }
    @media only screen and (max-width:600px) {
      .email-wrapper { padding:24px; }
      .email-container { padding:20px; border-radius:12px; }
      .email-title { font-size:20px; }
      .email-cta { padding:10px 20px; font-size:14px; }
      .email-text { font-size:15px; }
    }
  </style>

  <div class="email-wrapper" style="background: url('https://i.postimg.cc/BZPG1895/retrato-grupo-cinco-adorables-cachorros.png') center/cover no-repeat; background-color:#ffffff;">
    <!-- Poppins font from Google Fonts -->
    <link href='https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap' rel='stylesheet' type='text/css'>
    <div class="email-container" style="backdrop-filter: blur(12px);background: rgba(255,255,255,0.7);max-width:480px;margin:0 auto;border-radius:18px;box-shadow:0 2px 16px rgba(0,0,0,0.12);padding:40px 32px;text-align:center;color:#111;font-family:'Poppins',Arial,sans-serif;">
      <h2 class="email-title">Veterinary Administrator</h2>
      <p class="email-text" style="font-size:18px;color:#111;margin-bottom:24px;">Hello, <strong>${nombre}</strong>!<br>Your Veterinary Administrator account is almost ready.</p>
      <p class="email-text" style="font-size:16px;color:#111;margin-bottom:32px;">Please confirm your account by clicking the button below:</p>
      <a class="email-cta" href="${frontendUrl}/admin/confirm/${token}">Check Account</a>
      <p style="font-size:13px;color:#222;margin-top:32px;">If you did not create this account, you can ignore this message.</p>
    </div>
  </div>
`;

export default emailRegisterTemplate;
