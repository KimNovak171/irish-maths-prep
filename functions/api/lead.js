const SKILLS = {
  N1: {
    title: 'Counting in groups',
    activities: [
      'Gather 30–50 small objects such as buttons, coins or pasta. Ask your child to make groups of 10, then count the tens and leftover ones to find the total.',
      'Make a collection such as 34 objects. Without counting one by one from the beginning, ask: “How many tens can we make? How many ones are left?” Try two more totals.',
      'Say a two-digit number such as 42. Ask your child to build it with groups of 10 and single objects, then explain how they know the total.',
      'Quick check: show 2 groups of 10 and 7 single objects. Ask for the total, then change the number of singles and repeat.'
    ]
  },
  N4: {
    title: 'Place value',
    activities: [
      'Write a two-digit number such as 64. Ask what the 6 is worth and what the 4 is worth. Repeat with three different numbers.',
      'Use bundled straws, blocks or quick drawings of tens and ones to make a number such as 47. Ask your child to write the number and explain each digit.',
      'Compare numbers such as 54 and 45. Ask which is greater and why, focusing first on the tens digit.',
      'Quick check: write 38, 71 and 56. Point to one digit in each number and ask, “What is this digit worth?”'
    ]
  },
  N5: {
    title: 'Tens and ones',
    activities: [
      'Say a number such as 58 and ask your child to show or draw 5 tens and 8 ones. Repeat with two more numbers.',
      'Reverse the game: draw 4 tens and 3 ones and ask your child to name and write the number.',
      'Make pairs such as “6 tens and 2 ones” and “26”. Ask which matches, then let your child make a pair for you.',
      'Quick check: ask, “How many tens and how many ones are in 35, 70 and 49?”'
    ]
  },
  N10: {
    title: 'Addition across ten',
    activities: [
      'Try 27 + 6. Ask your child how many of the 6 are needed to reach 30 first, then add what is left. Use counters if helpful.',
      'Practise three small additions that cross a ten, such as 18 + 5, 29 + 4 and 36 + 7. Encourage “make the next ten” rather than counting every item.',
      'Use a number line. Start at 28 and add 5 by jumping 2 to 30 and then 3 more. Repeat with another example.',
      'Quick check: ask your child to explain aloud how they would solve 46 + 7. The explanation matters more than speed.'
    ]
  },
  N11: {
    title: 'Subtraction strategies',
    activities: [
      'Try 32 − 7 on a number line. Ask whether it feels easier to count back 7 or to count up from 25 to 32, then compare the two strategies.',
      'Use a “bridge through ten” example such as 43 − 6: take away 3 to reach 40, then take away the remaining 3.',
      'Practise three short examples such as 21 − 5, 34 − 8 and 52 − 7. Let your child choose a strategy and explain it.',
      'Quick check: give 30 − 6 and 41 − 7. Ask your child to solve each and tell you what they did first.'
    ]
  },
  N16: {
    title: 'Simple fractions',
    activities: [
      'Fold a piece of paper into 2 equal parts, then into 4 equal parts. Talk about halves and quarters and why the parts must be equal.',
      'Draw four simple shapes divided into equal parts. Shade one half, one quarter or three quarters and ask your child to name the fraction.',
      'Use food or paper shapes to show that two quarters cover the same amount as one half. Keep the focus on equal parts rather than memorising rules.',
      'Quick check: draw a rectangle split into 4 equal parts and shade 1 part, then 2 parts. Ask your child to name each fraction.'
    ]
  },
  M1: {
    title: 'Comparing measures',
    activities: [
      'Choose two household objects. Ask which looks longer, heavier or able to hold more. Make a prediction first, then check.',
      'Line up three objects from shortest to longest. Ask your child to explain how they decided the order.',
      'Choose two containers. Predict which holds more, then test with the same small cup or spoon as an informal unit.',
      'Quick check: ask your child to find something longer than a pencil, shorter than a book, and heavier than a spoon.'
    ]
  },
  M3: {
    title: 'Using a ruler',
    activities: [
      'Measure three small objects in centimetres. Make sure the end of each object is lined up with the 0 mark before reading the ruler.',
      'Draw three straight lines and measure them. Ask your child to write the measurement with the unit “cm”.',
      'Show an object deliberately starting at the 1 cm mark and ask, “Is this the right way to measure it?” Then correct it together.',
      'Quick check: measure one object twice—once correctly from 0 and once from the wrong starting point—and ask which measurement can be trusted.'
    ]
  },
  M7: {
    title: 'Time',
    activities: [
      'Choose familiar times from the day, such as breakfast or bedtime. Show the time on an analogue clock and write the matching digital time.',
      'Practise o’clock and half past. Move the hands on a clock face and ask your child to say the time, then swap roles.',
      'Write three digital times such as 3:00, 4:30 and 7:00. Ask your child to draw the hands on simple clock faces.',
      'Quick check: show one o’clock time and one half-past time and ask your child to explain where the minute hand is pointing.'
    ]
  },
  M9: {
    title: 'Money',
    activities: [
      'Use real or drawn euro coins to make €1.50. Then ask your child to find a different way to make the same amount.',
      'Set up a tiny pretend shop with three items priced under €2. Ask your child to choose coins to pay the exact amount.',
      'Make simple totals such as €1 + 50c, €1 + 20c + 20c + 10c, and 50c + 20c. Say the euro-and-cent amount aloud.',
      'Quick check: ask for two different ways to make €2 using coins or coin drawings.'
    ]
  },
  A1: {
    title: 'Growing patterns',
    activities: [
      'Build a pattern with 2, 4, 6 and 8 blocks. Ask what should come next and, most importantly, what is changing each time.',
      'Draw a growing pattern that adds 2 shapes each step. Leave the next step blank and ask your child to complete it.',
      'Start a new pattern that grows by 3. Ask your child to build the next two steps and describe the rule in words.',
      'Quick check: show 3, 5, 7, __ and ask what comes next and how your child knows.'
    ]
  },
  A2: {
    title: 'Number sequences',
    activities: [
      'Count aloud in 2s to 20, then in 5s to 50. Pause occasionally and let your child supply the next number.',
      'Write a sequence with one number missing, such as 10, 15, __, 25, 30. Ask for the missing number and the rule.',
      'Start somewhere other than zero, for example 12, 14, 16, __. Ask your child to continue the pattern.',
      'Quick check: try 5, 10, 15, __ and 22, 24, 26, __. Ask your child to say the step each sequence is using.'
    ]
  },
  A5: {
    title: 'Equality',
    activities: [
      'Write 8 + 4 = □ + 5. Ask what belongs in the box and talk about both sides needing to have the same value.',
      'Play “true or false” with equations such as 6 + 3 = 5 + 4 and 7 + 2 = 10. Ask your child to explain each answer.',
      'Use two groups of counters like a balance. Change one side and ask what must happen on the other side to keep the amounts equal.',
      'Quick check: solve □ + 3 = 9 and 10 = 6 + □. Ask your child why the equals sign can be read as “has the same value as”.'
    ]
  },
  S1: {
    title: 'Position and direction',
    activities: [
      'Give three short directions around a room using words such as left, right, beside, above and below. Then let your child give you directions.',
      'Draw a simple map with a tree, bench and ball. Ask questions such as, “What is to the right of the tree?”',
      'Hide a small object and give location clues using positional language instead of pointing.',
      'Quick check: ask your child to place an object above, below, to the left of and to the right of another object.'
    ]
  },
  S4: {
    title: '2-D shape properties',
    activities: [
      'Find or draw a square, rectangle, triangle and circle. Sort them by properties such as number of straight sides and corners.',
      'Turn a square or rectangle so it is tilted. Ask whether it is still the same shape and which properties stayed the same.',
      'Play “Guess my shape”: give clues such as “I have 3 straight sides” or “I have 4 straight sides and 4 corners”.',
      'Quick check: ask which shapes have 4 straight sides and how a square and rectangle are alike.'
    ]
  },
  S7: {
    title: 'Flip, turn and slide',
    activities: [
      'Use a paper shape or small object. Slide it across the table without turning it and name the movement.',
      'Turn the same shape, then flip it over. Ask your child to identify whether each movement was a slide, turn or flip.',
      'Take turns giving movement instructions: “slide right”, “turn”, or “flip”. Ask your child to describe what changed and what stayed the same.',
      'Quick check: demonstrate one slide, one turn and one flip in random order and ask your child to name each movement.'
    ]
  },
  D2: {
    title: 'Reading graphs',
    activities: [
      'Make a tiny picture graph of family choices such as favourite fruit. Ask which category has the most, least and how many are in each.',
      'Draw a simple graph with 3–4 categories. Ask questions that require reading the graph rather than guessing from the labels.',
      'Ask your child to create one question that could be answered using the graph, then answer it together.',
      'Quick check: point to two categories and ask which has more and how many more.'
    ]
  },
  D3: {
    title: 'Using data as evidence',
    activities: [
      'Use a simple picture graph and ask your child to make a claim such as “Apples were most popular”, then point to the numbers that prove it.',
      'Make two statements about a graph—one true and one false. Ask your child to decide which is supported by the data and explain why.',
      'Ask a comparison question such as, “Were more votes given to apples or bananas?” Encourage an answer that includes the actual numbers.',
      'Quick check: ask your child to finish the sentence, “I know ___ because the graph shows ___.”'
    ]
  }
};

function buildPlan(focusIds) {
  const chosen = focusIds.map(id => SKILLS[id]).filter(Boolean).slice(0, 2);
  if (!chosen.length) return null;

  if (chosen.length === 1) {
    const a = chosen[0];
    return {
      skills: chosen,
      days: [
        { day: 1, title: a.title, activity: a.activities[0] },
        { day: 2, title: a.title, activity: a.activities[1] },
        { day: 3, title: a.title, activity: a.activities[2] },
        { day: 4, title: a.title, activity: a.activities[3] },
        { day: 5, title: `${a.title} — revisit`, activity: `Repeat one of the earlier activities with different numbers, objects or examples. Ask your child to explain the idea in their own words.` },
        { day: 6, title: `${a.title} — confidence check`, activity: `Choose two short examples from this week and let your child solve them without help first. Step in only if needed.` },
        { day: 7, title: 'Gentle review', activity: `Return to the activity that felt least comfortable earlier in the week. Keep it short and finish with one example your child can do successfully.` }
      ]
    };
  }

  const [a, b] = chosen;
  return {
    skills: chosen,
    days: [
      { day: 1, title: a.title, activity: a.activities[0] },
      { day: 2, title: b.title, activity: b.activities[0] },
      { day: 3, title: a.title, activity: a.activities[1] },
      { day: 4, title: b.title, activity: b.activities[1] },
      { day: 5, title: a.title, activity: a.activities[2] },
      { day: 6, title: b.title, activity: b.activities[2] },
      { day: 7, title: 'Mixed review', activity: `${a.activities[3]} Then spend the remaining few minutes on this: ${b.activities[3]}` }
    ]
  };
}

function buildHtml(plan) {
  const skillNames = plan.skills.map(s => s.title);
  const focusSentence = skillNames.length === 1
    ? `<strong>${skillNames[0]}</strong>`
    : `<strong>${skillNames[0]}</strong> and <strong>${skillNames[1]}</strong>`;

  const daysHtml = plan.days.map(item => `
    <div style="padding:18px 0;border-top:1px solid #e1e8e3;">
      <div style="font-size:13px;font-weight:700;color:#167a53;text-transform:uppercase;letter-spacing:.04em;">Day ${item.day}</div>
      <div style="font-size:18px;font-weight:700;color:#1d2b24;margin:4px 0 7px;">${item.title}</div>
      <div style="font-size:16px;line-height:1.6;color:#35463d;">${item.activity}</div>
    </div>`).join('');

  return `<!doctype html>
<html>
<body style="margin:0;padding:0;background:#f6f8f4;font-family:Arial,Helvetica,sans-serif;color:#1d2b24;">
  <div style="max-width:650px;margin:0 auto;padding:28px 18px;">
    <div style="background:#ffffff;border:1px solid #dce5df;border-radius:18px;padding:30px;">
      <div style="font-size:15px;font-weight:800;color:#167a53;margin-bottom:18px;">Irish Maths Prep</div>
      <h1 style="font-size:30px;line-height:1.15;margin:0 0 16px;color:#1d2b24;">Your 7-Day First Class Maths Practice Plan</h1>
      <p style="font-size:17px;line-height:1.65;margin:0 0 14px;color:#35463d;">Thank you for completing the First Class Maths Skills Snapshot.</p>
      <p style="font-size:17px;line-height:1.65;margin:0 0 14px;color:#35463d;">Based on the answers in today’s snapshot, the clearest areas to give a little extra practice are ${focusSentence}.</p>
      <p style="font-size:17px;line-height:1.65;margin:0 0 22px;color:#35463d;">Aim for about 10 minutes each day. Keep it relaxed, use ordinary things you already have at home, and stop before practice becomes frustrating.</p>

      ${daysHtml}

      <div style="margin-top:22px;padding:18px;background:#eef7f2;border-radius:12px;">
        <div style="font-size:16px;font-weight:700;margin-bottom:7px;color:#1d2b24;">What to notice this week</div>
        <div style="font-size:15px;line-height:1.6;color:#35463d;">You are not looking for perfection or speed. Notice whether your child needs less prompting, explains the idea more clearly, or becomes more comfortable with an activity after seeing it more than once.</div>
      </div>

      <p style="font-size:14px;line-height:1.6;color:#68766e;margin:24px 0 0;">This is a short practice guide, not a school assessment or grade. First Class and Second Class sit within Stage 2 of Ireland’s Primary Mathematics Curriculum, so children may be at different points within the stage.</p>
      <p style="font-size:14px;line-height:1.6;color:#68766e;margin:14px 0 0;">Questions? Simply reply to this email and it will come to us at hello@irishmathsprep.com.</p>
    </div>
  </div>
</body>
</html>`;
}

function buildText(plan) {
  const skillNames = plan.skills.map(s => s.title).join(' and ');
  const days = plan.days.map(item => `DAY ${item.day} — ${item.title}\n${item.activity}`).join('\n\n');

  return `Irish Maths Prep\n\nYour 7-Day First Class Maths Practice Plan\n\nThank you for completing the First Class Maths Skills Snapshot.\n\nBased on the answers in today’s snapshot, the clearest areas to give a little extra practice are ${skillNames}.\n\nAim for about 10 minutes each day. Keep it relaxed, use ordinary things you already have at home, and stop before practice becomes frustrating.\n\n${days}\n\nWHAT TO NOTICE THIS WEEK\nYou are not looking for perfection or speed. Notice whether your child needs less prompting, explains the idea more clearly, or becomes more comfortable with an activity after seeing it more than once.\n\nThis is a short practice guide, not a school assessment or grade. First Class and Second Class sit within Stage 2 of Ireland’s Primary Mathematics Curriculum, so children may be at different points within the stage.\n\nQuestions? Reply to this email and it will come to us at hello@irishmathsprep.com.`;
}

export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const email = String(body.email || '').trim().toLowerCase().slice(0, 254);
    const sessionId = String(body.session_id || '').slice(0, 100);

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || body.consent !== true) {
      return Response.json({ ok: false, error: 'invalid' }, { status: 400 });
    }

    const requestedFocus = Array.isArray(body.focus) ? body.focus : [];
    const focusIds = requestedFocus
      .map(id => String(id || '').trim())
      .filter(id => Object.prototype.hasOwnProperty.call(SKILLS, id))
      .slice(0, 2);

    const plan = buildPlan(focusIds);
    if (!plan) {
      return Response.json({ ok: false, error: 'focus_missing' }, { status: 400 });
    }

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

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${context.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': `irish-maths-plan-${sessionId || email}`.slice(0, 256)
      },
      body: JSON.stringify({
        from: 'Irish Maths Prep <hello@irishmathsprep.com>',
        to: [email],
        reply_to: 'hello@irishmathsprep.com',
        subject: 'Your 7-Day First Class Maths Practice Plan',
        html: buildHtml(plan),
        text: buildText(plan),
        tags: [
          { name: 'type', value: 'practice-plan' },
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

    if (sessionId) {
      try {
        await context.env.DB.prepare(`
          INSERT INTO events (session_id,event_name,page,properties_json,created_at)
          VALUES (?1,'plan_email_sent','/first-class-maths/',?2,datetime('now'))
        `).bind(sessionId, JSON.stringify({ focus: focusIds, resend_id: resendData.id || null })).run();
      } catch (eventError) {
        console.error('Could not record plan_email_sent event', eventError);
      }
    }

    return Response.json({ ok: true, email_sent: true });
  } catch (e) {
    console.error('lead.js error', e);
    return Response.json({ ok: false }, { status: 500 });
  }
}
