export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const email = String(body.email || '').trim().toLowerCase().slice(0,254);
    const sessionId = String(body.session_id || '').slice(0,100);
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || body.consent !== true) return Response.json({ok:false,error:'invalid'}, {status:400});
    const focus = Array.isArray(body.focus) ? JSON.stringify(body.focus.slice(0,3)) : '[]';
    await context.env.DB.prepare(`INSERT INTO leads (email,session_id,source,focus_json,consent,price_intent,created_at,updated_at) VALUES (?1,?2,?3,?4,1,0,datetime('now'),datetime('now')) ON CONFLICT(email) DO UPDATE SET session_id=excluded.session_id,source=excluded.source,focus_json=excluded.focus_json,consent=1,updated_at=datetime('now')`).bind(email,sessionId,String(body.source||'snapshot').slice(0,80),focus).run();
    return Response.json({ok:true});
  } catch (e) { return Response.json({ok:false}, {status:500}); }
}
