import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { button, useControls } from 'leva'
import { RigidBody, useFixedJoint } from '@react-three/rapier'
import { newPositionList } from './MyBox'
import { CreateAxiosInstance } from '../../shared/axios/createAxiosInstance'
import globalVar from './globalVar'


export default function ShippingContainer3(props:any) {

  const { nodes, materials }:any = useGLTF('/container20fo.gltf')
  const containerColor = '#757575'
  const { wireframe, visible, opacity } = useControls({ wireframe: false, visible: true, opacity:{value: 0.4, min: 0, max: 1 }, 저장: button((get) => {
      newPositionList.map((it:any) => {
        // 이 부분 수정 주석 처리 삭제
        CreateAxiosInstance()
            .patch('/pallets', {
              id:it.id,
              x: it.position[0],
              y: it.position[1],
              z: it.position[2]
            })
            .then((response) => {

            })
            .catch((error) => {

            })
            .finally(() => {});})
    })})
  const obj:any = useRef()
  const pointer:any = useRef()
  const existingToContainer = -8
  useFixedJoint(pointer, obj, [
    [0, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 0],
    [0, 0, 0, 1]
  ])
  const ratio = 0.55
  return (
      <group visible={visible}>
        <RigidBody type="fixed" colliders="trimesh" >
          <mesh castShadow receiveShadow rotation={[0,0,0]} position={[1.23, 1.3 + globalVar.get_dy, existingToContainer -0.4*2]}>
            <boxGeometry args={[0.02, 2.55+0.6, 6.5*2]} />
            <meshStandardMaterial transparent opacity={opacity} wireframe={wireframe} color={containerColor} />
          </mesh>
          <mesh castShadow receiveShadow rotation={[0,0,0]} position={[-1.22, 1.3 + globalVar.get_dy, existingToContainer -0.4*2]} >
            <boxGeometry args={[0.02, 2.55+0.6, 6.5*2]} />
            <meshStandardMaterial transparent opacity={opacity} wireframe={wireframe} color={containerColor} />
          </mesh>
          <mesh castShadow receiveShadow rotation={[0,0,0]} position={[0, 1.3 + globalVar.get_dy, existingToContainer - 3.63*2]}>
            <boxGeometry args={[2.4, 2.55+0.6, 0.01]} />
            <meshStandardMaterial transparent opacity={opacity} wireframe={wireframe} color={containerColor} />
          </mesh>
          <mesh castShadow receiveShadow rotation={[0,0,0]} position={[0, 1.3 + globalVar.get_dy + 1.6, existingToContainer - 0.9 ]}>
            <boxGeometry args={[2.6, 0.02, 6.5*2]} />
            <meshStandardMaterial transparent opacity={opacity} wireframe={wireframe} color={containerColor} />
          </mesh>
        </RigidBody>

        <group {...props} position={[0,-0.7,existingToContainer]}dispose={null} scale={[0.02*ratio,0.02*1.13*ratio,0.04*ratio]}>
          {/* <RigidBody type={rigidbody? "fixed" : "dynamic"} colliders="trimesh" > */}
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