const TextContent = ()=>(
<div className="textContainer">
    <div className="tc-hero">
        <h2>Convert PDF to WEBP</h2>
        <p>Transform your PDF pages into high-quality WEBP images.<br/>Modern format, smaller size, crisp output.</p>
    </div>

    <div className="tc-steps">
        <div className="tc-step">
            <span className="tc-step-num">Step 1</span>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="3" width="12" height="16" rx="2" stroke="var(--highlight)" strokeWidth="1.6"/><path d="M8 8h6M8 12h4" stroke="var(--highlight)" strokeWidth="1.4" strokeLinecap="round"/><path d="M14 3v4h4" stroke="var(--highlight)" strokeWidth="1.4"/></svg>
            <h3>Upload PDF</h3>
            <p>Drag & drop or click to select your PDF file</p>
        </div>
        <div className="tc-step">
            <span className="tc-step-num">Step 2</span>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" stroke="var(--highlight)" strokeWidth="1.6"/><path d="M9 12l2 2 4-4" stroke="var(--highlight)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <h3>Choose Format</h3>
            <p>Select WEBP or switch to PNG / JPG if needed</p>
        </div>
        <div className="tc-step">
            <span className="tc-step-num">Step 3</span>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 3v12M8 11l4 4 4-4" stroke="var(--highlight)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 20h14" stroke="var(--highlight)" strokeWidth="1.6" strokeLinecap="round"/></svg>
            <h3>Download</h3>
            <p>Get your WEBP file instantly, ready to use</p>
        </div>
    </div>

    <hr className="tc-divider"/>

    <p className="tc-uses-title">Why convert to WEBP?</p>
    <div className="tc-uses">
        <div className="tc-use">
            <div className="tc-use-icon bg-teal">
                <svg width="17" height="17" fill="none" viewBox="0 0 24 24"><path d="M13 2L4 14h8l-1 8 9-12h-8l1-8z" stroke="#0F6E56" strokeWidth="1.7" strokeLinejoin="round"/></svg>
            </div>
            <div>
                <h4>Faster Web Loading</h4>
                <p>WEBP files load faster in browsers, improving page speed scores</p>
            </div>
        </div>
        <div className="tc-use">
            <div className="tc-use-icon bg-blue">
                <svg width="17" height="17" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3" stroke="#1A6FB5" strokeWidth="1.7"/><path d="M8 12h8M12 8v8" stroke="#1A6FB5" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <div>
                <h4>Smaller File Size</h4>
                <p>Up to 30% smaller than PNG with comparable visual quality</p>
            </div>
        </div>
        <div className="tc-use">
            <div className="tc-use-icon bg-purple">
                <svg width="17" height="17" fill="none" viewBox="0 0 24 24"><path d="M12 21C12 21 4 14.5 4 9a8 8 0 0116 0c0 5.5-8 12-8 12z" stroke="#6C5CE7" strokeWidth="1.7"/><circle cx="12" cy="9" r="2.5" stroke="#6C5CE7" strokeWidth="1.5"/></svg>
            </div>
            <div>
                <h4>Wide Support</h4>
                <p>Supported by all modern browsers and major platforms</p>
            </div>
        </div>
        <div className="tc-use">
            <div className="tc-use-icon bg-amber">
                <svg width="17" height="17" fill="none" viewBox="0 0 24 24"><path d="M4 16l4-4 4 4 4-6 4 6" stroke="#B45309" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div>
                <h4>Transparency Support</h4>
                <p>WEBP supports alpha channel — perfect for logos and icons</p>
            </div>
        </div>
    </div>

    <hr className="tc-divider"/>

    <p className="tc-uses-title">WEBP vs other formats</p>
    <div className="tc-vs">
        <div className="tc-vs-card">
            <span className="tc-vs-badge badge-webp">WEBP</span>
            <h4>Modern & Efficient</h4>
            <div className="tc-vs-row"><span>Compression</span><span className="tc-vs-val">Lossy + Lossless</span></div>
            <div className="tc-vs-row"><span>Transparency</span><span className="tc-vs-val">✓ Supported</span></div>
            <div className="tc-vs-row"><span>File Size</span><span className="tc-vs-val">Very Small</span></div>
            <div className="tc-vs-row"><span>Best For</span><span className="tc-vs-val">Web & Apps</span></div>
        </div>
        <div className="tc-vs-card">
            <span className="tc-vs-badge badge-jpg">PNG / JPG</span>
            <h4>Classic Formats</h4>
            <div className="tc-vs-row"><span>Compression</span><span className="tc-vs-val">Lossless / Lossy</span></div>
            <div className="tc-vs-row"><span>Transparency</span><span className="tc-vs-val">PNG only</span></div>
            <div className="tc-vs-row"><span>File Size</span><span className="tc-vs-val">Larger</span></div>
            <div className="tc-vs-row"><span>Best For</span><span className="tc-vs-val">Print & Archive</span></div>
        </div>
    </div>

    <div className="tc-fun">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke="var(--highlight)" strokeWidth="1.6"/><path d="M12 7v5l3 3" stroke="var(--highlight)" strokeWidth="1.6" strokeLinecap="round"/></svg>
        <div className="tc-fun-text">
            <h4>Did you know?</h4>
            <p>WEBP was developed by Google in 2010 specifically to make the web faster. It can reduce image size by up to 34% compared to JPEG at equivalent quality.</p>
        </div>
    </div>

    <div className="tc-tips">
        <div className="tc-tip">
            <h5>Multi-page PDFs</h5>
            <p>Each page is exported as a separate WEBP image automatically</p>
        </div>
        <div className="tc-tip">
            <h5>Quality vs Size</h5>
            <p>WEBP balances both — ideal when storage and speed both matter</p>
        </div>
        <div className="tc-tip">
            <h5>CMS Ready</h5>
            <p>Most modern CMS platforms (WordPress, Webflow) accept WEBP natively</p>
        </div>
    </div>
</div>
)
export const metadata = {
  title: "Convert PDF to WEBP Online | Optimize PDF Pages for Web",
  description: "Convert PDF files to web-optimized WEBP images quickly. Free, secure, and private browser-based converter with zero server uploads.",
  keywords: ["pdf to webp", "convert pdf to webp", "pdf to optimized web image", "free webp extraction"],
  openGraph: {
    title: "Convert PDF to WEBP Online | Speed Up Your Site",
    description: "Turn document pages into next-gen WEBP images instantly for better web performance.",
  }
};
// PDFtoJPG.jsx
import ConvertCom from '@/constants/convertCom';

const PDFtoWEBP = () => (
  <ConvertCom
    title="PDF to WEBP"
    defaultFormat="webp"
    textContent={<TextContent />}
  />
);

export default PDFtoWEBP;
