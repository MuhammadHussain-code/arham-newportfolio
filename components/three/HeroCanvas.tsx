"use client";

import { Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { HeroObject } from "@/components/three/HeroObject";
import { SceneLights } from "@/components/three/SceneLights";
import type { SceneQuality } from "@/components/three/SceneGate";

type HeroCanvasProps = {
  quality: SceneQuality;
  animate: boolean;
  active: boolean;
  onReady: () => void;
};

function Placement({ quality, children }: { quality: SceneQuality; children: React.ReactNode }) {
  const viewport = useThree((state) => state.viewport);
  const isHigh = quality === "high";
  const position: [number, number, number] = isHigh
    ? [0.3, -0.1, 0]
    : [viewport.width * 0.3, viewport.height * 0.28, 0];
  return (
    <group position={position} scale={isHigh ? 0.95 : 0.55}>
      {children}
    </group>
  );
}

export function HeroCanvas({ quality, animate, active, onReady }: HeroCanvasProps) {
  const frameloop = !animate ? "demand" : active ? "always" : "never";
  const isHigh = quality === "high";

  return (
    <Canvas
      dpr={isHigh ? [1, 1.5] : [1, 1]}
      camera={{ position: [0, 0, 9.4], fov: 36 }}
      frameloop={frameloop}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      onCreated={onReady}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <SceneLights quality={quality} />
        <Placement quality={quality}>
          <HeroObject quality={quality} animate={animate} />
        </Placement>
      </Suspense>
    </Canvas>
  );
}
