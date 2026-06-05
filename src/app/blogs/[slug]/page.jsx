import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const contentDirectory = path.join(process.cwd(), "content");
  const filePath = path.join(contentDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return (
      <main style={styles.container}>
        <h2 style={{ color: "#FFF" }}>Post not found</h2>
        <Link href="/blogs" style={styles.backLink}>← Back to blogs</Link>
      </main>
    );
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return (
    <main style={styles.container}>
      <Link href="/blogs" style={styles.backLink}>← Back to all posts</Link>
      <article style={styles.article}>
        {data.img && <img src={data.img} alt={data.title} style={styles.banner} />}
        <h1 style={styles.title}>{data.title}</h1>
        {data.date && <p style={styles.date}>Published on {data.date}</p>}
        <hr style={styles.divider} />
        <div style={styles.body}>
          <MDXRemote source={content} />
        </div>
      </article>
    </main>
  );
}

const styles = {
  container: {
    padding: "6rem 2rem 4rem 2rem",
    backgroundColor: "#121212",
    minHeight: "100vh",
    color: "#E2E8F0",
    fontFamily: "sans-serif",
  },
  backLink: {
    color: "#38BDF8",
    textDecoration: "none",
    display: "inline-block",
    marginBottom: "1.5rem",
  },
  article: {
    maxWidth: "700px",
    margin: "0 auto",
  },
  banner: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "2rem",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: "0.5rem",
    lineHeight: "1.2",
  },
  date: {
    color: "#64748B",
    fontSize: "0.9rem",
  },
  divider: {
    border: "0",
    height: "1px",
    background: "#2A2D30",
    margin: "2rem 0",
  },
  body: {
    lineHeight: "1.8",
    fontSize: "1.1rem",
    color: "#CBD5E1",
  },
};