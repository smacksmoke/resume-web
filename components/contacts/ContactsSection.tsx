'use client';

import { useState } from 'react';

function randomColor(): string {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 75%, 45%)`;
}

export function ContactsSection() {
  const [color, setColor] = useState<string>('rgba(0,0,0,0.9)');

  return (
    <main className="flex min-h-[calc(100vh-53px)] flex-col items-center justify-center gap-2">
      <span
        className="text-[11vw] leading-none font-normal tracking-tight cursor-default select-none md:text-[9vw]"
        style={{ color }}
        onMouseEnter={() => setColor(randomColor())}
        onMouseLeave={() => setColor('rgba(0,0,0,0.9)')}
      >
        @SMACKSMOKE
      </span>
      <span className="text-xl font-normal text-black/90 md:text-2xl">
        everywhere
      </span>
    </main>
  );
}
