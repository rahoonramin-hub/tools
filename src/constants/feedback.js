"use client";
// feedback.js — کلاینت ساید، هیچ توکنی اینجا نیست

const CREATOR_ID = "rahoonramin"; // بدون @

async function post(body) {
  const res = await fetch("/api/feedback", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return data.ok === true;
}

/** 1️⃣ ارسال فیدبک متنی */
export async function sendFeedback(message) {
  return post({ type: "feedback", message });
}

/** 2️⃣ ارسال ریتینگ 1–10 */
export async function sendRating(rating, comment = "") {
  return post({ type: "rating", rating, comment });
}

/** 3️⃣ باز کردن تلگرام سازنده */
export function openCreatorTelegram() {
  window.open(`https://t.me/${CREATOR_ID}`, "_blank", "noopener,noreferrer");
}