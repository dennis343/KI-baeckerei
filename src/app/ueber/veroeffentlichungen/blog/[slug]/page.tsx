import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { buildMetadata, blogPostingJsonLd } from "@/lib/metadata";
import { getBlogPost, getAllSlugs } from "@/lib/blog-posts";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/ui/JsonLd";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/ueber/veroeffentlichungen/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={blogPostingJsonLd({
          title: post.title,
          excerpt: post.excerpt,
          slug: post.slug,
          publishedAt: post.publishedAt,
          author: post.author,
        })}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Über WissensReich", href: "/ueber" },
          { name: "Veröffentlichungen", href: "/ueber/veroeffentlichungen" },
          {
            name: post.title,
            href: `/ueber/veroeffentlichungen/blog/${post.slug}`,
          },
        ]}
      />

      <Section aria-labelledby="article-title">
        <div className="mx-auto max-w-readable">
          <Link
            href="/ueber/veroeffentlichungen#blog"
            className="mb-8 inline-flex items-center gap-1.5 rounded text-sm font-medium text-brand-600 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Zurück zu den Veröffentlichungen
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-sm text-ink-500">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("de-DE", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {post.readingTime}
            </span>
            <span className="text-ink-400">·</span>
            <span>{post.author}</span>
          </div>

          <h1
            id="article-title"
            className="mt-4 font-display text-display-md text-ink-900"
          >
            {post.title}
          </h1>

          <p className="mt-4 text-lead text-ink-500">{post.excerpt}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-full border border-brand-100 bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700"
              >
                <Tag className="h-3 w-3" aria-hidden="true" />
                {tag}
              </span>
            ))}
          </div>

          <hr className="my-8 border-line" />

          <div className="prose-article">
            {post.content.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="mb-4 mt-10 font-display text-display-sm text-ink-900"
                  >
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              if (block.startsWith("### ")) {
                return (
                  <h3
                    key={i}
                    className="mb-3 mt-8 font-sans text-lg font-semibold text-ink-900"
                  >
                    {block.replace("### ", "")}
                  </h3>
                );
              }
              if (block.startsWith("- ")) {
                const items = block.split("\n").filter((l) => l.startsWith("- "));
                return (
                  <ul
                    key={i}
                    className="mb-4 list-disc space-y-1.5 pl-6 text-[15px] leading-relaxed text-ink-700"
                  >
                    {items.map((item, j) => (
                      <li key={j}>{item.replace(/^- \*\*(.+?)\*\* — /, "$1 — ").replace("- ", "")}</li>
                    ))}
                  </ul>
                );
              }
              if (/^\d+\. /.test(block)) {
                const items = block.split("\n").filter((l) => /^\d+\. /.test(l));
                return (
                  <ol
                    key={i}
                    className="mb-4 list-decimal space-y-1.5 pl-6 text-[15px] leading-relaxed text-ink-700"
                  >
                    {items.map((item, j) => (
                      <li key={j}>
                        {item.replace(/^\d+\. \*\*(.+?)\*\* — /, "$1 — ").replace(/^\d+\. /, "")}
                      </li>
                    ))}
                  </ol>
                );
              }
              return (
                <p
                  key={i}
                  className="mb-4 text-[15px] leading-relaxed text-ink-700"
                >
                  {block}
                </p>
              );
            })}
          </div>

          <hr className="my-10 border-line" />

          <Link
            href="/ueber/veroeffentlichungen#blog"
            className="inline-flex items-center gap-1.5 rounded text-sm font-medium text-brand-600 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Alle Veröffentlichungen
          </Link>
        </div>
      </Section>
    </>
  );
}
