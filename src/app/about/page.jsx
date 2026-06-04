import Footer from "@/components/footer";
import Link from "next/link";

export const metadata = {
  title: "About ConvertKit — Free, Private, Browser-Based File Converter",
  description:
    "Learn how ConvertKit works, why we built it, and why your files never leave your device. No servers, no accounts, no tracking — just fast, private file conversion.",
  keywords: [
    "about convertkit",
    "private file converter",
    "browser based converter",
    "no upload converter",
    "how file conversion works",
    "client side converter",
    "free online tools",
  ],
  openGraph: {
    title: "About ConvertKit — Built for Privacy",
    description:
      "ConvertKit runs entirely in your browser. No file uploads, no accounts, no ads. Find out how and why we built it.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About ConvertKit",
    description:
      "Your files never leave your device. Learn how ConvertKit's browser-based conversion works.",
  },
};

/* ── Small reusable pieces ─────────────────────────── */

const Tag = ({ children }) => <span className="abt-tag">{children}</span>;

const StatCard = ({ value, label }) => (
  <div className="abt-stat-card">
    <span className="abt-stat-value">{value}</span>
    <span className="abt-stat-label">{label}</span>
  </div>
);

const TimelineItem = ({ year, title, desc, last }) => (
  <div className={`abt-tl-item${last ? " abt-tl-last" : ""}`}>
    <div className="abt-tl-dot" />
    <div className="abt-tl-year">{year}</div>
    <div className="abt-tl-body">
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  </div>
);

const PrincipleCard = ({ icon, title, desc }) => (
  <div className="abt-principle">
    <div className="abt-principle-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
);

const TechRow = ({ name, what }) => (
  <div className="abt-tech-row">
    <span className="abt-tech-name">{name}</span>
    <span className="abt-tech-what">{what}</span>
  </div>
);

/* ── SVG icons ─────────────────────────────────────── */
const IconShield = () => (
  <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
    <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.5C16.5 22.15 20 17.25 20 12V6l-8-4z"
      stroke="var(--secondary)" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" stroke="var(--secondary)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconBolt = () => (
  <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
    <path d="M13 2L4.09 12.96A1 1 0 0 0 5 14.5h6.5L11 22l8.91-10.96A1 1 0 0 0 19 9.5h-6.5L13 2z"
      stroke="var(--highlight)" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);
const IconEye = () => (
  <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
    <path d="M1 12C1 12 5 5 12 5s11 7 11 7-4 7-11 7S1 12 1 12z"
      stroke="var(--accent)" strokeWidth="1.6" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="3" stroke="var(--accent)" strokeWidth="1.6" />
  </svg>
);
const IconCode = () => (
  <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="var(--highlight)" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconHeart = () => (
  <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"
      stroke="var(--secondary)" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);
const IconGlobe = () => (
  <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" stroke="var(--accent)" strokeWidth="1.6" />
    <path d="M2 12h20M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9"
      stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

/* ── Page ──────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <main className="abt-root">

      {/* ── Hero ── */}
      <section className="abt-hero">
        <div className="abt-hero-tags">
          <Tag>Open Source</Tag>
          <Tag>Client-Side</Tag>
          <Tag>Zero Upload</Tag>
        </div>
        <h1 className="abt-hero-h1">
          Built around one idea:<br />
          <span className="abt-hero-accent">your files stay yours</span>
        </h1>
        <p className="abt-hero-sub">
          ConvertKit is a collection of browser-based file conversion tools. No
          servers process your data. No accounts are created. No files ever leave
          your device — because they never need to.
        </p>
        <div className="abt-hero-line" aria-hidden="true" />
      </section>

      {/* ── Stats ── */}
      <section className="abt-stats-row">
        <StatCard value="0"     label="Files uploaded to servers" />
        <StatCard value="100%"  label="Client-side processing" />
        <StatCard value="∞"     label="Free conversions" />
        <StatCard value="0"     label="Required accounts" />
      </section>

      {/* ── Story ── */}
      <section className="abt-section">
        <div className="abt-section-label">The Story</div>
        <h2 className="abt-section-h2">Why we built this</h2>
        <div className="abt-story-grid">
          <div className="abt-story-text">
            <p>
              It started with frustration. Every time we needed to convert a file —
              a quick JPG to PDF for a form submission, a screenshot wrapped into a
              Word document — the same pattern repeated: find a website, upload your
              file to some unknown server, wait, download, repeat.
            </p>
            <p>
              Nobody was asking the obvious question: <em>why does this need a
              server at all?</em> Modern browsers are extraordinarily capable. The
              Web APIs available today — Canvas, Blob, FileReader, jsPDF — can
              handle image and document conversion entirely on the client side, in
              milliseconds, without a single byte leaving your machine.
            </p>
            <p>
              So we built ConvertKit: a set of tools that do exactly that. The
              result is something faster, more private, and simpler than anything
              that requires a backend — because there is no backend.
            </p>
          </div>
          <div className="abt-story-aside">
            <div className="abt-quote-block">
              <div className="abt-quote-mark"></div>
              <p>Why does converting a file need to touch a server at all?</p>
            </div>
            <div className="abt-story-tags">
              <span className="abt-inline-tag">No backend</span>
              <span className="abt-inline-tag">Instant</span>
              <span className="abt-inline-tag">Open approach</span>
              <span className="abt-inline-tag">Zero tracking</span>
              <span className="abt-inline-tag">Private by design</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="abt-section">
        <div className="abt-section-label">Roadmap</div>
        <h2 className="abt-section-h2">{"Where we've been & where we're going"}</h2>
        <div className="abt-timeline">
          <TimelineItem
            year="v0.1"
            title="First tool: JPG → PDF"
            desc="A single conversion, drag-and-drop interface, zero dependencies beyond jsPDF. Proof that the idea worked."
          />
          <TimelineItem
            year="v0.2"
            title="Expanded image formats"
            desc="PNG, WebP, and multi-format support added. Shared converter component extracted to keep pages consistent."
          />
          <TimelineItem
            year="v0.3"
            title="Image → Document"
            desc="Added Word (.docx) output alongside PDF, making ConvertKit useful for office workflows."
          />
          <TimelineItem
            year="Soon"
            title="PDF → Image, batch mode"
            desc="Reverse conversions and multi-file support are next. The engine is already there — just UI work left."
            last
          />
        </div>
      </section>

      {/* ── Principles ── */}
      <section className="abt-section">
        <div className="abt-section-label">Our Principles</div>
        <h2 className="abt-section-h2">What we refuse to compromise on</h2>
        <div className="abt-principles-grid">
          <PrincipleCard
            icon={<IconShield />}
            title="Privacy first, always"
            desc="File conversion doesn't require your data to leave your device. We won't build infrastructure that processes user files just because it would be easier for us."
          />
          <PrincipleCard
            icon={<IconBolt />}
            title="Speed over features"
            desc="A tool that converts in 80ms beats a tool that converts in 3s and sends you an email. We optimize for the instant result every time."
          />
          <PrincipleCard
            icon={<IconEye />}
            title="No dark patterns"
            desc="No fake progress bars. No 'converting…' spinners that just add artificial delay. No upsells mid-conversion. What you see is what actually happens."
          />
          <PrincipleCard
            icon={<IconCode />}
            title="Transparency"
            desc="Client-side code is inherently auditable — open DevTools and watch exactly what happens to your file. We have nothing to hide because there's nothing to hide."
          />
          <PrincipleCard
            icon={<IconHeart />}
            title="Genuinely free"
            desc="Free means free. Not 'free for 3 conversions per day'. Not 'free with a watermark'. Unlimited, unrestricted, with no account required."
          />
          <PrincipleCard
            icon={<IconGlobe />}
            title="Works everywhere"
            desc="Any modern browser on any device. No app to install, no extension to add, no OS requirement. If it has a browser, it can convert files."
          />
        </div>
      </section>

      {/* ── How it works technically ── */}
      <section className="abt-section">
        <div className="abt-section-label">Under the Hood</div>
        <h2 className="abt-section-h2">How browser-based conversion actually works</h2>
        <div className="abt-tech-grid">
          <div className="abt-tech-text">
            <p>
              When you drop a file, the browser reads it into memory using the
              <code>FileReader</code> API — the same API your browser uses when
              you preview an image attachment in Gmail. At no point does any
              network request carry your file content.
            </p>
            <p>
              {`For image-to-PDF conversion, we draw your image onto an offscreen
              HTML ${<code>Canvas</code>} element, export it as a base64 data URL,
              and embed it directly into a PDF structure using{" "}
              ${<code>jsPDF</code>}. The entire pipeline is synchronous JavaScript —
              there's no waiting for a server response because there's no server.`}
            </p>
            <p>
              {`The final file is constructed as a ${<code>Blob</code>} in memory,
              then handed to the browser via a temporary object URL and a
              programmatic click on an invisible anchor tag. Your browser's native
              download mechanism takes over from there.`}
            </p>
          </div>
          <div className="abt-tech-table">
            <div className="abt-tech-table-head">Tech used</div>
            <TechRow name="FileReader API"  what="Read local files into memory" />
            <TechRow name="Canvas API"      what="Image decoding & rendering" />
            <TechRow name="jsPDF"           what="PDF generation in-browser" />
            <TechRow name="docx.js"         what="Word document construction" />
            <TechRow name="Blob + URL API"  what="In-memory file & download" />
            <TechRow name="Next.js 14"      what="App shell & routing" />
          </div>
        </div>

        {/* flow diagram */}
        <div className="abt-flow">
          {["Drop file", "FileReader", "Canvas / Parser", "Blob builder", "Download"].map((step, i, arr) => (
            <div key={step} className="abt-flow-row">
              <div className="abt-flow-step">{step}</div>
              {i < arr.length - 1 && <div className="abt-flow-arrow">→</div>}
            </div>
          ))}
        </div>
        <p className="abt-flow-note">All of the above runs in your browser tab. Nothing leaves.</p>
      </section>

      {/* ── Privacy deep-dive ── */}
      <section className="abt-section">
        <div className="abt-section-label">Privacy</div>
        <h2 className="abt-section-h2">{"What we collect — and what we don't"}</h2>
        <div className="abt-privacy-grid">
          <div className="abt-privacy-col abt-privacy-no">
            <div className="abt-privacy-col-head">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" stroke="#f87171" strokeWidth="1.6"/>
                <path d="M15 9l-6 6M9 9l6 6" stroke="#f87171" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
              We never collect
            </div>
            {["Your files or file contents","File names or metadata","IP addresses tied to conversions","Browser fingerprints","Usage patterns or analytics","Cookies for tracking"].map(item => (
              <div key={item} className="abt-privacy-row">{item}</div>
            ))}
          </div>
          <div className="abt-privacy-col abt-privacy-yes">
            <div className="abt-privacy-col-head">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" stroke="var(--secondary)" strokeWidth="1.6"/>
                <path d="M8 12l3 3 5-5" stroke="var(--secondary)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              What actually happens
            </div>
            {["File is read locally by your browser","Conversion runs in your browser tab","Output file is saved to your device","No network request is made for the file","Session ends — nothing persists","You stay completely anonymous"].map(item => (
              <div key={item} className="abt-privacy-row">{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="abt-cta-section">
        <h2>Ready to convert something?</h2>
        <p>Pick a tool and drop your file. No sign-up, no wait, no catch.</p>
        <Link href="/" className="btn-primary abt-cta-btn">Browse Tools →</Link>
      </section>

      <Footer />
    </main>
  );
}