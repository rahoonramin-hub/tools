import Link from "next/link";
import { blogs } from "@/blogs/blogs";
import styles from "./blog.module.css"; // 👈 ایمپورت ماژول

export default function BlogPage() {
  return (
    <div className={styles.blogContainer}>
      <header className={styles.blogIdxHeader}>
        <span className="abt-tag">OUR BLOG</span> {/* کلاس عمومی ابوت */}
        <h1 className={styles.blogIdxTitle}>Latest Articles & Guides</h1>
        <p className={styles.blogIdxSub}>Tips and tricks to optimize your digital workflow.</p>
        <div className="abt-hero-line"></div>
      </header>

      <div className={styles.blogGrid}>
        {blogs.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className={styles.blogCard}>
            <span className={styles.blogCardDate}>{post.date}</span>
            <h2 className={styles.blogCardTitle}>{post.title}</h2>
            <p className={styles.blogCardDesc}>{post.description}</p>
            <span className={styles.blogCardMore}>Read Article →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}