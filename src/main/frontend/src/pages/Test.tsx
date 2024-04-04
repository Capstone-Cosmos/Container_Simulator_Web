import { useState, EventHandler, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login';

export default function Test(){
	return (
  <div className="relative h-screen bg-[#f1f3f5] overflow-hidden">
    <div className="absolute -translate-x-1/2 left-[calc(50%+-190px)] hover:bg-[#74b5dd] top-[120px] w-[360px] h-[576px] bg-[#f8f9fa] border-[1px] border-solid border-[#74b5dd] rounded-[4px]"></div>
    <div className="absolute left-[343px] top-[235px] w-[215px] h-[215px] "></div>
    <div className="absolute -translate-x-1/2 left-[calc(50%+190px)] top-[120px] w-[360px] h-[576px] bg-[#f8f9fa] border-[1px] border-solid border-[#74b5dd] rounded-[4px]"></div>
    <Link to={"/member/join"}className=" hover:bg-[#74b5dd]  absolute -translate-x-1/2 left-[calc(50%+-190px)] top-[529px] text-[34px] font-['Noto_Sans_KR'] font-bold text-[#74b5dd] text-center whitespace-nowrap">사용자<br/>회원가입</Link>
    <Link to={"/manager/join"} className="absolute -translate-x-1/2 left-[calc(50%+190px)] top-[529px] text-[34px] font-['Noto_Sans_KR'] font-bold text-[#74b5dd] text-center whitespace-nowrap">담당자<br/>회원가입</Link>
    {/* <div className="absolute -translate-x-1/2 left-1/2 top-0 w-screen h-[96px]">
      <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#f8f9fa] border-[solid] border-#e9ecef border border-[0_0_1px]"></div>
      <div className="absolute left-[6.25%] right-[79.3%] top-[8.33%] bottom-[18.75%] text-[48px] font-['Noto_Sans_KR'] font-bold text-[#74b5dd] whitespace-nowrap">Cosmos</div>
      <div className="absolute left-[82.5%] right-[6.25%] top-[38.54%] bottom-[37.5%] flex flex-row items-center justify-start gap-[20px]">
        <Link to={"/login"} className="text-[16px] font-['Noto_Sans_KR'] font-medium text-[#74b5dd] text-center whitespace-nowrap">로그인</Link>
        <div className="w-[20px] h-0 shrink-0 border-[1px] border-solid border-[#ced4da]"></div>
        <Link to={"/"} className="text-[16px] font-['Noto_Sans_KR'] font-medium text-[#74b5dd] text-center whitespace-nowrap">회원가입</Link>
      </div>
    </div> */}
</div>)
}
