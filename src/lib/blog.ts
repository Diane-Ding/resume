import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { posts } from "./posts";

const postsDirectory = path.join(process.cwd(), "src/content");

export type BlogPost = {
  title: string;
  date: string;
  description?: string;
  slug: string;
  url?: string; // If provided, post links to external URL. If not, renders markdown content
};

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const files = (await fs.readdir(postsDirectory)).filter((f) => f.endsWith(".mdx"));
    const localPosts = files.map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      return fs.readFile(filePath, "utf8").then((fileContents) => {
        const { data } = matter(fileContents);
        return {
          title: data.title || filename,
          date: data.date || "",
          description: data.description || "",
          slug: filename.replace(/\.mdx$/, ""),
          // No URL means it's a local markdown post
        };
      });
    });

    const resolvedLocalPosts = await Promise.all(localPosts);
    const allPosts = [...resolvedLocalPosts, ...posts];
    
    return allPosts.sort((a, b) => b.date.localeCompare(a.date));
  } catch (error) {
    // If content directory doesn't exist, return only external posts
    console.error(error);
    return posts.sort((a, b) => b.date.localeCompare(a.date));
  }
}

export async function getLocalPosts(): Promise<BlogPost[]> {
  try {
    const files = (await fs.readdir(postsDirectory)).filter((f) => f.endsWith(".mdx"));
    const localPosts = files.map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      return fs.readFile(filePath, "utf8").then((fileContents) => {
        const { data } = matter(fileContents);
        return {
          title: data.title || filename,
          date: data.date || "",
          description: data.description || "",
          slug: filename.replace(/\.mdx$/, ""),
        };
      });
    });

    const resolvedLocalPosts = await Promise.all(localPosts);
    return resolvedLocalPosts.sort((a, b) => b.date.localeCompare(a.date));
  } catch (error) {
    console.error(error);
    return [];
  }
}

export function getPosts(): BlogPost[] {
  return posts.sort((a, b) => b.date.localeCompare(a.date));
} 