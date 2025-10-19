import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import { certificatesData } from '@/lib/data';
import { placeholderImages } from '@/lib/placeholder-images.json';

export function CertificatesSection() {
  return (
    <section id="certificates" className="py-16">
      <h2 className="text-3xl font-bold text-center font-headline">Certifications</h2>
      <p className="mt-2 text-center text-muted-foreground mb-12">Validation of my skills and knowledge.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificatesData.map((cert) => {
           const image = placeholderImages.find(p => p.id === 'certificate-placeholder');
          return(
          <Card key={cert.id} className="overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
            <CardHeader className="p-0">
               {image && (
                <Image
                    src={image.imageUrl}
                    alt={cert.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                    data-ai-hint={image.imageHint}
                />
              )}
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="mb-2">{cert.title}</CardTitle>
              <p className="text-sm text-muted-foreground mb-4">Issued by {cert.issuer} &bull; {cert.year}</p>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button asChild className="w-full">
                <a href={cert.url} target="_blank" rel="noopener noreferrer">
                  View Credential
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        )})}
      </div>
    </section>
  );
}
