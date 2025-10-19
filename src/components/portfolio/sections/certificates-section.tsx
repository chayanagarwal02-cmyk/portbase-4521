'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Award, Sparkles, Trophy, Star } from 'lucide-react';
import { certificatesData } from '@/lib/data';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { AnimatePresence, motion } from 'framer-motion';

const cardColors = [
  'from-blue-500 to-blue-700',
  'from-green-500 to-green-700',
  'from-purple-500 to-purple-700',
  'from-orange-500 to-orange-700',
  'from-pink-500 to-pink-700',
  'from-cyan-500 to-cyan-700',
];

export function CertificatesSection() {
    const [selectedCert, setSelectedCert] = useState<(typeof certificatesData[0]) | null>(null);

  return (
    <section id="certificates" className="py-8">
        <h2 className="text-2xl font-bold font-headline mb-8 flex items-center gap-2"><Trophy/> Certifications & Credentials</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificatesData.map((cert, index) => (
          <motion.div
            key={cert.id}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => setSelectedCert(cert)}
            className="cursor-pointer"
          >
            <Card className="h-full flex flex-col overflow-hidden bg-secondary/30 border-border/50 transition-all">
                <CardHeader className={`relative p-0 h-28 rounded-t-lg bg-gradient-to-br ${cardColors[index % cardColors.length]}`}>
                    <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                    <div className="absolute top-4 left-4 bg-white/10 p-2 rounded-full backdrop-blur-sm">
                        <Award className="w-5 h-5 text-white/80" />
                    </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col">
                    <CardTitle className="mb-1 text-base font-semibold">{cert.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground mb-4">{cert.year}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {cert.skills.map(skill => <Badge key={skill} variant="outline" className="text-xs">{skill}</Badge>)}
                    </div>
                </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

       <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <AnimatePresence>
          {selectedCert && (
              <DialogContent className="max-w-lg">
                 <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-headline flex items-center gap-3">
                            <Trophy className="w-6 h-6 text-primary"/>
                            {selectedCert.title}
                        </DialogTitle>
                        <DialogDescription>{selectedCert.issuer} &bull; {selectedCert.year}</DialogDescription>
                    </DialogHeader>
                    <div className="mt-4 space-y-4">
                        <div>
                            <h4 className="font-semibold flex items-center gap-2"><Star className="w-4 h-4 text-yellow-400"/> Key Skills Acquired</h4>
                            <div className="flex flex-wrap gap-2 mt-2">
                               {selectedCert.skills.map((skill) => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                            </div>
                        </div>
                        <div className="text-sm text-muted-foreground">
                            This credential showcases expertise in modern data engineering and cloud architecture, validating the ability to design, build, and maintain scalable data solutions.
                        </div>
                        <Button asChild className="w-full mt-6">
                            <a href={selectedCert.url} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" /> View Credential
                            </a>
                        </Button>
                    </div>
                </motion.div>
              </DialogContent>
          )}
        </AnimatePresence>
      </Dialog>
    </section>
  );
}
