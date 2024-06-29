import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeModel = ({ modelPath, scale = [1, 1, 1], position = [0, 0, 0], rotation = [0, 0, 0] }) => {
    const mountRef = useRef(null);

    useEffect(() => {
        const currentMount = mountRef.current;

        // Create scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        currentMount.appendChild(renderer.domElement);

        // Add light
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(1, 1, 1).normalize();
        scene.add(light);

        // Load GLTF/GLB model
        const loader = new GLTFLoader();
        loader.load(
            modelPath,
            (gltf) => {
                const model = gltf.scene;

                // Adjust model scale
                model.scale.set(scale[0], scale[1], scale[2]);

                // Adjust model position
                model.position.set(position[0], position[1], position[2]);

                // Adjust model rotation
                model.rotation.set(rotation[0], rotation[1], rotation[2]);

                scene.add(model);

                // Animation for rotation
                const animate = function () {
                    requestAnimationFrame(animate);
                    model.rotation.y += 0.01;
                    renderer.render(scene, camera);
                };

                animate();
            },
            undefined,
            (error) => {
                console.error(error);
            }
        );

        camera.position.z = 5;

        // Resize handler
        const handleResize = () => {
            const width = currentMount.clientWidth;
            const height = currentMount.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            currentMount.removeChild(renderer.domElement);
        };
    }, [modelPath, scale, position, rotation]);

    return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default ThreeModel;
