import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import { getPostBySlug, getRelatedPosts, formatDate, getAllPosts } from "@/lib/blog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { HomeHeader } from "@/components/home-header"
import { Footer } from "@/components/footer"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post não encontrado | IPOG",
    }
  }

  return {
    title: `${post.title} | Blog IPOG`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post, 3)

  return (
    <div className="min-h-screen bg-background">
      <HomeHeader />

      <main className="w-full">
        {/* Back Button */}
        <div className="border-b">
          <div className="container mx-auto px-4 py-4">
            <Link href="/blog">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 size-4" />
                Voltar para o blog
              </Button>
            </Link>
          </div>
        </div>

        {/* Article Header */}
        <article>
          <header className="border-b bg-muted/30">
            <div className="container mx-auto px-4 py-12 md:py-16">
              <div className="mx-auto max-w-3xl">
                <Badge className="mb-4">{post.category}</Badge>
                <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl">{post.title}</h1>
                <p className="mb-8 text-pretty text-xl text-muted-foreground">{post.excerpt}</p>

                {/* Author Info */}
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-3">
                    <Image
                      src={post.author.avatar || "/placeholder.svg"}
                      alt={post.author.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-medium">{post.author.name}</div>
                      <div className="text-sm text-muted-foreground">{post.author.role}</div>
                    </div>
                  </div>

                  <Separator orientation="vertical" className="h-12" />

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="size-4" />
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="size-4" />
                      <span>{post.readingTime} min de leitura</span>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="ml-auto bg-transparent">
                    <Share2 className="mr-2 size-4" />
                    Compartilhar
                  </Button>
                </div>
              </div>
            </div>
          </header>

          {/* Cover Image */}
          <div className="border-b">
            <div className="container mx-auto px-4 py-8">
              <div className="relative mx-auto aspect-[21/9] max-w-5xl overflow-hidden rounded-lg">
                <Image
                  src={post.coverImage || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="mx-auto max-w-3xl">
              <div className="prose prose-lg prose-slate max-w-none dark:prose-invert">
                <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br />") }} />
              </div>

              {/* Tags */}
              <div className="mt-12 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Separator className="my-12" />

              {/* Author Bio */}
              <div className="flex gap-4 rounded-lg bg-muted/50 p-6">
                <Image
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div>
                  <h3 className="mb-1 font-bold">{post.author.name}</h3>
                  <p className="text-sm text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="border-t bg-muted/30 py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-5xl">
                <h2 className="mb-8 text-2xl font-bold">Artigos relacionados</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  {relatedPosts.map((relatedPost) => (
                    <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group">
                      <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
                        <div className="relative aspect-[16/9] overflow-hidden">
                          <Image
                            src={relatedPost.coverImage || "/placeholder.svg"}
                            alt={relatedPost.title}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-4">
                          <Badge className="mb-2">{relatedPost.category}</Badge>
                          <h3 className="mb-2 line-clamp-2 text-balance font-bold group-hover:text-primary">
                            {relatedPost.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="size-4" />
                            <span>{relatedPost.readingTime} min</span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
