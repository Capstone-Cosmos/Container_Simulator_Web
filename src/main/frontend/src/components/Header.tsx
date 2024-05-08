import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="relative w-full p-12 bg-[#F8F9FA]">
      {/*상단바*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-0 w-screen h-[96px]">
        {/*박스*/}
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#f8f9fa] border-[solid] border-#e9ecef border border-[0_0_1px]"></div>
        {/*로고글자*/}
        <Link to={"/"} className="absolute left-[6.25%] right-[79.3%] top-[8.33%] bottom-[18.75%] text-6xl font-['Noto_Sans_KR'] font-bold text-[#74b5dd] whitespace-nowrap">Cosmos</Link>
        {/*우상단 버튼*/}
        <div className="absolute left-[82.5%] right-[6.25%] top-[38.54%] bottom-[37.5%] flex flex-row items-center justify-start gap-[20px]">
          <Link to={"/"} className="text-[16px] font-['Noto_Sans_KR'] font-medium text-[#74b5dd] text-center whitespace-nowrap">로그인</Link>
          <div className="w-[20px] h-0 shrink-0 border-[1px] border-solid border-[#ced4da]"></div>
          <Link to={"/chooseposition"} className="text-[16px] font-['Noto_Sans_KR'] font-medium text-[#74b5dd] text-center whitespace-nowrap bg-white #F8F9FA #DEE2E6">회원가입</Link>
          
        </div>
      </div>
    </header>
  );
}
export default Header;
