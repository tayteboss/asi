import { Vector3, DoubleSide } from 'three';
import { lerp } from 'three/src/math/MathUtils';
import { useRef } from 'react';
import { MeshStandardMaterial, Object3D } from 'three';
import { useGLTF, Clone } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

//@ts-ignore
import vertCommonShader from './Shaders/vertexCommon.glsl';
//@ts-ignore
import vertExportShader from './Shaders/vertexExport.glsl';
//@ts-ignore
import fragShader from './Shaders/fragment.glsl';

const Model = () => {
	const model = useGLTF('./ASI_try.glb');

	const rotationRef = useRef<any>(null);

	const { viewport, camera } = useThree();

	let vec = new Vector3();

	console.log(model.scene);
	const testMat = new MeshStandardMaterial({
		color: 0xffffff,
		metalness: 1.0,
		roughness: 0.0,
		transparent: true
		// side: DoubleSide
	});

	testMat.onBeforeCompile = (shader) => {
		// shader.uniforms.uTime = customUniforms.uTime;
		// shader.uniforms.uSpeed = customUniforms.uSpeed;
		// shader.uniforms.uNoiseIntensity = customUniforms.uNoiseIntensity;
		// shader.uniforms.uNoiseDensity = customUniforms.uNoiseDensity;
		// shader.uniforms.uFrequency = customUniforms.uFrequency;
		// shader.uniforms.uAmplitude = customUniforms.uAmplitude;
		// shader.uniforms.uColorPhase = customUniforms.uColorPhase;
		// shader.uniforms.uColorful = customUniforms.uColorful;

		shader.vertexShader = shader.vertexShader.replace(
			'#include <common>',
			vertCommonShader
		);

		// shader.vertexShader = shader.vertexShader.replace(
		//   "#include <beginnormal_vertex>",
		//   `
		//   #include <beginnormal_vertex>

		//   //CALCULATE ANGLE HERE ALREADY TO BE USED BY NORMALS

		//   float t = uTime * uSpeed;

		//   float angle = uv.y * uFrequency + t * uAmplitude;

		//   mat2 rotate = get2dRotateMatrixx(angle);

		//   objectNormal.xz = rotate * objectNormal.xz;
		//   `
		// );

		shader.vertexShader = shader.vertexShader.replace(
			'#include <begin_vertex>',
			vertExportShader
		);

		shader.fragmentShader =
			`
            varying vec3 vPositionW;
            varying vec2 vUvs; 
            varying vec3 vNormalW;

      
      vec3 cosPalette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
        return a + b * cos(6.28318 * (c * t + d));
      }\n` + shader.fragmentShader;

		shader.fragmentShader = shader.fragmentShader.replace(
			'#include <map_fragment>',

			fragShader
		);

		console.log(shader);
	};

	// auto-rotate
	useFrame((state, delta) => {
		if (rotationRef.current) {
			rotationRef.current.rotation.y += delta * 0.125;
			rotationRef.current.rotation.z += delta * 0.125;

			const targetRot = Math.PI * state.pointer.y * -0.25;

			rotationRef.current.rotation.x = lerp(
				rotationRef.current.rotation.x,
				targetRot,
				0.01
			);
		}
	});

	return (
		<>
			{/* <Clone
        // ref={rotationRef}
        object={model.scene}
        modelViewMatrix={model.scene.children[0].modelViewMatrix}
        scale={1}
        rotation-y={Math.PI * 0.5}
      /> */}
			<group ref={rotationRef}>
				<mesh
					//@ts-ignore
					geometry={model.scene.children[0].geometry}
					// material={model.scene.children[0].material}
					material={testMat}
					// modelViewMatrix={model.scene.children[0].modelViewMatrix}
					scale={0.025}
					rotation-x={Math.PI * 0.5}
					rotation-z={Math.PI * 0.15}
				/>
			</group>
		</>
	);

	return (
		<>
			<Clone object={model.scene} scale={0.35} />
			<Clone object={model.scene} scale={0.35} position-x={-4} />
			<Clone object={model.scene} scale={0.35} position-x={4} />
		</>
	);
};

useGLTF.preload('./hamburger.glb');

export default Model;
