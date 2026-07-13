import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

interface SurfaceMap3DProps {
  rows?: number;
  cols?: number;
}

export const SurfaceMap3D: React.FC<SurfaceMap3DProps> = ({ rows = 48, cols = 64 }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // 1. Setup Scene, Camera, Renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    mountRef.current.appendChild(renderer.domElement);

    // 2. Geometry & Material
    const geometry = new THREE.PlaneGeometry(10, 10, cols - 1, rows - 1);
    geometry.rotateX(-Math.PI / 2);

    // Vertex Colors (Thermal Gradient)
    const colors = new Float32Array(geometry.attributes.position.count * 3);
    for (let i = 0; i < geometry.attributes.position.count; i++) {
        const y = Math.random(); // Placeholder for map value
        // Simple thermal mapping logic (would be expanded)
        colors[i * 3] = y;     // R
        colors[i * 3 + 1] = 0; // G
        colors[i * 3 + 2] = 1 - y; // B
    }
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.MeshStandardMaterial({ 
        vertexColors: true, 
        wireframe: false,
        emissive: 0x222222 
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // 3. Post-processing (Bloom)
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(new UnrealBloomPass(new THREE.Vector2(mountRef.current.clientWidth, mountRef.current.clientHeight), 0.5, 0.4, 0.85));

    // 4. Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    camera.position.set(5, 5, 5);
    controls.update();

    // 5. Rendering
    const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        composer.render();
    };
    animate();

    // Cleanup
    const resizeObserver = new ResizeObserver(entries => {
        const { width, height } = entries[0].contentRect;
        renderer.setSize(width, height);
        composer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });
    resizeObserver.observe(mountRef.current);

    return () => {
        resizeObserver.disconnect();
        mountRef.current?.removeChild(renderer.domElement);
        renderer.dispose();
    };
  }, [rows, cols]);

  return <div ref={mountRef} className="w-full h-full bg-bg-carbon" />;
};
