import { Physics, RigidBody } from '@react-three/rapier'
import ShippingContainer from './ShippingContainer'
import {MyBox} from './MyBox'
import globalVar from './globalVar'

export default function BoxList({boxList, handlerBoxList}:any){
    return(
        <Physics>
  
          <ShippingContainer dy={globalVar.get_dy}/>
          <RigidBody type="fixed" colliders="hull">
          <mesh castShadow receiveShadow position={[0, -1, 0]}>
            <boxGeometry args={[100, 1, 100]} />
            <meshStandardMaterial color="white" />
          </mesh>
          </RigidBody>
  
          {boxList.map((it:any) => {
            // key는 고유한 id를 가지고있는 값으로 설정해주는게 좋음
            return (
              // ...을 이용해 it안에 있는 모든 데이터를 props으로 <DiaryItem/>에 전달
              <MyBox 
                key={it.id}
                id={it.id}
                position={it.position}
                length={it.length} 
                width={it.width} 
                height={it.height} 
                boxColor={it.boxColor}
                boxList={boxList}
                handlerBoxList={handlerBoxList}
                />
            )
          })}
        </Physics>
    )
  }