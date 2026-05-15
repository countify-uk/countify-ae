import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/data/blogPosts";
import BlogPostArticle from "./BlogPostArticle";

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
    <>
      <Script
        id={`schema-blog-${post.slug}`}
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metaTitle,
            description: post.metaDescription,
            datePublished: post.date,
            dateModified: post.date,
            url: `https://www.countify.ae/blog/${post.slug}`,
            image: post.image
              ? `https://www.countify.ae${post.image}`
              : "https://www.countify.ae/images/countify-og.webp",
            author: {
              "@type": "Person",
              name: post.author || "Countify UAE",
              url: "https://www.countify.ae/team",
            },
            publisher: {
              "@type": "Organization",
              name: "Countify UAE",
              logo: {
                "@type": "ImageObject",
                url: "https://www.countify.ae/images/countify-logo-light.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://www.countify.ae/blog/${post.slug}`,
            },
          }),
        }}
      />
      <BlogPostArticle post={post} />
    </>
  );
}
