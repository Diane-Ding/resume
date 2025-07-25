import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "src/content");
  const files = (await fs.readdir(postsDir)).filter((f) => f.endsWith(".mdx"));
  return files.map((filename) => ({ slug: filename.replace(/\.mdx$/, "") }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Page(props: any) {
  const { params } = props;
  const postPath = path.join(process.cwd(), "src/content", `${params.slug}.mdx`);
  try {
    const source = await fs.readFile(postPath, "utf8");
    const { content, data } = matter(source);
    return (
      <article className="prose prose-neutral max-w-none mx-auto">
        <h1>{data.title}</h1>
        <div className="text-sm text-muted-foreground mb-6">{data.date}</div>
        <MDXRemote source={content} />
      </article>
    );
  } catch {
    return notFound();
  }
} 