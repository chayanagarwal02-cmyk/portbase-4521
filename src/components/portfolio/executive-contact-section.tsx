'use client';

import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { sendContactEmail } from '@/ai/flows/send-contact-email';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Plane, Send, Mail, Linkedin, Calendar, Download, Loader2 } from 'lucide-react';

const socialLinks = [
  {
    icon: Mail,
    label: 'Email Me Directly',
    value: 'chayan.agarwal.ds@gmail.com',
    href: 'mailto:chayan.agarwal.ds@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'Connect on LinkedIn',
    value: 'linkedin.com/in/chayan-agarwal01',
    href: 'https://www.linkedin.com/in/chayan-agarwal01/',
  },
  {
    icon: Calendar,
    label: 'Schedule a Call',
    value: 'Book a 30-min intro call',
    href: '#', // Placeholder for Calendly or similar
  },
  {
    icon: Download,
    label: 'Download Full Resume',
    value: 'Get the PDF version',
    href: '/resume.pdf',
    download: true,
  },
];

export function ExecutiveContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    businessProblem: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // @ts-ignore - The flow will be updated
      const result = await sendContactEmail(formData);
      if (result.success) {
        toast({
          title: 'Message Sent!',
          description: "Thank you for reaching out. I'll be in touch shortly to discuss how we can collaborate.",
        });
        setFormData({ name: '', email: '', company: '', businessProblem: '' });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error(error);
      const errorMessage = error instanceof Error ? error.message : 'Please try again later.';
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: `There was a problem sending your message. ${errorMessage}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full max-w-7xl mt-24 py-16 text-left">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold">Let's Build & Inspire Together</h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                Whether you're looking to scale your data strategy, build a developer community, or secure your next round of funding with a powerful technical narrative, I’m ready to help. Let's start a conversation.
            </p>
        </div>

        <Card className="bg-card/70 backdrop-blur-sm border-border/50">
            <CardContent className="p-8 grid md:grid-cols-2 gap-12">
                {/* Left Column */}
                <div className="space-y-6">
                {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                    <a
                        key={link.label}
                        href={link.href}
                        target={link.download ? undefined : "_blank"}
                        download={link.download ? 'Chayan_Agarwal_Resume.pdf' : undefined}
                        rel="noopener noreferrer"
                        className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30 border border-border/50 hover:bg-accent hover:border-primary/50 transition-colors group"
                    >
                        <Icon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                        <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{link.label}</p>
                        <p className="text-sm text-muted-foreground">{link.value}</p>
                        </div>
                    </a>
                    );
                })}
                </div>

                {/* Right Column */}
                <div>
                    <h3 className="font-headline font-semibold text-xl mb-6">Send a Quick Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                            <Label htmlFor="name">Your Name</Label>
                            <Input id="name" placeholder="Jane Doe" value={formData.name} onChange={handleInputChange} required />
                            </div>
                            <div className="space-y-2">
                            <Label htmlFor="email">Your Email</Label>
                            <Input id="email" type="email" placeholder="jane.doe@example.com" value={formData.email} onChange={handleInputChange} required />
                            </div>
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="company">Company Name</Label>
                            <Input id="company" placeholder="Acme Inc." value={formData.company} onChange={handleInputChange} required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="businessProblem">Business Problem or Goal</Label>
                            <Textarea id="businessProblem" placeholder="e.g., 'We need to reduce customer churn...' or 'We want to build our developer relations strategy...'" value={formData.businessProblem} onChange={handleInputChange} required />
                        </div>
                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? (
                            <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                Sending...
                            </>
                            ) : (
                            <>
                                <Send className="w-4 h-4 mr-2" />
                                Start Conversation
                            </>
                            )}
                        </Button>
                    </form>
                </div>
            </CardContent>
        </Card>
    </section>
  );
}
