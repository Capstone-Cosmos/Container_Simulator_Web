
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva'
import { RigidBody, useFixedJoint } from '@react-three/rapier'

export default function ShippingContainer(props:any) {
  const { nodes, materials }:any = useGLTF('/ContainerFinal.gltf')
  const { wireframe, visible, rigidbody, opacity } = useControls({ wireframe: false, visible: true, rigidbody: true, opacity:{value: 1, min: 0, max: 1 }})
  const obj:any = useRef()
  const pointer:any = useRef()
  useFixedJoint(pointer, obj, [
    [0, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 0],
    [0, 0, 0, 1]
  ])
  return (
      <group {...props} dispose={null} scale={0.01}>
        <RigidBody type={rigidbody? "fixed" : "dynamic"} colliders="hull" ref={obj}>
          <mesh
              visible={visible}
              position={[0,170,-700]}
              castShadow
              receiveShadow
              geometry={nodes.Container.geometry}
              material={materials.Material}
              rotation={[-Math.PI / 2, Math.PI / 2, 0]}
              scale={100}>
            <meshStandardMaterial transparent opacity={opacity} wireframe={wireframe} color={'#757575'}/>
          </mesh>
        </RigidBody>
      </group>
  )
}

useGLTF.preload('/ContainerFinal.gltf')
