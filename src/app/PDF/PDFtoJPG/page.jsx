

const TextContent = ()=>(
<div className="textContainer">

    {/* ── Hero intro ── */}
    <div className="tc-hero">
        <h2>Convert any file in seconds</h2>
        <p>No sign-up. No waiting. Just drag, pick a format, and download.<br/>It`s that simple — really.</p>
    </div>

    {/* ── 3-step guide ── */}
    <div className="tc-steps">
        <div className="tc-step">
        <span className="tc-step-num">Step 1</span>
        {/* SVG: upload icon */}
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
            <rect x="10" y="8" width="30" height="38" rx="4" fill="#EEEDFE" stroke="#AFA9EC" strokeWidth="1"/>
            <rect x="16" y="18" width="18" height="2" rx="1" fill="#7F77DD"/>
            <rect x="16" y="23" width="12" height="2" rx="1" fill="#AFA9EC"/>
            <rect x="16" y="28" width="15" height="2" rx="1" fill="#AFA9EC"/>
            <path d="M36 10 L40 14" stroke="#AFA9EC" strokeWidth="1"/>
            <path d="M32 8 L40 8 L40 16 L32 16 Z" fill="white" stroke="#AFA9EC" strokeWidth="0.8"/>
            <circle cx="42" cy="40" r="8" fill="#534AB7"/>
            <path d="M39 40 L42 43 L46 37" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
        <h3>Upload your file</h3>
        <p>Drag and drop, or click to browse. PDF, JPG — we take both.</p>
        </div>

        <div className="tc-step">
        <span className="tc-step-num">Step 2</span>
        {/* SVG: format switch icon */}
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
            <rect x="6" y="18" width="20" height="22" rx="4" fill="#E1F5EE" stroke="#5DCAA5" strokeWidth="1"/>
            <rect x="10" y="24" width="12" height="1.5" rx="1" fill="#1D9E75"/>
            <rect x="10" y="28" width="8" height="1.5" rx="1" fill="#9FE1CB"/>
            <rect x="30" y="18" width="20" height="22" rx="4" fill="#EEEDFE" stroke="#AFA9EC" strokeWidth="1"/>
            <rect x="34" y="24" width="12" height="1.5" rx="1" fill="#7F77DD"/>
            <rect x="34" y="28" width="8" height="1.5" rx="1" fill="#AFA9EC"/>
            <defs>
            <marker id="a2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M2 1L8 5L2 9" fill="none" stroke="#888780" strokeWidth="1.5" strokeLinecap="round"/>
            </marker>
            </defs>
            <path d="M26 29 L30 29" stroke="#888780" strokeWidth="1.5" strokeLinecap="round" markerEnd="url(#a2)"/>
            <circle cx="40" cy="40" r="8" fill="#1D9E75"/>
            <rect x="37" y="39" width="6" height="2" rx="1" fill="white"/>
            <rect x="39" y="37" width="2" height="6" rx="1" fill="white"/>
        </svg>
        <h3>Pick output format</h3>
        <p>Hover the format button and choose exactly what you need.</p>
        </div>

        <div className="tc-step">
        <span className="tc-step-num">Step 3</span>
        {/* SVG: download icon */}
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
            <rect x="10" y="8" width="30" height="34" rx="4" fill="#E1F5EE" stroke="#5DCAA5" strokeWidth="1"/>
            <rect x="16" y="15" width="18" height="2" rx="1" fill="#1D9E75"/>
            <rect x="16" y="20" width="12" height="2" rx="1" fill="#9FE1CB"/>
            <defs>
            <marker id="a3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M2 1L8 5L2 9" fill="none" stroke="#1D9E75" strokeWidth="1.5" strokeLinecap="round"/>
            </marker>
            </defs>
            <path d="M28 30 L28 42" stroke="#1D9E75" strokeWidth="1.5" strokeLinecap="round" markerEnd="url(#a3)"/>
            <path d="M24 39 L28 43 L32 39" stroke="#1D9E75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <rect x="19" y="44" width="18" height="3" rx="1.5" fill="#9FE1CB"/>
        </svg>
        <h3>Download instantly</h3>
        <p>Hit Convert and your file is ready. No email required.</p>
        </div>
    </div>

    <hr className="tc-divider"/>

    {/* ── Use cases ── */}
    <p className="tc-uses-title">What do people use this for?</p>
    <div className="tc-uses">
        <div className="tc-use">
        <div className="tc-use-icon tc-purple">📄</div>
        <div>
            <h4>Submitting forms online</h4>
            <p>Many portals only accept PDFs. Convert your scanned JPG in one click before the deadline.</p>
        </div>
        </div>
        <div className="tc-use">
        <div className="tc-use-icon tc-teal">🖼️</div>
        <div>
            <h4>Extracting images from a PDF</h4>
            <p>Got a PDF with photos inside? Pull them out as JPGs you can actually edit.</p>
        </div>
        </div>
        <div className="tc-use">
        <div className="tc-use-icon tc-amber">📱</div>
        <div>
            <h4>Sharing on mobile</h4>
            <p>JPGs open everywhere. Convert your PDF so friends can view it without any app.</p>
        </div>
        </div>
        <div className="tc-use">
        <div className="tc-use-icon tc-coral">🖨️</div>
        <div>
            <h4>Sending to a print shop</h4>
            <p>Print shops love PDFs. Wrap your JPG photos into a single clean PDF instantly.</p>
        </div>
        </div>
    </div>

    {/* ── Fun fact ── */}
    <div className="tc-fun">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <rect x="8" y="12" width="22" height="28" rx="4" fill="#FAEEDA" stroke="#EF9F27" strokeWidth="1"/>
        <rect x="12" y="18" width="14" height="1.5" rx="1" fill="#BA7517"/>
        <rect x="12" y="22" width="10" height="1.5" rx="1" fill="#FAC775"/>
        <rect x="12" y="26" width="12" height="1.5" rx="1" fill="#FAC775"/>
        <rect x="12" y="30" width="7" height="1.5" rx="1" fill="#FAC775"/>
        <rect x="34" y="20" width="22" height="28" rx="4" fill="#FAECE7" stroke="#D85A30" strokeWidth="1"/>
        <rect x="39" y="14" width="13" height="13" rx="2" fill="white" stroke="#EF9F27" strokeWidth="0.8"/>
        <path d="M42 20 L44 22.5 L48 17" stroke="#EF9F27" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <rect x="38" y="30" width="14" height="1.5" rx="1" fill="#D85A30"/>
        <rect x="38" y="34" width="10" height="1.5" rx="1" fill="#F0997B"/>
        <rect x="38" y="38" width="12" height="1.5" rx="1" fill="#F0997B"/>
        <defs>
            <marker id="af" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M2 1L8 5L2 9" fill="none" stroke="#888780" strokeWidth="1.5" strokeLinecap="round"/>
            </marker>
        </defs>
        <path d="M30 26 L34 26" stroke="#888780" strokeWidth="1.2" strokeLinecap="round" markerEnd="url(#af)"/>
        </svg>
        <div className="tc-fun-text">
        <h4>Fun fact</h4>
        <p>The PDF format was invented in 1993 — two years before most people had internet access. Back then, you needed a $695 copy of Adobe Acrobat just to open one. Now it`s free and instant.</p>
        </div>
    </div>

    {/* ── Pro tips ── */}
    <div className="tc-tips">
        <div className="tc-tip">
        <h5>Keep file size small</h5>
        <p>For web use, JPG is usually 10× smaller than a PDF. Great for email attachments.</p>
        </div>
        <div className="tc-tip">
        <h5>Multi-page PDFs</h5>
        <p>Each page becomes its own JPG image, numbered in order.</p>
        </div>
        <div className="tc-tip">
        <h5>Privacy first</h5>
        <p>Conversion happens locally — nothing leaves your browser, ever.</p>
        </div>
    </div>
</div>
)

export const metadata = {
  title: "Convert PDF to JPG Online | Extract Pages as Images",
  description: "Convert PDF pages into high-quality JPG images instantly. Free, secure browser conversion—no email, no limits, and absolute privacy.",
  keywords: ["pdf to jpg", "convert pdf to jpg", "extract images from pdf", "pdf to jpeg online"],
  openGraph: {
    title: "Convert PDF to JPG Online | High Resolution Images",
    description: "Save every page of your PDF as a separate high-quality JPG photo in seconds.",
  }
};

// PDFtoJPG.jsx
import ConvertCom from '@/constants/convertCom';

const PDFtoJPG = () => (
  <ConvertCom
    title="PDF to JPG"
    defaultFormat="jpg"
    textContent={<TextContent />}
  />
);

export default PDFtoJPG;

