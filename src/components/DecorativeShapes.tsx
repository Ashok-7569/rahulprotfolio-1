interface DecorativeShapesProps {
  variant?: "hero" | "section" | "minimal";
}

const DecorativeShapes = ({ variant = "section" }: DecorativeShapesProps) => {
  if (variant === "hero") {
    return (
      <>
        {/* Large orange circle */}
        <div className="absolute top-20 right-40 w-64 h-64 rounded-full bg-gradient-accent opacity-90 blur-sm animate-float"></div>
        
        {/* Small purple circle */}
        <div className="absolute top-10 left-10 w-8 h-8 rounded-full bg-primary/30"></div>
        
        {/* Dots pattern */}
        <div className="absolute bottom-40 left-20 flex flex-col gap-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-white/40"></div>
          ))}
        </div>
        
        {/* Squiggly line */}
        <svg className="absolute top-16 right-20 w-20 h-20 text-white/30" viewBox="0 0 100 100">
          <path d="M 10 50 Q 25 20, 40 50 T 70 50" stroke="currentColor" strokeWidth="3" fill="none" />
        </svg>
        
        {/* Another squiggly */}
        <svg className="absolute bottom-20 right-60 w-24 h-24 text-white/40" viewBox="0 0 100 100">
          <path d="M 20 50 Q 40 10, 60 50 T 100 50" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </>
    );
  }

  if (variant === "section") {
    return (
      <>
        {/* Yellow circle */}
        <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-secondary/20"></div>
        
        {/* Purple dot */}
        <div className="absolute bottom-20 left-10 w-3 h-3 rounded-full bg-primary/30"></div>
        
        {/* Geometric shape */}
        <div className="absolute top-1/2 right-20 w-12 h-12 border-4 border-accent/20 rotate-45"></div>
        
        {/* Small squiggle */}
        <svg className="absolute bottom-10 right-40 w-16 h-16 text-primary/20" viewBox="0 0 100 100">
          <path d="M 10 50 Q 30 20, 50 50 T 90 50" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </>
    );
  }

  // minimal variant
  return (
    <>
      <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-primary/10"></div>
      <div className="absolute bottom-5 left-5 w-2 h-2 rounded-full bg-accent/20"></div>
    </>
  );
};

export default DecorativeShapes;
