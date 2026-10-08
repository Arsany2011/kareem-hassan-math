import { Float } from '@react-three/drei'

export default function FloatingGeometry() {
  return (
    <>
      <Float speed={1.1} rotationIntensity={0.8} floatIntensity={0.7}>
        <mesh position={[-1.7, 1.45, -1.2]}>
          <icosahedronGeometry args={[0.38, 0]} />
          <meshStandardMaterial color="#c89b4e" metalness={0.7} roughness={0.25} wireframe />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={0.65} floatIntensity={0.5}>
        <mesh position={[1.65, -1.4, -0.8]}>
          <octahedronGeometry args={[0.48, 0]} />
          <meshStandardMaterial color="#d6b66d" metalness={0.65} roughness={0.28} />
        </mesh>
      </Float>
      <Float speed={1.25} rotationIntensity={0.9} floatIntensity={0.55}>
        <mesh position={[4.1, -1.5, -1.7]}>
          <torusGeometry args={[0.38, 0.09, 16, 48]} />
          <meshStandardMaterial color="#679b78" metalness={0.65} roughness={0.25} />
        </mesh>
      </Float>
    </>
  )
}
