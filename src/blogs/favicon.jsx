import styles from "./favicon.module.css";
import Image from "next/image";

const Header = () => (
  <div className={styles.blogPostHeader}>
    <h1>The best favicon size and formats for all platforms</h1>
    <Image className={styles.blogPostHeaderIMG} alt='favicon sizes' src='/faviconExample.png' width={230} height={50}></Image>
  </div>
);

const PrimaryCard = () => (
  <div className={[styles.blogPostCard, styles.primary].join(' ')}>
    <h2>Step by Step</h2>
    <p>A favicon helps users identify your website among dozens of open tabs...</p>
  </div>
);

const SecondaryCard = () => (
  <div className={[styles.blogPostCard, styles.secondary].join(' ')}>
    <h3>In Future</h3>
    <p>Modern browsers now support SVG favicons for dark and light mode themes...</p>
  </div>
);

const Favicon = () => (
  <div className={styles.blogPostContent}>
    <Header />
    <PrimaryCard />
    <SecondaryCard />
    <PrimaryCard />
  </div>
);

export default Favicon;