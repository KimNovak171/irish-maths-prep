const SKILLS = {
  N1:'Counting in groups', N4:'Place value', N5:'Tens and ones', N10:'Adding across ten',
  N11:'Taking away', N16:'Halves and quarters', M1:'Comparing measures', M3:'Using a ruler',
  M7:'Time', M9:'Money', A1:'Growing patterns', A2:'Number patterns', A5:'Same and equal',
  S1:'Position and direction', S4:'2-D shapes', S7:'Slide, turn and flip',
  D2:'Reading picture charts', D3:'Using a picture chart'
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}

function buildPracticeUrl(requestUrl, sessionId, focusIds, reviewIds, levels) {
  const url = new URL('/practice/', requestUrl);
  url.searchParams.set('sid', sessionId);
  url.searchParams.set('focus', focusIds.join(','));
  if (reviewIds.length) url.searchParams.set('review', reviewIds.join(','));
  const levelParam = focusIds.map(id => `${id}:${levels[id] ?? 0}`).join(',');
  if (levelParam) url.searchParams.set('levels', levelParam);
  return url.toString();
}

function buildHtml(focusIds, practiceUrl) {
  const names = focusIds.map(id => SKILLS[id]).filter(Boolean);
  const focusSentence = names.length === 1
    ? `<strong>${escapeHtml(names[0])}</strong>`
    : `<strong>${escapeHtml(names[0])}</strong> and <strong>${escapeHtml(names[1])}</strong>`;

  return `<!doctype html>
<html>
<body style="margin:0;padding:0;background:#f6f8f4;font-family:Arial,Helvetica,sans-serif;color:#1d2b24;">
  <div style="max-width:650px;margin:0 auto;padding:28px 18px;">
    <div style="background:#ffffff;border:1px solid #dce5df;border-radius:18px;padding:30px;">
      <div style="font-size:15px;font-weight:800;color:#167a53;margin-bottom:18px;">Irish Maths Prep</div>
      <h1 style="font-size:30px;line-height:1.15;margin:0 0 16px;color:#1d2b24;">Your 7-Day Interactive Maths Practice Is Ready</h1>

      <p style="font-size:17px;line-height:1.65;margin:0 0 14px;color:#35463d;">
        Thank you for completing the First Class Maths Skills Snapshot.
      </p>

      <p style="font-size:17px;line-height:1.65;margin:0 0 18px;color:#35463d;">
        Based on today’s snapshot, the clearest areas to give some extra practice are ${focusSentence}.
      </p>

      <div style="margin:20px 0;padding:18px;background:#e6f4ed;border:1px solid #cfe3d8;border-radius:14px;font-size:18px;line-height:1.45;font-weight:800;color:#24583f;">
        You don’t have to figure out what to practise next. We choose it for you.
      </div>

      <p style="font-size:17px;line-height:1.65;margin:0 0 20px;color:#35463d;">
        Your free week includes seven short on-screen practice sessions calibrated for First Class. Your child will answer real interactive maths questions, similar to the snapshot. If a question is difficult, we’ll offer a simpler follow-up before moving on. A little repetition is intentional when it helps build confidence or checks that learning is sticking.
      </p>

      <div style="text-align:center;margin:28px 0 26px;">
        <a href="${escapeHtml(practiceUrl)}" style="display:inline-block;background:#167a53;color:#ffffff;text-decoration:none;font-weight:800;font-size:17px;padding:15px 24px;border-radius:13px;">
          Start Day 1
        </a>
      </div>

      <p style="font-size:15px;line-height:1.6;color:#5d6b63;margin:0 0 12px;">
        Aim for about 8–10 minutes per session. There is no account or password required for this free practice.
      </p>

      <p style="font-size:14px;line-height:1.6;color:#68766e;margin:22px 0 0;">
        This is a short practice tool, not a school assessment or grade. First Class and Second Class share Stage 2 learning outcomes in Ireland’s Primary Mathematics Curriculum; this practice deliberately uses a conservative First Class range and adapts within it.
      </p>

      <p style="font-size:14px;line-height:1.6;color:#68766e;margin:14px 0 0;">
        Questions? Simply reply to this email and it will come to us at hello@irishmathsprep.com.
      </p>
    </div>
  </div>
</body>
</html>`;
}

function buildText(focusIds, practiceUrl) {
  const names = focusIds.map(id => SKILLS[id]).filter(Boolean).join(' and ');
  return `Irish Maths Prep

YOUR 7-DAY INTERACTIVE MATHS PRACTICE IS READY

Thank you for completing the First Class Maths Skills Snapshot.

Based on today’s snapshot, the clearest areas to give some extra practice are ${names}.

YOU DON’T HAVE TO FIGURE OUT WHAT TO PRACTISE NEXT. WE CHOOSE IT FOR YOU.

Your free week includes seven short on-screen practice sessions calibrated for First Class. Your child will answer real interactive maths questions, similar to the snapshot. If a question is difficult, we’ll offer a simpler follow-up before moving on. A little repetition is intentional when it helps build confidence or checks that learning is sticking.

Start Day 1:
${practiceUrl}

Aim for about 8–10 minutes per session. There is no account or password required for this free practice.

This is a short practice tool, not a school assessment or grade. First Class and Second Class share Stage 2 learning outcomes in Ireland’s Primary Mathematics Curriculum; this practice deliberately uses a conservative First Class range and adapts within it.

Questions? Reply to this email and it will come to us at hello@irishmathsprep.com.`;
}

export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const email = String(body.email || '').trim().toLowerCase().slice(0, 254);
    const sessionId = String(body.session_id || '').slice(0, 100) || crypto.randomUUID();

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || body.consent !== true) {
      return Response.json({ ok: false, error: 'invalid' }, { status: 400 });
    }

    const requestedFocus = Array.isArray(body.focus) ? body.focus : [];
    const focusIds = requestedFocus
      .map(id => String(id || '').trim())
      .filter(id => Object.prototype.hasOwnProperty.call(SKILLS, id))
      .slice(0, 2);

    if (focusIds.length < 2) {
      return Response.json({ ok: false, error: 'focus_missing' }, { status: 400 });
    }

    const requestedReview = Array.isArray(body.review) ? body.review : [];
    const reviewIds = requestedReview
      .map(id => String(id || '').trim())
      .filter(id => Object.prototype.hasOwnProperty.call(SKILLS, id) && !focusIds.includes(id))
      .slice(0, 2);

    const requestedLevels = body.levels && typeof body.levels === 'object' ? body.levels : {};
    const levels = Object.fromEntries(focusIds.map(id => {
      const raw = Number(requestedLevels[id]);
      const level = Number.isFinite(raw) ? Math.max(0, Math.min(2, Math.round(raw))) : 0;
      return [id, level];
    }));

    const focusJson = JSON.stringify(focusIds);
    const source = String(body.source || 'snapshot').slice(0, 80);

    await context.env.DB.prepare(`
      INSERT INTO leads (email,session_id,source,focus_json,consent,price_intent,created_at,updated_at)
      VALUES (?1,?2,?3,?4,1,0,datetime('now'),datetime('now'))
      ON CONFLICT(email) DO UPDATE SET
        session_id=excluded.session_id,
        source=excluded.source,
        focus_json=excluded.focus_json,
        consent=1,
        updated_at=datetime('now')
    `).bind(email, sessionId, source, focusJson).run();

    if (!context.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return Response.json({ ok: false, error: 'email_not_configured' }, { status: 500 });
    }

    const practiceUrl = buildPracticeUrl(context.request.url, sessionId, focusIds, reviewIds, levels);

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${context.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': `irish-maths-practice-${sessionId}`.slice(0, 256)
      },
      body: JSON.stringify({
        from: 'Irish Maths Prep <hello@irishmathsprep.com>',
        to: [email],
        reply_to: 'hello@irishmathsprep.com',
        subject: 'Your 7-Day Interactive Maths Practice Is Ready',
        html: buildHtml(focusIds, practiceUrl),
        text: buildText(focusIds, practiceUrl),
        tags: [
          { name: 'type', value: 'interactive-practice' },
          { name: 'class', value: 'first-class' }
        ]
      })
    });

    if (!resendResponse.ok) {
      const detail = await resendResponse.text();
      console.error('Resend send failed', resendResponse.status, detail);
      return Response.json({ ok: false, error: 'email_failed' }, { status: 502 });
    }

    const resendData = await resendResponse.json();

    try {
      await context.env.DB.prepare(`
        INSERT INTO events (session_id,event_name,page,properties_json,created_at)
        VALUES (?1,'practice_email_sent','/first-class-maths/',?2,datetime('now'))
      `).bind(sessionId, JSON.stringify({
        focus: focusIds,
        review: reviewIds,
        levels,
        resend_id: resendData.id || null
      })).run();
    } catch (eventError) {
      console.error('Could not record practice_email_sent event', eventError);
    }

    return Response.json({ ok: true, email_sent: true, practice_url: practiceUrl });
  } catch (e) {
    console.error('lead.js error', e);
    return Response.json({ ok: false }, { status: 500 });
  }
}
