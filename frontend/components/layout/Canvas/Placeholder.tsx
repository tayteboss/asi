import type { Vector3 } from 'three';

export default function Placeholder({
	position,
	scale
}: {
	position: any;
	scale: any;
}) {
	return (
		<mesh position={position} scale={scale}>
			<boxGeometry args={[1, 1, 1, 2, 2, 2]} />
			<meshBasicMaterial wireframe color="white" />
		</mesh>
	);
}
