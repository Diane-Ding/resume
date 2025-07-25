import "./globals.css";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import siteConfig from "@/site.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <body className={cn(inter.className, "bg-background text-foreground min-h-screen")}> 
        <div className="max-w-3xl mx-auto px-4 py-8">
          {/* Header */}
          <header className="mb-12 flex flex-col items-center">
            <div className="rounded-full bg-neutral-200 w-24 h-24 flex items-center justify-center text-4xl font-bold mb-4">
              {/* Avatar or Logo Placeholder */}
              {/* You can add an image or initials here later */}
            </div>
            <h1 className="text-3xl font-bold tracking-tight">{siteConfig.author}</h1>
            <p className="text-muted-foreground mt-2">{siteConfig.tagline}</p>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
