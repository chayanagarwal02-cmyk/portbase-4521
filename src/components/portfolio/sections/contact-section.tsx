'use client';

import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { sendContactEmail } from '@/ai/flows/send-contact-email';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Plane, Send, Mail, Linkedin, Github, Download, Loader2 } from 'lucide-react';

const socialLinks = [
  {
    icon: Mail,
    label: 'Email Me',
    value: 'chayan.agarwal.ds@gmail.com',
    href: 'mailto:chayan.agarwal.ds@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect professionally',
    href: 'https://www.linkedin.com/in/chayan-agarwal01/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'View my code',
    href: 'https://github.com/Chayan-DSML',
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
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
      const result = await sendContactEmail(formData);
      if (result.success) {
        toast({
          title: 'Message Sent!',
          description: 'Thank you for reaching out. I will get back to you shortly.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
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
    <section id="contact" className="py-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <Card className="bg-secondary/30 border-border/50">
          <CardContent className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold font-headline">Get In Touch</h2>
                <p className="text-muted-foreground">Send me a message and I'll get back to you within 24 hours</p>
              </div>
              <Plane className="w-6 h-6 text-primary" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={handleInputChange} required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What's this about?" value={formData.subject} onChange={handleInputChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell me about your project or opportunity..." value={formData.message} onChange={handleInputChange} required />
              </div>
              <Button type="submit" className="w-full md:w-auto" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="bg-secondary/30 border-border/50">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold font-headline mb-6">Connect on Social Media</h2>
            <div className="space-y-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-background border border-border hover:bg-accent hover:border-primary/50 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-semibold text-foreground">{link.label}</p>
                      <p className="text-sm text-muted-foreground">{link.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button size="lg" asChild>
            <a href="/resume.pdf" download>
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
