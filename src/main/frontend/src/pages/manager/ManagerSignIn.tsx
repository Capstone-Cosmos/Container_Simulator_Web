import React, { useState, EventHandler, ReactNode, useCallback } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../../useInput";
export default function ManagerSingIn() {
  const navigate = useNavigate();
  // 아이디 / 비밀번호 / 비밀번호확인 / 이메일 / 주소 / 업체명 / 대표명
  const [managerId, onChangeManagerId] = useInput("");
  const [managerPassword, , setManagerPassword] = useInput("");
  const [managerPasswordCheck, , setManagerPasswordCheck] = useInput("");
  const [managerEmail, onChangeManagerEmail] = useInput("");
  const [managerName, onChangeManagerName] = useInput("");
  const [managerDepart, onChangeManagerDepart] = useInput("");
  const [managerPosition, onChangeManagerPosition] = useInput("");

  const [mismatchError, setMismatchError] = useState(false);
  const [signUpError, setSignUpError] = useState("");
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const onChangemanagerPassword = useCallback(
    (e: any) => {
      setManagerPassword(e.target.value);
      setMismatchError(e.target.value !== managerPasswordCheck);
    },
    [managerPasswordCheck]
  );

  const onChangemanagerPasswordCheck = useCallback(
    (e: any) => {
      setManagerPasswordCheck(e.target.value);
      setMismatchError(e.target.value !== managerPassword);
    },
    [managerPassword]
  );

  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      if (!mismatchError) {
        console.log("서버로 회원가입하기");
        setSignUpError("");
        setSignUpSuccess(true);
        navigate("/usermain");
        axios
          .post("/manager/save", {
            managerId,
            managerPassword,
            managerEmail,
            managerName,
            managerDepart,
            managerPosition,
          })
          .then((response) => {
            // 성공시
            //console.log(response);
            setSignUpSuccess(true);
          })
          .catch((error) => {
            // 실패시
            //console.log(error.response);
            setSignUpError(error.response.data);
          })
          .finally(() => {});
      }
    },
    [
      managerId,
      managerPassword,
      managerPasswordCheck,
      managerEmail,
      managerName,
      managerDepart,
      managerPosition,
    ]
  );

  return (
    <div className="relative h-[1680px] bg-[#f1f3f5] overflow-hidden">
      <form onSubmit={onSubmit}>
        {/*가운데 틀*/}
        <div className="absolute -translate-x-1/2 left-1/2 top-[120px] w-[740px] h-[1536px] bg-[#f8f9fa] rounded-[4px]"></div>
        {/*cosmos사용자회원가입 부분*/}
        <div className="absolute -translate-x-1/2 left-1/2 top-[174px] leading-[170%] font-['Noto_Sans_KR'] font-bold text-[#212529] text-center whitespace-nowrap">
          <span className="text-[34px]">
            Cosmos
            <br />
          </span>
          <span className="text-[24px]">담당자 회원가입</span>
        </div>

        {/*아이디*/}
        <div className="absolute -translate-x-1/2 left-1/2 top-[296px] w-[550px] h-[133px]">
          <input
            type="text"
            id="managerId"
            name="managerId"
            value={managerId}
            onChange={onChangeManagerId}
            className="absolute left-0 right-0 top-[25.56%] bottom-[25.56%] bg-[#f1f3f5] rounded-[4px]"
          ></input>
          <div className="absolute left-0 right-[90.91%] top-0 bottom-[80.45%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
            아이디
          </div>
          <div className="absolute left-[84.91%] right-[2.91%] top-[40.6%] bottom-[39.85%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#3563e9] whitespace-nowrap">
            중복검사
          </div>
          {/*{!managerId && (<div>아이디를 입력해주세요.</div>)}*/}
        </div>

        {/*비밀번호*/}
        <div className="absolute -translate-x-1/2 left-1/2 top-[469px] w-[550px] h-[133px]">
          <input
            type="password"
            id="managerPassword"
            name="managerPassword"
            value={managerPassword}
            onChange={onChangemanagerPassword}
            className="absolute left-0 right-0 top-[25.56%] bottom-[25.56%] bg-[#f1f3f5] rounded-[4px]"
          ></input>
          <div className="absolute left-0 right-[24.36%] top-[80.45%] bottom-0 text-[18px] font-['Noto_Sans_KR'] font-medium text-[#adb5bd] whitespace-nowrap">
            영문 대/소문자와 숫자, 특수문자를 조합하여 12~18자내
          </div>
          <div className="absolute left-0 right-[87.82%] top-0 bottom-[80.45%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
            비밀번호
          </div>
        </div>
        {/*비밀번호 확인*/}
        <div className="absolute -translate-x-1/2 left-1/2 top-[642px] w-[550px] h-[133px]">
          <input
            type="password"
            id="managerPassword-check"
            name="managerPassword-check"
            value={managerPasswordCheck}
            onChange={onChangemanagerPasswordCheck}
            className="absolute left-0 right-0 top-[25.56%] bottom-[25.56%] bg-[#f1f3f5] rounded-[4px]"
          ></input>
          <div className="absolute left-0 right-[50.91%] top-[80.45%] bottom-0 text-[18px] font-['Noto_Sans_KR'] font-medium text-[#adb5bd] whitespace-nowrap">
            {mismatchError && <div>비밀번호가 일치하지 않습니다.</div>}
          </div>
          <div className="absolute left-0 right-[81.09%] top-0 bottom-[80.45%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
            비밀번호 확인
          </div>
        </div>

        {/*이메일*/}
        <div className="absolute -translate-x-1/2 left-1/2 top-[815px] w-[550px] h-[133px] flex">
          <input
            type="email"
            id="managerEmail"
            name="managerEmail"
            value={managerEmail}
            onChange={onChangeManagerEmail}
            className="absolute left-0 right-0 top-[25.56%] bottom-[25.56%] bg-[#f1f3f5] rounded-[4px]"
          ></input>
          <div className="absolute left-0 right-[90.91%] top-0 bottom-[73.74%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
            이메일
          </div>
        </div>

        {/*주소*/}
        <div className="absolute -translate-x-1/2 left-1/2 top-[954px] w-[549px] h-[133px] flex">
          <div className="absolute left-0 right-[93.81%] top-0 bottom-[86.24%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
            관리자명
          </div>
          <div className="absolute left-0 top-[39px] w-[549px] h-[65px] flex">
            <input
              type="text"
              id="managerName"
              name="managerName"
              value={managerName}
              onChange={onChangeManagerName}
              className="absolute left-0 right-0 top-0 bottom-0 bg-[#f1f3f5] rounded-[4px]"
            ></input>
          </div>
        </div>

        {/*업체명*/}
        <div className="absolute -translate-x-1/2 left-1/2 top-[1093px] w-[549px] h-[104px] flex">
          <div className="absolute left-0 right-[90.89%] top-0 bottom-[75%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
            부서
          </div>
          <div className="absolute left-0 top-[39px] w-[549px] h-[65px] flex">
            <input
              type="text"
              id="managerDepart"
              name="managerDepart"
              value={managerDepart}
              onChange={onChangeManagerDepart}
              className="absolute left-0 right-0 top-0 bottom-0 bg-[#f1f3f5] rounded-[4px]"
            ></input>
          </div>
        </div>

        {/*대표명*/}
        <div className="absolute -translate-x-1/2 left-1/2 top-[1232px] w-[549px] h-[104px] flex">
          <div className="absolute left-0 right-[90.89%] top-0 bottom-[75%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
            직책
          </div>
          <div className="absolute left-0 top-[39px] w-[549px] h-[65px] flex">
            <input
              type="text"
              id="managerPosition"
              name="managerPosition"
              value={managerPosition}
              onChange={onChangeManagerPosition}
              className="absolute left-0 right-0 top-0 bottom-0 bg-[#f1f3f5] rounded-[4px]"
            ></input>
          </div>
        </div>

        {/*하단 가입하기 버튼*/}
        <button
          type="submit"
          className="absolute -translate-x-1/2 left-1/2 top-[1416px] w-[360px] h-[65px]"
        >
          <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#e9ecef] border-[1px] border-solid border-[#dee2e6] rounded-[4px]"></div>
          <div className="absolute left-[40.83%] right-[40.56%] top-[30.77%] bottom-[29.23%] text-[18px] font-['Noto_Sans_KR'] font-bold text-[#868e96] whitespace-nowrap">
            가입하기
          </div>
        </button>
      </form>
    </div>
  );
}
