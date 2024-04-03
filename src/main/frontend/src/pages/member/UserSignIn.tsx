import React, { useState, EventHandler, ReactNode, useCallback } from 'react'
import axios from 'axios';
import useInput from '../../useInput';
import { Link, useNavigate } from 'react-router-dom';

export default function UserSignIn(){
  const navigate = useNavigate();
  // 아이디 / 비밀번호 / 비밀번호확인 / 이메일 / 주소 / 업체명 / 대표명
  const [memberId, ,setmemberId] = useInput('');
  const [memberPassword, ,setmemberPassword] = useInput('');
  const [memberPasswordCheck, ,setmemberPasswordCheck] = useInput('');
  const [memberEmail, onChangeMemberEmail] = useInput('');
  const [memberAddress,onChangeMemberAddress] = useInput('');
  const [companyName, onChangeCompanyName] = useInput('');
  const [companyPresident, onChangeCompanyPresident] = useInput('');
  
  const [mismatchError, setMismatchError] = useState(false);
  const [signUpError, setSignUpError] = useState('');
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const [idError, setIdError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isIdCheck, setIsIdCheck] = useState(false); // 중복 검사를 했는지 안했는지
  const [isIdAvailable, setIsIdAvailable] = useState(false); // 아이디 사용 가능한지 아닌지
  const [isPasswordAvailable, setIsPasswordAvailable] = useState(false); // 아이디 사용 가능한지 아닌지


  const onChangeMemberId = useCallback(
    (e:any) => {
      console.log(e.target.value);
      setmemberId(e.target.value);
      const idRegex = /^[a-z\d]{5,10}$/;
      if (e.target.value === '') {
        setIdError('아이디를 입력해주세요.');
        setIsIdAvailable(false);
      } else if (!idRegex.test(e.target.value)) {
        setIdError('아이디는 5~10자의 영소문자, 숫자만 입력 가능합니다.');
        setIsIdAvailable(false);
      } else{
        setIdError('사용 가능한 아이디입니다.');
        setIsIdAvailable(true);
      }
      // 여기서 서버랑 통신해서 중복검사

    },
    [memberId],
  );

  const onChangememberPassword = useCallback(
    (e:any) => {
      setmemberPassword(e.target.value);
      setMismatchError(e.target.value !== memberPasswordCheck);
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
    [memberPasswordCheck],
  );

  const onChangememberPasswordCheck = useCallback(
    (e:any) => {
      setmemberPasswordCheck(e.target.value);
      setMismatchError(e.target.value !== memberPassword);
    },
    [memberPassword],
  );

  const onSubmit = useCallback(
    (e:any) => {
      e.preventDefault();

      if (!isIdAvailable) {
        alert('아이디를 확인해주세요.');
        return;
      }
      if (!isPasswordAvailable) {
        alert('비밀번호를 확인해주세요.');
        return;
      }
      if (mismatchError) {
        alert('비밀번호가 다릅니다.');
        return;
      }
      if (!mismatchError) {
        console.log('서버로 회원가입하기');
        setSignUpError('');
        setSignUpSuccess(true);
        navigate("/usermain");
        axios
          .post('/member/save', {
            memberId,
            memberPassword,
            memberEmail,
            memberAddress,
            companyName,
            companyPresident
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
    [memberId, memberPassword, memberPasswordCheck, memberEmail,  memberAddress, companyName, companyPresident],
  );
 
	return (
    <div className="relative h-[1680px] bg-[#f1f3f5] overflow-hidden">
      <form onSubmit={onSubmit}>

      
      {/* <div className="absolute -translate-x-1/2 left-1/2 top-0 w-screen h-[96px]">
        
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#f8f9fa] border-[solid] border-#e9ecef border border-[0_0_1px]"></div>
        
        <Link to={"/"} className="absolute left-[6.25%] right-[79.3%] top-[8.33%] bottom-[18.75%] text-[48px] font-['Noto_Sans_KR'] font-bold text-[#74b5dd] whitespace-nowrap">Cosmos</Link>
        
        <div className="absolute left-[82.5%] right-[6.25%] top-[38.54%] bottom-[37.5%] flex flex-row items-center justify-start gap-[20px]">
          <Link to={"/login"} className="text-[16px] font-['Noto_Sans_KR'] font-medium text-[#74b5dd] text-center whitespace-nowrap">로그인</Link>
          <div className="w-[20px] h-0 shrink-0 border-[1px] border-solid border-[#ced4da]"></div>
          <Link to={"/"} className="text-[16px] font-['Noto_Sans_KR'] font-medium text-[#74b5dd] text-center whitespace-nowrap">회원가입</Link>
        </div>
      </div>
 */}
      
      
      {/*가운데 틀*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[120px] w-[740px] h-[1536px] bg-[#f8f9fa] rounded-[4px]"></div>
      {/*cosmos사용자회원가입 부분*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[174px] leading-[170%] font-['Noto_Sans_KR'] font-bold text-[#212529] text-center whitespace-nowrap"><span className="text-[34px]">Cosmos<br/></span><span className="text-[24px]">사용자 회원가입</span></div>
      
      {/*아이디*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[296px] w-[550px] h-[133px]">
        <input type="text" id="memberId" name="memberId" value={memberId} onChange={onChangeMemberId} className="absolute left-0 right-0 top-[25.56%] bottom-[25.56%] bg-[#f1f3f5] rounded-[4px]"></input>
        <div className={ isIdAvailable ? "absolute left-0 right-[50.91%] top-[80.45%] bottom-0 text-[18px] font-['Noto_Sans_KR'] font-medium text-[#20c654] whitespace-nowrap" : "absolute left-0 right-[50.91%] top-[80.45%] bottom-0 text-[18px] font-['Noto_Sans_KR'] font-medium text-[#d93737] whitespace-nowrap"}>{(<div>{idError}</div>)}</div>
        <div className="absolute left-0 right-[90.91%] top-0 bottom-[80.45%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">아이디</div>
        <div className="absolute left-[84.91%] right-[2.91%] top-[40.6%] bottom-[39.85%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#3563e9] whitespace-nowrap">중복검사</div>
        {/*{!memberId && (<div>아이디를 입력해주세요.</div>)}*/}
      </div>
      
      {/*비밀번호*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[469px] w-[550px] h-[133px]">
        <input type="password" id="memberPassword" name="memberPassword" value={memberPassword} onChange={onChangememberPassword} className="absolute left-0 right-0 top-[25.56%] bottom-[25.56%] bg-[#f1f3f5] rounded-[4px]"></input>
        <div className="absolute left-0 right-[24.36%] top-[80.45%] bottom-0 text-[18px] font-['Noto_Sans_KR'] font-medium text-[#d93737] whitespace-nowrap">{(<div>{passwordError}</div>)}</div>
        <div className="absolute left-0 right-[87.82%] top-0 bottom-[80.45%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">비밀번호</div>
      </div>
      {/*비밀번호 확인*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[642px] w-[550px] h-[133px]">
        <input type="password" id="memberPassword-check" name="memberPassword-check" value={memberPasswordCheck} onChange={onChangememberPasswordCheck} className="absolute left-0 right-0 top-[25.56%] bottom-[25.56%] bg-[#f1f3f5] rounded-[4px]"></input>
        <div className="absolute left-0 right-[50.91%] top-[80.45%] bottom-0 text-[18px] font-['Noto_Sans_KR'] font-medium text-[#d93737] whitespace-nowrap">{mismatchError && (<div>비밀번호가 일치하지 않습니다.</div>)}</div>
        <div className="absolute left-0 right-[81.09%] top-0 bottom-[80.45%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">비밀번호 확인</div>
      </div>

      {/*이메일*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[815px] w-[550px] h-[133px] flex">
        <input type="email" id="memberEmail" name="memberEmail" value={memberEmail} onChange={onChangeMemberEmail} className="absolute left-0 right-0 top-[25.56%] bottom-[25.56%] bg-[#f1f3f5] rounded-[4px]"></input>
        <div className="absolute left-0 right-[90.91%] top-0 bottom-[73.74%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">이메일</div>
      </div>

      {/*주소*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[954px] w-[549px] h-[133px] flex">
        <div className="absolute left-0 right-[93.81%] top-0 bottom-[86.24%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">주소</div>
        <div className="absolute left-0 top-[39px] w-[549px] h-[65px] flex">
          <input type="text" id="memberAddress" name="memberAddress" value={memberAddress} onChange={onChangeMemberAddress} className="absolute left-0 right-0 top-0 bottom-0 bg-[#f1f3f5] rounded-[4px]"></input>
        </div>
      </div>

      {/*업체명*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[1093px] w-[549px] h-[104px] flex">
        <div className="absolute left-0 right-[90.89%] top-0 bottom-[75%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">업체명</div>
        <div className="absolute left-0 top-[39px] w-[549px] h-[65px] flex">
          <input type="text" id="companyName" name="companyName" value={companyName} onChange={onChangeCompanyName} className="absolute left-0 right-0 top-0 bottom-0 bg-[#f1f3f5] rounded-[4px]"></input>
        </div>
      </div>

      {/*대표명*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[1232px] w-[549px] h-[104px] flex">
        <div className="absolute left-0 right-[90.89%] top-0 bottom-[75%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">대표자</div>
        <div className="absolute left-0 top-[39px] w-[549px] h-[65px] flex">
          <input type="text" id="companyPresident" name="companyPresident" value={companyPresident} onChange={onChangeCompanyPresident}className="absolute left-0 right-0 top-0 bottom-0 bg-[#f1f3f5] rounded-[4px]"></input>
        </div>
      </div>

      {/*하단 가입하기 버튼*/}
      <button type="submit"  className="absolute -translate-x-1/2 left-1/2 top-[1416px] w-[360px] h-[65px]">
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#e9ecef] border-[1px] border-solid border-[#dee2e6] rounded-[4px]"></div>
        <div className="absolute left-[40.83%] right-[40.56%] top-[30.77%] bottom-[29.23%] text-[18px] font-['Noto_Sans_KR'] font-bold text-[#868e96] whitespace-nowrap">가입하기</div>
      </button>

      </form>
    </div>
  )
}
