// src/app/sitemap.js
import { blogs } from "@/blogs/blogs";

export default function sitemap() {
  const baseUrl = "https://no-login-tools.com";

  // ۱۲ صفحه ابزار اصلی و ثابت شما
  const staticRoutes = [
    "",
    "/IMG/PNGtoPDF",
    "/IMG/JPGtoPDF",
    "/IMG/WEBPtoPDF",
    "/IMG/PNGtoJPG",
    "/IMG/imageConverter",
    "/IMG/IMGtoIMG",
    "/IMG/IMGtoDOC",
    "/PDF/PDFtoWord",
    "/PDF/PDFtoWEBP",
    "/PDF/PDFtoPNG",
    "/PDF/PDFtoJPG",
  ];

  // ۱. نگاشت (Map) صفحات استاتیک قدیمی
  const staticMaps = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(), // تاریخ امروز برای صفحات ابزار
    changeFrequency: 'monthly',
    priority: route === "" ? 1.0 : 0.8,
  }));

  // ۲. نگاشت پست‌های بلاگ به صورت داینامیک از آرایه لوکال شما
  const blogMaps = blogs.map((post) => {
    // تلاش برای تبدیل رشته تاریخ (مثل "June 2026") به فرمت استاندارد Date
    const parsedDate = new Date(post.date);
    const finalDate = isNaN(parsedDate.getTime()) ? new Date() : parsedDate;

    return {
      url: `${baseUrl}/blog/${post.slug}`, // فرض بر این است که مسیر بلاگ‌های شما /blog/slug است
      lastModified: finalDate,
      changeFrequency: 'weekly', // پست‌های بلاگ معمولاً اهمیت خزش بالاتری دارند
      priority: 0.6,
    };
  });

  // ۳. ادغام صفحات ابزارها و پست‌های بلاگ در یک خروجی واحد
  return [...staticMaps, ...blogMaps];
}