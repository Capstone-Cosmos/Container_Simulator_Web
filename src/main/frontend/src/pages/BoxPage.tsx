import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { GizmoHelper, GizmoViewport, OrbitControls, PivotControls } from '@react-three/drei'
import boxIdStore from './mythree/boxIdStore'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BoxList from './mythree/BoxList'
import globalVar from './mythree/globalVar'
import {MyBox , newPositionList} from './mythree/MyBox'
import React from 'react'

function getRandomboxColor(){
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

const BoxPage = forwardRef((props, ref) => {
  
  useImperativeHandle(ref, () => ({
    handleSubmit,
    handleDelete
  }));

  async function handleSubmit (){
    // props로 받은, OnCreate()함수를 호출해 사용자가 입력한 값들을 보내줌
    state.boxColor = getRandomboxColor();
    const defaultPosition = [0,0,0];
    OnCreate(defaultPosition, Number(state.length), Number(state.width), Number(state.height), state.boxColor);
    alert('추가 완료!')
    // 일기 내용 빈값으로 초기화
    setState({
      length: 1,
      width: 1,
      height: 1,
      boxColor: ""
    });
  }

  async function handleDelete (){
    onRemove(targetBoxId)
  }

  const OnCreate = (position:any,length:any,width:any,height:any,boxColor:any) => {
    const newBox = {
      id: boxId.current,
      position,
      length,
      width,
      height,
      boxColor,
    }
    boxId.current += 1;
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
  boxId.current = boxList.length
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

  const getBoxList = async () => { // 현재는 더미데이터로 가져온 것 같은 역할, 서버에서 boxList를 받아오는 함수
    const resp = globalVar.defaultData;
    setBoxList(resp);
  };

  useEffect(() => { // 처음 rendering 시 실행
    getBoxList();
  }, []);


  // 바뀐 position이 담긴 배열을 가져오기
  const onSave = () => {
    console.log(newPositionList)
    newPositionList.map((it:any) => {
      const idIndex = boxList.findIndex(((element: { id: any })=>element.id==it.id))
      if( idIndex != -1 ){
        boxList[idIndex].position = it.position;
      } // 존재x -> 생성
      
    })
    console.log("NewList:" );
    console.log(newPositionList)

    console.log("BoxList:")
    console.log(boxList)

    console.log(typeof(boxList[0].position[0]))

    boxList.map((it:any) => {
      axios
          .post('/members', {
            key:it.id,
            id:it.id,
            position:it.position,
            length:it.length,
            width:it.width, 
            height:it.height, 
            boxColor:it.boxColor
          })
          .then((response) => {

          })
          .catch((error) => {

          })
          .finally(() => {});      
      }
    )
  }

  // boxList를 onSave에서 가져온 데이터로 갱신
  const onLoad = () =>{
    boxList.map((it:any)=>{

    })
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div style={{ width: "55.1vw", height: "47vh" }}>
        
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

          <BoxList boxList={boxList} handlerBoxList={handlerBoxList}/>
          
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