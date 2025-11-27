import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getAllPosts, type BlogPost } from "@/lib/blog"

interface LatestBlogPostsProps {
  titulo?: string
  descricao?: string
  quantidade?: number
}

export function LatestBlogPosts({
  titulo = "Últimas do Blog IPOG",
  descricao = "Insights, tendências e conhecimento para impulsionar sua carreira",
  quantidade = 4,
}: LatestBlogPostsProps) {
  const posts = getAllPosts().slice(0, quantidade)

  if (posts.length === 0) return null

  return (
    <section className="w-full py-12 md:py-16 bg-muted/30">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">{titulo}</h2>
            <p className="text-muted-foreground text-base md:text-lg">{descricao}</p>
          </div>
          <Button variant="outline" asChild className="w-fit bg-transparent">
            <Link href="/blog" className="flex items-center gap-2">
              Ver todos os artigos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg border-border">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.coverImage || "/placeholder.svg?height=300&width=500&query=blog article"}
            alt={post.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <CardContent className="p-4 md:p-5">
          <Badge variant="secondary" className="mb-3 text-xs">
            {post.category}
          </Badge>
          <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{post.excerpt}</p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Image
                src={post.author.avatar || "/placeholder.svg?height=24&width=24&query=avatar"}
                alt={post.author.name}
                width={20}
                height={20}
                className="rounded-full"
              />
              <span className="truncate max-w-[100px]">{post.author.name}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{post.readingTime} min</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
