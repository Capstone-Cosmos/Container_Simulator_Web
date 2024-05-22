import { Link, useNavigate } from "react-router-dom";
import useInput from "../../useInput";
import { useCallback, useState } from "react";
import axios from "axios";
import { CreateAxiosInstance } from "../../shared/axios/createAxiosInstance";
import ContainerList from "./containerList";

export default function ContainerUpload() {
  const navigate = useNavigate();
  // 현재무게 / 최대 적재 용적 / 마감시간 /destination / startingPoint /deadline / containerType /weight / containerName /
  const [containerName, setContainerName] = useInput("");
  const [containerType, setContainerType] = useInput<string>("");
  const [deadline, setDeadline] = useInput("");
  const [staringPoint, setStartingPoint] = useInput("");
  const [destination, setDestination] = useInput("");

  const twentyDry = useCallback(async (e: any) => {
    if (e.target.name === "20FT DRY") {
      console.log("20FT DRY");
      setContainerType(e.target.name);
    }
  }, []);

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log("submit");
    if (
      containerName === "" ||
      containerType === "" ||
      deadline === "" ||
      staringPoint === "" ||
      destination === ""
    ) {
      alert("모든 정보를 입력해주세요.");
      return;
    } else {
      navigate("/new/containerList");
      CreateAxiosInstance()
        .post("/containers", {
          containerName,
          containerType,
          deadline,
          staringPoint,
          destination,
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
    navigate("/new/containerList");
  };

  return (
    <div className="relative h-[1300px] bg-[#f1f3f5] overflow-hidden">
      <div className="pl-5 border-t-2 shadow-sm navbar bg-base-100">
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
      <div className="absolute -translate-x-1/2 left-1/2 top-[120px] w-[740px] h-[1536px] bg-[#f8f9fa] rounded-[4px]"></div>
      <div className="absolute -translate-x-1/2 left-1/2 top-[120px] leading-[170%] font-['Noto_Sans_KR'] font-bold text-[#212529] text-center whitespace-nowrap w-[740px] bg-cb h-11 items-center flex justify-center">
        <span className="text-[30px] text-white">컨테이너 등록</span>
      </div>

      {/*컨테이너이름*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[296px] w-[550px] h-[133px]">
        <input
          type="text"
          id="productName"
          name="productName"
          onChange={setContainerName}
          className="absolute left-0 right-0 top-[25.56%] bottom-[25.56%] bg-[#f1f3f5] rounded-[4px]"
        ></input>
        <div className="absolute left-0 right-[90.91%] top-0 bottom-[80.45%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
          컨테이너이름
        </div>

        {/*{!productName && (<div>상품명를 입력해주세요.</div>)}*/}
      </div>

      {/*컨테이너 종류*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[469px] w-[550px] h-[133px]">
        <button
          onClick={twentyDry}
          className="absolute left-0 right-2/3 top-[25.56%] bottom-[25.56%] bg-[#f1f3f5] rounded-[4px] hover:bg-cb"
          name="20FT DRY"
        >
          20FT DRY
        </button>
        <button className="absolute left-1/3 right-1/3 top-[25.56%] bottom-[25.56%] bg-[#f1f3f5] rounded-[4px] hover:bg-cb">
          40FT DRY
        </button>
        <button className="absolute left-2/3 right-0 top-[25.56%] bottom-[25.56%] bg-[#f1f3f5] rounded-[4px] hover:bg-cb">
          40FT HQ
        </button>

        <div className="absolute left-0 right-[81.09%] top-0 bottom-[80.45%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
          컨테이너 종류
        </div>
      </div>

      {/*마감일*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[642px] w-[550px] h-[133px] flex">
        <input
          type="text"
          id="weight"
          name="weight"
          onChange={setDeadline}
          className="absolute left-0 right-0 top-[25.56%] bottom-[25.56%] bg-[#f1f3f5] rounded-[4px]"
        ></input>
        <div className="absolute left-0 right-[90.91%] top-0 bottom-[73.74%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
          마감일
        </div>
      </div>

      {/*출발지*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[815px] w-[549px] h-[133px] flex">
        <div className="absolute left-0 right-[93.81%] top-0 bottom-[86.24%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
          출발지
        </div>
        <div className="absolute left-0 top-[39px] w-[549px] h-[65px] flex">
          <input
            type="datetime-local"
            id="deadline"
            name="deadline"
            onChange={setStartingPoint}
            className="absolute left-0 right-0 top-0 bottom-0 bg-[#f1f3f5] rounded-[4px]"
          ></input>
        </div>
      </div>

      {/*도착지*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[954px] w-[549px] h-[104px] flex">
        <div className="absolute left-0 right-[90.89%] top-0 bottom-[75%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
          도착지
        </div>
        <div className="absolute left-0 top-[39px] w-[549px] h-[65px] flex">
          <input
            type="text"
            id="firstAddress"
            name="firstAddress"
            onChange={setDestination}
            className="absolute left-0 right-0 top-0 bottom-0 bg-[#f1f3f5] rounded-[4px]"
          ></input>
        </div>
      </div>

      {/*하단 등록 버튼*/}
      <div className="absolute flex justify-center -translate-x-1/2 left-1/2 top-[1150px] gap-4">
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
