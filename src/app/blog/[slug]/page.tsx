import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "src/content");
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx"));
  return files.map((filename) => ({ slug: filename.replace(/\.mdx$/, "") }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const postPath = path.join(process.cwd(), "src/content", `${params.slug}.mdx`);
  if (!fs.existsSync(postPath)) return notFound();
  const source = fs.readFileSync(postPath, "utf8");
  const { content, data } = matter(source);
  return (
    <article className="prose prose-neutral max-w-none mx-auto">
      <h1>{data.title}</h1>
      <div className="text-sm text-muted-foreground mb-6">{data.date}</div>
      <MDXRemote source={content} />
    </article>
  );
} 