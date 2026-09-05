"use client";

import { Component, useSyncExternalStore, type ReactNode } from "react";
import { useInView, useIsDesktop, usePageVisible, usePrefersReducedMotion } from "@/lib/hooks";

export type SceneQuality = "high" | "low";

let webglSupport: boolean | null = null;

function detectWebGL() {
  if (webglSupport !== null) return webglSupport;
  try {
    const canvas = document.createElement("canvas");
    webglSupport = Boolean(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
  } catch {
    webglSupport = false;
  }
  return webglSupport;
}

const noopSubscribe = () => () => {};

function useWebGLSupport() {
  return useSyncExternalStore(noopSubscribe, detectWebGL, () => null);
}

export function useSceneGate() {
  const [attach, inView] = useInView<HTMLDivElement>("160px");
  const pageVisible = usePageVisible();
  const reducedMotion = usePrefersReducedMotion();
  const desktop = useIsDesktop();
  const supported = useWebGLSupport();

  return {
    attach,
    supported,
    active: inView && pageVisible,
    reducedMotion,
    quality: (desktop ? "high" : "low") as SceneQuality,
  };
}

type BoundaryProps = { children: ReactNode; onError?: () => void };
type BoundaryState = { failed: boolean };

export class SceneErrorBoundary extends Component<BoundaryProps, BoundaryState> {
  state: BoundaryState = { failed: false };

  static getDerivedStateFromError(): BoundaryState {
    return { failed: true };
  }

  componentDidCatch() {
    this.props.onError?.();
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}
