'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Plane, Send, Mail, Linkedin, Github, Download } from 'lucide-react';

const socialLinks = [
  {
    icon: Mail,
    label: 'Email Me',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect professionally',
    href: '#',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'View my code',
    href: '#',
  },
];

export function ContactSection() {
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
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What's this about?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell me about your project or opportunity..." />
              </div>
              <Button type="submit" className="w-full md:w-auto">
                <Send className="w-4 h-4 mr-2" />
                Send Message
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
                    <Download className="w-4 h-4 mr-2"/>
                    Download Resume
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
