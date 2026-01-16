"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Stars } from "@react-three/drei";
import { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";

// 1. The "AI Core" - Represents Logic, Algorithms & GenAI
function NeuralCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    // Gentle pulsation representing "thinking"
    const t = state.clock.getElapsedTime();
    const scale = 1 + Math.sin(t * 2) * 0.1;
    meshRef.current.scale.set(scale, scale, scale);
    // Complex rotation
    meshRef.current.rotation.x += 0.002;
    meshRef.current.rotation.y += 0.005;
  });

  return (
    <group>
      {/* Inner Solid Core */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#4f46e5" // Indigo glow
          emissiveIntensity={2}
          toneMapped={false}
        />
      </mesh>
      {/* Outer Wireframe Mesh */}
      <mesh scale={[1.2, 1.2, 1.2]}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial 
          color="#6366f1"
          wireframe 
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
}

// 2. The "Stack Rings" - Represents Frontend, Backend, and Infra
function TechRing({ 
  radius, 
  speed, 
  color, 
  rotation 
}: { 
  radius: number; 
  speed: number; 
  color: string;
  rotation: [number, number, number];
}) {
  const ringRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ringRef.current) return;
    const t = state.clock.getElapsedTime();
    // Rotate the ring based on time
    ringRef.current.rotation.x = rotation[0] + Math.sin(t * 0.5) * 0.1;
    ringRef.current.rotation.y = rotation[1] + t * speed;
    ringRef.current.rotation.z = rotation[2] + Math.cos(t * 0.5) * 0.1;
  });

  return (
    <group ref={ringRef}>
      {/* The physical ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.02, 16, 100]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color}
          emissiveIntensity={1.5}
          toneMapped={false}
        />
      </mesh>
      {/* A particle following the ring (Data packet) */}
      <mesh position={[radius, 0, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="white" />
      </mesh>
    </group>
  );
}

// 3. Floating Data Particles - Represents Database & Cloud
function DataCloud() {
  const count = 20;
  // Generate random positions using a helper function outside of render
  const generateParticles = () => {
    return new Array(count).fill(0).map(() => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ] as [number, number, number],
      speed: Math.random() * 0.02,
      seed: Math.random()
    }));
  };

  const particles = useMemo(() => generateParticles(), []);

  return (
    <group>
      {particles.map((data, i) => (
        <Float key={i} speed={2} rotationIntensity={1} floatIntensity={1}>
          <mesh position={data.position}>
            <boxGeometry args={[0.1, 0.1, 0.1]} />
            <meshStandardMaterial 
              color={i % 2 === 0 ? "#0ea5e9" : "#10b981"} 
              transparent 
              opacity={0.6} 
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4f46e5" />

      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <group>
          <NeuralCore />
          
          {/* Frontend Ring (Cyan) */}
          <TechRing 
            radius={2.2} 
            speed={0.5} 
            color="#06b6d4" // Cyan-500
            rotation={[0.5, 0, 0]} 
          />
          
          {/* Backend Ring (Green) */}
          <TechRing 
            radius={2.8} 
            speed={0.3} 
            color="#10b981" // Emerald-500
            rotation={[-0.5, 0, Math.PI / 4]} 
          />
          
          {/* AI/Infra Ring (Purple) */}
          <TechRing 
            radius={3.4} 
            speed={0.4} 
            color="#8b5cf6" // Violet-500
            rotation={[0, 0.5, -Math.PI / 4]} 
          />
        </group>
      </Float>

      <DataCloud />
      
      {/* Background Stars for depth */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.5} 
      />
    </>
  );
}

export default function Model3D() {
  return (
    <div className="w-full h-full relative cursor-move">
      <Suspense fallback={<div className="text-white text-center pt-20">Loading Neural Core...</div>}>
        <Canvas 
          camera={{ position: [0, 0, 12], fov: 40 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}