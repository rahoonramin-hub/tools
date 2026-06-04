const TextContent = () =>(
<div className="textContainer">
    <div className="tc-hero">
        <h2>WEBP files don`t open everywhere — PDFs do</h2>
        <p>WEBP is great on the web but unsupported in many apps, email clients, and print services. One conversion fixes that.</p>
    </div>

    <div className="tc-steps">
        <div className="tc-step">
            <span className="tc-step-num">Step 1</span>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" stroke="var(--highlight)" strokeWidth="1.6"/><circle cx="8.5" cy="8.5" r="1.5" stroke="var(--highlight)" strokeWidth="1.4"/><path d="M21 15l-5-5L5 21" stroke="var(--highlight)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <h3>Upload WEBP</h3>
            <p>Drop the file downloaded from any website or app.</p>
        </div>
        <div className="tc-step">
            <span className="tc-step-num">Step 2</span>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" stroke="var(--highlight)" strokeWidth="1.6" rx="2"/><path d="M9 9h6M9 13h4" stroke="var(--highlight)" strokeWidth="1.4" strokeLinecap="round"/></svg>
            <h3>Rendered to PDF</h3>
            <p>WEBP is decoded and embedded cleanly into a PDF page.</p>
        </div>
        <div className="tc-step">
            <span className="tc-step-num">Step 3</span>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 3v12M8 11l4 4 4-4" stroke="var(--highlight)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 20h14" stroke="var(--highlight)" strokeWidth="1.6" strokeLinecap="round"/></svg>
            <h3>Universal file</h3>
            <p>Opens in every PDF reader, email client, and OS.</p>
        </div>
    </div>

    <hr className="tc-divider"/>

    <p className="tc-uses-title">Where WEBP fails and PDF wins</p>
    <div className="tc-uses">
        <div className="tc-use">
            <div className="tc-use-icon bg-amber">📮</div>
            <div><h4>Email attachments</h4><p>Outlook and Apple Mail often can`t preview WEBP inline. PDFs always work.</p></div>
        </div>
        <div className="tc-use">
            <div className="tc-use-icon bg-teal">🖨️</div>
            <div><h4>Printing</h4><p>Most print drivers and shop software don`t accept WEBP. PDF is universal.</p></div>
        </div>
        <div className="tc-use">
            <div className="tc-use-icon bg-purple">📁</div>
            <div><h4>Document systems</h4><p>CRMs, HR portals, and legal platforms only accept PDF or Office formats.</p></div>
        </div>
        <div className="tc-use">
            <div className="tc-use-icon bg-blue">💾</div>
            <div><h4>Long-term archiving</h4><p>PDF/A is an ISO standard for archiving. WEBP has no archival standard.</p></div>
        </div>
    </div>

    <div className="tc-tips">
        <div className="tc-tip"><h5>Downloaded from a website?</h5><p>Many sites serve WEBP silently. Right-click → Save often gives you a .webp — convert it here.</p></div>
        <div className="tc-tip"><h5>Transparency preserved</h5><p>WEBP alpha channel is rendered correctly before embedding into the PDF.</p></div>
        <div className="tc-tip"><h5>No quality loss</h5><p>Decoded at full resolution — the PDF is as sharp as the original WEBP.</p></div>
    </div>
</div>
)

export const metadata = {
  title: "Convert WEBP to PDF Online | Fast & Free Document Creator",
  description: "Convert WEBP images to PDF format smoothly. Free, secure, and works entirely offline after loading. No sign-up or watermarks.",
  keywords: ["webp to pdf", "convert webp to pdf online", "free webp to pdf converter"],
  openGraph: {
    title: "Convert WEBP to PDF Online | Browser-Based",
    description: "Fast, web-optimized WEBP conversion to PDF document. Zero server lag, 100% secure.",
  }
};

import ConvertCom from '@/constants/convertCom';

const WEBPtoPDF = () => (
  <ConvertCom
    title="WEBP to PDF"
    defaultFormat="pdf"
    textContent={<TextContent />}
  />
);

export default WEBPtoPDF;
