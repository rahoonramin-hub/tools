const TextContent = ()=>(
<div className="textContainer">
    <div className="tc-hero">
        <h2>One tool, every format</h2>
        <p>Convert between JPG, PNG, WEBP, and PDF without installing anything.<br/>Fast, private, free — runs entirely in your browser.</p>
    </div>

    <div className="tc-steps">
        <div className="tc-step">
            <span className="tc-step-num">Step 1</span>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="var(--highlight)" strokeWidth="1.6" strokeLinecap="round"/><polyline points="17 8 12 3 7 8" stroke="var(--highlight)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><line x1="12" y1="3" x2="12" y2="15" stroke="var(--highlight)" strokeWidth="1.6" strokeLinecap="round"/></svg>
            <h3>Drop your file</h3>
            <p>Any image or PDF works. Drag it in or click to browse.</p>
        </div>
        <div className="tc-step">
            <span className="tc-step-num">Step 2</span>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" stroke="var(--highlight)" strokeWidth="1.6"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" stroke="var(--highlight)" strokeWidth="1.6" strokeLinecap="round"/></svg>
            <h3>Pick a format</h3>
            <p>Choose your target — images or document, your call.</p>
        </div>
        <div className="tc-step">
            <span className="tc-step-num">Step 3</span>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 3v12M8 11l4 4 4-4" stroke="var(--highlight)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 20h14" stroke="var(--highlight)" strokeWidth="1.6" strokeLinecap="round"/></svg>
            <h3>Download</h3>
            <p>Your converted file is ready instantly.</p>
        </div>
    </div>

    <hr className="tc-divider"/>

    <p className="tc-uses-title">What can you convert?</p>
    <div className="tc-uses">
        <div className="tc-use">
            <div className="tc-use-icon bg-purple">
                <svg width="17" height="17" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#6C5CE7" strokeWidth="1.7"/><path d="M8 12h8M8 8h5M8 16h3" stroke="#6C5CE7" strokeWidth="1.4" strokeLinecap="round"/></svg>
            </div>
            <div><h4>Image → PDF</h4><p>Wrap any JPG, PNG, or WEBP into a clean PDF document.</p></div>
        </div>
        <div className="tc-use">
            <div className="tc-use-icon bg-teal">
                <svg width="17" height="17" fill="none" viewBox="0 0 24 24"><rect x="4" y="3" width="12" height="16" rx="2" stroke="#0F6E56" strokeWidth="1.7"/><path d="M8 8h6M8 12h4" stroke="#0F6E56" strokeWidth="1.4" strokeLinecap="round"/></svg>
            </div>
            <div><h4>PDF → Image</h4><p>Extract every page as JPG, PNG, or WEBP with one click.</p></div>
        </div>
        <div className="tc-use">
            <div className="tc-use-icon bg-blue">
                <svg width="17" height="17" fill="none" viewBox="0 0 24 24"><path d="M4 8h16M4 12h10M4 16h7" stroke="#1A6FB5" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <div><h4>Image → Image</h4><p>Switch between JPG, PNG, and WEBP while keeping quality.</p></div>
        </div>
        <div className="tc-use">
            <div className="tc-use-icon bg-amber">
                <svg width="17" height="17" fill="none" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#B45309" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div><h4>PDF → Word</h4><p>Pull text out of a PDF and get an editable .docx file.</p></div>
        </div>
    </div>

    <div className="tc-fun">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="var(--highlight)" strokeWidth="1.6" strokeLinejoin="round"/></svg>
        <div className="tc-fun-text">
            <h4>100% private</h4>
            <p>All conversions run directly in your browser using WebAssembly. Your files never leave your device — no server, no upload, no trace.</p>
        </div>
    </div>

    <div className="tc-tips">
        <div className="tc-tip"><h5>No file limit</h5><p>Convert as many files as you like — no account, no paywall.</p></div>
        <div className="tc-tip"><h5>Works offline</h5><p>Once the page loads, you dont even need an internet connection.</p></div>
        <div className="tc-tip"><h5>Any device</h5><p>Runs on desktop, tablet, and mobile — same experience everywhere.</p></div>
    </div>
</div>
)


export const metadata = {
  title: "Free Online Image Converter | Convert Photos Instantly",
  description: "Convert images between JPG, PNG, WEBP, and SVG formats online for free. 100% private, secure, and runs entirely in your browser with no file limits.",
  keywords: ["image converter", "convert jpg to png", "online image converter", "free photo converter"],
  openGraph: {
    title: "Free Online Image Converter | Safe & Instant",
    description: "Easily switch between any image formats right in your browser. No server uploads.",
  }
};

// PDFtoJPG.jsx
import ConvertCom from '@/constants/convertCom';

const ImageConverter = () => (
    <>
        <div style={{display:'flex',flexDirection:'column',gap: 5,marginBottom: 15,alignItems:'center',justifyContent:'center'}}>
            <h2 style={{display:'inline', color:'var(--accent)', marginLeft:'auto',marginRight:'auto'}}>Change any image format</h2>
            <div style={{display: 'flex',gap:10,fontSize:14, fontWeight:550, color:'var(--secondary)'}}><span>Easy</span><span style={{borderLeft:'1px solid var(--secondary)',paddingLeft:10,borderRight:'1px solid var(--secondary)',paddingRight:10}}>Fast</span><span>Online</span></div>
        </div>
        <ConvertCom
            title=""
            defaultFormat="jpg"
            textContent={<TextContent />}
        />
  </>
);

export default ImageConverter;
