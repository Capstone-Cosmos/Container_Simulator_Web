import * as THREE from 'three'
import { useRef, useState } from 'react'
import { PivotControls } from '@react-three/drei'
import { RigidBody, useFixedJoint } from '@react-three/rapier'
import boxIdStore from './boxIdStore'
import globalVar from './globalVar'
import boxPositionStore from './boxPositionStore'

let newPositionList:any = [{id:10, position:[11,22,33]}]


function updateBoxPosition(newId:any, newPosition:any, boxList:any, handlerBoxList:any){
  
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

function MyBox( { id, position, length, width, height, boxColor, boxList, handlerBoxList}:any) {
    const {targetBoxId, setTargetBoxId}:any = boxIdStore()
    const [myPosition, setMyPosition]:any = useState([])
    const [target, setTarget] = useState(false)
    const obj:any = useRef()
    const pointer:any = useRef()
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
          offset={[position[0],position[1]+height/2+globalVar.get_dy,position[2]]}
          visible={target}
          matrix={matrix}
          scale={2}
          disableRotations
          activeAxes={[true, true, true]}
          depthTest={false}
          // When drag is over snap matrix back to the object
          onDragEnd={() => {
            matrix.setPosition(vec.copy(obj.current?.translation()));
            let vector = vec.copy(obj.current?.translation());
            let newPosition = [vector.x + position[0], vector.y + position[1] + height/2+globalVar.get_dy , vector.z + position[2]]
            setMyPosition(newPosition);
            //console.log(newPosition);
            //setMyPosition([vector.x + position[0], vector.y + position[1] + height/2+dy , vector.z + position[2]]);
            updateBoxPosition(id,newPosition,boxList,handlerBoxList);
          }}
          // Get pivot matrix, apply it to the empty RB
          onDrag={(local) => pointer.current?.setNextKinematicTranslation(vec.setFromMatrixPosition(local))}
        />
        <RigidBody canSleep={false} type="kinematicPosition" ref={pointer} />
        <RigidBody ccd canSleep={false} type={target? 'dynamic':'fixed'} colliders="hull" enabledRotations={[false, false, false]} ref={obj}>
          <mesh
            position={[position[0],position[1]+height/2+globalVar.get_dy,position[2]]} 
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