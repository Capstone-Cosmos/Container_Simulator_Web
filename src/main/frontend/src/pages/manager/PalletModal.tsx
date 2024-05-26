import { useState } from "react";
import Modal from "react-modal";
import { CreateAxiosInstance } from "../../shared/axios/createAxiosInstance";
export default function PalletModal({ urlContainerId, productId, addToBoxList, reverseRefeach }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [palletType, setPalletType] = useState("");
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      width: "761px",
      height: "467px",
      margin: "auto",
      borderRadius: "4px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      padding: "0px",
    },
  };

  console.log("containerId: " + urlContainerId + " productId: " + productId);
  const addPallet = async (e: any) => {
    console.log("a");
    console.log(e);


    try {
      const response = await CreateAxiosInstance().post("/pallets", null, {
        params: {
          productId,
          containerId: urlContainerId,
          palletType: e,
        },
      });
      addToBoxList(productId)
    } catch (error) {
      console.log(error, "error");
    }
    closeModal();
    reverseRefeach()
    // window.location.reload();
  };

  return (
      <div>
        <button
            className="p-2 px-4 text-base font-bold text-center bg-white border-2 rounded-lg text-appr hover:bg-appr hover:text-white border-appr"
            onClick={openModal}
        >
          {" "}
          등록{" "}
        </button>

        <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
          <div className="relative w-[700px] h-[465px]">
            <div className="absolute left-[2px] top-0 w-[757px] h-[465px] bg-[#eee] border-[1px] border-solid border-[#eee]"></div>
            <div className="absolute left-[27px] top-[53px] w-[707px] h-[60px] flex flex-col items-start justify-start py-0 px-[20px] bg-[#74b5dd] rounded-tl-[6px] rounded-tr-[6px] rounded-br-0 rounded-bl-0">
              <div className="self-stretch flex-1 flex flex-row items-center justify-center gap-[10px]">
                <div className="flex flex-row items-center self-stretch justify-start flex-1">
                  <div className="flex-1 self-stretch text-[16px] leading-[19px] font-['Inter'] font-semibold text-[#fff] flex flex-col justify-center">
                    팔레트 타입
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch justify-start flex-1">
                  <div className="flex-1 self-stretch text-[16px] leading-[19px] font-['Inter'] font-semibold text-[#fff] flex flex-col justify-center">
                    가로(W)
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch justify-start flex-1">
                  <div className="flex-1 self-stretch text-[16px] leading-[19px] font-['Inter'] font-semibold text-[#fff] flex flex-col justify-center">
                    깊이(D)
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch justify-start flex-1">
                  <div className="flex-1 self-stretch text-[16px] leading-[19px] font-['Inter'] font-semibold text-[#fff] flex flex-col justify-center">
                    높이(H)
                  </div>
                </div>
                <div className="w-[159px] self-stretch shrink-0 flex flex-row items-center justify-start gap-[10px]">
                  <div className="w-[120px] self-stretch text-[16px] leading-[19px] font-['Inter'] font-semibold text-[#fff] flex flex-col justify-center">
                    중량{" "}
                  </div>
                  <div className="w-[73px] self-stretch text-[16px] leading-[19px] font-['Inter'] font-semibold text-[#fff] flex flex-col justify-center">
                    {" "}
                    추가
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-[27px] top-[113px] w-[707px] h-[68px] flex flex-col items-start justify-start pt-0 pr-[20px] pb-0 pl-[14px] bg-[#fff] overflow-hidden">
              <div className="self-stretch flex-1 flex flex-row items-center justify-center gap-[10px]">
                <div className="flex flex-row items-center self-stretch justify-start flex-1">
                  <div className="w-[79px] h-[35px] text-[15px] font-['Inter'] font-bold text-[#000] text-center flex flex-col justify-center">
                    11A
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch justify-start">
                  <div className="w-[114px] self-stretch text-[15px] leading-[19px] font-['Inter'] text-[#333] flex flex-col justify-center">
                    1,100mm
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch justify-start flex-1">
                  <div className="flex-1 self-stretch text-[15px] leading-[19px] font-['Inter'] text-[#333] flex flex-col justify-center">
                    {" "}
                    1,100mm
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch justify-start flex-1">
                  <div className="flex-1 self-stretch text-[15px] leading-[19px] font-['Inter'] text-[#333] flex flex-col justify-center">
                    {" "}
                    150mm
                  </div>
                </div>
                <div className="w-[160px] self-stretch shrink-0 flex flex-col items-start justify-center">
                  <div className="text-[15px] leading-[19px] font-['Inter'] text-[#333] whitespace-nowrap">
                    19.5kg
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-[645px] top-[133px] w-[54px] h-[30px] flex">
              <button
                  className="absolute left-0 top-0 w-[54px] h-[30px] bg-[#f8f9fa] border-[1px] border-solid border-[#74b5dd] rounded-[6px] hover:bg-cb hover:text-white text-cb text-[14px] font-bold "
                  onClick={() => addPallet("PALLET_TYPE_11A")}
              >
                추가
              </button>
            </div>
            <div className="absolute left-[27px] top-[385px] w-[707px] h-[68px] flex flex-col items-start justify-start pt-0 pr-[20px] pb-0 pl-[14px] bg-[#fff] overflow-hidden">
              <div className="self-stretch flex-1 flex flex-row items-center justify-center gap-[10px]">
                <div className="flex flex-row items-center self-stretch justify-start flex-1">
                  <div className="w-[79px] h-[35px] text-[15px] font-['Inter'] font-bold text-[#000] text-center flex flex-col justify-center">
                    15A
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch justify-start">
                  <div className="w-[114px] self-stretch text-[15px] leading-[19px] font-['Inter'] text-[#333] flex flex-col justify-center">
                    1,460mm
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch justify-start flex-1">
                  <div className="flex-1 self-stretch text-[15px] leading-[19px] font-['Inter'] text-[#333] flex flex-col justify-center">
                    {" "}
                    1,130mm
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch justify-start flex-1">
                  <div className="flex-1 self-stretch text-[15px] leading-[19px] font-['Inter'] text-[#333] flex flex-col justify-center">
                    {" "}
                    150mm
                  </div>
                </div>
                <div className="w-[160px] self-stretch shrink-0 flex flex-col items-start justify-center">
                  <div className="text-[15px] leading-[19px] font-['Inter'] text-[#333] whitespace-nowrap">
                    27.5kg
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-[645px] top-[405px] w-[54px] h-[30px] flex">
              <button
                  className="absolute left-0 top-0 w-[54px] h-[30px] bg-[#f8f9fa] border-[1px] border-solid border-[#74b5dd] rounded-[6px] hover:bg-cb hover:text-white text-[14px] font-bold  text-cb"
                  onClick={() => addPallet("PALLET_TYPE_15A")}
              >
                추가
              </button>
            </div>
            <div className="absolute left-[27px] top-[453px] w-[707px] h-0 border-[2px] border-solid border-[#eee]"></div>
            <div className="absolute left-[27px] top-[317px] w-[707px] h-[68px] flex flex-col items-start justify-start pt-0 pr-[20px] pb-0 pl-[14px] bg-[#fff] overflow-hidden">
              <div className="self-stretch flex-1 flex flex-row items-center justify-center gap-[10px]">
                <div className="flex flex-row items-center self-stretch justify-start flex-1">
                  <div className="w-[79px] h-[35px] text-[15px] font-['Inter'] font-bold text-[#000] text-center flex flex-col justify-center">
                    13B
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch justify-start">
                  <div className="w-[114px] self-stretch text-[15px] leading-[19px] font-['Inter'] text-[#333] flex flex-col justify-center">
                    1,300mm
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch justify-start flex-1">
                  <div className="flex-1 self-stretch text-[15px] leading-[19px] font-['Inter'] text-[#333] flex flex-col justify-center">
                    {" "}
                    1,100mm
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch justify-start flex-1">
                  <div className="flex-1 self-stretch text-[15px] leading-[19px] font-['Inter'] text-[#333] flex flex-col justify-center">
                    {" "}
                    150mm
                  </div>
                </div>
                <div className="w-[160px] self-stretch shrink-0 flex flex-col items-start justify-center">
                  <div className="text-[15px] leading-[19px] font-['Inter'] text-[#333] whitespace-nowrap">
                    25.0kg
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-[645px] top-[337px] w-[54px] h-[30px] flex">
              <button
                  className="absolute left-0 top-0 w-[54px] h-[30px] bg-[#f8f9fa] border-[1px] border-solid border-[#74b5dd] rounded-[6px] hover:bg-cb hover:text-white text-cb text-[14px] font-bold "
                  onClick={() => addPallet("PALLET_TYPE_13B")}
              >
                추가
              </button>
            </div>
            <div className="absolute left-[27px] top-[385px] w-[707px] h-0 border-[2px] border-solid border-[#eee]"></div>
            <div className="absolute left-[27px] top-[249px] w-[707px] h-[68px] flex flex-col items-start justify-start pt-0 pr-[20px] pb-0 pl-[14px] bg-[#fff] overflow-hidden">
              <div className="self-stretch flex-1 flex flex-row items-center justify-center gap-[10px]">
                <div className="flex flex-row items-center self-stretch justify-start flex-1">
                  <div className="w-[79px] h-[35px] text-[15px] font-['Inter'] font-bold text-[#000] text-center flex flex-col justify-center">
                    11B
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch justify-start">
                  <div className="w-[114px] self-stretch text-[15px] leading-[19px] font-['Inter'] text-[#333] flex flex-col justify-center">
                    1,100mm
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch justify-start flex-1">
                  <div className="flex-1 self-stretch text-[15px] leading-[19px] font-['Inter'] text-[#333] flex flex-col justify-center">
                    {" "}
                    1,100mm
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch justify-start flex-1">
                  <div className="flex-1 self-stretch text-[15px] leading-[19px] font-['Inter'] text-[#333] flex flex-col justify-center">
                    {" "}
                    150mm
                  </div>
                </div>
                <div className="w-[160px] self-stretch shrink-0 flex flex-col items-start justify-center">
                  <div className="text-[15px] leading-[19px] font-['Inter'] text-[#333] whitespace-nowrap">
                    26.2kg
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-[645px] top-[269px] w-[54px] h-[30px] flex">
              <button
                  className="absolute left-0 top-0 w-[54px] h-[30px] bg-[#f8f9fa] border-[1px] border-solid border-[#74b5dd] rounded-[6px] hover:bg-cb hover:text-white text-cb text-[14px] font-bold "
                  onClick={() => addPallet("PALLET_TYPE_11B")}
              >
                추가
              </button>
            </div>
            <div className="absolute left-[27px] top-[317px] w-[707px] h-0 border-[2px] border-solid border-[#eee]"></div>
            <div className="absolute left-[27px] top-[181px] w-[707px] h-[68px] flex flex-col items-start justify-start pt-0 pr-[20px] pb-0 pl-[14px] bg-[#fff] overflow-hidden">
              <div className="self-stretch flex-1 flex flex-row items-center justify-center gap-[10px]">
                <div className="flex flex-row items-center self-stretch justify-start flex-1">
                  <div className="w-[79px] h-[35px] text-[15px] font-['Inter'] font-bold text-[#000] text-center flex flex-col justify-center">
                    12A
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch justify-start">
                  <div className="w-[114px] self-stretch text-[15px] leading-[19px] font-['Inter'] text-[#333] flex flex-col justify-center">
                    1,200mm
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch justify-start flex-1">
                  <div className="flex-1 self-stretch text-[15px] leading-[19px] font-['Inter'] text-[#333] flex flex-col justify-center">
                    {" "}
                    1,000mm
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch justify-start flex-1">
                  <div className="flex-1 self-stretch text-[15px] leading-[19px] font-['Inter'] text-[#333] flex flex-col justify-center">
                    {" "}
                    150mm
                  </div>
                </div>
                <div className="w-[160px] self-stretch shrink-0 flex flex-col items-start justify-center">
                  <div className="text-[15px] leading-[19px] font-['Inter'] text-[#333] whitespace-nowrap">
                    19.0kg
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-[645px] top-[201px] w-[54px] h-[30px] flex">
              <button
                  className="absolute left-0 top-0 w-[54px] h-[30px] bg-[#f8f9fa] border-[1px] border-solid border-[#74b5dd] rounded-[6px] hover:bg-cb hover:text-white text-cb text-[14px] font-bold"
                  onClick={() => addPallet("PALLET_TYPE_12A")}
              >
                추가
              </button>
            </div>
            <div className="absolute left-[27px] top-[249px] w-[707px] h-0 border-[2px] border-solid border-[#eee]"></div>
            <div className="absolute left-[27px] top-[181px] w-[707px] h-0 border-[2px] border-solid border-[#eee]"></div>
            <div className="absolute left-[700px] top-[12px] w-[32px] h-[32px] flex">
              <div
                  onClick={closeModal}
                  className="absolute flex justify-center items-center left-0 top-0 w-[32px] h-[32px] bg-[#eee] rounded-[4px] hover:bg-reg group"
              >
                <button
                    onClick={closeModal}
                    className="text-[16px] font-['Noto_Sans_KR'] font-bold text-black text-center whitespace-nowrap group-hover:text-white"
                >
                  X
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
  );
}
