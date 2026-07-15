"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function MorphObject() {
  const group = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group.current) {
      // Slow, cinematic drift + gentle pointer parallax.
      group.current.rotation.y = t * 0.12 + state.pointer.x * 0.35;
      group.current.rotation.x = state.pointer.y * -0.25 + Math.sin(t * 0.2) * 0.06;
    }
    if (inner.current) {
      inner.current.rotation.z = t * 0.05;
    }
  });

  return (
    <group ref={group}>
      {/* Solid dark core */}
      <Icosahedron args={[1.55, 6]}>
        <MeshDistortMaterial
          color="#111114"
          roughness={0.35}
          metalness={0.1}
          distort={0.32}
          speed={1.1}
        />
      </Icosahedron>
      {/* Acid wireframe shell */}
      <Icosahedron ref={inner} args={[1.62, 4]}>
        <meshBasicMaterial color="#C6F135" wireframe transparent opacity={0.16} />
      </Icosahedron>
    </group>
  );
}

function Particles({ count = 220 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.2 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#EDEDE8"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

function Rig() {
  const { camera } = useThree();
  useFrame((state) => {
    // Subtle dolly toward the pointer for depth.
    camera.position.x += (state.pointer.x * 0.4 - camera.position.x) * 0.03;
    camera.position.y += (state.pointer.y * 0.3 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroCanvas() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 5], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 5]} intensity={2.2} color="#ffffff" />
      <pointLight position={[-4, -2, -3]} intensity={3} color="#C6F135" />
      <MorphObject />
      <Particles />
      <Rig />
    </Canvas>
  );
}
