// src/components/CookieConsent.jsx
"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      // رفع ارور cascading renders ری‌آکت ۱۹ با به تاخیر انداختن تغییر استیت
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 50);

      return () => clearTimeout(timer); // پاک‌سازی تایمر در صورت Unmount شدن
    }
  }, []);

  const handleConsent = (status) => {
    localStorage.setItem("cookie_consent", status);
    setShowBanner(false);

    // اعلام وضعیت رضایت کاربر به گوگل آنالیتیکس بر اساس استاندارد Consent Mode v2
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: status === "granted" ? "granted" : "denied",
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <h4 className="cookie-title">Help us know what people want? 🚀</h4>
        <p className="cookie-text">
          We use anonymous cookies to see which tools are popular so we can build better ones for you. No accounts, no data selling—just making things better.
        </p>
      </div>
      <div className="cookie-actions">
        <button 
          className="cookie-btn cookie-btn-accept" 
          onClick={() => handleConsent("granted")}
        >{"That's fine!"}</button>
        <button 
          className="cookie-btn cookie-btn-decline" 
          onClick={() => handleConsent("denied")}
        >
          No thanks
        </button>
      </div>
    </div>
  );
}