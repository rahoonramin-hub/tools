"use client"

import Image from 'next/image'
import styles from './favicon.module.css'

const platformCards = [
  {
    label: 'Desktop Browsers',
    desc: 'Tab icons, bookmarks, and Windows shortcuts',
    sizes: ['16×16', '32×32', '48×48', '.ico'],
    iconBg: '#e0e7ff',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width={32} height={32}>
        <rect x="2" y="5" width="28" height="20" rx="3" fill="#c7d2fe"/>
        <rect x="2" y="5" width="28" height="5" rx="1" fill="#818cf8"/>
        <circle cx="6" cy="7.5" r="1" fill="#fff"/>
        <circle cx="10" cy="7.5" r="1" fill="#fff"/>
        <circle cx="14" cy="7.5" r="1" fill="#fff"/>
        <rect x="6" y="14" width="20" height="2" rx="1" fill="#818cf8" opacity=".4"/>
        <rect x="6" y="18" width="14" height="2" rx="1" fill="#818cf8" opacity=".3"/>
      </svg>
    ),
  },
  {
    label: 'Apple iOS',
    desc: 'Home screen icons for iPhone and iPad',
    sizes: ['180×180'],
    iconBg: '#d1fae5',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width={32} height={32}>
        <rect x="8" y="2" width="16" height="28" rx="4" fill="#a7f3d0"/>
        <rect x="10" y="5" width="12" height="17" rx="2" fill="#34d399" opacity=".5"/>
        <rect x="13" y="24" width="6" height="2" rx="1" fill="#059669"/>
      </svg>
    ),
  },
  {
    label: 'Android & PWA',
    desc: 'Home screen icons and PWA splash screens',
    sizes: ['192×192', '512×512'],
    iconBg: '#fef3c7',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width={32} height={32}>
        <rect x="9" y="2" width="14" height="28" rx="3" fill="#fde68a"/>
        <rect x="11" y="5" width="10" height="18" rx="1.5" fill="#f59e0b" opacity=".5"/>
        <rect x="13.5" y="25" width="5" height="1.5" rx=".75" fill="#d97706"/>
        <circle cx="16" cy="4" r="1" fill="#d97706"/>
      </svg>
    ),
  },
]

const PlatformCard = ({ label, desc, sizes, iconBg, icon }) => (
  <div className={styles.secCard}>
    <div className={styles.cardIcon} style={{ background: iconBg }}>
      {icon}
    </div>
    <div className={styles.cardLabel}>{label}</div>
    <p className={styles.cardDesc}>{desc}</p>
    <div className={styles.cardSizes}>
      {sizes.map(s => <span key={s} className={styles.szPill}>{s}</span>)}
    </div>
  </div>
)

const HTML_CODE = `<!-- Desktop Browsers -->
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">

<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">

<!-- Android & PWA -->
<link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png">
<link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png">

<!-- Fallback ICO -->
<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">`

export default function Favicon() {
  return (
    <div className={styles.pageWrapper}>
      <main className={styles.main}>

        {/* Hero */}
        <section className={styles.section} id="intro">
          <h1 className={styles.heroTitle}>
            Favicon Sizes for All Platforms — Complete 2024 Guide
          </h1>
          <p className={styles.heroSub}>
            Everything you need to set up favicons correctly for browsers, iOS,
            Android, and PWAs — with copy-ready HTML tags.
          </p>
          <div className={styles.ctaBar}>
            <a href="#html-code" className={`${styles.ctaBtn} ${styles.ctaBtnPrimary}`}>
              Jump to HTML Code
            </a>
            <a href="#sizes-table" className={styles.ctaBtn}>
              See All Sizes
            </a>
          </div>
          <div className={styles.heroImgWrap}>
            <Image
              src="/favicon-sizes.png"
              alt="Complete favicon sizes reference chart — all required dimensions for browsers, iOS, Android and PWA"
              width={800}
              height={500}
              className={styles.heroImg}
              priority
              quality={90}
            />
          </div>
        </section>

        {/* Steps */}
        <section className={styles.section} id="steps">
          <h2 className={styles.sectionHeading}>How to Create and Add Favicons</h2>
          <ol className={styles.stepList}>
            {[
              { title: 'Choose the right favicon sizes', desc: 'Different devices and browsers need different icon dimensions — from 16×16 for browser tabs to 512×512 for PWA splash screens.' },
              { title: 'Export your logo in all required dimensions', desc: 'Use a design tool or favicon generator to export PNGs at 16, 32, 48, 180, 192, and 512 pixels. Always export from a vector source.' },
              { title: 'Add favicon tags to your HTML <head>', desc: 'Place your favicon files in the root of your project, then paste the HTML snippet below into every page\'s <head> tag.' },
            ].map((step, i) => (
              <li key={i} className={styles.stepItem}>
                <span className={styles.stepNum}>{i + 1}</span>
                <div>
                  <div className={styles.stepTitle}>{step.title}</div>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Platform Cards */}
        <section className={styles.section} id="platforms">
          <h2 className={styles.sectionHeading}>Favicons by Platform</h2>
          <div className={styles.secondaryCardParent}>
            {platformCards.map(card => (
              <PlatformCard key={card.label} {...card} />
            ))}
          </div>
        </section>

        {/* Sizes Table */}
        <section className={styles.section} id="sizes-table">
          <h2 className={styles.sectionHeading}>All Required Favicon Sizes</h2>
          <table className={styles.sizeTable}>
            <thead>
              <tr>
                <th>Size</th><th>File name</th><th>Platform</th><th>Use</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['16×16','favicon-16x16.png','Browser','Tab icon'],
                ['32×32','favicon-32x32.png','Browser','Bookmark, taskbar'],
                ['48×48','favicon-48x48.png','Browser','Windows shortcut'],
                ['180×180','apple-touch-icon.png','Apple','iOS home screen'],
                ['192×192','android-chrome-192x192.png','Android','Home screen'],
                ['512×512','android-chrome-512x512.png','PWA','Splash screen'],
                ['any','favicon.ico','Browser','Fallback (old browsers)'],
              ].map(([size, file, platform, use]) => (
                <tr key={size}>
                  <td>{size}</td>
                  <td><code className={styles.code}>{file}</code></td>
                  <td><span className={`${styles.badge} ${styles[`badge${platform.replace(' ','')}`]}`}>{platform}</span></td>
                  <td>{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* HTML Code */}
        <section className={styles.section} id="html-code">
          <h2 className={styles.sectionHeading}>HTML Code — Copy &amp; Paste</h2>
          <div className={styles.codeWrap}>
            <div className={styles.codeHeader}>
              <span className={styles.codeLang}>html</span>
              <button
                className={styles.copyBtn}
                onClick={() => navigator.clipboard.writeText(HTML_CODE)}
              >
                Copy
              </button>
            </div>
            <pre className={styles.pre}><code>{HTML_CODE}</code></pre>
          </div>
        </section>

        {/* Why */}
        <section className={styles.section} id="why">
          <h2 className={styles.sectionHeading}>Why Multiple Favicon Sizes Matter for SEO</h2>
          <div className={styles.whyBox}>
            Using all favicon sizes ensures your site icon appears correctly in browser tabs,
            bookmarks, Windows shortcuts, iOS and Android home screens, and Google search results.
            A missing or blurry favicon reduces user trust, increases bounce rate, and indirectly
            harms SEO performance.
          </div>
          <p className={styles.bodyText}>
            Google does not use favicons as a direct ranking factor, but they appear next to your
            site name in mobile search results. A clear, recognizable favicon improves brand recall
            and click-through rates.
          </p>
        </section>

      </main>

      {/* Sticky TOC */}
      <aside className={styles.tocCol}>
        <nav className={styles.toc} aria-label="Table of contents">
          <div className={styles.tocTitle}>On this page</div>
          {[
            ['#intro', 'Overview'],
            ['#steps', 'Step-by-step guide'],
            ['#platforms', 'By platform'],
            ['#sizes-table', 'All sizes'],
            ['#html-code', 'HTML code'],
            ['#why', 'Why it matters'],
          ].map(([href, label]) => (
            <a key={href} href={href} className={styles.tocLink}>{label}</a>
          ))}
        </nav>
      </aside>
    </div>
  )
}