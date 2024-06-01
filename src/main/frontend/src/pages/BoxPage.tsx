import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { GizmoHelper, GizmoViewport, OrbitControls } from '@react-three/drei'
import boxIdStore from './mythree/boxIdStore'
import axios from 'axios'
import BoxList from './mythree/BoxList'
import globalVar from './mythree/globalVar'
import { newPositionList} from './mythree/MyBox'
import {CreateAxiosInstance} from "../shared/axios/createAxiosInstance";

function getRandomboxColor(){
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

// BoxPage BoxList 는 전체 복붙하고 pdinContainer palletModal은 부분
// 이 부분 수정
const BoxPage = forwardRef(({loadingData}:any, ref) => {
  useImperativeHandle(ref, () => ({
    handleSubmit,
    handleDelete,
    getBoxList
  }));

  // 이 부분 수정
  const convertPalletType = (palletType:any) => {
    console.log(palletType);
    if (palletType == "11A형" || palletType == "PALLET_TYPE_11A"){
      return [1.1,1.1];
    }
    else if (palletType == "12A형" || palletType == "PALLET_TYPE_12A"){
      return [1.0,1.2];
    }
    else if (palletType == "11B형" || palletType == "PALLET_TYPE_11B"){
      return [1.1,1.1];
    }
    else if (palletType == "13B형" || palletType == "PALLET_TYPE_13B"){
      return [1.1,1.3];
    }
    else if (palletType == "15A형" || palletType == "PALLET_TYPE_15A"){
      return [1.1,1.4];
    }
  }


  async function handleSubmit (palletId:any, palletType:any, height:any){
    // props로 받은, OnCreate()함수를 호출해 사용자가 입력한 값들을 보내줌
    state.boxColor = getRandomboxColor();
    const defaultPosition = [0,0,0];
    // 이 부분 수정 추가버튼 누르면 팔렛트 타입 해당 사이즈 할당
    const newSize:any = convertPalletType(palletType)
    console.log(newSize)
    state.length = newSize[0]
    state.width = newSize[1]
    // 이 부분 수정
    defaultPosition[1] = defaultPosition[1] + height/2 + globalVar.get_dy

    OnCreate(palletId, defaultPosition, Number(state.length), Number(state.width), Number(height), state.boxColor);

    alert('추가 완료!')
    setState({
      length: 1,
      width: 1,
      height: 1,
      boxColor: ""
    });
  }

  async function handleDelete (palletId:any){
    onRemove(palletId)
  }

  const OnCreate = (palletId:any, position:any,length:any,width:any,height:any,boxColor:any) => {
    console.log("onCreate 실행")

    const newBox = {
      id: palletId,
      position,
      length,
      width,
      height,
      boxColor,
    }
    //boxId.current += 1;
    setBoxList([newBox, ...boxList]) // 기존의 boxList에 newBox 추가
  }

  const onRemove = (targetId: any) => {
    console.log(`${targetId}가 삭제되었습니다.`)
    // 원래있던 일기data.id와 삭제버튼을 누른id의 값이 같으면,
    // 그 값은 제외하고 새로운 배열을 만들어서 newDiaryList에 저장
    const newBoxList = boxList.filter((boxList: { id: any }) => {
      return boxList.id !== targetId
    })
    setBoxList(newBoxList); // 삭제한 데이터 배열을 setData()에 상태를 변화시킴
  }

  // const handleChangeState = (e:any) => {
  //   setState({
  //     ...state,
  //     [e.target.name]: e.target.value,
  //     // 객체안에서 key를 작성하는 []배열의 비구조화 할당
  //     // 즉, [e.target.name] 이라는 key는 전달받은 name이 author면 author의 인풋값을 받아 업데이트.
  //   })
  // }

  const {targetBoxId, setTargetBoxId}:any = boxIdStore() // 삭제를 위한 현재 선택 id 보관소
  const [boxList, setBoxList]:any = useState([]) // 박스 객체 리스트, map을 이용해 MyBox 객체 return
  const boxId = useRef(0) // key값 할당을 위한 ref
  const [state, setState] : any = useState({ // Input Value 관리
    length: 1,
    width: 1,
    height: 1,
    boxColor: ""
  });

  const handlerBoxList = (data:any) => { // setState 함수를 인자로 전달하기 위한 handler
    setBoxList(data);
  }

  //const { idx } = useParams(); // /board/:idx와 동일한 변수명으로 데이터를 꺼낼 수 있습니다.

  // 이 부분 수정
  const [containerType, setContainerType]:any = useState("")

  // 이 부분 합칠때 삭제 - 더미데이터
  useEffect(()=>{
    const dummy = globalVar.get_defaultData
    setBoxList(dummy)
  },[])

  // 이 부분 수정
  const getBoxList = async (containerType:any) => { // 현재는 더미데이터로 가져온 것 같은 역할, 서버에서 boxList를 받아오는 함수

    const resp = loadingData;
    const newList:any = []
    setContainerType(containerType);

    resp.map((it:any) =>{
      // 이 부분 수정
      const newSize:any = convertPalletType(it.palletType)
      const newBox = {
        id: it.id,
        position: [it.x, it.y, it.z],
        length: newSize[0],
        width: newSize[1],
        height: it.height,
        boxColor: getRandomboxColor(),
      }
      newList.push(newBox)
    })
    // console.log(newList)

    // 이 부분 밑줄 주석 제거
    setBoxList(newList);
    // 이 부분 수정
  };

  const [test1, setTest1]:any = useState([])
  // 바뀐 position이 담긴 배열을 가져오기
  const onSave = () => {
    console.log(newPositionList)
    const newList:any = []
    newPositionList.map((it:any) => {
      const idIndex = boxList.findIndex(((element: { id: any })=>element.id==it.id))
      if( idIndex != -1 ){
        newList.push(newPositionList[idIndex])
      } // 존재x -> 생성
    })
    console.log("----------newPositionList----------")
    console.log(newPositionList)

    console.log("----------newList----------")
    console.log(newList)
    // 이 부분 수정 합칠때 삭제
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
              .finally(() => {});
          // 익제 세팅 코드
          // const newBox = {
          //   id: it.id,
          //   position: [it.position[0], it.position[1], it.position[2]],
          //   length: 1,
          //   width: 1,
          //   height: 1,
          //   boxColor: getRandomboxColor(),
          // }
          // setTest1([newBox, ...test1]) // 기존의 boxList에 newBox 추가
        }


    )
  }

  // boxList를 onSave에서 가져온 데이터로 갱신
  // const onLoad = () =>{
  //   console.log("------test1------")
  //   console.log(test1)
  //   //OnCreate(palletId, defaultPosition, Number(state.length), Number(state.width), Number(height), state.boxColor);

  //   setBoxList([...test1])
  // }

  return (
      <main className="flex flex-col items-center justify-between min-h-screen ">
        <div style={{ width: "55.3vw", height: "44vh" }}>
          <button onClick={onSave}>저장</button>
          {/* 밑줄 익제 세팅 코드 */}
          {/* <button onClick={onLoad}>불러오기</button> */}
          {/* <div className='bg-white'>
        <input
          name="length"
          value={state.length}
          onChange={handleChangeState}
        />가로
      </div>
      <div>
        <input
          name="width"
          value={state.width}
          onChange={handleChangeState}
        />세로
      </div>
      <div>
        <input
          name="height"
          value={state.height}
          onChange={handleChangeState}
        />높이
        </div> */}

          {/* <button className='bg-white' onClick={handleSubmit}>추가하기</button>
      <div> </div>
      <button className='bg-white' onClick={()=>{
         if (window.confirm(`${targetBoxId}번째 상자를 삭제하시겠습니까?`)) {
            onRemove(targetBoxId); // 선택한 해당요소 id값을 전달
         }}}>삭제하기</button>

      <button className='bg-white' onClick={onSave}>저장하기</button> */}


          <Canvas
              camera={{position: [10, 10, 10],zoom: 2.5}}

              shadows>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[30, 30, 40]} angle={0.5} penumbra={1} decay={0} intensity={Math.PI}  />

            {/* 이 부분 수정 */}
            <BoxList containerType={containerType} boxList={boxList} handlerBoxList={handlerBoxList}/>

            <gridHelper args={[50, 50]} position={[0, globalVar.get_dy, 0]}/>
            <axesHelper args={[0]} />
            <GizmoHelper alignment="bottom-right" margin={[100, 100]}>
              <GizmoViewport labelColor="white" axisHeadScale={1} />
            </GizmoHelper>
            <OrbitControls makeDefault />
          </Canvas>
        </div>
      </main>
  );
})

export default BoxPage;