"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { SceneErrorBoundary, useSceneGate } from "@/components/three/SceneGate";
import { cn } from "@/lib/utils";

const HeroCanvas = dynamic(() => import("@/components/three/HeroCanvas").then((m) => m.HeroCanvas), { ssr: false });

function HeroFallback({ visible }: { visible: boolean }) {
  return (
    <div className={cn("absolute inset-0 flex items-center justify-center transition-opacity duration-1000", visible ? "opacity-100" : "opacity-0")} aria-hidden="true">
      <div className="relative size-[min(70vw,34rem)] lg:size-[min(40vw,36rem)]">
        <div className="absolute inset-0 hero-glow" />
        <svg viewBox="0 0 200 200" className="absolute inset-0 size-full text-accent/40" fill="none" stroke="currentColor" strokeWidth="0.5">
          <circle cx="100" cy="100" r="78" />
          <ellipse cx="100" cy="100" rx="88" ry="34" transform="rotate(-28 100 100)" />
          <ellipse cx="100" cy="100" rx="84" ry="26" transform="rotate(48 100 100)" />
          <polygon points="100,42 148,70 148,130 100,158 52,130 52,70" />
        </svg>
      </div>
    </div>
  );
}

export function HeroScene() {
  const { attach, supported, active, reducedMotion, quality } = useSceneGate();
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const canRender = supported === true && !failed;

  return (
    <div ref={attach} className="relative h-full w-full">
      <HeroFallback visible={!ready || !canRender} />
      {canRender ? (
        <SceneErrorBoundary
          onError={() => {
            setFailed(true);
            setReady(false);
          }}
        >
          <div className={cn("absolute inset-0 transition-opacity duration-[1400ms]", ready ? "opacity-100" : "opacity-0")}>
            <HeroCanvas quality={quality} animate={!reducedMotion} active={active} onReady={() => setReady(true)} />
          </div>
        </SceneErrorBoundary>
      ) : null}
    </div>
  );
}
