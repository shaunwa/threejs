import * as THREE from "three";
import { useState, useEffect, useCallback } from 'react';

export const ThreeWindow = () => {
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [mount, setMount] = useState(null);

    const measuredRef = useCallback(node => {
        if (node !== null) {
            setHeight(node.getBoundingClientRect().height);
            setWidth(node.getBoundingClientRect().width);
            setMount(node);
        }
    }, []);
  
    useEffect(() => {
        if (mount) {
            var scene = new THREE.Scene();
            var camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
            var renderer = new THREE.WebGLRenderer();
            renderer.setSize(width, height);

            mount.appendChild( renderer.domElement );
            var geometry = new THREE.BoxGeometry( 1, 1, 1 );
            var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
            var cube = new THREE.Mesh( geometry, material );
            scene.add( cube );
            camera.position.z = 5;
            
            var animate = function () {
                requestAnimationFrame( animate );
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;
                renderer.render( scene, camera );
            };

            animate();
        }
    }, [mount, height, width]);

    return (
        <div style={{ height: '100%', width: '100%' }} ref={measuredRef} />
    );
}