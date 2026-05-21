"use client";

import Lenis from "lenis";

import { useEffect } from "react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });

    let frameId: number;

    function raf(time: number) {
      lenis.raf(time);

      frameId =
        requestAnimationFrame(raf);
    }

    frameId =
      requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(
        frameId
      );

      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}