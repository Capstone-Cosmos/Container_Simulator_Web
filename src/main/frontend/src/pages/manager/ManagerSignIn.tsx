import React, { useState, EventHandler, ReactNode, useCallback } from 'react'
import axios from 'axios';
import useInput from '../../useInput';
import { Link, useNavigate } from 'react-router-dom';

export default function ManagerSingIn() {
  const navigate = useNavigate();
  // 아이디 / 비밀번호 / 비밀번호확인 / 이메일 / 주소 / 업체명 / 대표명
  const [managerId, ,setManagerId] = useInput('');
  const [managerPassword, , setManagerPassword] = useInput("");
  const [managerPasswordCheck, , setManagerPasswordCheck] = useInput("");
  const [managerEmail, onChangeManagerEmail] = useInput("");
  const [managerName, onChangeManagerName] = useInput("");
  const [managerDepart, onChangeManagerDepart] = useInput("");
  const [managerPosition, onChangeManagerPosition] = useInput("");

  // ID 에러 문구
  const [idError, setIdError] = useState('');
  // PW 에러 문구
  const [passwordError, setPasswordError] = useState('');
  // 비밀번호 & 비밀번호확인 일치
  const [mismatchError, setMismatchError] = useState(false);
  // 중복검사 유무
  const [isIdCheck, setIsIdCheck] = useState(false); 
  // 아이디 사용가능 유무
  const [isIdAvailable, setIsIdAvailable] = useState(false); 
  // 비밀번호 사용가능 유무
  const [isPasswordAvailable, setIsPasswordAvailable] = useState(false); 


  const onChangeManagerId = useCallback(
    async (e:any) => {
      console.log(e.target.value);
      console.log('good');
      setManagerId(e.target.value);
      const idRegex = /^[a-z\d]{5,10}$/;
      if (e.target.value === '') {
        setIdError('아이디를 입력해주세요.');
        setIsIdAvailable(false);
      } else if (!idRegex.test(e.target.value)) {
        setIdError('아이디는 5~10자의 영소문자, 숫자만 입력 가능합니다.');
        setIsIdAvailable(false);
      } else{
        setIdError('아이디 중복확인을 해주세요');
        setIsIdAvailable(false);
      }
    },
    [managerId],
  );

  const onChangeManagerPassword = useCallback(
    (e:any) => {
      setManagerPassword(e.target.value);
      setMismatchError(e.target.value !== managerPasswordCheck);
      const passwordRegex = /^[a-z\d!@*&-_]{8,16}$/;
      if (e.target.value === '') {
        setPasswordError('비밀번호를 입력해주세요.');
        setIsPasswordAvailable(false);
      } else if (!passwordRegex.test(e.target.value)) {
        setPasswordError('비밀번호는 8~16자의 영소문자, 숫자, !@*&-_만 입력 가능합니다.');
        setIsPasswordAvailable(false);
      } else {
        setPasswordError('');
        setIsPasswordAvailable(true);
      }
    },
    [managerPasswordCheck],
  );

  const onChangeManagerPasswordCheck = useCallback(
    (e:any) => {
      setManagerPasswordCheck(e.target.value);
      setMismatchError(e.target.value !== managerPassword);
    },
    [managerPassword],
  );


  const idDuplicateCheck = 
    async () => {
      try {
          const res = await axios.get('/member/auth/id-check', {
            params:{"managerId":managerId}}
          );
          if (!res) {
            setIdError('사용 가능한 아이디입니다.');
            setIsIdCheck(true);
            setIsIdAvailable(true);
          } else {
            setIdError('이미 사용중인 아이디입니다.');
            setIsIdAvailable(false);
          }
          return ;
      } catch(err) {
          console.log("axios.get 실패! 이유는? ");
          console.log(err);
          return false;
      }
    }
  const onSubmit = 
    (e:any) => {
      e.preventDefault();
      console.log("submit");
      if (!isIdAvailable || !isIdCheck) { alert('아이디를 확인해주세요.'); return; }
      if (!isPasswordAvailable) { alert('비밀번호를 확인해주세요.'); return; }
      if (mismatchError) { alert('비밀번호가 다릅니다.'); return; }
      if (managerEmail == '' || managerName == '' || managerDepart == '' || managerPosition == ''){ alert('모든 정보를 입력해주세요.'); return; }
      else {
        navigate("/usermain");
        axios
          .post('/manager/save', {
            managerId,
            managerPassword,
            managerEmail,
            managerName,
            managerDepart,
            managerPosition,
          })
          .then((response) => {
            // 성공시
            console.log('axios.post 성공!');
            console.log(response);
          })
          .catch((error) => {
            // 실패시
            console.log('axios.post 실패! 이유는?');
            console.log(error);
          })
          .finally(() => {});
      }
    } 

  return (
    <div className="relative h-[1680px] bg-[#f1f3f5] overflow-hidden">
        {/*가운데 틀*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[120px] w-[740px] h-[1536px] bg-[#f8f9fa] rounded-[4px]"></div>
      {/*cosmos사용자회원가입 부분*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[174px] leading-[170%] font-['Noto_Sans_KR'] font-bold text-[#212529] text-center whitespace-nowrap"><span className="text-[34px]">Cosmos<br/></span><span className="text-[24px]">담당자 회원가입</span></div>

      

        {/*아이디*/}
        
        <div className="absolute -translate-x-1/2 left-1/2 top-[296px] w-[550px] h-[133px]">
        <input type="text" id="managerId" name="managerId" value={managerId} onChange={onChangeManagerId} placeholder="아이디"className="absolute left-0 right-0 top-[25.56%] bottom-[25.56%] bg-[#f1f3f5] rounded-[4px]"></input>
        <div className={ isIdAvailable ? "absolute left-0 right-[50.91%] top-[80.45%] bottom-0 text-[18px] font-['Noto_Sans_KR'] font-medium text-[#20c654] whitespace-nowrap" : "absolute left-0 right-[50.91%] top-[80.45%] bottom-0 text-[18px] font-['Noto_Sans_KR'] font-medium text-[#d93737] whitespace-nowrap"}>{(<div>{idError}</div>)}</div>
        <div className="absolute left-0 right-[90.91%] top-0 bottom-[80.45%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap"></div>
        <button onClick={idDuplicateCheck} className="absolute left-[84.91%] right-[2.91%] top-[40.6%] bottom-[39.85%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#3563e9] whitespace-nowrap">중복검사</button>
        {/*{!memberId && (<div>아이디를 입력해주세요.</div>)}*/}
      </div>
      

        {/*비밀번호*/}
        <div className="absolute -translate-x-1/2 left-1/2 top-[469px] w-[550px] h-[133px]">
          <input
            type="password"
            id="managerPassword"
            name="managerPassword"
            value={managerPassword}
            onChange={onChangeManagerPassword}
            className="absolute left-0 right-0 top-[25.56%] bottom-[25.56%] bg-[#f1f3f5] rounded-[4px]"
          ></input>
          <div className="absolute left-0 right-[24.36%] top-[80.45%] bottom-0 text-[18px] font-['Noto_Sans_KR'] font-medium text-[#d93737] whitespace-nowrap">{(<div>{passwordError}</div>)}</div>
        <div className="absolute left-0 right-[87.82%] top-0 bottom-[80.45%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">비밀번호</div>
          {/*
          <div className="absolute left-0 right-[24.36%] top-[80.45%] bottom-0 text-[18px] font-['Noto_Sans_KR'] font-medium text-[#adb5bd] whitespace-nowrap">
            영문 대/소문자와 숫자, 특수문자를 조합하여 12~18자내
          </div>
          <div className="absolute left-0 right-[87.82%] top-0 bottom-[80.45%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
            비밀번호
          </div>
  */}
        </div>
        {/*비밀번호 확인*/}
        <div className="absolute -translate-x-1/2 left-1/2 top-[642px] w-[550px] h-[133px]">
          <input
            type="password"
            id="managerPassword-check"
            name="managerPassword-check"
            value={managerPasswordCheck}
            onChange={onChangeManagerPasswordCheck}
            className="absolute left-0 right-0 top-[25.56%] bottom-[25.56%] bg-[#f1f3f5] rounded-[4px]"
          ></input>
          <div className="absolute left-0 right-[50.91%] top-[80.45%] bottom-0 text-[18px] font-['Noto_Sans_KR'] font-medium text-[#d93737] whitespace-nowrap">{mismatchError && (<div>비밀번호가 일치하지 않습니다.</div>)}</div>
        <div className="absolute left-0 right-[81.09%] top-0 bottom-[80.45%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">비밀번호 확인</div>
          {/*
          <div className="absolute left-0 right-[50.91%] top-[80.45%] bottom-0 text-[18px] font-['Noto_Sans_KR'] font-medium text-[#adb5bd] whitespace-nowrap">
            {mismatchError && <div>비밀번호가 일치하지 않습니다.</div>}
          </div>
          <div className="absolute left-0 right-[81.09%] top-0 bottom-[80.45%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
            비밀번호 확인
          </div>
  */}
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
          onClick={onSubmit}
          className="absolute -translate-x-1/2 left-1/2 top-[1416px] w-[360px] h-[65px]"
        >
          <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#e9ecef] border-[1px] border-solid border-[#dee2e6] rounded-[4px]"></div>
          <div className="absolute left-[40.83%] right-[40.56%] top-[30.77%] bottom-[29.23%] text-[18px] font-['Noto_Sans_KR'] font-bold text-[#868e96] whitespace-nowrap">
            가입하기
          </div>
        </button>
    </div>
  );
}
