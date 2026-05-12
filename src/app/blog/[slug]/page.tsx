import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { blogPosts, getBlogPost } from "@/data/blogPosts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog post not found | Countify",
      description: "The requested Countify blog post could not be found.",
    };
  }

  return {
    title: {
      absolute: post.metaTitle,
    },
    description: post.metaDescription,
    alternates: {
      canonical: `https://www.countify.ae/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://www.countify.ae/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  return (
    <article className="min-h-screen bg-white text-gray-900">
      <header className="bg-gradient-to-b from-[#0a112d] via-[#061640] to-[#0a112d] text-white">
        <div className="container mx-auto px-5 pt-32 pb-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#dca958]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider text-white/50">
            <span>{post.category}</span>
            <span aria-hidden="true">/</span>
            <time dateTime={post.date}>
              {new Intl.DateTimeFormat("en-AE", {
                month: "long",
                day: "numeric",
                year: "numeric",
              }).format(new Date(post.date))}
            </time>
            <span aria-hidden="true">/</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            {post.excerpt}
          </p>
        </div>
      </header>

      <div className="container mx-auto max-w-4xl px-5 py-14">
        {post.sections.map((section) => (
          <section key={section.heading} className="mb-12">
            <h2 className="text-2xl font-bold text-[#0a112d]">
              {section.heading}
            </h2>
            <div className="mt-5 space-y-5">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-8 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
        <div className="mt-16 rounded-xl bg-[#0a112d] p-8 text-white">
          <h2 className="text-2xl font-bold">Need a second pair of eyes?</h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Countify helps UAE businesses keep their accounts, tax filings and
            compliance work clear from the start.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-[#dca958] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white"
          >
            Talk to Countify
          </Link>
        </div>
      </div>
    </article>
  );
}
