"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { ACCENT } from "@/components/three/SceneLights";

type LightFieldProps = { count: number; animate: boolean };

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function LightField({ count, animate }: LightFieldProps) {
  const points = useRef<THREE.Points>(null);
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  const { positions, seeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const seeds = new Float32Array(count);
    const random = mulberry32(count * 7919);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (random() - 0.5) * 16;
      positions[i * 3 + 1] = (random() - 0.5) * 7;
      positions[i * 3 + 2] = (random() - 0.5) * 6;
      seeds[i] = random() * Math.PI * 2;
    }
    return { positions, seeds };
  }, [count]);

  useEffect(() => {
    if (!animate) return;
    const onMove = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [animate]);

  useFrame((state, delta) => {
    if (!animate) return;
    const t = state.clock.elapsedTime;
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, pointer.current.x * 0.12, 2, delta);
      group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, pointer.current.y * 0.08, 2, delta);
    }
    const geometry = points.current?.geometry;
    const attribute = geometry?.getAttribute("position") as THREE.BufferAttribute | undefined;
    if (!attribute) return;
    const array = attribute.array as Float32Array;
    for (let i = 0; i < count; i++) {
      array[i * 3 + 1] = positions[i * 3 + 1] + Math.sin(t * 0.35 + seeds[i]) * 0.25;
      array[i * 3] = positions[i * 3] + Math.cos(t * 0.2 + seeds[i]) * 0.15;
    }
    attribute.needsUpdate = true;
  });

  return (
    <group ref={group}>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions.slice(), 3]} />
        </bufferGeometry>
        <pointsMaterial color={ACCENT} size={0.045} sizeAttenuation transparent opacity={0.55} depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>
    </group>
  );
}
