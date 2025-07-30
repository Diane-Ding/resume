import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MailIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import siteConfig from "@/site.config";

export default async function Home() {
  const posts = await getAllPosts();
  const recentPosts = posts.slice(0, 3); // Show only 3 most recent posts

  return (
    <main className="space-y-16">
      {/* About Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">About</h2>
          <Button asChild variant="outline" size="sm">
            <a href={`/${siteConfig.resume.filename}`} download>
              {siteConfig.resume.label}
            </a>
          </Button>
        </div>
        <div className="bg-card border rounded-lg p-6 shadow-sm">
          <p className="text-muted-foreground leading-relaxed mb-4">
            👩🏻‍💻 Software engineer @ Remitly, passionate about building impactful
            technology solutions.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-2">
            When I'm not coding, you'll find me:
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-muted text-foreground px-3 py-1 rounded-full text-sm">
              ✍️ Journaling my thoughts
            </span>
            <span className="bg-muted text-foreground px-3 py-1 rounded-full text-sm">
              📺 Catching up on my favorite TV shows
            </span>
            <span className="bg-muted text-foreground px-3 py-1 rounded-full text-sm">
              🍜 Eating my favorite foods
            </span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <div className="bg-card border rounded-lg p-6 shadow-sm space-y-4">
          <p className="text-muted-foreground">
            I'd love to connect — feel free to reach out through any of the
            platforms below:
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/Diane-Ding"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-accent text-sm transition"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/diane-ding-568085227/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-accent text-sm transition"
            >
              <LinkedinIcon className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="mailto:diane7ding@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-accent text-sm transition"
            >
              <MailIcon className="w-4 h-4" />
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <p className="text-muted-foreground">[Project highlights will appear here]</p>
        <Button variant="outline">View All Projects</Button>
      </section> */}

      {/* Blog Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Blog</h2>
        {recentPosts.length === 0 ? (
          <p className="text-muted-foreground">No blog posts yet.</p>
        ) : (
          <ul className="space-y-6">
            {recentPosts.map((post) => (
              <li key={post.slug} className="border-b pb-4">
                {post.url ? (
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium hover:underline flex items-center gap-2"
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
                    className="text-lg font-medium hover:underline"
                  >
                    {post.title}
                  </Link>
                )}
                <div className="text-xs text-muted-foreground mt-1">
                  {post.date}
                </div>
                {post.description && (
                  <div className="text-sm mt-1">{post.description}</div>
                )}
              </li>
            ))}
          </ul>
        )}
        <Button asChild>
          <Link href="/blog">Read More Blogs</Link>
        </Button>
      </section>
    </main>
  );
}
