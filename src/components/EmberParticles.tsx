import { useMemo } from "react";

const EmberParticles = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 4 + 2,
      duration: `${Math.random() * 4 + 3}s`,
      delay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.7 + 0.3,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bottom-0 rounded-full ember-particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, hsl(36 100% 65%), hsl(28 90% 50%))`,
            boxShadow: `0 0 ${p.size * 3}px hsl(36 100% 65% / 0.6)`,
            ["--duration" as string]: p.duration,
            ["--delay" as string]: p.delay,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default EmberParticles;
