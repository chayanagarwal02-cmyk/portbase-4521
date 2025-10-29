'use client';

import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images.json';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Camera } from 'lucide-react';

const galleryImages = [
  'gallery-image-1',
  'gallery-image-2',
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = placeholderImages.filter(p => galleryImages.includes(p.id));

  return (
    <section id="gallery" className="py-16">
      <h2 className="text-3xl font-bold text-center font-headline flex items-center justify-center gap-3">
        <Camera className="w-8 h-8 text-primary" />
        Aviation Gallery
      </h2>
      <p className="mt-2 text-center text-muted-foreground mb-12">
        A collection of aircraft and aviation-related photography.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {images.map((image, idx) => (
          <motion.div
            key={image.id}
            layoutId={image.id}
            onClick={() => setSelectedImage(image.imageUrl)}
            className="cursor-pointer overflow-hidden rounded-lg"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <Card className="overflow-hidden">
              <Image
                src={image.imageUrl}
                alt={image.description}
                width={600}
                height={400}
                className="w-full h-full object-cover aspect-[3/2]"
                data-ai-hint={image.imageHint}
              />
            </Card>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <Dialog open onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-3xl p-0 bg-transparent border-none">
              <motion.div 
                layoutId={selectedImage}
                onContextMenu={(e) => e.preventDefault()}
                className="relative"
              >
                <Image
                  src={selectedImage}
                  alt="Selected gallery image"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
}
