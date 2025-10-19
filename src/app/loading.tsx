import { Plane } from 'lucide-react';

const Loading = () => {
  return (
    <div className="h-screen-svh w-full flex flex-col items-center justify-center bg-background text-foreground">
      <div className="relative w-64 h-20 flex items-center justify-center">
        <div className="absolute w-full text-center">
          <p className="font-headline text-2xl mb-2">Altitude Portfolio</p>
          <p className="text-sm text-muted-foreground">Calibrating Instruments...</p>
        </div>
      </div>
      <div className="w-64 h-1 bg-muted rounded-full overflow-hidden mt-4">
        <div className="h-full bg-primary animate-pulse w-full"></div>
      </div>
       <div className="absolute bottom-10 flex items-center space-x-2 text-muted-foreground animate-pulse">
        <Plane className="w-8 h-8 -rotate-45" />
        <p className="text-lg font-headline">Preparing for Takeoff</p>
      </div>
    </div>
  );
};

export default Loading;
