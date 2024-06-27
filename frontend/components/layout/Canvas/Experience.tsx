import * as THREE from 'three';
// import { MathUtils } from "three";
import { Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

import { OrbitControls, Environment, useEnvironment } from '@react-three/drei';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';

import Placeholder from './Placeholder';
import Model from './Model';

const Experience = () => {
	const texture = useLoader(TextureLoader, './ASI_BG.jpg'); // Replace with the path to your image
	const mapping = THREE.EquirectangularReflectionMapping;
	texture.mapping = mapping;
	texture.colorSpace = THREE.SRGBColorSpace;

	return (
		<>
			{/* <OrbitControls makeDefault /> */}
			<Environment map={texture} />
			<directionalLight position={[5, 10, 5]} intensity={1} />
			<hemisphereLight color={0xffffff} intensity={10.5} />
			<ambientLight intensity={1} color={0xffffff} />

			<Suspense
				fallback={
					<Placeholder position={[0, 0.5, 0]} scale={[2, 2, 2]} />
				}
			>
				<Model />
				{/* <Hamburger scale={0.35} /> */}
				{/* <Fox scale={0.025} position={[-2.5, 0, 2.5]} rotation-y={0.3} /> */}
			</Suspense>
		</>
	);
};

export default Experience;
