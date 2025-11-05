import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Search, Clock } from "lucide-react"
import { getAllPosts, getFeaturedPosts, blogCategories } from "@/lib/blog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { HomeHeader } from "@/components/home-header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Blog | IPOG",
  description: "Insights, tendências e conhecimento sobre educação, carreira e inovação no ensino superior.",
}

export default function BlogPage() {
  const allPosts = getAllPosts()
  const featuredPosts = getFeaturedPosts()
  const mainFeatured = featuredPosts[0]
  const secondaryFeatured = featuredPosts.slice(1, 3)
  const regularPosts = allPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-background">
      {/* HomeHeader */}
      <HomeHeader />

      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full border-b bg-muted/30">
          <div className="max-w-screen-xl mx-auto px-4 py-12 md:py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Blog IPOG</h1>
              <p className="mt-6 text-pretty text-lg text-muted-foreground md:text-xl">
                Insights, tendências e conhecimento sobre educação, carreira e inovação no ensino superior
              </p>

              {/* Search Bar */}
              <div className="mt-8 flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
                  <Input type="search" placeholder="Buscar artigos..." className="pl-10" />
                </div>
                <Button>Buscar</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {mainFeatured && (
          <section className="w-full border-b bg-background">
            <div className="max-w-screen-xl mx-auto px-4 py-8 md:py-12">
              <h2 className="mb-6 md:mb-8 text-2xl font-bold">Destaques</h2>

              <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
                {/* Main Featured */}
                <Link href={`/blog/${mainFeatured.slug}`} className="group">
                  <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={mainFeatured.coverImage || "/placeholder.svg"}
                        alt={mainFeatured.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge className="mb-3">{mainFeatured.category}</Badge>
                      <h3 className="mb-3 text-balance text-2xl font-bold group-hover:text-primary">
                        {mainFeatured.title}
                      </h3>
                      <p className="mb-4 text-pretty text-muted-foreground">{mainFeatured.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Image
                            src={mainFeatured.author.avatar || "/placeholder.svg"}
                            alt={mainFeatured.author.name}
                            width={32}
                            height={32}
                            className="rounded-full"
                          />
                          <span>{mainFeatured.author.name}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="size-4" />
                          <span>{mainFeatured.readingTime} min</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                {/* Secondary Featured */}
                <div className="flex flex-col gap-6">
                  {secondaryFeatured.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                      <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                        <div className="flex gap-4 p-4">
                          <div className="relative aspect-square w-32 flex-shrink-0 overflow-hidden rounded-lg">
                            <Image
                              src={post.coverImage || "/placeholder.svg"}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform group-hover:scale-105"
                            />
                          </div>
                          <div className="flex flex-1 flex-col">
                            <Badge className="mb-2 w-fit">{post.category}</Badge>
                            <h3 className="mb-2 line-clamp-2 text-balance font-bold group-hover:text-primary">
                              {post.title}
                            </h3>
                            <div className="mt-auto flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="size-4" />
                              <span>{post.readingTime} min</span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Main Content */}
        <section className="w-full py-8 md:py-12 bg-muted/30">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
              {/* Posts Grid */}
              <div>
                <h2 className="mb-6 md:mb-8 text-2xl font-bold">Todos os artigos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {regularPosts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                      <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
                        <div className="relative aspect-[16/9] overflow-hidden">
                          <Image
                            src={post.coverImage || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-6">
                          <Badge className="mb-3">{post.category}</Badge>
                          <h3 className="mb-3 text-balance text-xl font-bold group-hover:text-primary">{post.title}</h3>
                          <p className="mb-4 line-clamp-2 text-pretty text-muted-foreground">{post.excerpt}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Image
                                src={post.author.avatar || "/placeholder.svg"}
                                alt={post.author.name}
                                width={32}
                                height={32}
                                className="rounded-full"
                              />
                              <span>{post.author.name}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="size-4" />
                              <span>{post.readingTime} min</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* Categories */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 font-bold">Categorias</h3>
                    <div className="space-y-2">
                      {blogCategories.map((category) => (
                        <Link
                          key={category.slug}
                          href={`/blog/categoria/${category.slug}`}
                          className="flex items-center justify-between rounded-lg p-2 transition-colors hover:bg-muted"
                        >
                          <span>{category.name}</span>
                          <Badge variant="secondary">{category.postCount}</Badge>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Popular Posts */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 font-bold">Posts Populares</h3>
                    <div className="space-y-4">
                      {featuredPosts.slice(0, 3).map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                          <h4 className="mb-1 line-clamp-2 text-sm font-medium group-hover:text-primary">
                            {post.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Clock className="size-3" />
                            <span>{post.readingTime} min</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </aside>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
