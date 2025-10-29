import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { blogData } from '@/lib/data';
import { placeholderImages } from '@/lib/placeholder-images.json';
import Link from 'next/link';

export function BlogSection() {
  if (!blogData || blogData.length === 0) {
    return (
      <section id="blog" className="py-16">
        <h2 className="text-3xl font-bold text-center font-headline">From The Cockpit Log</h2>
        <p className="mt-4 text-center text-muted-foreground">No blog posts available at the moment. Please check back later!</p>
      </section>
    )
  }

  return (
    <section id="blog" className="py-16">
      <h2 className="text-3xl font-bold text-center font-headline">From The Cockpit Log</h2>
      <p className="mt-2 text-center text-muted-foreground mb-12">Thoughts, insights, and stories from my journey.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((post) => {
          const image = placeholderImages.find(p => p.id === post.imageId) || placeholderImages.find(p => p.id === 'blog-placeholder');
          return(
          <Link href={post.url} key={post.id} className="block group" target="_blank" rel="noopener noreferrer">
            <Card className="h-full overflow-hidden transition-all group-hover:shadow-xl group-hover:-translate-y-2 transform duration-300">
              <CardHeader className="p-0">
                 {image && (
                    <div className="relative w-full h-48">
                      <Image
                          src={image.imageUrl}
                          alt={post.title}
                          layout="fill"
                          objectFit="cover"
                          data-ai-hint={image.imageHint}
                      />
                    </div>
                 )}
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
                </div>
                <CardTitle className="mb-2 group-hover:text-primary transition-colors">{post.title}</CardTitle>
                <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between items-center text-sm text-muted-foreground">
                <span>{post.date}</span>
                <div className="flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Read More <ArrowRight className="h-4 w-4"/>
                </div>
              </CardFooter>
            </Card>
          </Link>
        )})}
      </div>
    </section>
  );
}
