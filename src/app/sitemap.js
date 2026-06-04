// src/app/sitemap.js
export default async function sitemap() {
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
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}