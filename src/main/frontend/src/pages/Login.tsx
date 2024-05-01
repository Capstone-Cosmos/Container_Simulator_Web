import React, { useState, EventHandler, ReactNode, useCallback } from "react";
import axios from "axios";
import useInput from "../useInput";
import { Link, useNavigate } from "react-router-dom";
import { CreateAxiosInstance } from "../shared/axios/createAxiosInstance";

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
      // const response =  await axios.post("/login", null, {
      //   params: {
      //     username: memberId,
      //     password: memberPassword,
      //   },
      // });
      const response = await CreateAxiosInstance().post(
        "/login",null, {
          params: {
                username: memberId,
                password: memberPassword,
              },
        }
      )
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
            placeholder="아이디"
            className="absolute left-0 top-0 w-[550px] h-[65px] bg-[#f1f3f5] border-[1px] border-solid border-[#dee2e6] rounded-[4px]"
          ></input>
        </div>

        {/*비밀번호*/}
        <div className="absolute -translate-x-1/2 left-1/2 top-[357px] w-[550px] h-[65px] flex">
          <input
            type="password"
            id="memberPassword"
            name="memberPassword"
            value={memberPassword}
            onChange={onChangememberPassword}
            placeholder="비밀번호"
            className="absolute left-0 top-0 w-[550px] h-[65px] bg-[#f1f3f5] border-[1px] border-solid border-[#dee2e6] rounded-[4px]"
          ></input>
        </div>

        {/*하단부*/}
        <div className="absolute -translate-x-1/2 left-1/2 top-[614px] flex flex-row items-center justify-start gap-[20px]">
          <div className="text-[16px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap hover">
            아직 회원이 아니신가요?
          </div>
          <Link
            to={"/chooseposition"}
            className="hover:text-[#74b5dd] text-[18px] font-['Noto_Sans_KR'] font-bold text-[#3563e9] whitespace-nowrap"
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
