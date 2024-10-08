import { useState, useCallback } from "react";
import axios from "axios";
import useInput from "../../useInput";
import { useNavigate } from "react-router-dom";

export default function ManagerSingIn() {
  const navigate = useNavigate();
  // 아이디 / 비밀번호 / 비밀번호확인 / 이메일 / 주소 / 업체명 / 대표명
  const [id, , setId] = useInput("");
  const [password, , setPassword] = useInput("");
  const [passwordCheck, , setPasswordCheck] = useInput("");
  const [email, , setEmail] = useInput("");
  const [managerName, onChangeManagerName] = useInput("");
  const [managerDepart, onChangeManagerDepart] = useInput("");
  const [managerPosition, onChangeManagerPosition] = useInput("");

  // ID 에러 문구
  const [idError, setIdError] = useState("");
  // PW 에러 문구
  const [passwordError, setPasswordError] = useState("");
  // EMAIL 에러 문구
  const [emailError, setEmailError] = useState("");
  // 비밀번호 & 비밀번호확인 일치
  const [mismatchError, setMismatchError] = useState(false);
  // 중복검사 유무
  const [isIdCheck, setIsIdCheck] = useState(false);
  // 아이디 사용가능 유무
  const [isIdAvailable, setIsIdAvailable] = useState(false);
  // 이메일 중복검사 유무
  const [isEmailCheck, setIsEmailCheck] = useState(false);
  // 이메일 사용가능 유무
  const [isEmailAvailable, setIsEmailAvailable] = useState(false);
  // 비밀번호 사용가능 유무
  const [isPasswordAvailable, setIsPasswordAvailable] = useState(false);

  const onChangeid = useCallback(
    async (e: any) => {
      setId(e.target.value);
      const idRegex = /^[a-z\d]{5,10}$/;
      if (e.target.value === "") {
        setIdError("아이디를 입력해주세요.");
        setIsIdAvailable(false);
      } else if (!idRegex.test(e.target.value)) {
        setIdError("아이디는 5~10자의 영소문자, 숫자만 입력 가능합니다.");
        setIsIdAvailable(false);
      } else {
        setIdError("아이디 중복확인을 해주세요");
        setIsIdAvailable(false);
      }
    },
    [id]
  );

  const onChangeEmail = useCallback(
    async (e: any) => {
      setEmail(e.target.value);
      if (e.target.value === "") {
        setEmailError("이메일을 입력해주세요.");
        setIsEmailAvailable(false);
      } else {
        setEmailError("이메일 중복확인을 해주세요");
        setIsEmailAvailable(false);
      }
    },
    [email]
  );

  const onChangepassword = useCallback(
    (e: any) => {
      setPassword(e.target.value);
      setMismatchError(e.target.value !== passwordCheck);
      const passwordRegex = /^[a-z\d!@*&-_]{8,16}$/;
      if (e.target.value === "") {
        setPasswordError("비밀번호를 입력해주세요.");
        setIsPasswordAvailable(false);
      } else if (!passwordRegex.test(e.target.value)) {
        setPasswordError(
          "비밀번호는 8~16자의 영소문자, 숫자, !@*&-_만 입력 가능합니다."
        );
        setIsPasswordAvailable(false);
      } else {
        setPasswordError("");
        setIsPasswordAvailable(true);
      }
    },
    [passwordCheck]
  );

  const onChangepasswordCheck = useCallback(
    (e: any) => {
      setPasswordCheck(e.target.value);
      setMismatchError(e.target.value !== password);
    },
    [password]
  );

  const idDuplicateCheck = async () => {
    try {
      const res = await axios.get("/ids", {
        params: { id: id },
      });
      if (!res.data) {
        setIdError("사용 가능한 아이디입니다.");
        setIsIdCheck(true);
        setIsIdAvailable(true);
      } else {
        setIdError("이미 사용중인 아이디입니다.");
        setIsIdAvailable(false);
      }
      return;
    } catch (err) {
   
      return false;
    }
  };

  const emailDuplicateCheck = async () => {
    try {
      const res = await axios.get("/emails", {
        params: { email: email },
      });
      if (!res.data) {
        setEmailError("사용 가능한 이메일입니다.");
        setIsEmailCheck(true);
        setIsEmailAvailable(true);
      } else {
        setEmailError("이미 사용중인 이메일입니다.");
        setIsEmailAvailable(false);
      }
      return;
    } catch (err) {
     
      return false;
    }
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (!isIdAvailable || !isIdCheck) {
      alert("아이디를 확인해주세요.");
      return;
    }
    if (!isEmailAvailable || !isEmailCheck) {
      alert("이메일을 확인해주세요.");
      return;
    }
    if (!isPasswordAvailable) {
      alert("비밀번호를 확인해주세요.");
      return;
    }
    if (mismatchError) {
      alert("비밀번호가 다릅니다.");
      return;
    }
    if (
      email == "" ||
      managerName == "" ||
      managerDepart == "" ||
      managerPosition == ""
    ) {
      alert("모든 정보를 입력해주세요.");
      return;
    } else {
      axios
        .post("/managers", {
          id,
          password,
          email,
          managerName,
          managerDepart,
          managerPosition,
        })
        .then((response) => {
          // 성공시
          
          navigate("/");
        })
        .catch((error) => {
          // 실패시
          
        })
        .finally(() => {});
    }
  };

  return (
    <div className="relative h-[1680px] bg-[#f1f3f5] overflow-hidden">
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
        <div className="absolute left-0 right-[87.82%] top-0 bottom-[80.45%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
          아이디
        </div>
        <input
          type="text"
          id="id"
          name="id"
          value={id}
          onChange={onChangeid}
          className="absolute left-0 right-0 top-[25.56%] bottom-[25.56%] bg-[#f1f3f5] rounded-[4px]"
        ></input>
        <div
          className={
            isIdAvailable
              ? "absolute left-0 right-[50.91%] top-[80.45%] bottom-0 text-[18px] font-['Noto_Sans_KR'] font-medium text-[#20c654] whitespace-nowrap"
              : "absolute left-0 right-[50.91%] top-[80.45%] bottom-0 text-[18px] font-['Noto_Sans_KR'] font-medium text-[#d93737] whitespace-nowrap"
          }
        >
          {<div>{idError}</div>}
        </div>
        <div className="absolute left-0 right-[90.91%] top-0 bottom-[80.45%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap"></div>
        <button
          onClick={idDuplicateCheck}
          className="absolute left-[84.91%] right-[2.91%] top-[40.6%] bottom-[39.85%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#3563e9] whitespace-nowrap"
        >
          중복검사
        </button>
        {/*{!memberId && (<div>아이디를 입력해주세요.</div>)}*/}
      </div>

      {/*비밀번호*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[469px] w-[550px] h-[133px]">
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={onChangepassword}
          className="absolute left-0 right-0 top-[25.56%] bottom-[25.56%] bg-[#f1f3f5] rounded-[4px]"
        ></input>
        <div className="absolute left-0 right-[24.36%] top-[80.45%] bottom-0 text-[18px] font-['Noto_Sans_KR'] font-medium text-[#d93737] whitespace-nowrap">
          {<div>{passwordError}</div>}
        </div>
        <div className="absolute left-0 right-[87.82%] top-0 bottom-[80.45%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
          비밀번호
        </div>
      </div>

      {/*비밀번호 확인*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[642px] w-[550px] h-[133px]">
        <input
          type="password"
          id="password-check"
          name="password-check"
          value={passwordCheck}
          onChange={onChangepasswordCheck}
          className="absolute left-0 right-0 top-[25.56%] bottom-[25.56%] bg-[#f1f3f5] rounded-[4px]"
        ></input>
        <div className="absolute left-0 right-[50.91%] top-[80.45%] bottom-0 text-[18px] font-['Noto_Sans_KR'] font-medium text-[#d93737] whitespace-nowrap">
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
          id="email"
          name="email"
          value={email}
          onChange={onChangeEmail}
          className="absolute left-0 right-0 top-[25.56%] bottom-[25.56%] bg-[#f1f3f5] rounded-[4px]"
        ></input>
        <div
          className={
            isEmailAvailable
              ? "absolute left-0 right-[50.91%] top-[80.45%] bottom-0 text-[18px] font-['Noto_Sans_KR'] font-medium text-[#20c654] whitespace-nowrap"
              : "absolute left-0 right-[50.91%] top-[80.45%] bottom-0 text-[18px] font-['Noto_Sans_KR'] font-medium text-[#d93737] whitespace-nowrap"
          }
        >
          {<div>{emailError}</div>}
        </div>
        <div className="absolute left-0 right-[90.91%] top-0 bottom-[80.45%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap"></div>
        <button
          onClick={emailDuplicateCheck}
          className="absolute left-[84.91%] right-[2.91%] top-[40.6%] bottom-[39.85%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#3563e9] whitespace-nowrap"
        >
          중복검사
        </button>
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
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-white border-[1px] border-solid border-cb rounded-[4px] peer hover:bg-cb"></div>
        <div className="absolute left-[40.83%] right-[40.56%] top-[30.77%] bottom-[29.23%] text-[20px] font-['Noto_Sans_KR'] font-bold text-cb whitespace-nowrap peer-hover:text-white">
          가입하기
        </div>
      </button>
    </div>
  );
}
