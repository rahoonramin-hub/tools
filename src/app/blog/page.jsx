import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/blogs/blogs";
import styles from "./blog.module.css";

export const metadata = {
  title: "Blog",
  description: "Articles about web development, SEO, and design.",
};

export default function BlogPage() {
  return (
    <main className={styles.page}>
      <h1 className={styles.pageTitle}>Blog</h1>
      <p className={styles.pageDesc}>Guides and tips for building better websites.</p>

      <div className={styles.grid}>
        {blogs.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
            {post.coverImage && (
              <div className={styles.cardImgWrap}>
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 600px) 100vw, 400px"
                  className={styles.cardImg}
                />
              </div>
            )}
            <div className={styles.cardBody}>
              {post.tags && (
                <div className={styles.tagRow}>
                  {post.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              )}
              <h2 className={styles.cardTitle}>{post.title}</h2>
              <p className={styles.cardDesc}>{post.description}</p>
              <div className={styles.cardMeta}>
                <span>{post.date}</span>
                {post.readTime && <span>{post.readTime}</span>}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}