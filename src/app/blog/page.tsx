import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Button } from "@/components/ui/button";

export default function BlogIndexPage() {
  const posts = getAllPosts();
  return (
    <main className="max-w-2xl mx-auto py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Blog</h1>
        <Button asChild variant="outline">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
      {posts.length === 0 ? (
        <p className="text-muted-foreground">No blog posts yet.</p>
      ) : (
        <ul className="space-y-8">
          {posts.map((post) => (
            <li key={post.slug} className="border-b pb-4">
              <Link href={`/blog/${post.slug}`} className="text-xl font-semibold hover:underline">
                {post.title}
              </Link>
              <div className="text-xs text-muted-foreground mt-1">{post.date}</div>
              {post.description && <div className="text-sm mt-1">{post.description}</div>}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
} 