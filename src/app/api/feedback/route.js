// app/api/feedback/route.js — سرور ساید، توکن اینجا امنه

const BOT_TOKEN = process.env.FEEDBACK_BOT_TOKEN;
const CHAT_ID   = process.env.FEEDBACK_CHAT_ID;

async function sendToTelegram(text) {
  const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "HTML" }),
  });
  const data = await res.json();
  if (!data.ok) throw new Error(data.description ?? "Telegram error");
}

export async function POST(request) {
  try {
    const { type, message, rating, comment } = await request.json();

    if (type === "feedback") {
      if (!message?.trim()) {
        return Response.json({ ok: false, error: "Empty message" }, { status: 400 });
      }
      await sendToTelegram(`💬 <b>New Feedback</b>\n\n${message.trim()}`);

    } else if (type === "rating") {
      const num = Number(rating);
      if (!Number.isInteger(num) || num < 1 || num > 10) {
        return Response.json({ ok: false, error: "Invalid rating" }, { status: 400 });
      }
      const stars   = "⭐".repeat(Math.round(num / 2));
      const commentLine = comment?.trim() ? `\n💭 <i>${comment.trim()}</i>` : "";
      await sendToTelegram(`${stars} <b>Site Rating: ${num}/10</b>${commentLine}`);

    } else {
      return Response.json({ ok: false, error: "Unknown type" }, { status: 400 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Feedback API error:", err);
    return Response.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}