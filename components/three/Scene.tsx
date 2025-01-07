"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useTheme } from "next-themes";

function ChromeSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        metalness={1}
        roughness={0.1}
        envMapIntensity={theme === "dark" ? 0.5 : 1}
      />
    </mesh>
  );
}

export function Scene() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="fixed inset-0 -z-10 transition-colors duration-300">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={[isDark ? "#000000" : "#ffffff"]} />
        
        <Suspense fallback={null}>
          <ChromeSphere />
          
          <Environment preset={isDark ? "night" : "studio"} />
          
          <ambientLight intensity={isDark ? 0.2 : 0.5} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={isDark ? 0.5 : 1}
            castShadow
          />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}