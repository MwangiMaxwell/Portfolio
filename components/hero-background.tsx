export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-1/4 w-[400px] h-[400px] rounded-full bg-muted-foreground/[0.04] blur-3xl animate-pulse-slow [animation-delay:2s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[400px] bg-gradient-to-b from-transparent via-border to-transparent" />
    </div>
  );
}
