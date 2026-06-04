import Link from 'next/link';
import Footer from '@/components/footer';


export const metadata = {
  title: "ConvertKit — Free Online File Converter | Image, PDF & Document Tools",
  description: "Convert images, PDFs and documents instantly in your browser. No uploads, no registration, 100% private. JPG to PDF, PNG to WebP, Image to Word and more.",
  keywords: [
    "online file converter", "jpg to pdf", "image converter", "pdf converter",
    "free converter", "png to pdf", "image to word", "document converter",
    "no upload converter", "private file converter"
  ],
  openGraph: {
    title: "ConvertKit — Free Online File Converter",
    description: "Convert images and documents instantly. No uploads, no account needed. 100% private and free.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ConvertKit — Free Online File Converter",
    description: "JPG to PDF, Image to Word, and more. All conversions happen in your browser.",
  }
};

const tools = [
  {
    path: "/IMG/JPGtoPDF",
    name: "JPG → PDF",
    desc: "Turn any photo into a print-ready PDF.",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="var(--highlight)" strokeWidth="1.6"/>
        <circle cx="8.5" cy="8.5" r="1.5" stroke="var(--highlight)" strokeWidth="1.4"/>
        <path d="M21 15l-5-5L5 21" stroke="var(--highlight)" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    badge: "Popular",
  },
  {
    path: "/IMG/PNGtoPDF",
    name: "PNG → PDF",
    desc: "Lossless quality, perfectly sized pages.",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <rect x="4" y="3" width="14" height="18" rx="2" stroke="var(--secondary)" strokeWidth="1.6"/>
        <path d="M8 8h8M8 12h6M8 16h4" stroke="var(--secondary)" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    path: "/IMG/IMGtoDOC",
    name: "Image → Word / PDF",
    desc: "Wrap your photo in an editable document.",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path d="M12 3v12M8 11l4 4 4-4" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 20h14" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    path: "/IMG/WEBPtoPDF",
    name: "WebP Converter",
    desc: "Convert to or from modern WebP format.",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" stroke="var(--highlight)" strokeWidth="1.6"/>
        <path d="M9 12l2 2 4-4" stroke="var(--highlight)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const features = [
  {
    title: "100% Private",
    desc: "All conversions run inside your browser. Your files never touch a server.",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.5C16.5 22.15 20 17.25 20 12V6l-8-4z" stroke="var(--secondary)" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="var(--secondary)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "No Registration",
    desc: "Open a tool, drop your file, download. No accounts, no email, no friction.",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" stroke="var(--accent)" strokeWidth="1.6"/>
        <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M17 13l2 2 4-4" stroke="var(--secondary)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Instant & Free",
    desc: "Conversion happens in milliseconds. No waiting, no paywall, no limits.",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" stroke="var(--highlight)" strokeWidth="1.6"/>
        <path d="M12 7v5l3 3" stroke="var(--highlight)" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Original Quality",
    desc: "No compression, no re-encoding artifacts. What you put in is what you get out.",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="var(--accent)" strokeWidth="1.6"/>
        <path d="M8 12h8M12 8v8" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
    <main className="home-root">

      {/* ── Hero ── */}
      <section className="hero-section">
        <div className="hero-badge">Free · Private · No Account</div>
        <h1 className="hero-h1">
          Convert files<br />
          <span className="hero-gradient-text">without the hassle</span>
        </h1>
        <p className="hero-sub">
          All conversions run directly in your browser — nothing is uploaded anywhere.
          Pick a tool, drop your file, and you`re done.
        </p>
        <div className="hero-cta-row">
          <Link href="/IMG/JPGtoPDF" className="btn-primary">
            Start Converting
          </Link>
          <a href="#tools" className="btn-ghost">Browse Tools ↓</a>
        </div>

        {/* floating stat pills */}
        <div className="hero-stats">
          <div className="stat-pill"><span className="stat-num">0</span> files uploaded</div>
          <div className="stat-pill"><span className="stat-num">∞</span> conversions</div>
          <div className="stat-pill"><span className="stat-num">100%</span> client-side</div>
        </div>
      </section>

      {/* ── Tools Grid ── */}
      <section className="tools-section" id="tools">
        <h2 className="section-title">Available Tools</h2>
        <p className="section-sub">Choose a conversion — more formats coming soon.</p>

        <div className="tools-grid">
          {tools.map((tool) => (
            <Link key={tool.path} href={tool.path} className="tool-card">
              {tool.badge && <span className="tool-badge">{tool.badge}</span>}
              <div className="tool-icon">{tool.icon}</div>
              <h3 className="tool-name">{tool.name}</h3>
              <p className="tool-desc">{tool.desc}</p>
              <span className="tool-arrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="how-section">
        <h2 className="section-title">How it works</h2>
        <div className="how-steps">
          <div className="how-step">
            <div className="how-num">01</div>
            <h3>Pick a tool</h3>
            <p>Choose the conversion you need from the grid above.</p>
          </div>
          <div className="how-connector" aria-hidden="true">──</div>
          <div className="how-step">
            <div className="how-num">02</div>
            <h3>Drop your file</h3>
            <p>Drag & drop or click to browse your device.</p>
          </div>
          <div className="how-connector" aria-hidden="true">──</div>
          <div className="how-step">
            <div className="how-num">03</div>
            <h3>Download</h3>
            <p>Conversion is instant — save your file right away.</p>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="features-section">
        <h2 className="section-title">Why ConvertKit?</h2>
        <div className="features-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Privacy Banner ── */}
      <section className="privacy-banner">
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" style={{flexShrink:0}}>
          <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.5C16.5 22.15 20 17.25 20 12V6l-8-4z" stroke="var(--secondary)" strokeWidth="1.6" strokeLinejoin="round"/>
          <path d="M9 12l2 2 4-4" stroke="var(--secondary)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div>
          <h4>Your files stay on your device</h4>
          <p>We don`t run any backend file-processing servers. Every conversion is handled entirely by your browser using the Web APIs — so there`s literally nothing to upload.</p>
        </div>
      </section>
    </main>
    <Footer />
  </>
  );
}