import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const posts = getAllPosts();
  return (
    <main className="space-y-16">
      {/* About Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="text-muted-foreground">[Your about info goes here]</p>
      </section>

      {/* Projects Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <p className="text-muted-foreground">[Project highlights will appear here]</p>
        <Button variant="outline">View All Projects</Button>
      </section>

      {/* Blog Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Blog</h2>
        {posts.length === 0 ? (
          <p className="text-muted-foreground">No blog posts yet.</p>
        ) : (
          <ul className="space-y-6">
            {posts.map((post) => (
              <li key={post.slug} className="border-b pb-4">
                <Link href={`/blog/${post.slug}`} className="text-lg font-medium hover:underline">
                  {post.title}
                </Link>
                <div className="text-xs text-muted-foreground mt-1">{post.date}</div>
                {post.description && <div className="text-sm mt-1">{post.description}</div>}
              </li>
            ))}
          </ul>
        )}
        <Button asChild>
          <Link href="/blog">Read the Blog</Link>
        </Button>
      </section>

      {/* Contact Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-muted-foreground">[Contact form or details will go here]</p>
        <Button variant="secondary">Get in Touch</Button>
      </section>
    </main>
  );
}
