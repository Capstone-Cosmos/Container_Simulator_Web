import { Physics, RigidBody } from '@react-three/rapier'
import ShippingContainer from './ShippingContainer'
import ShippingContainer2 from './ShippingContainer2'
import ShippingContainer3 from './ShippingContainer3'
import {MyBox} from './MyBox'
import globalVar from './globalVar'

export default function BoxList({containerType, boxList, handlerBoxList}:any){

    // 이 부분 수정
    function Container(containerType:any) {
        const containerValue = containerType.containerType;
        if (containerValue == "CONTAINER_TYPE_20FT_DRY") {

            return <ShippingContainer dy={globalVar.get_dy}/>;
        }
        else if (containerValue == "CONTAINER_TYPE_40FT_DRY") {
            return <ShippingContainer2 dy={globalVar.get_dy}/>;
        }
        else if (containerValue == "CONTAINER_TYPE_40FT_HQ") {
            return <ShippingContainer3 dy={globalVar.get_dy}/>;
        } else
            return null;
    }

    return(
        <Physics>
            {/* 이 부분 수정 */}
            <Container containerType={containerType}/>
            {/* 밑줄 익제 세팅 코드
      <ShippingContainer dy={globalVar.get_dy}/> */}
            <RigidBody type="fixed" colliders="hull">
                <mesh castShadow receiveShadow position={[0, -1, 0]}>
                    <boxGeometry args={[100, 1, 100]} />
                    <meshStandardMaterial transparent opacity={0}color="white" />
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

                    />
                )
            })}
        </Physics>
    )
}