"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingShape({ position, color }: { position: [number, number, number]; color: string }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
            meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime()) * 0.2;
        }
    });

    return (
        <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
            <MeshDistortMaterial
                color={color}
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0.2}
                metalness={0.1}
            />
        </Sphere>
    );
}

export default function Hero3D() {
    return (
        <div className="absolute inset-0 -z-10 opacity-40">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                gl={{ alpha: true, antialias: true }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={0.5} />
                <pointLight position={[-10, -10, -5]} intensity={0.3} />

                {/* Floating geometric shapes with pastel colors */}
                <FloatingShape position={[-2, 1, 0]} color="#FFB5C0" />
                <FloatingShape position={[2, -1, -1]} color="#E6E6FA" />
                <FloatingShape position={[0, 2, -2]} color="#E0BBE4" />
                <FloatingShape position={[1.5, -1.5, 1]} color="#D8BFD8" />

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
            </Canvas>
        </div>
    );
}
