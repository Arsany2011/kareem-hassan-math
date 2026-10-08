import { Canvas } from '@react-three/fiber'
import { Environment, Float, OrbitControls, Sparkles, Text } from '@react-three/drei'
import FloatingSymbols from './FloatingSymbols.jsx'
import FloatingGeometry from './FloatingGeometry.jsx'
import SceneLighting from './SceneLighting.jsx'
import '../../styles/3d-scene.css'

export default function MathScene() {
  return (
    <div className="math-scene" aria-label="مشهد رياضيات ثلاثي الأبعاد">
      <Canvas camera={{ position: [0, 0, 9], fov: 42 }} dpr={[1, 1.6]}>
        <color attach="background" args={['#041b15']} />
        <fog attach="fog" args={['#041b15', 9, 22]} />
        <SceneLighting />
        <mesh position={[0, 0, -3]}>
          <planeGeometry args={[22, 13]} />
          <meshStandardMaterial color="#082c21" roughness={0.95} />
        </mesh>
        <gridHelper args={[20, 20, '#174a39', '#103729']} position={[0, -2.2, -2.7]} />
        <FloatingSymbols />
        <FloatingGeometry />
        <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.25}>
          <Text
            position={[0, 0.15, 0]}
            fontSize={0.7}
            maxWidth={5.5}
            textAlign="center"
            anchorX="center"
            anchorY="middle"
            color="#f5d28a"
            outlineWidth={0.012}
            outlineColor="#553b14"
          >
            رياضيات
          </Text>
        </Float>
        <Sparkles count={85} scale={[13, 7, 5]} size={2} speed={0.25} color="#e5bd72" />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 1.8} />
      </Canvas>
      <div className="scene-vignette" />
    </div>
  )
}
