
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva'

import { RigidBody, useFixedJoint } from '@react-three/rapier'
import globalVar from './globalVar'

export default function ShippingContainer(props:any) {
  //const { nodes, materials }:any = useGLTF('/container20fo.gltf')
  //const { nodes, materials }:any = useGLTF('/ContainerFinal.gltf')
  console.log("컨테이너 리렌더")
  const { nodes, materials }:any = useGLTF('/container20fo.gltf')
  const containerColor = '#757575'
  const { wireframe, visible, rigidbody, opacity } = useControls({ wireframe: false, visible: true, rigidbody: true, opacity:{value: 0.4, min: 0, max: 1 }})
  const obj:any = useRef()
  const pointer:any = useRef()
  const existingToContainer = -5
  useFixedJoint(pointer, obj, [
    [0, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 0],
    [0, 0, 0, 1]
  ])
  const ratio = 0.55
  return (
      <group>
        <RigidBody type={rigidbody? "fixed" : "dynamic"} colliders="trimesh" >
          <mesh castShadow receiveShadow rotation={[0,0,0]} position={[1.23, 1.3 + globalVar.get_dy, existingToContainer -0.4]}>
            <boxGeometry args={[0.01, 2.55, 6.5]} />
            <meshStandardMaterial transparent opacity={opacity} wireframe={wireframe} color={containerColor} />
          </mesh>
          <mesh castShadow receiveShadow rotation={[0,0,0]} position={[-1.22, 1.3 + globalVar.get_dy, existingToContainer -0.4]}>
            <boxGeometry args={[0.01, 2.55, 6.5]} />
            <meshStandardMaterial transparent opacity={opacity} wireframe={wireframe} color={containerColor} />
          </mesh>
          <mesh castShadow receiveShadow rotation={[0,0,0]} position={[0, 1.3 + globalVar.get_dy, existingToContainer - 3.63]}>
            <boxGeometry args={[2.4, 2.55, 0.01]} />
            <meshStandardMaterial transparent opacity={opacity} wireframe={wireframe} color={containerColor} />
          </mesh>
        </RigidBody>

        <group {...props} position={[0,-0.7,existingToContainer]}dispose={null} scale={0.011}>
          {/* <RigidBody type="fixed" colliders="trimesh" > */}
          <group>

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.scd20fo_door_r_sealing.geometry}
                material={materials.rubber_Mat}>
              <meshStandardMaterial transparent opacity={opacity} wireframe={wireframe} color={containerColor}/>
            </mesh>


            <mesh
                castShadow
                receiveShadow
                geometry={nodes.scd20fo_door_l_rod_lock_1.geometry}
                material={materials.rawmetal_Mat}>
              <meshStandardMaterial transparent opacity={opacity} wireframe={wireframe} color={containerColor}/>
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.scd20fo_door_l_rod_lock_2.geometry}
                material={materials.rawmetal_Mat}>
              <meshStandardMaterial transparent opacity={opacity} wireframe={wireframe} color={containerColor}/>
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.scd20fo_door_r_rod_lock_1.geometry}
                material={materials.rawmetal_Mat}>
              <meshStandardMaterial transparent opacity={opacity} wireframe={wireframe} color={containerColor}/>
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.scd20fo_door_r_rod_lock_2.geometry}
                material={materials.rawmetal_Mat}>
              <meshStandardMaterial transparent opacity={opacity} wireframe={wireframe} color={containerColor}/>
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.scd20fo_door_l_sealing.geometry}
                material={materials.rubber_Mat}>
              <meshStandardMaterial transparent opacity={opacity} wireframe={wireframe} color={containerColor}/>
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.scd20fo_body_walls.geometry}
                material={materials.paintedmetal_Mat}>
              <meshStandardMaterial transparent opacity={opacity} wireframe={wireframe} color={containerColor}/>
            </mesh>

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.scd20fo_body_frame.geometry}
                material={materials.paintedmetal_Mat}>
              <meshStandardMaterial transparent opacity={opacity} wireframe={wireframe} color={containerColor}/>
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.scd20fo_door_l_frame.geometry}
                material={materials.paintedmetal_Mat}>
              <meshStandardMaterial transparent opacity={opacity} wireframe={wireframe} color={containerColor}/>
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.scd20fo_door_r_frame.geometry}
                material={materials.paintedmetal_Mat}>
              <meshStandardMaterial transparent opacity={opacity} wireframe={wireframe} color={containerColor}/>
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.scd20fo_door_l_wall.geometry}
                material={materials.paintedmetal_Mat}>
              <meshStandardMaterial transparent opacity={opacity} wireframe={wireframe} color={containerColor}/>
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.scd20fo_door_r_wall.geometry}
                material={materials.paintedmetal_Mat}>
              <meshStandardMaterial transparent opacity={opacity} wireframe={wireframe} color={containerColor}/>
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.scd20fo_door_l_hinges.geometry}
                material={materials.paintedmetal_Mat}>
              <meshStandardMaterial transparent opacity={opacity} wireframe={wireframe} color={containerColor}/>
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.scd20fo_door_r_hinges.geometry}
                material={materials.paintedmetal_Mat}>
              <meshStandardMaterial transparent opacity={opacity} wireframe={wireframe} color={containerColor}/>
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.scd20fo_door_l_lock_hinges_1.geometry}
                material={materials.rawmetal_Mat}>
              <meshStandardMaterial transparent opacity={opacity} wireframe={wireframe} color={containerColor}/>
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.scd20fo_door_l_lock_hinges_2.geometry}
                material={materials.rawmetal_Mat}>
              <meshStandardMaterial transparent opacity={opacity} wireframe={wireframe} color={containerColor}/>
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.scd20fo_door_r_lock_hinges_2.geometry}
                material={materials.rawmetal_Mat}>
              <meshStandardMaterial transparent opacity={opacity} wireframe={wireframe} color={containerColor}/>
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.scd20fo_door_r_lock_hinges_1.geometry}
                material={materials.rawmetal_Mat}>
              <meshStandardMaterial transparent opacity={opacity} wireframe={wireframe} color={containerColor}/>
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.scd20fo_door_l_lock_1_rivets.geometry}
                material={materials.rawmetal_Mat}>
              <meshStandardMaterial transparent opacity={opacity} wireframe={wireframe} color={containerColor}/>
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.scd20fo_door_l_lock_2_rivets.geometry}
                material={materials.rawmetal_Mat}>
              <meshStandardMaterial transparent opacity={opacity} wireframe={wireframe} color={containerColor}/>
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.scd20fo_door_r_lock_2_rivets.geometry}
                material={materials.rawmetal_Mat}>
              <meshStandardMaterial transparent opacity={opacity} wireframe={wireframe} color={containerColor}/>
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.scd20fo_door_r_lock_1_rivets.geometry}
                material={materials.rawmetal_Mat}>
              <meshStandardMaterial transparent opacity={opacity} wireframe={wireframe} color={containerColor}/>
            </mesh>
          </group>
          {/* </RigidBody> */}
        </group>
      </group>
  )
}

useGLTF.preload('/container20fo.gltf')
