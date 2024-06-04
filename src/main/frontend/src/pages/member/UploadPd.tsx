import { Link, useNavigate } from "react-router-dom";
import { CreateAxiosInstance } from "../../shared/axios/createAxiosInstance";
import useInput from "../../useInput";
import { useState } from "react";

export default function UploadPd() {
  const navigate = useNavigate();
  // 상품명 / 수량 / 높이 / 무게 / 출고마감시간 / 1차배송지 / 최종배송지
  const [productName, setpdName] = useInput("");
  const [quantity, setquantity] = useInput("");
  const [height, setHeight] = useState<number | string>(0);
  const [weight, setweight] = useInput("");
  const [releaseDate, setDealine] = useInput("2024-06-12T19:30");
  const [firstAddress, setfirstDest] = useInput("");
  const [finalAddress, setfinalAddress] = useInput("");
  const [높이에러문구, 높이에러문구변경] = useState("");
  const onSubmit = (e: any) => {
    e.preventDefault();
   
    if (
      productName === "" ||
      quantity === "" ||
      height === "" ||
      weight === "" ||
      releaseDate === "" ||
      firstAddress === "" ||
      finalAddress === ""
    ) {
      alert("모든 정보를 입력해주세요.");
      return;
    } else {
      navigate("/user/usermain");
      CreateAxiosInstance()
        .post("/products", {
          productName,
          quantity,
          height,
          weight,
          releaseDate,
          firstAddress,
          finalAddress,
        })
        .then((response) => {
        })
        .catch((error) => {
          // 실패시
          console.log("axios.post 실패! 이유는?");
          console.log(error);
        })
        .finally(() => {});
    }
  };

  const limitHeight = (e: any) => {
    let inputHeight = parseFloat(e.target.value);
    if (inputHeight <= 0) {
      inputHeight = 0;
      setHeight(inputHeight);
      높이에러문구변경("0보다 큰 값을 입력하세요.");
    } else if (inputHeight > 2.5) {
      inputHeight = 2.5;
      setHeight(inputHeight);
      높이에러문구변경("2.5보다 큰 값을 입력해서 2.5변경되었습니다.");
    } else {
      높이에러문구변경("");
      setHeight(inputHeight);
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="relative h-[1400px] bg-[#f1f3f5] overflow-hidden">
      <div className="pl-5 border-t-2 shadow-sm navbar bg-base-100">
        <Link
          to={"/user/usermain"}
          className="text-xl font-thin text-gray-600 w-44 btn btn-ghost hover:bg-cb hover:text-white"
        >
          주문내역
        </Link>
        <Link
          to={"/user/usermain"}
          className="text-xl text-cb w-44 btn btn-ghost hover:bg-cb hover:text-white"
        >
          상품등록하기
        </Link>
      </div>

      {/*가운데 틀*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[120px] w-[740px] h-[1230px] bg-[#f8f9fa] rounded-[4px]"></div>
      <div className="absolute -translate-x-1/2 left-1/2 top-[120px] leading-[170%] font-['Noto_Sans_KR'] font-bold text-[#212529] text-center whitespace-nowrap w-[740px] bg-cb h-11 items-center flex justify-center">
        <span className="text-[30px] text-white">상품등록</span>
      </div>

      {/*상품명*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[220px] w-[550px] h-[133px]">
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
      <div className="absolute -translate-x-1/2 left-1/2 top-[359px] w-[550px] h-[133px]">
        <input
          type="number"
          id="quantity"
          name="quantity"
          onChange={setquantity}
          className="absolute left-0 right-0 top-[25.56%] bottom-[25.56%] bg-[#f1f3f5] rounded-[4px]"
        ></input>
        <div className="absolute left-0 right-[87.82%] top-0 bottom-[80.45%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
          수량(개)
        </div>
      </div>
      {/*높이*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[498px] w-[550px] h-[133px]">
        <input
          type="number"
          id="height"
          name="height"
          max="10"
          value={height}
          onChange={limitHeight}
          className={
            !높이에러문구
              ? "absolute left-0 right-0 top-[25.56%] bottom-[25.56%] bg-[#f1f3f5] rounded-[4px]"
              : "absolute left-0 right-0 top-[25.56%] bottom-[25.56%] bg-[#f1f3f5] rounded-[4px] focus:ring-reg"
          }
        ></input>
        <div className="absolute left-0 right-[81.09%] top-[105px] bottom-[80.45%] text-[18px] font-['Noto_Sans_KR'] font-medium text-reg whitespace-nowrap">
          {높이에러문구}
        </div>
        <div className="absolute left-0 right-[81.09%] top-0 bottom-[80.45%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
          높이(m)
        </div>
      </div>

      {/*무게*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[637px] w-[550px] h-[133px] flex">
        <input
          type="text"
          id="weight"
          name="weight"
          onChange={setweight}
          className="absolute left-0 right-0 top-[25.56%] bottom-[25.56%] bg-[#f1f3f5] rounded-[4px]"
        ></input>
        <div className="absolute left-0 right-[90.91%] top-0 bottom-[73.74%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
          무게(kg)
        </div>
      </div>

      {/*출고마감시간*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[776px] w-[549px] h-[133px] flex">
        <div className="absolute left-0 right-[93.81%] top-0 bottom-[86.24%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">
          상품출고일
        </div>
        <div className="absolute left-0 top-[39px] w-[549px] h-[65px] flex">
          <input
            type="datetime-local"
            id="releaseDate"
            name="releaseDate"
            value={releaseDate}
            onChange={setDealine}
            className="absolute left-0 right-0 top-0 bottom-0 bg-[#f1f3f5] rounded-[4px]"
          ></input>
        </div>
      </div>

      {/*1차배송지*/}
      <div className="absolute -translate-x-1/2 left-1/2 top-[915px] w-[549px] h-[104px] flex">
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
      <div className="absolute -translate-x-1/2 left-1/2 top-[1054px] w-[549px] h-[104px] flex">
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
      <div className="absolute flex justify-center -translate-x-1/2 left-1/2 top-[1215px] gap-4">
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
