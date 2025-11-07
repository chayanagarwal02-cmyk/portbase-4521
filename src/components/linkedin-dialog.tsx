
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Loader2, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { verifyLinkedin } from '@/ai/flows/verify-linkedin';
import { saveProfileView } from '@/ai/flows/save-profile-view';
import type { Role } from '@/lib/data';

const roleTitles: Record<string, string> = {
  'cxo': 'Executive Verification',
  'ai-universe': 'AI Universe Access',
}

export function LinkedinDialog({ open, onOpenChange, role }: { open: boolean, onOpenChange: (open: boolean) => void, role: Role | null }) {
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    if (!open) {
      setLinkedinUrl('');
      setIsLoading(false);
    }
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!role || !linkedinUrl || !linkedinUrl.includes('linkedin.com/in/')) {
      toast({
        variant: 'destructive',
        title: 'Invalid URL',
        description: 'Please enter a valid LinkedIn profile URL.',
      });
      return;
    }
    setIsLoading(true);

    try {
      const { name } = await verifyLinkedin({ url: linkedinUrl, role: role });
      
      // Don't wait for this to finish, save in background
      saveProfileView({
        url: linkedinUrl,
        name: name,
        role: role,
        viewedAt: new Date().toISOString(),
      });

      // On successful "verification", navigate to the loading page with the name
      router.push(`/pre-flight-check?name=${encodeURIComponent(name)}&role=${role}`);
    } catch (error) {
      console.error('LinkedIn verification failed:', error);
      toast({
        variant: 'destructive',
        title: 'Verification Failed',
        description: 'Could not process the LinkedIn URL. Please try again.',
      });
      setIsLoading(false);
    }
  };
  
  if (!role) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Linkedin className="h-5 w-5 text-primary" />
              {roleTitles[role] || 'Profile Verification'}
            </DialogTitle>
            <DialogDescription>
              To tailor this experience, please provide your LinkedIn profile URL.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="linkedin-url" className="text-right">
                LinkedIn URL
              </Label>
              <Input
                id="linkedin-url"
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
                className="col-span-3"
                placeholder="https://linkedin.com/in/your-profile"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verifying...
                </>
              ) : (
                'Proceed'
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
