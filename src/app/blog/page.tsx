import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Button } from "@/components/ui/button";

export default async function BlogIndexPage() {
  const posts = await getAllPosts();
  return (
    <main className="max-w-4xl mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Blog</h1>
        </div>
        <Button asChild variant="outline">
          <Link href="/">← Back to Home</Link>
        </Button>
      </div>

      {posts.length === 0 ? (
        <div className="bg-card border rounded-lg p-8 text-center">
          <p className="text-muted-foreground text-lg">No blog posts yet.</p>
          <p className="text-muted-foreground mt-2">
            Check back soon for new content!
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                {post.url ? (
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold hover:underline flex items-center gap-2 text-foreground"
                  >
                    {post.title}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ) : (
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xl font-semibold hover:underline text-foreground"
                  >
                    {post.title}
                  </Link>
                )}
                <div className="text-sm text-muted-foreground">{post.date}</div>
                {post.description && (
                  <p className="text-muted-foreground leading-relaxed">
                    {post.description}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
