"use client";

import { Environment, Lightformer } from "@react-three/drei";
import type { SceneQuality } from "@/components/three/SceneGate";

export const ACCENT = "#68e0cf";

export function SceneLights({ quality }: { quality: SceneQuality }) {
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 5, 6]} intensity={2.2} color="#ffffff" />
      <directionalLight position={[-6, -2, -4]} intensity={1.2} color={ACCENT} />
      <pointLight position={[-3, -1.5, -3]} intensity={10} distance={12} color={ACCENT} />
      {quality === "high" ? (
        <Environment resolution={256} frames={1}>
          <Lightformer intensity={3} position={[6, 4, 6]} scale={[8, 4, 1]} color="#ffffff" />
          <Lightformer intensity={2} position={[-6, 0, -4]} rotation-y={Math.PI / 2} scale={[6, 3, 1]} color={ACCENT} />
          <Lightformer intensity={1.2} position={[0, -6, 2]} rotation-x={Math.PI / 2} scale={[10, 10, 1]} color="#5b6470" />
        </Environment>
      ) : null}
    </>
  );
}
