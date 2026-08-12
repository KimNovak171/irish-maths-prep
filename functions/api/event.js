export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const event = String(body.event || '').slice(0,80);
    const sessionId = String(body.session_id || '').slice(0,100);
    const page = String(body.page || '').slice(0,200);

    if (!event || !sessionId) return Response.json({ok:false}, {status:400});

    const props = {};
    for (const key of [
      'price_eur','focus','review','day','score','total','correct','level','skill_ids'
    ]) {
      if (body[key] !== undefined) props[key] = body[key];
    }

    await context.env.DB.prepare(`
      INSERT INTO events (session_id,event_name,page,properties_json,created_at)
      VALUES (?1,?2,?3,?4,datetime('now'))
    `).bind(sessionId,event,page,JSON.stringify(props)).run();

    return Response.json({ok:true});
  } catch (e) {
    console.error('event.js error', e);
    return Response.json({ok:false}, {status:500});
  }
}
