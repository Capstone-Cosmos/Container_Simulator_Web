import React, { useState, EventHandler, ReactNode, useCallback } from "react";
import axios from "axios";
import useInput from "../useInput";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [memberId, onChangeMemberId] = useInput("");
  const [memberPassword, onChangememberPassword] = useInput("");

  interface data {

  }
  const onSubmit = async (e: any) => {
    e.preventDefault();
    
    try {
      //아이디와 비번 서버에 보내기
      const response =  await axios.post("/login", null, {
        params: {
          username: memberId,
          password: memberPassword,
        },
      });
       //위 post에 대한 응답으로 토큰 수령
      if (response.status === 200 ){
        localStorage.setItem("accessToken", response.headers.access);
      }
      //받은 토큰을 로컬 스토리지에 저장
      
      navigate("/usermain");
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <div className="relative h-screen bg-[#f1f3f5] overflow-hidden">
      <form onSubmit={onSubmit}>
        {/*틀*/}
        <div className="absolute -translate-x-1/2 left-1/2 top-[120px] w-[740px] h-[576px] bg-[#f8f9fa] rounded-[4px]"></div>

        {/*로그인 로고*/}
        <div className="absolute -translate-x-1/2 left-1/2 top-[174px] text-[34px] font-['Noto_Sans_KR'] font-bold text-[#212529] text-center whitespace-nowrap">
          Cosmos 로그인
        </div>

        {/*아이디*/}
        <div className="absolute -translate-x-1/2 left-1/2 top-[276px] w-[550px] h-[65px] flex">
          <input
            type="text"
            id="memberId"
            name="memberId"
            value={memberId}
            onChange={onChangeMemberId}
            className="absolute left-0 top-0 w-[550px] h-[65px] bg-[#f1f3f5] border-[1px] border-solid border-[#dee2e6] rounded-[4px]"
          ></input>
          <div className="absolute left-[16px] top-[30px] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#181b1e] whitespace-nowrap"></div>
          <div className="absolute left-[16px] top-[10px] text-[14px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
            아이디
          </div>
        </div>

        {/*비밀번호*/}
        <div className="absolute -translate-x-1/2 left-1/2 top-[357px] w-[550px] h-[65px] flex">
          <input
            type="password"
            id="memberPassword"
            name="memberPassword"
            value={memberPassword}
            onChange={onChangememberPassword}
            className="absolute left-0 top-0 w-[550px] h-[65px] bg-[#f1f3f5] border-[1px] border-solid border-[#dee2e6] rounded-[4px]"
          ></input>
          <div className="absolute left-[16px] top-[30px] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#181b1e] whitespace-nowrap"></div>
          <div className="absolute left-[16px] top-[10px] text-[14px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
            비밀번호
          </div>
        </div>

        {/*ID저장*/}
        <div className="absolute left-[34.2%] top-[438px] w-[78px] h-[23px]">
          <div className="absolute top-0 bottom-0 left-0 right-0">
            <div className="absolute left-[35.9%] right-0 top-0 bottom-0 text-[16px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
              ID 저장
            </div>
            <div className="absolute left-0 right-[74.36%] top-[8.7%] bottom-[4.35%] bg-[#f8f9fa] border-[1px] border-solid border-[#3563e9] rounded-[4px] overflow-hidden">
              <img
                className="absolute left-[6.25%] right-[6.25%] top-[6.25%] bottom-[6.25%]"
                width="17"
                height="17"
                src="Icons/Feather/checkI52_170;5_3331;5_3326;54_5184.png"
              ></img>
            </div>
          </div>
        </div>

        {/*아이디/비밀번호 찾기*/}
        <div className="absolute -translate-x-1/2 left-[61.5%] top-[438px] text-[16px] flex font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
          아이디｜비밀번호 찾기
        </div>

        {/*하단부*/}
        <div className="absolute -translate-x-1/2 left-1/2 top-[614px] flex flex-row items-center justify-start gap-[20px]">
          <div className="text-[16px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
            아직 회원이 아니신가요?
          </div>
          <Link
            to={"/test"}
            className="text-[18px] font-['Noto_Sans_KR'] font-bold text-[#3563e9] whitespace-nowrap"
          >
            회원가입
          </Link>
        </div>

        {/*로그인버튼*/}
        <button
          type="submit"
          className="absolute -translate-x-1/2 left-1/2 top-[493px] w-[550px] h-[65px] flex"
        >
          <div className="absolute left-0 top-0 w-[550px] h-[65px] bg-[#74b5dd] rounded-[4px]"></div>
          <div className="absolute left-[250px] top-[20px] text-[18px] font-['Noto_Sans_KR'] font-bold text-[#f8f9fa] whitespace-nowrap">
            로그인
          </div>
        </button>
      </form>
    </div>
  );
}
