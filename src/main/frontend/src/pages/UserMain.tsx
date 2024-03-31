import { useState, EventHandler, ReactNode } from 'react'
import { Link } from 'react-router-dom'

export default function UserMain(){
	return (<div className="relative w-[1280px] h-[720px] bg-[#f1f3f5] overflow-hidden">
  <div className="absolute left-[80px] top-[228px] w-[1120px] h-[472px] bg-[#f8f9fa] rounded-[4px]"></div>
  <div className="absolute left-[80px] top-[228px] flex flex-row items-start justify-start rounded-tl-[4px] rounded-tr-[4px] rounded-br-0 rounded-bl-0 overflow-hidden">
    <div className="relative w-[43px] h-[54px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[43px] h-[54px] bg-[#74b5dd]"></div>
      <div className="absolute left-[11px] top-[17px] w-[20px] h-[20px]">
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#f8f9fa] border-[1px] border-solid border-[#dee2e6] rounded-[4px]"></div>
      </div>
    </div>
    <div className="relative w-[60px] h-[54px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[60px] h-[54px] bg-[#74b5dd] border-[solid] border-#f8f9fa border border-[0_0_0_1px]"></div>
      <div className="absolute left-[13px] top-[14px] text-[18px] font-['Noto_Sans_KR'] font-bold text-[#f8f9fa] whitespace-nowrap">번호</div>
    </div>
    <div className="relative w-[112px] h-[54px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[112px] h-[54px] bg-[#74b5dd] border-[solid] border-#f8f9fa border border-[0_0_0_1px]"></div>
      <div className="absolute left-[31px] top-[14px] text-[18px] font-['Noto_Sans_KR'] font-bold text-[#f8f9fa] whitespace-nowrap">상품명</div>
    </div>
    <div className="relative w-[90px] h-[54px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[90px] h-[54px] bg-[#74b5dd] border-[solid] border-#f8f9fa border border-[0_0_0_1px]"></div>
      <div className="absolute left-[11px] top-[14px] text-[18px] font-['Noto_Sans_KR'] font-bold text-[#f8f9fa] whitespace-nowrap">주문개수</div>
    </div>
    <div className="relative w-[184px] h-[54px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[184px] h-[54px] bg-[#74b5dd] border-[solid] border-#f8f9fa border border-[0_0_0_1px]"></div>
      <div className="absolute left-[58px] top-[14px] text-[18px] font-['Noto_Sans_KR'] font-bold text-[#f8f9fa] whitespace-nowrap">주문일자</div>
    </div>
    <div className="relative w-[184px] h-[54px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[184px] h-[54px] bg-[#74b5dd] border-[solid] border-#f8f9fa border border-[0_0_0_1px]"></div>
      <div className="absolute left-[42px] top-[14px] text-[18px] font-['Noto_Sans_KR'] font-bold text-[#f8f9fa] whitespace-nowrap">출고마감시간</div>
    </div>
    <div className="relative w-[112px] h-[54px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[112px] h-[54px] bg-[#74b5dd] border-[solid] border-#f8f9fa border border-[0_0_0_1px]"></div>
      <div className="absolute left-[15px] top-[14px] text-[18px] font-['Noto_Sans_KR'] font-bold text-[#f8f9fa] whitespace-nowrap">1차 배송지</div>
    </div>
    <div className="relative w-[112px] h-[54px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[112px] h-[54px] bg-[#74b5dd] border-[solid] border-#f8f9fa border border-[0_0_0_1px]"></div>
      <div className="absolute left-[12px] top-[14px] text-[18px] font-['Noto_Sans_KR'] font-bold text-[#f8f9fa] whitespace-nowrap">최종 배송지</div>
    </div>
    <div className="relative w-[112px] h-[54px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[112px] h-[54px] bg-[#74b5dd] border-[solid] border-#f8f9fa border border-[0_0_0_1px]"></div>
      <div className="absolute left-[22px] top-[14px] text-[18px] font-['Noto_Sans_KR'] font-bold text-[#f8f9fa] whitespace-nowrap">배송현황</div>
    </div>
    <div className="relative w-[112px] h-[54px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[112px] h-[54px] bg-[#74b5dd] border-[solid] border-#f8f9fa border border-[0_0_0_1px]"></div>
      <div className="absolute left-[22px] top-[14px] text-[18px] font-['Noto_Sans_KR'] font-bold text-[#f8f9fa] whitespace-nowrap">승인현황</div>
    </div>
  </div>
  <div className="absolute left-[80px] top-[282px] flex flex-row items-start justify-start border-[solid] border-#dee2e6 border border-[0_0_1px] overflow-hidden">
    <div className="relative w-[43px] h-[47px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[43px] h-[47px] bg-[#f8f9fa]"></div>
      <div className="absolute left-[11px] top-[14px] w-[20px] h-[20px]">
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#f8f9fa] border-[1px] border-solid border-[#dee2e6] rounded-[4px]"></div>
      </div>
    </div>
    <div className="relative w-[60px] h-[47px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[60px] h-[47px] bg-[#f8f9fa] border-[solid] border-#dee2e6 border border-[0_0_0_1px]"></div>
      <div className="absolute left-[25px] top-[12px] text-[16px] font-['Noto_Sans_KR'] font-medium text-[#181b1e] text-center whitespace-nowrap">1</div>
    </div>
    <div className="relative w-[112px] h-[47px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[112px] h-[47px] bg-[#f8f9fa] border-[solid] border-#dee2e6 border border-[0_0_0_1px]"></div>
      <div className="absolute left-[33px] top-[12px] text-[16px] font-['Noto_Sans_KR'] font-medium text-[#181b1e] text-center whitespace-nowrap">삼다수</div>
    </div>
    <div className="relative w-[90px] h-[47px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[90px] h-[47px] bg-[#f8f9fa] border-[solid] border-#dee2e6 border border-[0_0_0_1px]"></div>
      <div className="absolute left-[26px] top-[12px] text-[16px] font-['Noto_Sans_KR'] font-medium text-[#181b1e] text-center whitespace-nowrap">1000</div>
    </div>
    <div className="relative w-[184px] h-[47px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[184px] h-[47px] bg-[#f8f9fa] border-[solid] border-#dee2e6 border border-[0_0_0_1px]"></div>
      <div className="absolute left-[35px] top-[12px] text-[16px] font-['Noto_Sans_KR'] font-medium text-[#181b1e] text-center whitespace-nowrap">23-11-20 18:33</div>
    </div>
    <div className="relative w-[184px] h-[47px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[184px] h-[47px] bg-[#f8f9fa] border-[solid] border-#dee2e6 border border-[0_0_0_1px]"></div>
      <div className="absolute left-[36px] top-[12px] text-[16px] font-['Noto_Sans_KR'] font-medium text-[#181b1e] text-center whitespace-nowrap">23-11-21 18:00</div>
    </div>
    <div className="relative w-[112px] h-[47px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[112px] h-[47px] bg-[#f8f9fa] border-[solid] border-#dee2e6 border border-[0_0_0_1px]"></div>
      <div className="absolute left-[34px] top-[12px] text-[16px] font-['Noto_Sans_KR'] font-medium text-[#181b1e] text-center whitespace-nowrap">인청항</div>
    </div>
    <div className="relative w-[112px] h-[47px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[112px] h-[47px] bg-[#f8f9fa] border-[solid] border-#dee2e6 border border-[0_0_0_1px]"></div>
      <div className="absolute left-[25px] top-[12px] text-[16px] font-['Noto_Sans_KR'] font-medium text-[#181b1e] text-center whitespace-nowrap">대구 시청</div>
    </div>
    <div className="relative w-[112px] h-[47px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[112px] h-[47px] bg-[#f8f9fa] border-[solid] border-#dee2e6 border border-[0_0_0_1px]"></div>
      <div className="absolute left-[52px] top-[12px] text-[16px] font-['Noto_Sans_KR'] font-medium text-[#181b1e] text-center whitespace-nowrap">-</div>
    </div>
    <div className="relative w-[112px] h-[47px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[112px] h-[47px] bg-[#f8f9fa] border-[solid] border-#dee2e6 border border-[0_0_0_1px]"></div>
      <div className="absolute left-[26px] top-[12px] text-[16px] font-['Noto_Sans_KR'] font-medium text-[#008736] text-center whitespace-nowrap">승인대기</div>
    </div>
  </div>
  <div className="absolute left-[80px] top-[329px] flex flex-row items-start justify-start border-[solid] border-#dee2e6 border border-[0_0_1px] overflow-hidden">
    <div className="relative w-[43px] h-[47px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[43px] h-[47px] bg-[#f8f9fa]"></div>
      <div className="absolute left-[11px] top-[14px] w-[20px] h-[20px]">
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#f8f9fa] border-[1px] border-solid border-[#dee2e6] rounded-[4px]"></div>
      </div>
    </div>
    <div className="relative w-[60px] h-[47px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[60px] h-[47px] bg-[#f8f9fa] border-[solid] border-#dee2e6 border border-[0_0_0_1px]"></div>
      <div className="absolute left-[25px] top-[12px] text-[16px] font-['Noto_Sans_KR'] font-medium text-[#181b1e] text-center whitespace-nowrap">2</div>
    </div>
    <div className="relative w-[112px] h-[47px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[112px] h-[47px] bg-[#f8f9fa] border-[solid] border-#dee2e6 border border-[0_0_0_1px]"></div>
      <div className="absolute left-[33px] top-[12px] text-[16px] font-['Noto_Sans_KR'] font-medium text-[#181b1e] text-center whitespace-nowrap">삼다수</div>
    </div>
    <div className="relative w-[90px] h-[47px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[90px] h-[47px] bg-[#f8f9fa] border-[solid] border-#dee2e6 border border-[0_0_0_1px]"></div>
      <div className="absolute left-[30px] top-[12px] text-[16px] font-['Noto_Sans_KR'] font-medium text-[#181b1e] text-center whitespace-nowrap">250</div>
    </div>
    <div className="relative w-[184px] h-[47px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[184px] h-[47px] bg-[#f8f9fa] border-[solid] border-#dee2e6 border border-[0_0_0_1px]"></div>
      <div className="absolute left-[35px] top-[12px] text-[16px] font-['Noto_Sans_KR'] font-medium text-[#181b1e] text-center whitespace-nowrap">23-11-18 14:29</div>
    </div>
    <div className="relative w-[184px] h-[47px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[184px] h-[47px] bg-[#f8f9fa] border-[solid] border-#dee2e6 border border-[0_0_0_1px]"></div>
      <div className="absolute left-[36px] top-[12px] text-[16px] font-['Noto_Sans_KR'] font-medium text-[#181b1e] text-center whitespace-nowrap">23-11-21 18:00</div>
    </div>
    <div className="relative w-[112px] h-[47px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[112px] h-[47px] bg-[#f8f9fa] border-[solid] border-#dee2e6 border border-[0_0_0_1px]"></div>
      <div className="absolute left-[34px] top-[12px] text-[16px] font-['Noto_Sans_KR'] font-medium text-[#181b1e] text-center whitespace-nowrap">부산항</div>
    </div>
    <div className="relative w-[112px] h-[47px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[112px] h-[47px] bg-[#f8f9fa] border-[solid] border-#dee2e6 border border-[0_0_0_1px]"></div>
      <div className="absolute left-[25px] top-[12px] text-[16px] font-['Noto_Sans_KR'] font-medium text-[#181b1e] text-center whitespace-nowrap">대구 시청</div>
    </div>
    <div className="relative w-[112px] h-[47px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[112px] h-[47px] bg-[#f8f9fa] border-[solid] border-#dee2e6 border border-[0_0_0_1px]"></div>
      <div className="absolute left-[52px] top-[12px] text-[16px] font-['Noto_Sans_KR'] font-medium text-[#181b1e] text-center whitespace-nowrap">-</div>
    </div>
    <div className="relative w-[112px] h-[47px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[112px] h-[47px] bg-[#f8f9fa] border-[solid] border-#dee2e6 border border-[0_0_0_1px]"></div>
      <div className="absolute left-[40px] top-[12px] text-[16px] font-['Noto_Sans_KR'] font-medium text-[#d7260d] text-center whitespace-nowrap">반려</div>
    </div>
  </div>
  <div className="absolute left-[80px] top-[377px] flex flex-row items-start justify-start border-[solid] border-#dee2e6 border border-[0_0_1px] overflow-hidden">
    <div className="relative w-[43px] h-[47px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[43px] h-[47px] bg-[#f8f9fa]"></div>
      <div className="absolute left-[11px] top-[14px] w-[20px] h-[20px]">
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#f8f9fa] border-[1px] border-solid border-[#dee2e6] rounded-[4px]"></div>
      </div>
    </div>
    <div className="relative w-[60px] h-[47px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[60px] h-[47px] bg-[#f8f9fa] border-[solid] border-#dee2e6 border border-[0_0_0_1px]"></div>
      <div className="absolute left-[25px] top-[12px] text-[16px] font-['Noto_Sans_KR'] font-medium text-[#181b1e] text-center whitespace-nowrap">3</div>
    </div>
    <div className="relative w-[112px] h-[47px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[112px] h-[47px] bg-[#f8f9fa] border-[solid] border-#dee2e6 border border-[0_0_0_1px]"></div>
      <div className="absolute left-[33px] top-[12px] text-[16px] font-['Noto_Sans_KR'] font-medium text-[#181b1e] text-center whitespace-nowrap">삼다수</div>
    </div>
    <div className="relative w-[90px] h-[47px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[90px] h-[47px] bg-[#f8f9fa] border-[solid] border-#dee2e6 border border-[0_0_0_1px]"></div>
      <div className="absolute left-[30px] top-[12px] text-[16px] font-['Noto_Sans_KR'] font-medium text-[#181b1e] text-center whitespace-nowrap">500</div>
    </div>
    <div className="relative w-[184px] h-[47px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[184px] h-[47px] bg-[#f8f9fa] border-[solid] border-#dee2e6 border border-[0_0_0_1px]"></div>
      <div className="absolute left-[35px] top-[12px] text-[16px] font-['Noto_Sans_KR'] font-medium text-[#181b1e] text-center whitespace-nowrap">23-11-15 07:43</div>
    </div>
    <div className="relative w-[184px] h-[47px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[184px] h-[47px] bg-[#f8f9fa] border-[solid] border-#dee2e6 border border-[0_0_0_1px]"></div>
      <div className="absolute left-[35px] top-[12px] text-[16px] font-['Noto_Sans_KR'] font-medium text-[#181b1e] text-center whitespace-nowrap">23-11-21-18:00</div>
    </div>
    <div className="relative w-[112px] h-[47px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[112px] h-[47px] bg-[#f8f9fa] border-[solid] border-#dee2e6 border border-[0_0_0_1px]"></div>
      <div className="absolute left-[34px] top-[12px] text-[16px] font-['Noto_Sans_KR'] font-medium text-[#181b1e] text-center whitespace-nowrap">인청항</div>
    </div>
    <div className="relative w-[112px] h-[47px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[112px] h-[47px] bg-[#f8f9fa] border-[solid] border-#dee2e6 border border-[0_0_0_1px]"></div>
      <div className="absolute left-[25px] top-[12px] text-[16px] font-['Noto_Sans_KR'] font-medium text-[#181b1e] text-center whitespace-nowrap">대구 시청</div>
    </div>
    <div className="relative w-[112px] h-[47px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[112px] h-[47px] bg-[#f8f9fa] border-[solid] border-#dee2e6 border border-[0_0_0_1px]"></div>
      <div className="absolute left-[26px] top-[12px] text-[16px] font-['Noto_Sans_KR'] font-medium text-[#181b1e] text-center whitespace-nowrap">배송대기</div>
    </div>
    <div className="relative w-[112px] h-[47px] shrink-0 flex">
      <div className="absolute left-0 top-0 w-[112px] h-[47px] bg-[#f8f9fa] border-[solid] border-#dee2e6 border border-[0_0_0_1px]"></div>
      <div className="absolute left-[40px] top-[12px] text-[16px] font-['Noto_Sans_KR'] font-medium text-[#3563e9] text-center whitespace-nowrap">승인</div>
    </div>
  </div>
  <div className="absolute -translate-x-1/2 left-1/2 top-[646px] flex flex-row items-center justify-start gap-[48px]">
    <div className="relative w-[14px] h-[14px] shrink-0">
      <img className="absolute left-0 top-0" width="14" height="14" src="vuesax/linear/arrow-leftI43_387;1_7948.png"></img>
    </div>
    <div className="text-[14px] font-['Noto_Sans_KR'] font-medium text-[#3563e9] text-center whitespace-nowrap">1</div>
    <div className="relative w-[14px] h-[14px] shrink-0">
      <img className="absolute left-0 top-0" width="14" height="14" src="vuesax/linear/arrow-rightI43_389;1_7981.png"></img>
    </div>
  </div>
  <div className="absolute left-[80px] top-[164px] w-[170px] h-[44px] flex">
    <div className="absolute left-0 top-0 w-[170px] h-[44px] bg-[#f8f9fa] border-[1px] border-solid border-[#dee2e6] rounded-[4px]"></div>
    <div className="absolute left-[9.41%] right-[61.18%] top-[20.45%] bottom-[20.45%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#181b1e] whitespace-nowrap">번호순</div>
    <div className="absolute left-[76.47%] right-[9.41%] top-[22.73%] bottom-[22.73%]">
      <img className="absolute left-0 top-0" width="24" height="24" src="vuesax/linear/arrow-downI43_393;1_8014.png"></img>
    </div>
  </div>
  <div className="absolute left-[840px] top-[164px] w-[170px] h-[44px] flex">
    <div className="absolute left-0 top-0 w-[170px] h-[44px] bg-[#f8f9fa] border-[1px] border-solid border-[#74b5dd] rounded-[4px]"></div>
    <div className="absolute left-[30%] right-[30.59%] top-[20.45%] bottom-[20.45%] text-[18px] font-['Noto_Sans_KR'] font-bold text-[#74b5dd] text-center whitespace-nowrap">등록취소</div>
  </div>
  <div className="absolute left-[1030px] top-[164px] w-[170px] h-[44px] flex">
    <div className="absolute left-0 top-0 w-[170px] h-[44px] bg-[#74b5dd] rounded-[4px]"></div>
    <div className="absolute left-[30%] right-[30.59%] top-[20.45%] bottom-[20.45%] text-[18px] font-['Noto_Sans_KR'] font-bold text-[#f8f9fa] text-center whitespace-nowrap">상품등록</div>
  </div>
  <div className="absolute left-[270px] top-[164px] w-[550px] h-[44px] flex">
    <div className="absolute left-0 top-0 w-[550px] h-[44px] bg-[#f8f9fa] border-[1px] border-solid border-[#dee2e6] rounded-[4px]"></div>
    <div className="absolute left-[16px] top-[10px] w-[24px] h-[24px]">
      <img className="absolute left-0 top-0" width="24" height="24" src="vuesax/linear/search-normalI43_402;1_18199.png"></img>
    </div>
    <div className="absolute left-[10.18%] right-[76.91%] top-[20.45%] bottom-[20.45%] text-[18px] font-['Noto_Sans_KR'] font-medium text-[#868e96] whitespace-nowrap">상품 검색</div>
  </div>
  <div className="absolute -translate-x-1/2 left-1/2 top-0 w-[1280px] h-[144px]">
    <div className="absolute left-0 right-0 top-[66.67%] bottom-0 bg-[#f8f9fa] border-[solid] border-#e9ecef border border-[0_0_1px]"></div>
    <div className="absolute left-[6.25%] right-[89.14%] top-[75%] bottom-[9.03%] text-[16px] font-['Noto_Sans_KR'] font-medium text-[#495057] whitespace-nowrap">주문내역</div>
    <div className="absolute left-0 right-0 top-0 bottom-[33.33%]">
      <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#f8f9fa] border-[solid] border-#e9ecef border border-[0_0_1px]"></div>
      <Link to={"/"} className="absolute left-[6.25%] right-[79.3%] top-[8.33%] bottom-[18.75%] text-[48px] font-['Noto_Sans_KR'] font-bold text-[#74b5dd] whitespace-nowrap">Cosmos</Link>
    </div>
    <div className="absolute left-[81.41%] right-[6.25%] top-[25.69%] bottom-[58.33%] flex flex-row items-center justify-start gap-[20px]">
      <div className="text-[16px] font-['Noto_Sans_KR'] font-medium text-[#74b5dd] text-center whitespace-nowrap">전상언님</div>
      <div className="w-[20px] h-0 shrink-0 border-[1px] border-solid border-[#ced4da]"></div>
      <div className="text-[16px] font-['Noto_Sans_KR'] font-medium text-[#74b5dd] text-center whitespace-nowrap">로그아웃</div>
    </div>
  </div>
</div>)
}