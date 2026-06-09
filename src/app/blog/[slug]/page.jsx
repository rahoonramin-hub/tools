import { notFound } from "next/navigation";
import { blogs } from "@/blogs/blogs";
import Link from "next/link";
import styles from "./post.module.css"; 

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);
  if (!post) return {};
  return { title: `${post.title} | Blog`, description: post.description };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) notFound();

  const BlogPostComponent = post.component;

  return (
    <div className={styles.blogPostContainer}>
      <Link href="/blog" className={styles.blogBackBtn}>
        ← Back to all articles
      </Link>
      
      <article className={styles.blogArticleWrapper}>
        <BlogPostComponent />
      </article>
    </div>
  );
}