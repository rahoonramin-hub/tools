const TextContent = ()=>(
<div className="textContainer">
    <div className="tc-hero">
        <h2>PNG to PDF — transparency included</h2>
        <p>Unlike JPG, PNG carries an alpha channel. Your PDF keeps every transparent pixel exactly as it was.</p>
    </div>

    <div className="tc-steps">
        <div className="tc-step">
            <span className="tc-step-num">Step 1</span>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" stroke="var(--highlight)" strokeWidth="1.6"/><path d="M3 9h18M9 21V9" stroke="var(--highlight)" strokeWidth="1.4" strokeLinecap="round"/></svg>
            <h3>Upload PNG</h3>
            <p>Logos, screenshots, diagrams — any PNG works.</p>
        </div>
        <div className="tc-step">
            <span className="tc-step-num">Step 2</span>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="var(--highlight)" strokeWidth="1.6" strokeLinejoin="round"/></svg>
            <h3>Lossless embed</h3>
            <p>PNG data is embedded without re-compression.</p>
        </div>
        <div className="tc-step">
            <span className="tc-step-num">Step 3</span>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 3v12M8 11l4 4 4-4" stroke="var(--highlight)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 20h14" stroke="var(--highlight)" strokeWidth="1.6" strokeLinecap="round"/></svg>
            <h3>Download PDF</h3>
            <p>Ready to share, print, or submit.</p>
        </div>
    </div>

    <hr className="tc-divider"/>

    <p className="tc-uses-title">PNG vs JPG — which should you convert?</p>
    <div className="tc-vs">
        <div className="tc-vs-card">
            <span className="tc-vs-badge badge-png">PNG</span>
            <h4>Use when quality matters</h4>
            <div className="tc-vs-row"><span>Compression</span><span className="tc-vs-val">Lossless</span></div>
            <div className="tc-vs-row"><span>Transparency</span><span className="tc-vs-val">✓ Yes</span></div>
            <div className="tc-vs-row"><span>Best for</span><span className="tc-vs-val">Logos, UI, diagrams</span></div>
            <div className="tc-vs-row"><span>File size</span><span className="tc-vs-val">Larger</span></div>
        </div>
        <div className="tc-vs-card">
            <span className="tc-vs-badge badge-jpg">JPG</span>
            <h4>Use for photos</h4>
            <div className="tc-vs-row"><span>Compression</span><span className="tc-vs-val">Lossy</span></div>
            <div className="tc-vs-row"><span>Transparency</span><span className="tc-vs-val">✗ No</span></div>
            <div className="tc-vs-row"><span>Best for</span><span className="tc-vs-val">Photos, thumbnails</span></div>
            <div className="tc-vs-row"><span>File size</span><span className="tc-vs-val">Smaller</span></div>
        </div>
    </div>

    <div className="tc-fun">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke="var(--highlight)" strokeWidth="1.6"/><path d="M12 7v5l3 3" stroke="var(--highlight)" strokeWidth="1.6" strokeLinecap="round"/></svg>
        <div className="tc-fun-text">
            <h4>Fun fact</h4>
            <p>PNG was created in 1995 as a free alternative to GIF, which was patent-encumbered. The name officially stands for *Portable Network Graphics* — but the community joke is *PNG`s Not GIF*.</p>
        </div>
    </div>

    <div className="tc-tips">
        <div className="tc-tip"><h5>Screenshots → PDF</h5><p>Grab a screenshot, convert to PDF, attach to an email. Takes 10 seconds.</p></div>
        <div className="tc-tip"><h5>Keep your logo crisp</h5><p>PNG logos stay pixel-perfect in the PDF — no JPEG artifacts on edges.</p></div>
        <div className="tc-tip"><h5>Diagram export</h5><p>Export diagrams from Figma or Miro as PNG, then wrap into PDF for clients.</p></div>
    </div>
</div>
)

export const metadata = {
  title: "Convert PNG to PDF Online | Safe & Instant File Converter",
  description: "Turn PNG images into PDF files instantly. Free browser-based conversion with 100% privacy—your photos never leave your device.",
  keywords: ["png to pdf", "convert png to pdf", "png to pdf converter free", "browser png to pdf"],
  openGraph: {
    title: "Convert PNG to PDF Online | Free Document Creator",
    description: "Convert PNG graphics to PDF documents smoothly. Secure, fast, and completely free.",
  }
};

import ConvertCom from '@/constants/convertCom';

const PNGtoPDF = () => (
  <ConvertCom
    title="PNG to PDF"
    defaultFormat="pdf"
    textContent={<TextContent />}
  />
);

export default PNGtoPDF;
