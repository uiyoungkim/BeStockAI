// components/ThreeDScene.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeDScene = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;

        // Szene erstellen
        const scene = new THREE.Scene();

        // Kamera erstellen
        const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
        camera.position.z = 5;

        // Renderer erstellen
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        mount.appendChild(renderer.domElement);

        // Licht hinzufügen
        const light = new THREE.AmbientLight(0xffffff);
        scene.add(light);

        // GLB-Modell laden
        const loader = new GLTFLoader();
        loader.load('../public/3d_Model/Gold.glb', (gltf) => {
            scene.add(gltf.scene);
        });

        // Animation
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();

        // Bereinigung
        return () => {
            mount.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default ThreeDScene;
