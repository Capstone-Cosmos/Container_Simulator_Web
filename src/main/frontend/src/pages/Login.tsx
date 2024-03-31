import React, { useState, EventHandler, ReactNode, useCallback } from 'react'
import axios from 'axios';
import useInput from '../useInput';
import { Link, useNavigate } from 'react-router-dom';
export default function Login() {

  const navigate = useNavigate();
  // 아이디 / 비밀번호 / 비밀번호확인 / 이메일 / 주소 / 업체명 / 대표명
  const [memberId, onChangeMemberId] = useInput('');
  const [memberPassword, onChangememberPassword] = useInput('');
  const [mismatchError, setMismatchError] = useState(false);

  const onSubmit = useCallback(
    (e:any) => {
      e.preventDefault();
      if (!mismatchError) {
        console.log(memberId, memberPassword);
        console.log('서버로 로그인');
        navigate("/usermain");
        // 요청 보내기 직전에 값들을 전부 초기화 해주자. 아니라면 요청을 연달아 날릴 때
        // 첫번째 요청때 남아있던 결과가 두번째 요청때도 똑같이 표시되는
        // 문제가 있을 수 있다.
        axios
          .post('/login', null, {params:{
            username: memberId,
            password: memberPassword
          }})
          .then((response) => {
            // 성공시
            console.log(response);
          })
          .catch((error) => {
            // 실패시
            console.log(error.response);
          })
          .finally(() => {});
      }
    },
    [memberId, memberPassword ],
  );

	return (
  <div className="relative h-screen bg-[#f1f3f5] overflow-hidden">
    <form onSubmit={onSubmit}>

    {/*상단바*/}
    <div className="absolute -translate-x-1/2 left-1/2 top-0 w-screen h-[96px]">
      <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#f8f9fa] border-[solid] border-#e9ecef border border-[0_0_1px]"></div>
      <Link to={"/"} className="absolute left-[6.25%] right-[79.3%] top-[8.33%] bottom-[18.75%] text-[48px] font-['Noto_Sans_KR'] font-bold text-[#74b5dd] whitespace-nowrap">Cosmos</Link>
      <div className="absolute left-[82.5%] right-[6.25%] top-[38.54%] bottom-[37.5%] flex flex-row items-center justify-start gap-[20px]">
        <Link to={"/member/login"} className="text-[16px] font-['Noto_Sans_KR'] font-medium text-[#74b5dd] text-center whitespace-nowrap">로그인</Link>
        <div className="w-[20px] h-0 shrink-0 border-[1px] border-solid border-[#ced4da]"></div>
        <Link to={"/"} className="text-[16px] font-['Noto_Sans_KR'] font-medium text-[#74b5dd] text-center whitespace-nowrap">회원가입</Link>
      </div>
    </div>

    {/*틀*/}
    <div className="absolute -translate-x-1/2 left-1/2 top-[120px] w-[740px] h-[576px] bg-[#f8f9fa] rounded-[4px]"></div>

    {/*로그인 로고*/}
    <div className="absolute -translate-x-1/2 left-1/2 top-[174px] text-[34px] font-['Noto_Sans_KR'] font-bold text-[#212529] text-center whitespace-nowrap">Cosmos 로그인</div>

    {/*아이디*/}
    <div className="absolute -translate-x-1/2 left-1/2 top-[276px] w-[550px] h-[65px] flex">
      <input type="text" id="memberId" name="memberId" value={memberId} onChange={onChangeMemberId} className="absolute left-0 top-0 w-[550px] h-[65px] bg-[#f1f3f5] border-[1px] border-solid border-[#dee2e6] rounded-[4px]"></input>
      <div className="absolute left-[16px] top-[30px] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#181b1e] whitespace-nowrap"></div>
      <div className="absolute left-[16px] top-[10px] text-[14px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">아이디</div>
    </div>

    {/*비밀번호*/}
    <div className="absolute -translate-x-1/2 left-1/2 top-[357px] w-[550px] h-[65px] flex">
      <input type="password" id="memberPassword" name="memberPassword" value={memberPassword} onChange={onChangememberPassword} className="absolute left-0 top-0 w-[550px] h-[65px] bg-[#f1f3f5] border-[1px] border-solid border-[#dee2e6] rounded-[4px]"></input>
      <div className="absolute left-[16px] top-[30px] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#181b1e] whitespace-nowrap"></div>
      <div className="absolute left-[16px] top-[10px] text-[14px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">비밀번호</div>
    </div>

    {/*ID저장*/}
    <div className="absolute left-[34.2%] top-[438px] w-[78px] h-[23px]">
      <div className="absolute left-0 right-0 top-0 bottom-0">
        <div className="absolute left-[35.9%] right-0 top-0 bottom-0 text-[16px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">ID 저장</div>
        <div className="absolute left-0 right-[74.36%] top-[8.7%] bottom-[4.35%] bg-[#f8f9fa] border-[1px] border-solid border-[#3563e9] rounded-[4px] overflow-hidden">
          <img className="absolute left-[6.25%] right-[6.25%] top-[6.25%] bottom-[6.25%]" width="17" height="17" src="Icons/Feather/checkI52_170;5_3331;5_3326;54_5184.png"></img>
        </div>
      </div>
    </div>

    {/*아이디/비밀번호 찾기*/}
    <div className="absolute -translate-x-1/2 left-[61.5%] top-[438px] text-[16px] flex font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">아이디｜비밀번호 찾기</div>

    {/*하단부*/}
    <div className="absolute -translate-x-1/2 left-1/2 top-[614px] flex flex-row items-center justify-start gap-[20px]">
      <div className="text-[16px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">아직 회원이 아니신가요?</div>
      <Link to={"/"} className="text-[18px] font-['Noto_Sans_KR'] font-bold text-[#3563e9] whitespace-nowrap">회원가입</Link>
    </div>

    {/*로그인버튼*/}
    <button type="submit" className="absolute -translate-x-1/2 left-1/2 top-[493px] w-[550px] h-[65px] flex">
      <div className="absolute left-0 top-0 w-[550px] h-[65px] bg-[#74b5dd] rounded-[4px]"></div>
      <div className="absolute left-[250px] top-[20px] text-[18px] font-['Noto_Sans_KR'] font-bold text-[#f8f9fa] whitespace-nowrap">로그인</div>
    </button>

    </form>
  </div>
  )
}

