import { Link, useNavigate } from "react-router-dom";
import useInput from "../../useInput";
import { useCallback, useState } from "react";
import axios from "axios";
import { CreateAxiosInstance } from "../../shared/axios/createAxiosInstance";
import ContainerList from './containerList';

export default function ContainerUpload() {
  const navigate = useNavigate();
  // 현재무게 / 최대 적재 용적 / 마감시간
  const [weight, setWeight] = useInput("");
  const [maxWeight, setmaxWeight] = useInput("");
  const [deadline, setDeadline] = useInput("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log("submit");
    if (weight === "" || maxWeight === "" || deadline === "") {
      alert("모든 정보를 입력해주세요.");
      return;
    } else {
      navigate("/new/containerList");
      CreateAxiosInstance()
        .post("/containers", {
          weight,
          maxWeight,
          deadline,
        })
        .then((response) => {
          // 성공시
          console.log("axios.post 성공!");
          console.log(response);
        })
        .catch((error) => {
          // 실패시
          console.log("axios.post 실패! 이유는?");
          console.log(error);
        })
        .finally(() => {});
    }
  };

  const goBack = () => {
    navigate('/new/containerList');
  };

  return (
    <div className="relative h-[954px] bg-[#f1f3f5] overflow-hidden">
      <div className="pl-32 border-t-2 shadow-sm navbar bg-base-100">
        <Link
          to={"/new/apprwait"}
          className="text-xl font-thin text-gray-400 w-44 btn btn-ghost hover:bg-cb hover:text-white"
        >
          품목리스트
        </Link>
        <Link
          to={"/new/containerList"}
          className="text-xl w-44 text-cb btn btn-ghost hover:bg-cb hover:text-white"
        >
          컨테이너리스트
        </Link>
      </div>

      {/*가운데 틀*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[120px] w-[740px] h-[1536px] bg-[#f8f9fa] rounded-[4px] "></div>
      {/*cosmos사용자회원가입 부분*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[120px] leading-[170%] font-['Noto_Sans_KR'] font-bold text-[#212529] text-center whitespace-nowrap w-[740px] bg-cb h-11 items-center flex justify-center">
        <span className="text-[30px] text-white">
          컨테이너 등록
        </span>
      </div>

      {/*무게*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[296px] w-[550px] h-[133px]">
        <input
          type="text"
          id="weight"
          name="weight"
          onChange={setWeight}
          className="absolute left-0 right-0 top-[25.56%] bottom-[25.56%] bg-[#f1f3f5] rounded-[4px]"
        ></input>
        <div className="absolute left-0 right-[90.91%] top-0 bottom-[80.45%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
          무게
        </div>

        {/*{!weight && (<div>상품명를 입력해주세요.</div>)}*/}
      </div>

      {/*최대적재량*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[469px] w-[550px] h-[133px]">
        <input
          type="number"
          id="maxWeight"
          name="maxWeight"
          onChange={setmaxWeight}
          className="absolute left-0 right-0 top-[25.56%] bottom-[25.56%] bg-[#f1f3f5] rounded-[4px]"
        ></input>
        <div className="absolute left-0 right-[87.82%] top-0 bottom-[80.45%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
          최대적재량
        </div>
      </div>
      {/*마감기간*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[642px] w-[550px] h-[133px]">
        <input
          type="text"
          id="deadline"
          name="deadline"
          onChange={setDeadline}
          className="absolute left-0 right-0 top-[25.56%] bottom-[25.56%] bg-[#f1f3f5] rounded-[4px]"
        ></input>
        <div className="absolute left-0 right-[81.09%] top-0 bottom-[80.45%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
          마감기간
        </div>
      </div>

      {/*하단 등록 버튼*/}
      <div className="absolute flex justify-center -translate-x-1/2 left-1/2 top-[815px] gap-4">
        <button
          onClick={goBack}
          className="w-[220px] h-[65px] font-['Noto_Sans_KR'] bg-white font-bold text-xl text-cb border-2 border-cb rounded-md hover:bg-cb hover:text-white"
        >
          취소하기
        </button>

        <button
          onClick={onSubmit}
          className="w-[220px] h-[65px] font-['Noto_Sans_KR'] bg-white font-bold text-xl text-cb border-2 border-cb rounded-md hover:bg-cb hover:text-white"
        >
          등록하기
        </button>
      </div>
    </div>
  );
}
