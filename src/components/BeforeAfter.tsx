import { useEffect, useRef, useState } from "react";

export default function BeforeAfter({
  before,
  after,
  alt = "Project transformation",
}: {
  before: string;
  after: string;
  alt?: string;
}) {
  const [pos, setPos] = useState(50);
  const wrap = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  useEffect(() => {
    const move = (clientX: number) => {
      const el = wrap.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 100;
      setPos(Math.max(0, Math.min(100, x)));
    };
    const onMove = (e: MouseEvent) => dragging.current && move(e.clientX);
    const onTouch = (e: TouchEvent) =>
      dragging.current && e.touches[0] && move(e.touches[0].clientX);
    const stop = () => (dragging.current = false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
    };
  }, []);

  return (
    <div
      ref={wrap}
      className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border select-none touch-none"
      style={{ boxShadow: "var(--shadow-elegant)" }}
    >
      <img src={after} alt={`${alt} after`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img
          src={before}
          alt={`${alt} before`}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }}
          loading="lazy"
        />
        <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
          Before
        </span>
      </div>
      <span className="absolute right-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-foreground">
        After
      </span>

      <div
        role="slider"
        aria-label="Compare before and after"
        aria-valuenow={Math.round(pos)}
        tabIndex={0}
        onMouseDown={() => (dragging.current = true)}
        onTouchStart={() => (dragging.current = true)}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
          if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
        }}
        className="absolute inset-y-0 z-10 flex w-1 cursor-ew-resize items-center justify-center bg-primary"
        style={{ left: `calc(${pos}% - 2px)` }}
      >
        <div className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_0_30px_oklch(0.82_0.17_85/0.6)]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
            <polyline points="9 18 3 12 9 6" opacity="0" />
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </div>
      </div>
    </div>
  );
}
