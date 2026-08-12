export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const email = String(body.email || '').trim().toLowerCase().slice(0,254);
    const sessionId = String(body.session_id || '').slice(0,100);
    const page = String(body.page || '/practice/').slice(0,200);
    const price = Number(body.price_eur || 9.99);

    if (email) {
      await context.env.DB.prepare(`
        UPDATE leads SET price_intent=1,updated_at=datetime('now') WHERE email=?1
      `).bind(email).run();
    } else if (sessionId) {
      await context.env.DB.prepare(`
        UPDATE leads SET price_intent=1,updated_at=datetime('now') WHERE session_id=?1
      `).bind(sessionId).run();
    }

    if (sessionId) {
      await context.env.DB.prepare(`
        INSERT INTO events (session_id,event_name,page,properties_json,created_at)
        VALUES (?1,'price_intent',?2,?3,datetime('now'))
      `).bind(sessionId,page,JSON.stringify({price_eur:price})).run();
    }

    return Response.json({ok:true});
  } catch (e) {
    console.error('intent.js error', e);
    return Response.json({ok:false}, {status:500});
  }
}
