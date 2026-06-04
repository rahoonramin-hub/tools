import ConvertCom from '@/constants/convertCom';

const TextContent = ()=>(
<div className="textContainer">
    <div className="tc-hero">
        <h2>Get the text out of your PDF</h2>
        <p>PDFs are locked by design. This tool extracts every page`s text and puts it into an editable .docx file — ready for Word, Google Docs, or Pages.</p>
    </div>

    <div className="tc-steps">
        <div className="tc-step">
            <span className="tc-step-num">Step 1</span>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="3" width="12" height="16" rx="2" stroke="var(--highlight)" strokeWidth="1.6"/><path d="M8 8h6M8 12h4" stroke="var(--highlight)" strokeWidth="1.4" strokeLinecap="round"/><path d="M14 3v4h4" stroke="var(--highlight)" strokeWidth="1.4"/></svg>
            <h3>Upload PDF</h3>
            <p>Any text-based PDF — contracts, reports, articles.</p>
        </div>
        <div className="tc-step">
            <span className="tc-step-num">Step 2</span>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M4 7h16M4 12h10M4 17h7" stroke="var(--highlight)" strokeWidth="1.6" strokeLinecap="round"/></svg>
            <h3>Text extracted</h3>
            <p>Each page is read and its text is collected in order.</p>
        </div>
        <div className="tc-step">
            <span className="tc-step-num">Step 3</span>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="3" width="14" height="18" rx="2" stroke="var(--highlight)" strokeWidth="1.6"/><path d="M8 8h8M8 12h6M8 16h4" stroke="var(--highlight)" strokeWidth="1.4" strokeLinecap="round"/></svg>
            <h3>Download .docx</h3>
            <p>Open in Word or Google Docs and start editing.</p>
        </div>
    </div>

    <hr className="tc-divider"/>

    <p className="tc-uses-title">What people use this for</p>
    <div className="tc-uses">
        <div className="tc-use">
            <div className="tc-use-icon bg-teal">📝</div>
            <div><h4>Editing a contract</h4><p>Received a PDF contract you need to modify? Extract it to Word and edit freely.</p></div>
        </div>
        <div className="tc-use">
            <div className="tc-use-icon bg-purple">📖</div>
            <div><h4>Repurposing content</h4><p>Turn a PDF report or article into editable text you can reformat or quote from.</p></div>
        </div>
        <div className="tc-use">
            <div className="tc-use-icon bg-amber">🔍</div>
            <div><h4>Searchable text</h4><p>Some PDFs are image-based scans with no searchable text. Extraction makes them readable.</p></div>
        </div>
        <div className="tc-use">
            <div className="tc-use-icon bg-blue">🌐</div>
            <div><h4>Translation prep</h4><p>Paste extracted text into a translation tool or send the .docx to a translator.</p></div>
        </div>
    </div>

    <div className="tc-fun">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke="var(--highlight)" strokeWidth="1.6"/><path d="M9 9h.01M15 9h.01M8 13s1.5 2 4 2 4-2 4-2" stroke="var(--highlight)" strokeWidth="1.6" strokeLinecap="round"/></svg>
        <div className="tc-fun-text">
            <h4>Good to know</h4>
            <p>This works best on text-based PDFs (reports, contracts, articles). Scanned PDFs are essentially images — text extraction from scans requires OCR, which runs separately.</p>
        </div>
    </div>

    <div className="tc-tips">
        <div className="tc-tip"><h5>Page labels included</h5><p>Each page`s content starts with a [Page N] marker so you can navigate easily.</p></div>
        <div className="tc-tip"><h5>Multi-page support</h5><p>All pages are extracted in order — a 50-page PDF becomes a single .docx.</p></div>
        <div className="tc-tip"><h5>Open in Google Docs</h5><p>Upload the .docx to Google Drive and open with Google Docs — no Word license needed.</p></div>
    </div>
</div>
)

export const metadata = {
  title: "Convert PDF to Word Online | Free & Editable DOCX",
  description: "Extract text from your PDF files and convert them into editable Word documents (.docx). Secure, private, and runs entirely in your browser.",
  keywords: ["pdf to word", "convert pdf to docx", "editable pdf to word", "free pdf text extractor"],
  openGraph: {
    title: "Convert PDF to Word Online | Fully Editable Files",
    description: "Easily turn your PDF documents back into editable Word files without any server-side logs.",
  }
};

const PDFtoWord = () => (
  <ConvertCom
    title="PDF to Word"
    defaultFormat="Word"
    textContent={<TextContent />}
  />
);

export default PDFtoWord;
