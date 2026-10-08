import { Float, Text } from '@react-three/drei'

const symbols = [
  { text: '+', position: [-3.1, 1.1, 0.2], size: 1.2, color: '#efc36d', speed: 1.1 },
  { text: '−', position: [3.1, 1.4, -0.3], size: 1.3, color: '#dba950', speed: 1.4 },
  { text: '×', position: [2.7, -1.1, 0.4], size: 1.25, color: '#f6d994', speed: 1.2 },
  { text: '=', position: [-2.8, -1.2, -0.2], size: 1.15, color: '#d6a34d', speed: 1.5 },
  { text: '√', position: [-4.1, 0.1, -1], size: 0.85, color: '#b8d7b9', speed: 1.3 },
  { text: 'π', position: [4.05, 0.05, -1.1], size: 0.95, color: '#e8bd68', speed: 1.05 },
  { text: '÷', position: [0.8, 1.75, -1.5], size: 0.7, color: '#b8d7b9', speed: 1.35 },
]

export default function FloatingSymbols() {
  return symbols.map((symbol) => (
    <Float key={symbol.text} speed={symbol.speed} rotationIntensity={0.35} floatIntensity={0.65}>
      <Text
        position={symbol.position}
        fontSize={symbol.size}
        color={symbol.color}
        outlineWidth={0.018}
        outlineColor="#493311"
        anchorX="center"
        anchorY="middle"
      >
        {symbol.text}
      </Text>
    </Float>
  ))
}
