import * as THREE from 'three'
import { useRef, useState } from 'react'
import { PivotControls } from '@react-three/drei'
import { RapierRigidBody, RigidBody, useFixedJoint } from '@react-three/rapier'
import boxIdStore from './boxIdStore'
import globalVar from './globalVar'
import boxPositionStore from './boxPositionStore'
import { useFrame } from '@react-three/fiber'

let newPositionList:any = []


function updateBoxPosition(newId:any, newPosition:any){

    // 이동한 박스 객체의 인덱스
    const isinList = newPositionList.findIndex(((element: { id: any })=>element.id==newId))

    // 존재o -> 수정
    if( isinList != -1 ){
        newPositionList[isinList].position = newPosition;
    } // 존재x -> 생성
    else{
        newPositionList.push({id:newId, position:newPosition})
    }

}

function MyBox( { id, position, length, width, height, boxColor}:any) {
    // const [ref, api] = useRigidBody(() => ({ type: 'dynamic', position: [0,
    //   2, 0], mass: 1, ...props }));

    const {targetBoxId, setTargetBoxId}:any = boxIdStore()
    const [target, setTarget] = useState(false)
    const obj:any = useRef()
    const pointer:any = useRef()
    //const pointer:any = useRef<RapierRigidBody>(null);

    const [matrix] = useState(() => new THREE.Matrix4())
    const vec = new THREE.Vector3()
    useFixedJoint(pointer, obj, [
        [0, 0, 0],
        [0, 0, 0, 1],
        [0, 0, 0],
        [0, 0, 0, 1]
    ])
   

    return (
        <group>
            <PivotControls
                offset={[position[0],position[1],position[2]]}
                visible={target}
                matrix={matrix}
                scale={2}
                disableRotations
                activeAxes={[true, true, true]}
                depthTest={false}
                // When drag is over snap matrix back to the object
                onDragEnd={() => {
                    matrix.setPosition(vec.copy(obj.current?.translation()));
                    const vector = vec.copy(obj.current?.translation());
               
               
                    const newPosition = [vector.x + position[0], vector.y + position[1], vector.z + position[2]]
                
                    //setMyPosition([vector.x + position[0], vector.y + position[1] + height/2+dy , vector.z + position[2]]);
                    updateBoxPosition(id,newPosition);
                }}
                // Get pivot matrix, apply it to the empty RB
                onDrag={(local) => {pointer.current?.setNextKinematicTranslation(vec.setFromMatrixPosition(local))
                }}
            />
            <RigidBody canSleep={false} type="kinematicPosition" ref={pointer} />
            <RigidBody ccd canSleep={false} type={target? 'dynamic':'fixed'} colliders="cuboid" enabledRotations={[false, false, false]} ref={obj}>
                <mesh
                    position={[position[0],position[1],position[2]]}
                    castShadow receiveShadow
                    onClick={ (e) => {
                        setTarget(!target);
                        e.stopPropagation();
                        setTargetBoxId(id);
                    
                    }}
                >
                    <boxGeometry args={[length, height, width]} />
                    <meshStandardMaterial color={boxColor}/>
                </mesh>
            </RigidBody>
        </group>
    )
}

export {MyBox, newPositionList}