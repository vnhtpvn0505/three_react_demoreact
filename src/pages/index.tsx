import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stats, OrbitControls, useGLTF, MeshTransmissionMaterial } from "@react-three/drei";
import * as three from "three";





function Cube(props) {
  const ref = useRef()
  const modal = useGLTF('/obj/ver2.glb')
  
  return (
    <primitive object={modal.scene} scale={[0.01, 0.01, 0.01]} />
  );
};

const Scene = () => {
  return (
    <>
      <pointLight intensity={1.0} position={[5, 3, 5]} />
      <Cube />
    </>
  );
};

const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Canvas
        concurrent
        camera={{
          near: 0.1,
          far: 1000,
          zoom: 1,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor("#252934");
        }}
      >
        <Stats />
        <OrbitControls />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default App;
