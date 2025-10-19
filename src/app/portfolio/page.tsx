import { Suspense } from 'react';
import { PortfolioView } from '@/components/portfolio/portfolio-view';
import { Skeleton } from '@/components/ui/skeleton';

export default function PortfolioPage({
  searchParams,
}: {
  searchParams: { role?: string };
}) {
  const role = searchParams.role || 'hr';

  return (
    <Suspense fallback={<PortfolioSkeleton />}>
      <PortfolioView role={role} />
    </Suspense>
  );
}

function PortfolioSkeleton() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Skeleton className="h-8 w-32" />
          <div className="ml-auto flex items-center space-x-4">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-8 w-24" />
          </div>
        </div>
      </header>
      <main className="container py-8">
        <div className="space-y-12">
          <Skeleton className="h-96 w-full" />
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
      </main>
    </div>
  );
}
