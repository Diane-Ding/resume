import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Button } from "@/components/ui/button";

export default async function BlogIndexPage() {
  const posts = await getAllPosts();
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
              {post.url ? (
                <a 
                  href={post.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl font-semibold hover:underline flex items-center gap-2"
                >
                  {post.title}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ) : (
                <Link href={`/blog/${post.slug}`} className="text-xl font-semibold hover:underline">
                  {post.title}
                </Link>
              )}
              <div className="text-xs text-muted-foreground mt-1">{post.date}</div>
              {post.description && <div className="text-sm mt-1">{post.description}</div>}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
} 