import ConvertCom from '@/constants/convertCom';

const TextContent = ()=>(
<div className="textContainer">
    <div className="tc-hero">
        <h2>From picture to document</h2>
        <p>Got an image that needs to live in a proper document?<br/>Convert any JPG, PNG, or WEBP into PDF or Word — structured and ready to share.</p>
    </div>

    <div className="tc-steps">
        <div className="tc-step">
            <span className="tc-step-num">Step 1</span>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" stroke="var(--highlight)" strokeWidth="1.6"/><circle cx="8.5" cy="8.5" r="1.5" stroke="var(--highlight)" strokeWidth="1.4"/><path d="M21 15l-5-5L5 21" stroke="var(--highlight)" strokeWidth="1.6" strokeLinecap="round"/></svg>
            <h3>Upload image</h3>
            <p>JPG, PNG, or WEBP — any image format works.</p>
        </div>
        <div className="tc-step">
            <span className="tc-step-num">Step 2</span>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="3" width="14" height="18" rx="2" stroke="var(--highlight)" strokeWidth="1.6"/><path d="M8 8h8M8 12h6M8 16h4" stroke="var(--highlight)" strokeWidth="1.4" strokeLinecap="round"/></svg>
            <h3>Choose document type</h3>
            <p>PDF for sharing and printing. Word (.docx) for editing.</p>
        </div>
        <div className="tc-step">
            <span className="tc-step-num">Step 3</span>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 3v12M8 11l4 4 4-4" stroke="var(--highlight)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 20h14" stroke="var(--highlight)" strokeWidth="1.6" strokeLinecap="round"/></svg>
            <h3>Download</h3>
            <p>Your document is ready — open, edit, or submit.</p>
        </div>
    </div>

    <hr className="tc-divider"/>

    <p className="tc-uses-title">PDF or Word — which one do you need?</p>
    <div className="tc-vs">
        <div className="tc-vs-card">
            <span className="tc-vs-badge badge-png">PDF</span>
            <h4>For sharing & printing</h4>
            <div className="tc-vs-row"><span>Editable</span><span className="tc-vs-val">Read-only</span></div>
            <div className="tc-vs-row"><span>Layout</span><span className="tc-vs-val">Always preserved</span></div>
            <div className="tc-vs-row"><span>Opens on</span><span className="tc-vs-val">Every device</span></div>
            <div className="tc-vs-row"><span>Best for</span><span className="tc-vs-val">Submissions, print</span></div>
        </div>
        <div className="tc-vs-card">
            <span className="tc-vs-badge badge-jpg">Word</span>
            <h4>For editing</h4>
            <div className="tc-vs-row"><span>Editable</span><span className="tc-vs-val">Fully editable</span></div>
            <div className="tc-vs-row"><span>Layout</span><span className="tc-vs-val">Flexible</span></div>
            <div className="tc-vs-row"><span>Opens on</span><span className="tc-vs-val">Office, Google Docs</span></div>
            <div className="tc-vs-row"><span>Best for</span><span className="tc-vs-val">Reports, templates</span></div>
        </div>
    </div>

    <div className="tc-tips">
        <div className="tc-tip"><h5>Scanned receipts</h5><p>Convert a phone photo of a receipt into PDF for expense reports.</p></div>
        <div className="tc-tip"><h5>Whiteboard photos</h5><p>Snap a meeting whiteboard, convert to PDF, and share the notes.</p></div>
        <div className="tc-tip"><h5>Image in a report</h5><p>Drop your image into a Word file to add text, captions, or a cover page around it.</p></div>
    </div>
</div>
)

const Header = ()=>(
    <div style={{display:'flex',flexDirection:'column',gap: 5,marginBottom: 15,alignItems:'center',justifyContent:'center'}}>
        <div style={{display: 'flex',gap:10,fontSize:14, fontWeight:550, color:'var(--secondary)'}}><span>Easy</span><span style={{borderLeft:'1px solid var(--secondary)',paddingLeft:10,borderRight:'1px solid var(--secondary)',paddingRight:10}}>Fast</span><span>Online</span></div>
    </div>
)

export const metadata = {
  title: "Convert Image to Word & PDF Online | Image to Document Converter",
  description: "Extract or wrap your images (JPG, PNG, WEBP) into editable Word (.docx) or PDF documents. Free, fast, and entirely client-side secure.",
  keywords: ["image to document", "image to word", "jpg to docx", "convert photo to word document"],
  openGraph: {
    title: "Convert Image to Document | Word & PDF Converter",
    description: "Turn your visual images into editable office documents or clean PDFs instantly.",
  }
};

const IMGtoDOC = () => (
    <>
        <Header />
        <ConvertCom
            title="Image to Document"
            defaultFormat="webp"
            textContent={<TextContent />}
        />
    </>
);

export default IMGtoDOC;
