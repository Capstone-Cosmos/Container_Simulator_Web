import { Link, useNavigate } from "react-router-dom";
import useInput from "../../useInput";
import { useCallback, useState } from "react";
import axios from "axios";
import { CreateAxiosInstance } from "../../shared/axios/createAxiosInstance";

export default function UploadPd() {
  const navigate = useNavigate();
  // 상품명 / 수량 / 높이 / 무게 / 출고마감시간 / 1차배송지 / 최종배송지
  const [productName, setpdName] = useInput("");
  const [quantity, setquantity] = useInput("");
  const [height, setHeight] = useInput("");
  const [weight, setweight] = useInput("");
  const [deadline, setDealine] = useInput("2024-05-22");
  const [firstAddress, setfirstDest] = useInput("");
  const [finalAddress, setfinalAddress] = useInput("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log("submit");
    if (
      productName === "" ||
      quantity === "" ||
      height === "" ||
      weight === "" ||
      deadline === "" ||
      firstAddress === "" ||
      finalAddress === ""
    ) {
      alert("모든 정보를 입력해주세요.");
      return;
    } else {
      navigate("/new/usermain");
      CreateAxiosInstance()
        .post("/products", {
          productName,
          quantity,
          height,
          weight,
          deadline,
          firstAddress,
          finalAddress,
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
    navigate(-1);
  };

  return (
    <div className="relative h-[1680px] bg-[#f1f3f5] overflow-hidden">
      <div className="pl-32 border-t-2 shadow-sm navbar bg-base-100">
        <Link to={"/new/usermain"} className="w-56 text-xl text-gray-600 btn btn-ghost hover:bg-cb hover:text-white">
        주문내역
      </Link>
      </div>
      
      {/*가운데 틀*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[120px] w-[740px] h-[1536px] bg-[#f8f9fa] rounded-[4px]"></div>
      {/*cosmos사용자회원가입 부분*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[174px] leading-[170%] font-['Noto_Sans_KR'] font-bold text-[#212529] text-center whitespace-nowrap">
        <span className="text-[34px]">
          사용자
          <br />
        </span>
        <span className="text-[24px]">상품등록</span>
      </div>

      {/*상품명*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[296px] w-[550px] h-[133px]">
        <input
          type="text"
          id="productName"
          name="productName"
          onChange={setpdName}
          className="absolute left-0 right-0 top-[25.56%] bottom-[25.56%] bg-[#f1f3f5] rounded-[4px]"
        ></input>
        <div className="absolute left-0 right-[90.91%] top-0 bottom-[80.45%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
          상품명
        </div>

        {/*{!productName && (<div>상품명를 입력해주세요.</div>)}*/}
      </div>

      {/*수량*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[469px] w-[550px] h-[133px]">
        <input
          type="number"
          id="quantity"
          name="quantity"
          onChange={setquantity}
          className="absolute left-0 right-0 top-[25.56%] bottom-[25.56%] bg-[#f1f3f5] rounded-[4px]"
        ></input>
        <div className="absolute left-0 right-[87.82%] top-0 bottom-[80.45%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
          수량
        </div>
      </div>
      {/*높이*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[642px] w-[550px] h-[133px]">
        <input
          type="text"
          id="height"
          name="height"
          onChange={setHeight}
          className="absolute left-0 right-0 top-[25.56%] bottom-[25.56%] bg-[#f1f3f5] rounded-[4px]"
        ></input>
        <div className="absolute left-0 right-[81.09%] top-0 bottom-[80.45%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
          높이
        </div>
      </div>

      {/*무게*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[815px] w-[550px] h-[133px] flex">
        <input
          type="text"
          id="weight"
          name="weight"
          onChange={setweight}
          className="absolute left-0 right-0 top-[25.56%] bottom-[25.56%] bg-[#f1f3f5] rounded-[4px]"
        ></input>
        <div className="absolute left-0 right-[90.91%] top-0 bottom-[73.74%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
          무게
        </div>
      </div>

      {/*출고마감시간*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[954px] w-[549px] h-[133px] flex">
        <div className="absolute left-0 right-[93.81%] top-0 bottom-[86.24%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
          출고마감시간
        </div>
        <div className="absolute left-0 top-[39px] w-[549px] h-[65px] flex">
          <input
            type="datetime-local"
            id="deadline"
            name="deadline"
            onChange={setDealine}
            className="absolute left-0 right-0 top-0 bottom-0 bg-[#f1f3f5] rounded-[4px]"
          ></input>
        </div>
      </div>

      {/*1차배송지*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[1093px] w-[549px] h-[104px] flex">
        <div className="absolute left-0 right-[90.89%] top-0 bottom-[75%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
          1차배송지
        </div>
        <div className="absolute left-0 top-[39px] w-[549px] h-[65px] flex">
          <input
            type="text"
            id="firstAddress"
            name="firstAddress"
            onChange={setfirstDest}
            className="absolute left-0 right-0 top-0 bottom-0 bg-[#f1f3f5] rounded-[4px]"
          ></input>
        </div>
      </div>

      {/*최종배송지*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[1232px] w-[549px] h-[104px] flex">
        <div className="absolute left-0 right-[90.89%] top-0 bottom-[75%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
          최종배송지
        </div>
        <div className="absolute left-0 top-[39px] w-[549px] h-[65px] flex">
          <input
            type="text"
            id="finalAddress"
            name="finalAddress"
            onChange={setfinalAddress}
            className="absolute left-0 right-0 top-0 bottom-0 bg-[#f1f3f5] rounded-[4px]"
          ></input>
        </div>
      </div>

      {/*하단 등록 버튼*/}
      <div className="absolute flex justify-center -translate-x-1/2 left-1/2 top-[1416px] gap-4">
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
