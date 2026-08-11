export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const email = String(body.email || '').trim().toLowerCase().slice(0,254);
    const sessionId = String(body.session_id || '').slice(0,100);
    if (email) await context.env.DB.prepare(`UPDATE leads SET price_intent=1,updated_at=datetime('now') WHERE email=?1`).bind(email).run();
    if (sessionId) await context.env.DB.prepare(`INSERT INTO events (session_id,event_name,page,properties_json,created_at) VALUES (?1,'price_intent','/first-class-maths/',?2,datetime('now'))`).bind(sessionId,JSON.stringify({price_eur:Number(body.price_eur||9.99)})).run();
    return Response.json({ok:true});
  } catch (e) { return Response.json({ok:false}, {status:500}); }
}
