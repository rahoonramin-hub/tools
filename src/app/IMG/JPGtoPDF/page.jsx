import ConvertCom from '@/constants/convertCom';

const TextContent = ()=>(
<div className="textContainer">
    <div className="tc-hero">
        <h2>Turn your JPG into a proper PDF</h2>
        <p>Perfect for forms, submissions, or anything that just has to be a PDF.<br/>One photo or a full album — done in seconds.</p>
    </div>

    <div className="tc-steps">
        <div className="tc-step">
            <span className="tc-step-num">Step 1</span>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" stroke="var(--highlight)" strokeWidth="1.6"/><circle cx="8.5" cy="8.5" r="1.5" stroke="var(--highlight)" strokeWidth="1.4"/><path d="M21 15l-5-5L5 21" stroke="var(--highlight)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <h3>Upload JPG</h3>
            <p>Drop your photo or scanned image here.</p>
        </div>
        <div className="tc-step">
            <span className="tc-step-num">Step 2</span>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="3" width="14" height="18" rx="2" stroke="var(--highlight)" strokeWidth="1.6"/><path d="M8 8h8M8 12h6M8 16h4" stroke="var(--highlight)" strokeWidth="1.4" strokeLinecap="round"/></svg>
            <h3>Auto-sized PDF</h3>
            <p>Page dimensions match your image exactly — no white borders.</p>
        </div>
        <div className="tc-step">
            <span className="tc-step-num">Step 3</span>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 3v12M8 11l4 4 4-4" stroke="var(--highlight)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 20h14" stroke="var(--highlight)" strokeWidth="1.6" strokeLinecap="round"/></svg>
            <h3>Save PDF</h3>
            <p>Download and share, print, or email right away.</p>
        </div>
    </div>

    <hr className="tc-divider"/>

    <p className="tc-uses-title">Common reasons people do this</p>
    <div className="tc-uses">
        <div className="tc-use">
            <div className="tc-use-icon bg-purple">📋</div>
            <div><h4>Online form submissions</h4><p>Most portals require PDF. Convert your scanned JPG before the deadline hits.</p></div>
        </div>
        <div className="tc-use">
            <div className="tc-use-icon bg-teal">🖨️</div>
            <div><h4>Sending to a print shop</h4><p>Print services prefer PDFs. Wrap your photo in a PDF for perfect results.</p></div>
        </div>
        <div className="tc-use">
            <div className="tc-use-icon bg-amber">📧</div>
            <div><h4>Email attachments</h4><p>PDFs look professional and open on every device without formatting issues.</p></div>
        </div>
        <div className="tc-use">
            <div className="tc-use-icon bg-blue">🗂️</div>
            <div><h4>Archiving documents</h4><p>PDF is the standard for long-term storage — more stable than loose JPGs.</p></div>
        </div>
    </div>

    <div className="tc-fun">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke="var(--highlight)" strokeWidth="1.6"/><path d="M12 7v5l3 3" stroke="var(--highlight)" strokeWidth="1.6" strokeLinecap="round"/></svg>
        <div className="tc-fun-text">
            <h4>Did you know?</h4>
            <p>JPEG was standardized in 1992 and is still the worlds most common image format — over 10 billion JPEGs are created every day.</p>
        </div>
    </div>

    <div className="tc-tips">
        <div className="tc-tip"><h5>Portrait or landscape</h5><p>Page orientation is set automatically based on your image dimensions.</p></div>
        <div className="tc-tip"><h5>Full resolution</h5><p>No compression — the PDF embeds your image at original quality.</p></div>
        <div className="tc-tip"><h5>Instant output</h5><p>Conversion happens locally, so even large files are done in under a second.</p></div>
    </div>
</div>
)

export const metadata = {
  title: "Convert JPG to PDF Online | Free & High Quality",
  description: "Easily convert your JPG images to a clean, high-quality PDF document in seconds. Free, safe, and private—no file upload or registration required.",
  keywords: ["jpg to pdf", "convert jpg to pdf", "image to pdf converter", "free jpg to pdf"],
  openGraph: {
    title: "Convert JPG to PDF Online | 100% Private",
    description: "Turn your JPG photos into a single PDF document instantly. Your files never leave your device.",
  }
};

const JPGtoPDF = () => (
  <ConvertCom
    title="JPG to PDF"
    defaultFormat="pdf"
    textContent={<TextContent />}
  />
);

export default JPGtoPDF;
