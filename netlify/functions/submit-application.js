const { Resend } = require('resend');

exports.handler = async function (event) {
  // Only accept POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request body' }) };
  }

  // ── Field label maps ──────────────────────────────────────────────────────
  const moduleLabels = {
    rooted_creation:    'Rooted Creation — Finding what is mine',
    presence_and_sound: 'Presence & Sound — Learning to stay',
    artist_to_universe: 'From Artist to Universe — Letting the work become larger',
    unsure:             'I am not sure yet',
  };

  const referralLabels = {
    youtube:   'YouTube',
    streaming: 'Spotify / Apple Music',
    friend:    'A friend or collaborator',
    social:    'Social media',
    other:     'Something else',
  };

  const convPrefLabels = {
    video:   'Video call',
    voice:   'Voice call',
    written: 'Written exchange',
  };

  // ── Helpers ───────────────────────────────────────────────────────────────
  const esc = (str) =>
    String(str ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const row = (label, value) =>
    value
      ? `<tr>
           <td style="padding:10px 0;border-bottom:1px solid #2a2a2a;vertical-align:top;width:35%;color:#888;font-size:13px;font-family:sans-serif;">${label}</td>
           <td style="padding:10px 0 10px 16px;border-bottom:1px solid #2a2a2a;vertical-align:top;color:#e8e0d4;font-size:14px;font-family:sans-serif;">${esc(value)}</td>
         </tr>`
      : '';

  // ── Resolve values ────────────────────────────────────────────────────────
  const moduleRaw   = data.module_interest ?? '';
  const moduleLabel = moduleLabels[moduleRaw] ?? moduleRaw;

  const referralRaw  = data.referral ?? '';
  const referralStr  = referralLabels[referralRaw] ?? referralRaw;
  const referralFull = referralRaw === 'other' && data.referral_other
    ? `${referralStr} — ${data.referral_other}`
    : referralStr;

  const convPref       = convPrefLabels[data.conversation_pref ?? ''] ?? data.conversation_pref;
  const applicantName  = data.name ?? '(no name)';
  const applicantEmail = data.email ?? '';

  // ── Email subject ─────────────────────────────────────────────────────────
  const subject = `New Application — ${applicantName} — ${moduleLabel}`;

  // ── HTML email body ───────────────────────────────────────────────────────
  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#141414;font-family:sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#141414;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#1a1a1a;border-radius:4px;overflow:hidden;max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#1e1a18;padding:32px 40px;border-bottom:1px solid #2a2a2a;">
            <p style="margin:0;font-family:sans-serif;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#8b7355;">Eric Olivier Mario</p>
            <h1 style="margin:8px 0 0;font-family:Georgia,serif;font-size:22px;font-weight:400;color:#e8e0d4;">New Application</h1>
          </td>
        </tr>

        <!-- Module badge -->
        <tr>
          <td style="padding:24px 40px 0;">
            <span style="display:inline-block;padding:6px 14px;background:#2a1e10;border:1px solid #8b7355;border-radius:2px;font-family:sans-serif;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#c4956a;">${esc(moduleLabel)}</span>
          </td>
        </tr>

        <!-- Fields table -->
        <tr>
          <td style="padding:24px 40px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              ${row('Full Name',          data.name)}
              ${row('Artist Name',        data.artist_name)}
              ${row('Practice',           data.practice)}
              ${row('Current State',      data.current_state)}
              ${row('The Pull',           data.the_pull)}
              ${row('Readiness',          data.readiness)}
              ${row('Module Interest',    moduleLabel)}
              ${row('How They Found You', referralFull)}
              ${row('Email',              applicantEmail)}
              ${row('Conversation Pref',  convPref)}
              ${row('Anything Else',      data.anything_else)}
            </table>
          </td>
        </tr>

        <!-- Reply CTA -->
        <tr>
          <td style="padding:0 40px 32px;">
            <a href="mailto:${esc(applicantEmail)}?subject=Re: Your Application — ${esc(moduleLabel)}"
               style="display:inline-block;padding:12px 28px;background:#c4956a;color:#0e0c0b;font-family:sans-serif;font-size:13px;letter-spacing:0.08em;text-decoration:none;border-radius:2px;">
              Reply to ${esc(applicantName)}
            </a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 40px;border-top:1px solid #2a2a2a;">
            <p style="margin:0;font-family:sans-serif;font-size:11px;color:#555;letter-spacing:0.05em;">Sent via ericoliviermario.com application form</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  // ── Send via Resend SDK ───────────────────────────────────────────────────
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from:     'applications@ericoliviermario.com',
      to:       ['friess.eric@gmail.com'],
      reply_to: applicantEmail || undefined,
      subject,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message ?? 'Failed to send email. Please try again.' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };

  } catch (err) {
    console.error('Unexpected error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Network error. Please try again.' }),
    };
  }
};
