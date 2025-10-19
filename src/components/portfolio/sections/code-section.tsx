'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Check, Clipboard } from 'lucide-react';
import { codeSamples } from '@/lib/data';

function CodeBlock({ code }: { code: string }) {
  const [hasCopied, setHasCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm font-code text-muted-foreground">
        <code>{code}</code>
      </pre>
      <Button
        size="icon"
        variant="ghost"
        className="absolute top-2 right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={copyToClipboard}
      >
        {hasCopied ? <Check className="h-4 w-4 text-green-500" /> : <Clipboard className="h-4 w-4" />}
      </Button>
    </div>
  );
}


export function CodeSection() {
  return (
    <section id="code" className="py-16">
      <h2 className="text-3xl font-bold text-center font-headline">Code Samples</h2>
      <p className="mt-2 text-center text-muted-foreground mb-12">A glimpse into my development work.</p>
      <Tabs defaultValue={codeSamples[0].id} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          {codeSamples.map(sample => (
            <TabsTrigger key={sample.id} value={sample.id}>{sample.title}</TabsTrigger>
          ))}
        </TabsList>
        {codeSamples.map(sample => (
          <TabsContent key={sample.id} value={sample.id}>
            <CodeBlock code={sample.code} />
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
