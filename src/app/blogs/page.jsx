import React from "react";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
async function getBlogPosts() {
  const contentDirectory = path.join(process.cwd(), "content");
  if (!fs.existsSync(contentDirectory)) return [];

  const files = fs.readdirSync(contentDirectory);
  const posts = files
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(contentDirectory, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);
      return {
        slug: filename.replace(/\.mdx$|\.md$/, ""),
        title: data.title || "Untitled Post",
        desc: data.desc || "",
        img: data.img || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
        date: data.date || "",
      };
    });
  return posts;
}

export default async function BlogsPage() {
  const posts = await getBlogPosts();

  return (
    <main style={styles.container}>
      <Navbar />
      <h1 style={styles.heading}>Blogs</h1>
      {posts.length === 0 && <p style={{ color: "#94A3B8" }}>No posts found.</p>}
      <div className="grid" style={styles.grid}>
        {posts.map((post) => (
          <article key={post.slug} style={styles.card}>
            <div style={styles.imageWrap}>
              <img src={post.img} alt={post.title} style={styles.image} />
            </div>
            <div style={styles.content}>
              <p style={styles.date}>{post.date}</p>
              <h2 style={styles.title}>{post.title}</h2>
              <p style={styles.desc}>{post.desc}</p>
              <Link href={`/blogs/${post.slug}`} style={styles.readMore}>
                read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
      <Footer />
    </main>
    
  );
}

const styles = {
  container: {
    padding: "6rem 2rem 4rem 2rem",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    color: "#F8FAFC",
    backgroundColor: "#121212",
    minHeight: "100vh",
  },
  heading: {
    margin: "0 0 2.5rem 0",
    fontSize: "2.5rem",
    fontWeight: "bold",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1.5rem",
    // Responsive via CSS media queries below
  },
  card: {
    border: "1px solid #2A2D30",
    borderRadius: "12px",
    overflow: "hidden",
    background: "#1A1C1E",
    display: "flex",
    flexDirection: "column",
    transition: "border-color 0.2s ease",
    marginBottom: "1.5rem",
  },
  imageWrap: {
    width: "100%",
    height: "200px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  content: {
    padding: "1.25rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    flexGrow: 1,
  },
  date: {
    margin: 0,
    color: "#64748B",
    fontSize: "0.8rem",
  },
  title: {
    margin: 0,
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#FFF",
    lineHeight: "1.4",
  },
  desc: {
    margin: 0,
    color: "#94A3B8",
    fontSize: "0.9rem",
    lineHeight: "1.6",
    flexGrow: 1,
  },
  readMore: {
    color: "#38BDF8",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "0.9rem",
    marginTop: "0.5rem",
  },
 
};