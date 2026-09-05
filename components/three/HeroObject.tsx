"use client";

import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import type { SceneQuality } from "@/components/three/SceneGate";
import { ACCENT } from "@/components/three/SceneLights";

type HeroObjectProps = { quality: SceneQuality; animate: boolean };

function fibonacciSphere(count: number, radius: number) {
  const points: THREE.Vector3[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    points.push(new THREE.Vector3(Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius));
  }
  return points;
}

function nearestLinks(points: THREE.Vector3[], neighbors: number) {
  const segments: number[] = [];
  const seen = new Set<string>();
  points.forEach((point, i) => {
    const sorted = points
      .map((other, j) => ({ j, d: i === j ? Infinity : point.distanceToSquared(other) }))
      .sort((a, b) => a.d - b.d)
      .slice(0, neighbors);
    for (const { j } of sorted) {
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (seen.has(key)) continue;
      seen.add(key);
      segments.push(point.x, point.y, point.z, points[j].x, points[j].y, points[j].z);
    }
  });
  return new Float32Array(segments);
}

export function HeroObject({ quality, animate }: HeroObjectProps) {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);
  const wire = useRef<THREE.Mesh>(null);
  const rings = useRef<THREE.Group>(null);
  const nodes = useRef<THREE.InstancedMesh>(null);
  const pointer = useRef({ x: 0, y: 0 });

  const nodeCount = quality === "high" ? 32 : 18;
  const { nodePoints, linePositions } = useMemo(() => {
    const nodePoints = fibonacciSphere(nodeCount, 2.55);
    return { nodePoints, linePositions: nearestLinks(nodePoints, 2) };
  }, [nodeCount]);

  useLayoutEffect(() => {
    const mesh = nodes.current;
    if (!mesh) return;
    const matrix = new THREE.Matrix4();
    nodePoints.forEach((point, i) => {
      matrix.makeTranslation(point.x, point.y, point.z);
      mesh.setMatrixAt(i, matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
  }, [nodePoints]);

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
    const g = group.current;
    if (!g) return;
    const scrollT = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1);
    const t = state.clock.elapsedTime;

    const targetX = animate ? pointer.current.y * 0.22 + scrollT * 0.9 : 0.15;
    const targetY = animate ? pointer.current.x * 0.35 + t * 0.07 : -0.4;
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, targetX, 2.5, delta);
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, targetY, 2.5, delta);
    g.position.y = THREE.MathUtils.damp(g.position.y, -scrollT * 2.2, 4, delta);
    const scale = 1 - scrollT * 0.2;
    g.scale.setScalar(scale);

    if (!animate) return;
    if (core.current) core.current.rotation.y += delta * 0.12;
    if (wire.current) {
      wire.current.rotation.y -= delta * 0.08;
      wire.current.rotation.x += delta * 0.03;
    }
    rings.current?.children.forEach((ring, i) => {
      ring.rotation.z += delta * (0.06 + i * 0.025);
    });
  });

  return (
    <group ref={group} rotation={[0.15, -0.4, 0]}>
      <Float speed={animate ? 1.2 : 0} rotationIntensity={0.25} floatIntensity={0.7}>
        <mesh ref={core}>
          <icosahedronGeometry args={[1.15, 1]} />
          <meshPhysicalMaterial
            color="#20242b"
            metalness={quality === "high" ? 0.75 : 0.35}
            roughness={0.28}
            clearcoat={1}
            clearcoatRoughness={0.15}
            flatShading
          />
        </mesh>
        <mesh ref={wire} scale={1.32}>
          <icosahedronGeometry args={[1.15, 1]} />
          <meshBasicMaterial color={ACCENT} wireframe transparent opacity={0.22} />
        </mesh>
      </Float>

      <group ref={rings}>
        {[
          [Math.PI / 2.4, 0, 0],
          [Math.PI / 3, Math.PI / 3, 0],
          [-Math.PI / 4, -Math.PI / 5, Math.PI / 6],
        ].map((rotation, i) => (
          <mesh key={i} rotation={rotation as [number, number, number]}>
            <torusGeometry args={[1.85 + i * 0.12, 0.012, 8, quality === "high" ? 160 : 96]} />
            <meshStandardMaterial color={i === 1 ? ACCENT : "#c9d1d9"} metalness={0.9} roughness={0.25} emissive={i === 1 ? ACCENT : "#000000"} emissiveIntensity={i === 1 ? 0.5 : 0} />
          </mesh>
        ))}
      </group>

      <instancedMesh ref={nodes} args={[undefined, undefined, nodeCount]}>
        <sphereGeometry args={[0.028, 12, 12]} />
        <meshStandardMaterial color={ACCENT} emissive={ACCENT} emissiveIntensity={1.4} roughness={0.4} />
      </instancedMesh>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color={ACCENT} transparent opacity={0.12} />
      </lineSegments>
    </group>
  );
}
