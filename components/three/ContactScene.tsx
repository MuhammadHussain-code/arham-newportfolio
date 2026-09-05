"use client";

import dynamic from "next/dynamic";
import { SceneErrorBoundary, useSceneGate } from "@/components/three/SceneGate";

const ContactCanvas = dynamic(() => import("@/components/three/ContactCanvas").then((m) => m.ContactCanvas), { ssr: false });

export function ContactScene() {
  const { attach, supported, active, reducedMotion, quality } = useSceneGate();

  return (
    <div ref={attach} className="absolute inset-0 [mask-image:radial-gradient(80%_80%_at_50%_50%,black,transparent)]">
      <div className="absolute inset-0 hero-glow opacity-60" />
      {supported ? (
        <SceneErrorBoundary>
          <ContactCanvas quality={quality} animate={!reducedMotion} active={active} />
        </SceneErrorBoundary>
      ) : null}
    </div>
  );
}
