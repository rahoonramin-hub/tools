import ConvertCom from '@/constants/convertCom';

const TextContent = ()=>(
<div className="textContainer">
    <div className="tc-hero">
        <h2>Shrink your PNG without losing the image</h2>
        <p>PNG files can be 5× larger than an equivalent JPG for photos.<br/>If you don`t need transparency, switch and save the space.</p>
    </div>

    <div className="tc-vs">
        <div className="tc-vs-card">
            <span className="tc-vs-badge badge-png">PNG</span>
            <h4>Before</h4>
            <div className="tc-vs-row"><span>Compression</span><span className="tc-vs-val">Lossless</span></div>
            <div className="tc-vs-row"><span>Transparency</span><span className="tc-vs-val">✓ Yes</span></div>
            <div className="tc-vs-row"><span>Typical size</span><span className="tc-vs-val">~2–5 MB</span></div>
            <div className="tc-vs-row"><span>Best for</span><span className="tc-vs-val">Logos, UI</span></div>
        </div>
        <div className="tc-vs-card">
            <span className="tc-vs-badge badge-jpg">JPG</span>
            <h4>After</h4>
            <div className="tc-vs-row"><span>Compression</span><span className="tc-vs-val">Lossy</span></div>
            <div className="tc-vs-row"><span>Transparency</span><span className="tc-vs-val">✗ Filled white</span></div>
            <div className="tc-vs-row"><span>Typical size</span><span className="tc-vs-val">~200–500 KB</span></div>
            <div className="tc-vs-row"><span>Best for</span><span className="tc-vs-val">Photos, sharing</span></div>
        </div>
    </div>

    <hr className="tc-divider"/>

    <p className="tc-uses-title">When this makes sense</p>
    <div className="tc-uses">
        <div className="tc-use">
            <div className="tc-use-icon bg-teal">📸</div>
            <div><h4>Photo from a screenshot tool</h4><p>Screenshot apps often save as PNG by default. Switch to JPG before uploading to social media.</p></div>
        </div>
        <div className="tc-use">
            <div className="tc-use-icon bg-amber">📤</div>
            <div><h4>Upload size limits</h4><p>Many platforms cap uploads at 1–2 MB. JPG usually gets you under the limit easily.</p></div>
        </div>
        <div className="tc-use">
            <div className="tc-use-icon bg-blue">🌐</div>
            <div><h4>Website images</h4><p>For photos on a webpage, JPG loads faster and costs less bandwidth.</p></div>
        </div>
        <div className="tc-use">
            <div className="tc-use-icon bg-purple">📱</div>
            <div><h4>Sending on mobile</h4><p>Smaller files send faster on mobile data and take less storage on the recipient`s phone.</p></div>
        </div>
    </div>

    <div className="tc-fun">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke="var(--highlight)" strokeWidth="1.6"/><path d="M12 7v5l3 3" stroke="var(--highlight)" strokeWidth="1.6" strokeLinecap="round"/></svg>
        <div className="tc-fun-text">
            <h4>Heads up</h4>
            <p>Transparent areas in your PNG will be filled with white in the JPG, since JPG doesn`t support transparency. If your image has a transparent background, consider PNG → WEBP instead.</p>
        </div>
    </div>

    <div className="tc-tips">
        <div className="tc-tip"><h5>For photos: always JPG</h5><p>Real-world photos with millions of colors compress much better as JPG.</p></div>
        <div className="tc-tip"><h5>For logos: keep PNG</h5><p>If the image has text, hard edges, or transparency, PNG stays sharper.</p></div>
        <div className="tc-tip"><h5>No visible difference</h5><p>At quality 90+, JPG and PNG look identical to the human eye.</p></div>
    </div>
</div>
)

export const metadata = {
  title: "Convert PNG to JPG Online | Maintain High Image Quality",
  description: "Change PNG files to JPG format instantly in your browser. Free, secure, and fast image conversion with no software installation needed.",
  keywords: ["png to jpg", "convert png to jpg", "png to jpeg online", "image quality converter"],
  openGraph: {
    title: "Convert PNG to JPG Online | High Quality Preservation",
    description: "Convert transparent or heavy PNGs to lightweight JPG files instantly.",
  }
};

const PNGtoJPG = () => (
  <ConvertCom
    title="PNG to JPG"
    defaultFormat="jpg"
    textContent={<TextContent />}
  />
);

export default PNGtoJPG;
