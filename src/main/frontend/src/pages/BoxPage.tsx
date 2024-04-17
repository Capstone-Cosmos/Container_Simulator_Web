"use client";

import MyBox from "../three/MyBox";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function BoxPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={{ width: "50vw", height: "50vh" }}>
        <Canvas
          camera={{
            position: [0, 1, 10],
          }}
        >
          <ambientLight />
          <MyBox position={[0, 0, 0]} />

          <gridHelper args={[10, 10]} />
          <axesHelper args={[8]} />

          <OrbitControls />
        </Canvas>
      </div>
      <div className="absolute top-[600px] w-[740px] h-[100px] bg-[#f8f9fa] rounded-[4px]  text-[40px] font-['Noto_Sans_KR'] font-medium text-[#74b5dd] text-center text">cosmos 3d test</div>
    </main>
  );
}
