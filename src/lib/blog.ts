import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content");

export type BlogPostMeta = {
  title: string;
  date: string;
  description?: string;
  slug: string;
};

export function getAllPosts(): BlogPostMeta[] {
  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".mdx"));
  return files.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return {
      title: data.title || filename,
      date: data.date || "",
      description: data.description || "",
      slug: filename.replace(/\.mdx$/, ""),
    };
  }).sort((a, b) => b.date.localeCompare(a.date));
} 