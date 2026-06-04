import ConvertCom from '@/constants/convertCom';

const TextContent =()=>(
    <div className="textContainer">
    <div className="tc-hero">
        <h2>Switch format, keep the image</h2>
        <p>Drop any image — JPG, PNG, or WEBP — and convert it to any other.<br/>No re-upload, no account, no waiting.</p>
    </div>

    <hr className="tc-divider"/>

    <p className="tc-uses-title">Format comparison</p>
    <div className="tc-vs">
        <div className="tc-vs-card">
            <span className="tc-vs-badge badge-png">PNG</span>
            <h4>Lossless quality</h4>
            <div className="tc-vs-row"><span>Compression</span><span className="tc-vs-val">Lossless</span></div>
            <div className="tc-vs-row"><span>Transparency</span><span className="tc-vs-val">✓</span></div>
            <div className="tc-vs-row"><span>File size</span><span className="tc-vs-val">Large</span></div>
            <div className="tc-vs-row"><span>Ideal for</span><span className="tc-vs-val">Logos, UI, art</span></div>
        </div>
        <div className="tc-vs-card">
            <span className="tc-vs-badge badge-jpg">JPG</span>
            <h4>Small & universal</h4>
            <div className="tc-vs-row"><span>Compression</span><span className="tc-vs-val">Lossy</span></div>
            <div className="tc-vs-row"><span>Transparency</span><span className="tc-vs-val">✗</span></div>
            <div className="tc-vs-row"><span>File size</span><span className="tc-vs-val">Small</span></div>
            <div className="tc-vs-row"><span>Ideal for</span><span className="tc-vs-val">Photos, sharing</span></div>
        </div>
    </div>

    <div className="tc-fun">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="var(--highlight)" strokeWidth="1.6" strokeLinejoin="round"/></svg>
        <div className="tc-fun-text">
            <h4>About WEBP</h4>
            <p>WEBP combines the best of both worlds — lossless like PNG and small like JPG. It also supports transparency and animation. The only catch is compatibility with older software.</p>
        </div>
    </div>

    <div className="tc-tips">
        <div className="tc-tip"><h5>PNG → JPG</h5><p>Best for photos where you want to reduce file size for upload or email.</p></div>
        <div className="tc-tip"><h5>JPG → PNG</h5><p>Useful when editing — PNG wont add extra compression artifacts on re-save.</p></div>
        <div className="tc-tip"><h5>Any → WEBP</h5><p>Convert before uploading to your website to improve loading speed.</p></div>
    </div>
</div>
)

export const metadata = {
  title: "Online Image Format Converter | JPG, PNG, WEBP, SVG",
  description: "Convert between any image formats effortlessly. Keep your original photo quality with our 100% private, browser-based converter tool.",
  keywords: ["image to image", "change image format", "bulk image converter", "free photo format changer"],
  openGraph: {
    title: "Online Image Format Converter | All Formats",
    description: "The easiest way to switch between JPG, PNG, WEBP, and more without losing quality.",
  }
};

const IMGtoIMG = () => (
  <ConvertCom
    title="any image to another format"
    defaultFormat="png"
    textContent={<TextContent />}
  />
);

export default IMGtoIMG;
