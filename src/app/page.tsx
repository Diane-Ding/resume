import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MailIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import siteConfig from "@/site.config";
import { Timeline } from "@/components/ui/timeline";

export default async function Home() {
  return (
    <main className="space-y-16">
      {/* About Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">About</h2>
          <Button
            asChild
            size="sm"
            className="bg-black text-white hover:bg-gray-800"
          >
            <a
              href={`/${siteConfig.resume.filename}`}
              download={siteConfig.resume.filename}
            >
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
            When I&apos;m not coding, you&apos;ll find me:
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
            I&apos;d love to connect — feel free to reach out through any of the
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

      {/* Work Experience Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Work Experience</h2>
        <div className="bg-card border rounded-lg p-6 shadow-sm">
          <Timeline items={siteConfig.workExperience} />
        </div>
      </section>

      {/* Projects Section
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <p className="text-muted-foreground">[Project highlights will appear here]</p>
        <Button variant="outline">View All Projects</Button>
      </section> */}

      {/* Blog Section */}
      <div className="flex items-center justify-between gap-8 bg-card border rounded-lg p-6 shadow-sm">
        <div>
          <p className="text-muted-foreground text-sm">
            👀 Here are some reflections on my personal life. Take a quick look
            if you&apos;re interested!
          </p>
        </div>
        <Button asChild className="bg-black text-white hover:bg-gray-800">
          <Link href="/blog">Read My Blog</Link>
        </Button>
      </div>
    </main>
  );
}
