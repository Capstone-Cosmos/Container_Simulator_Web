import { useState, EventHandler, ReactNode } from "react";
import { Link } from "react-router-dom";

export default function umain() {
  return (
    <div className="">
      <div className="flex justify-center gap-3 p-5">
        <div className=" form-control">
          <input
            type="text"
            placeholder="Search"
            className="w-24 input input-bordered md:w-auto"
          />
        </div>
        <div className="">
          <button className="bg-white btn btn-outline ">상품등록</button>
        </div>
        <div className="">
          <button className="bg-white btn btn-outline ">등록취소</button>
        </div>
      </div>

      {/* -----------------보라 검정 테이블------------- */}
      <div className="container p-2 mx-auto sm:p-4 800 table-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="bg-sky-300 ">
              <tr className="text-6xl">
                <th className="p-3">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="bg-white checkbox checkbox-md"
                  />
                </th>
                <th className="p-3">번호</th>
                <th className="p-3">상품명</th>
                <th className="p-3">주문개수</th>
                <th className="p-3">주문일자</th>
                <th className="p-3">승인현황</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr className="border-b border-opacity-20 y-300 ">
                <td className="p-3">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="bg-white checkbox checkbox-md"
                  />
                </td>
                <td className="p-3">
                  <p>1</p>
                </td>
                <td className="p-3">
                  <p>삼다수</p>
                </td>
                <td className="p-3">
                  <p>2022</p>
                </td>
                <td className="p-3">
                  <p>23-11-21 18:00</p>
                </td>
                <td className="p-3">
                  <div className="w-max">
                    <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-red-900 uppercase rounded-md opacity-100 select-none whitespace-nowrap bg-red-500/20">
                      <span className="">cancelled</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-opacity-20 y-300 ">
                <td className="p-3">
                  <p>97412378923</p>
                </td>
                <td className="p-3">
                  <p>Tesla Inc.</p>
                </td>
                <td className="p-3">
                  <p>14 Jan 2022</p>
                  <p className="">Friday</p>
                </td>
                <td className="p-3">
                  <p>01 Feb 2022</p>
                  <p className="">Tuesday</p>
                </td>
                <td className="p-3 text-right">
                  <p>$275</p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="w-max">
                    <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md opacity-100 select-none whitespace-nowrap bg-green-500/20">
                      <span className="">paid</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-opacity-20 y-300 ">
                <td className="p-3">
                  <p>97412378923</p>
                </td>
                <td className="p-3">
                  <p>Coca Cola co.</p>
                </td>
                <td className="p-3">
                  <p>14 Jan 2022</p>
                  <p className="">Friday</p>
                </td>
                <td className="p-3">
                  <p>01 Feb 2022</p>
                  <p className="">Tuesday</p>
                </td>
                <td className="p-3 text-right">
                  <p>$8,950,500</p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="w-max">
                    <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-md opacity-100 select-none whitespace-nowrap bg-amber-500/20 text-amber-900 ">
                      <span className="">pending</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-opacity-20 y-300 ">
                <td className="p-3">
                  <p>97412378923</p>
                </td>
                <td className="p-3">
                  <p>Nvidia Corporation</p>
                </td>
                <td className="p-3">
                  <p>14 Jan 2022</p>
                  <p className="">Friday</p>
                </td>
                <td className="p-3">
                  <p>01 Feb 2022</p>
                  <p className="">Tuesday</p>
                </td>
                <td className="p-3 text-right">
                  <p>$98,218</p>
                </td>
                <td className="p-3 text-right">
                  <span className="px-3 py-1 font-semibold rounded-md ">
                    <span>Pending</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


