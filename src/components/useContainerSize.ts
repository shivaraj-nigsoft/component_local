import { useEffect, useRef, useState } from 'react';

export function useContainerSize() {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const scale = size.width === 0 ? 1 : size.width < 300 ? 0.75 : size.width < 500 ? 0.875 : 1;

  /** Scale a base px value by the container-width-derived ratio */
  const fs = (base: number) => `${Math.round(base * scale)}px`;

  return { ref, ...size, fs, scale };
}
