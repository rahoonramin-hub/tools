// src/app/sitemap.js
export default function sitemap() {
  const baseUrl = "https://no-login-tools.com";

  const routes = [
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

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(), // خروجی استاندارد تاریخ برای گوگل
    changeFrequency: 'monthly', // مقدار کاملاً استاندارد و مجاز کوچک
    priority: route === "" ? 1.0 : 0.8,
  }));
}