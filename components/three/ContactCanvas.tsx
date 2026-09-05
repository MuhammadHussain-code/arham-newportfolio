"use client";

import { Canvas } from "@react-three/fiber";
import { LightField } from "@/components/three/LightField";
import type { SceneQuality } from "@/components/three/SceneGate";

type ContactCanvasProps = { quality: SceneQuality; animate: boolean; active: boolean };

export function ContactCanvas({ quality, animate, active }: ContactCanvasProps) {
  const frameloop = !animate ? "demand" : active ? "always" : "never";
  return (
    <Canvas
      dpr={[1, 1.25]}
      camera={{ position: [0, 0, 8], fov: 45 }}
      frameloop={frameloop}
      gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
      style={{ background: "transparent" }}
    >
      <LightField count={quality === "high" ? 420 : 160} animate={animate} />
    </Canvas>
  );
}
