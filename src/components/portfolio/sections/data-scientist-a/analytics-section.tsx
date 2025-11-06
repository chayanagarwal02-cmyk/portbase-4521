'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Construction } from 'lucide-react';

export function AnalyticsSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Data Scientist A - Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center text-center text-muted-foreground h-64">
          <Construction className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold">Under Development</h3>
          <p>This analytics section is currently being built.</p>
        </div>
      </CardContent>
    </Card>
  );
}
