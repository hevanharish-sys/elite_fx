import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = 'theelitetraderx@gmail.com'; // <- your inbox

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { type, ...data } = req.body;

  try {
    if (type === 'contact') {
      // Contact form: name + message
      const { name, message } = data;
      if (!name || !message) {
        return res.status(400).json({ error: 'Missing fields' });
      }

      await resend.emails.send({
        from: 'Elite Trader <noreply@theelitetrader.in>',
        to: TO_EMAIL,
        subject: `📩 New Query from ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: auto; background: #0a0a0a; color: #fff; padding: 32px; border-radius: 12px;">
            <div style="border-bottom: 1px solid #c9a84c33; padding-bottom: 16px; margin-bottom: 24px;">
              <h2 style="color: #C9A84C; margin: 0; font-size: 22px;">📩 New Contact Query</h2>
              <p style="color: #aaa; margin: 4px 0 0;">From The Elite Trader Website</p>
            </div>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #C9A84C; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; width: 120px;">Name</td>
                <td style="padding: 10px 0; color: #fff; font-size: 16px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #C9A84C; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; color: #fff; font-size: 15px; line-height: 1.6;">${message.replace(/\n/g, '<br/>')}</td>
              </tr>
            </table>
            <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #c9a84c22; color: #555; font-size: 12px;">
              Sent via theelitetrader.in contact form
            </div>
          </div>
        `,
      });

    } else if (type === 'join') {
      // Join modal: name + email + phone + age
      const { name, email, phone, age } = data;
      if (!name || !email || !phone || !age) {
        return res.status(400).json({ error: 'Missing fields' });
      }

      await resend.emails.send({
        from: 'Elite Trader <noreply@theelitetrader.in>',
        to: TO_EMAIL,
        subject: `🚀 New Join Application from ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: auto; background: #0a0a0a; color: #fff; padding: 32px; border-radius: 12px;">
            <div style="border-bottom: 1px solid #c9a84c33; padding-bottom: 16px; margin-bottom: 24px;">
              <h2 style="color: #C9A84C; margin: 0; font-size: 22px;">🚀 New Join Application</h2>
              <p style="color: #aaa; margin: 4px 0 0;">Someone wants to join The Elite Trader</p>
            </div>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #C9A84C; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; width: 120px;">Full Name</td>
                <td style="padding: 10px 0; color: #fff; font-size: 16px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #C9A84C; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Email</td>
                <td style="padding: 10px 0; color: #fff; font-size: 16px;"><a href="mailto:${email}" style="color: #C9A84C;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #C9A84C; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Phone</td>
                <td style="padding: 10px 0; color: #fff; font-size: 16px;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #C9A84C; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Age</td>
                <td style="padding: 10px 0; color: #fff; font-size: 16px;">${age}</td>
              </tr>
            </table>
            <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #c9a84c22; color: #555; font-size: 12px;">
              Sent via theelitetrader.in join waitlist form
            </div>
          </div>
        `,
      });

    } else {
      return res.status(400).json({ error: 'Invalid type' });
    }

    return res.status(200).json({ success: true });

  } catch (err) {
    console.error('Resend error:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
