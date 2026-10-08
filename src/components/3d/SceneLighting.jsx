export default function SceneLighting() {
  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight position={[4, 5, 6]} intensity={2.4} color="#ffe1a0" />
      <pointLight position={[-4, 1, 2]} intensity={25} color="#23835b" distance={12} />
      <pointLight position={[3, -2, 3]} intensity={18} color="#dca74f" distance={10} />
    </>
  )
}
