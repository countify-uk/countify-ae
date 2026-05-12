import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: {
    absolute: "UAE Accounting & Tax Blog | Countify",
  },
  description:
    "Practical UAE accounting, VAT, corporate tax, R&D advisory and company formation guides from Countify's chartered accountants.",
  alternates: {
    canonical: "https://www.countify.ae/blog",
  },
  openGraph: {
    title: "UAE Accounting & Tax Blog | Countify",
    description:
      "Plain-English accounting and tax guides for UAE founders, SMEs and overseas owners.",
    url: "https://www.countify.ae/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "UAE Accounting & Tax Blog | Countify",
    description:
      "Practical UAE accounting and tax guides from Countify.",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a112d] via-[#061640] to-[#0a112d] text-white">
      <section className="container mx-auto px-5 pt-32 pb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#dca958]">
          Countify insights
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
          Practical UAE accounting and tax guides
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 md:text-lg">
          Straightforward notes for founders, finance teams and overseas owners
          who want fewer surprises when dealing with UAE tax, bookkeeping and
          company setup.
        </p>
      </section>

      <section className="container mx-auto grid gap-6 px-5 pb-24 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="flex min-h-[320px] flex-col rounded-xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-[#dca958]/60"
          >
            <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-wider text-white/45">
              <span>{post.category}</span>
              <time dateTime={post.date}>
                {new Intl.DateTimeFormat("en-AE", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                }).format(new Date(post.date))}
              </time>
            </div>
            <h2 className="mt-5 text-2xl font-bold leading-tight">
              <Link href={`/blog/${post.slug}`} className="hover:text-[#dca958]">
                {post.title}
              </Link>
            </h2>
            <p className="mt-4 flex-1 text-sm leading-6 text-white/65">
              {post.excerpt}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#dca958]"
            >
              Read guide
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
