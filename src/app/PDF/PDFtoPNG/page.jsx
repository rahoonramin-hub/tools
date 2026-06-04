const TextContent = ()=>(
<div className="textContainer">

    {/* ── Hero ── */}
    <div className="tc-hero">
        <h2>PDF to PNG — sharp, transparent, perfect</h2>
        <p>PNG keeps every pixel exactly as-is. No compression artifacts, no blurry edges.<br/>The go-to format whenever quality actually matters.</p>
    </div>

    {/* ── 3-step guide ── */}
    <div className="tc-steps">
        <div className="tc-step">
        <span className="tc-step-num">Step 1</span>
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
            <rect x="8" y="6" width="28" height="36" rx="4" fill="#E1F5EE" stroke="#5DCAA5" strokeWidth="1"/>
            <rect x="13" y="15" width="18" height="2" rx="1" fill="#1D9E75"/>
            <rect x="13" y="20" width="12" height="2" rx="1" fill="#9FE1CB"/>
            <rect x="13" y="25" width="15" height="2" rx="1" fill="#9FE1CB"/>
            <path d="M30 8 L36 8 L36 14 L30 14Z" fill="white" stroke="#9FE1CB" strokeWidth="0.8"/>
            <path d="M30 8 L36 14" stroke="#9FE1CB" strokeWidth="0.8"/>
            <circle cx="39" cy="39" r="7" fill="#1D9E75"/>
            <path d="M36 39 L39 42 L43 36" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
        <h3>Drop your PDF</h3>
        <p>Drag it in or click to pick a file from your device.</p>
        </div>

        <div className="tc-step">
        <span className="tc-step-num">Step 2</span>
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
            <rect x="5" y="16" width="19" height="20" rx="3" fill="#E1F5EE" stroke="#5DCAA5" strokeWidth="1"/>
            <rect x="9" y="21" width="11" height="1.5" rx="1" fill="#1D9E75"/>
            <rect x="9" y="25" width="7" height="1.5" rx="1" fill="#9FE1CB"/>
            <defs>
            <marker id="bm" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M2 1L8 5L2 9" fill="none" stroke="#888780" strokeWidth="1.5" strokeLinecap="round"/>
            </marker>
            </defs>
            <path d="M24 26 L28 26" stroke="#888780" strokeWidth="1.3" strokeLinecap="round" markerEnd="url(#bm)"/>
            <rect x="28" y="14" width="19" height="24" rx="3" fill="#EEEDFE" stroke="#AFA9EC" strokeWidth="1"/>
            {/* checkerboard transparency icon */}
            <rect x="16" y="10" width="20" height="20" rx="2" fill="white" stroke="#9FE1CB" strokeWidth="0.8"/>
            <rect x="20" y="14" width="5" height="5" rx="1" fill="#E1F5EE"/>
            <rect x="26" y="14" width="5" height="5" rx="1" fill="#E1F5EE"/>
            <rect x="20" y="20" width="5" height="5" rx="1" fill="#E1F5EE"/>
            <text x="26" y="32" fontSize="8" fontWeight="500" fill="#534AB7" textAnchor="middle">PNG</text>
        </svg>
        <h3>Format is already PNG</h3>
        <p>No need to change anything — just hit Convert.</p>
        </div>

        <div className="tc-step">
        <span className="tc-step-num">Step 3</span>
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
            {/* checkerboard background = transparency */}
            <rect x="5" y="14" width="5" height="5" fill="#e0e0e0"/>
            <rect x="10" y="14" width="5" height="5" fill="white"/>
            <rect x="15" y="14" width="5" height="5" fill="#e0e0e0"/>
            <rect x="20" y="14" width="5" height="5" fill="white"/>
            <rect x="5" y="19" width="5" height="5" fill="white"/>
            <rect x="10" y="19" width="5" height="5" fill="#e0e0e0"/>
            <rect x="15" y="19" width="5" height="5" fill="white"/>
            <rect x="20" y="19" width="5" height="5" fill="#e0e0e0"/>
            <rect x="5" y="24" width="5" height="5" fill="#e0e0e0"/>
            <rect x="10" y="24" width="5" height="5" fill="white"/>
            <rect x="15" y="24" width="5" height="5" fill="#e0e0e0"/>
            <rect x="20" y="24" width="5" height="5" fill="white"/>
            <rect x="5" y="29" width="5" height="5" fill="white"/>
            <rect x="10" y="29" width="5" height="5" fill="#e0e0e0"/>
            <rect x="15" y="29" width="5" height="5" fill="white"/>
            <rect x="20" y="29" width="5" height="5" fill="#e0e0e0"/>
            <rect x="5" y="14" width="20" height="20" rx="2" fill="none" stroke="#9FE1CB" strokeWidth="0.8"/>
            <defs>
            <marker id="bm2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M2 1L8 5L2 9" fill="none" stroke="#1D9E75" strokeWidth="1.5" strokeLinecap="round"/>
            </marker>
            </defs>
            <path d="M26 24 L34 24" stroke="#1D9E75" strokeWidth="1.3" strokeLinecap="round" markerEnd="url(#bm2)"/>
            <rect x="34" y="38" width="14" height="3" rx="1.5" fill="#9FE1CB"/>
            <path d="M41 30 L41 38" stroke="#1D9E75" strokeWidth="1.3" strokeLinecap="round"/>
            <path d="M38 36 L41 39 L44 36" stroke="#1D9E75" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
        <h3>Download your PNGs</h3>
        <p>Each page saves as a separate PNG, ready to use.</p>
        </div>
    </div>

    <hr className="tc-divider"/>

    {/* ── Use cases ── */}
    <p className="tc-uses-title">When should you use PNG?</p>
    <div className="tc-uses">
        <div className="tc-use">
        <div className="tc-use-icon bg-teal">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <rect x="1" y="1" width="7" height="7" rx="1" fill="#9FE1CB"/>
            <rect x="10" y="1" width="7" height="7" rx="1" fill="none" stroke="#9FE1CB" strokeDasharray="2 1" strokeWidth="0.8"/>
            <rect x="1" y="10" width="7" height="7" rx="1" fill="none" stroke="#9FE1CB" strokeDasharray="2 1" strokeWidth="0.8"/>
            <rect x="10" y="10" width="7" height="7" rx="1" fill="#9FE1CB"/>
            </svg>
        </div>
        <div>
            <h4>Logos with transparent backgrounds</h4>
            <p>PNG supports true transparency. Your logo won`t have a white box around it.</p>
        </div>
        </div>
        <div className="tc-use">
        <div className="tc-use-icon bg-blue">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <rect x="2" y="3" width="14" height="10" rx="2" fill="#B5D4F4"/>
            <rect x="4" y="5" width="10" height="6" rx="1" fill="#378ADD"/>
            <rect x="4" y="5" width="4" height="3" rx="0.5" fill="#B5D4F4"/>
            </svg>
        </div>
        <div>
            <h4>Website graphics and UI assets</h4>
            <p>PNGs stay crisp at any zoom level and look great on retina displays.</p>
        </div>
        </div>
        <div className="tc-use">
        <div className="tc-use-icon bg-purple">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <rect x="2" y="2" width="14" height="14" rx="2" fill="#CECBF6"/>
            <rect x="5" y="5" width="8" height="2" rx="1" fill="#534AB7"/>
            <rect x="5" y="9" width="5" height="1.5" rx="0.75" fill="#AFA9EC"/>
            <rect x="5" y="12" width="6" height="1.5" rx="0.75" fill="#AFA9EC"/>
            </svg>
        </div>
        <div>
            <h4>Presentations and slide decks</h4>
            <p>Extract a page from a report PDF and drop it right into PowerPoint.</p>
        </div>
        </div>
        <div className="tc-use">
        <div className="tc-use-icon bg-amber">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <circle cx="9" cy="8" r="5" fill="#FAC775"/>
            <path d="M6 8 L8 10 L12 6" stroke="#854F0B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
        </div>
        <div>
            <h4>Archiving documents losslessly</h4>
            <p>Unlike JPG, PNG never degrades quality each time you save. Perfect for records.</p>
        </div>
        </div>
    </div>

    {/* ── PNG vs JPG comparison ── */}
    <div className="tc-vs">
        <div className="tc-vs-card">
        <span className="tc-vs-badge badge-png">PNG</span>
        <h4>Best for quality</h4>
        <div className="tc-vs-row"><span>Compression</span><span className="tc-vs-val">Lossless</span></div>
        <div className="tc-vs-row"><span>Transparency</span><span className="tc-vs-val">Yes ✓</span></div>
        <div className="tc-vs-row"><span>File size</span><span className="tc-vs-val">Larger</span></div>
        <div className="tc-vs-row"><span>Best for</span><span className="tc-vs-val">Graphics, UI</span></div>
        </div>
        <div className="tc-vs-card">
        <span className="tc-vs-badge badge-jpg">JPG</span>
        <h4>Best for photos</h4>
        <div className="tc-vs-row"><span>Compression</span><span className="tc-vs-val">Lossy</span></div>
        <div className="tc-vs-row"><span>Transparency</span><span className="tc-vs-val">No ✗</span></div>
        <div className="tc-vs-row"><span>File size</span><span className="tc-vs-val">Smaller</span></div>
        <div className="tc-vs-row"><span>Best for</span><span className="tc-vs-val">Photos, email</span></div>
        </div>
    </div>

    {/* ── Fun fact ── */}
    <div className="tc-fun">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
        {/* checkerboard */}
        <rect x="4"  y="4"  width="13" height="13" fill="#d0d0d0"/>
        <rect x="17" y="4"  width="13" height="13" fill="white" stroke="#e0e0e0" strokeWidth="0.5"/>
        <rect x="30" y="4"  width="13" height="13" fill="#d0d0d0"/>
        <rect x="43" y="4"  width="13" height="13" fill="white" stroke="#e0e0e0" strokeWidth="0.5"/>
        <rect x="4"  y="17" width="13" height="13" fill="white" stroke="#e0e0e0" strokeWidth="0.5"/>
        <rect x="17" y="17" width="13" height="13" fill="#d0d0d0"/>
        <rect x="30" y="17" width="13" height="13" fill="white" stroke="#e0e0e0" strokeWidth="0.5"/>
        <rect x="43" y="17" width="13" height="13" fill="#d0d0d0"/>
        <rect x="4"  y="30" width="13" height="13" fill="#d0d0d0"/>
        <rect x="17" y="30" width="13" height="13" fill="white" stroke="#e0e0e0" strokeWidth="0.5"/>
        <rect x="30" y="30" width="13" height="13" fill="#d0d0d0"/>
        <rect x="43" y="30" width="13" height="13" fill="white" stroke="#e0e0e0" strokeWidth="0.5"/>
        <rect x="4"  y="43" width="13" height="13" fill="white" stroke="#e0e0e0" strokeWidth="0.5"/>
        <rect x="17" y="43" width="13" height="13" fill="#d0d0d0"/>
        <rect x="30" y="43" width="13" height="13" fill="white" stroke="#e0e0e0" strokeWidth="0.5"/>
        <rect x="43" y="43" width="13" height="13" fill="#d0d0d0"/>
        <circle cx="30" cy="30" r="18" fill="#1D9E75" opacity="0.88"/>
        <path d="M23 30 L28 35 L37 24" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
        <div className="tc-fun-text"> 
        <h4>Fun fact</h4>
        <p>PNG was created in 1995 specifically to replace GIF — which was owned by a company that started charging royalties. The PNG creators wanted a free, patent-unencumbered format forever. It worked: PNG is now one of the most widely used image formats on the web.</p>
        </div>
    </div>

    {/* ── Pro tips ── */}
    <div className="tc-tips">
        <div className="tc-tip">
        <h5>Transparent pages</h5>
        <p>PDF pages with no background come out with a transparent layer in PNG — great for overlays.</p>
        </div>
        <div className="tc-tip">
        <h5>High-DPI screens</h5>
        <p>PNG scales perfectly for retina displays. No blurring, ever.</p>
        </div>
        <div className="tc-tip">
        <h5>Edit after export</h5>
        <p>Open in Figma, Photoshop, or GIMP without any quality loss.</p>
        </div>
    </div>

</div>
)

export const metadata = {
  title: "Convert PDF to PNG Online | Extract High-Res Images",
  description: "Turn your PDF document pages into crisp, transparent PNG images. Free and 100% private tool running entirely on your device.",
  keywords: ["pdf to png", "convert pdf to png", "pdf to transparent png", "free pdf to png converter"],
  openGraph: {
    title: "Convert PDF to PNG Online | Transparent & Crisp Quality",
    description: "Convert your PDF reports or assets into clean PNG images safely.",
  }
};

// PDFtoJPG.jsx
import ConvertCom from '@/constants/convertCom';

const PDFtoPNG = () => (
  <ConvertCom
    title="PDF to PNG"
    defaultFormat="png"
    textContent={<TextContent />}
  />
);

export default PDFtoPNG;

