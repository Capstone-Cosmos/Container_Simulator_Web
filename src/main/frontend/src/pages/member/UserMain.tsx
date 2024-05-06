import React, { useState, EventHandler, ReactNode, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom/client";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import axios from "axios";
import { access } from "fs";
import { CreateAxiosInstance } from "../../shared/axios/createAxiosInstance";

interface Person {
  id: number;
  memberId: string;
  productName: string;
  quantity: number;
  height: number;
  weight: number;
  deadline: string;
  firstAddress: string;
  finalAddress: string;
  orderTime: Date;
  deliveryStatus: null;
  approvalStatus: string;
  isCheck: boolean;
}
// //person 데이터를 ts를 이용해 만듬
// const defaultData: Person[] = [
//   {
//     isCheck: false,
//     index: 1,
//     Name: "linsley",
//     count: 24,
//     orderDate: "23-11-20 18:33",
//     shipAddr: "파주시",
//     status: "승인",
//   },
//   {
//     isCheck: false,
//     index: 2,
//     Name: "miller",
//     count: 40,
//     orderDate: "23-11-30 13:33",
//     shipAddr: "서울",
//     status: "대기",
//   },
//   {
//     isCheck: false,
//     index: 2,
//     Name: "dirte",
//     count: 45,
//     orderDate: "24-10-20 14:23",
//     shipAddr: "광명",
//     status: "반려",
//   },
// ];
//Person 타입을 data에 적용한다.
const columnHelper = createColumnHelper<Person>();
//열이라는 필터를 적용하기 위해 accessor 쓴다. 이를 사용하기 위해 columnHelper를 생성하고 Person 타입을 붙인다.

const columns = [
  columnHelper.accessor("productName", {
    header: () => "상품명",
    cell: (info) => info.getValue(),
    footer: (info) => "상품명",
  }),
  columnHelper.accessor((row) => row.quantity, {
    id: "quantity",
    header: () => "수량",
    cell: (info) => <i>{info.getValue()}</i>,
    footer: (info) => "수량",
  }),
  columnHelper.accessor("orderTime", {
    header: "주문시간",
    footer: (info) => "주문시간",
  }),
  columnHelper.accessor("firstAddress", {
    header: "처음배송지",
    footer: (info) => "처음배송지",
  }),
  columnHelper.accessor("finalAddress", {
    header: "최종배송지",
    footer: (info) => "최종배송지",
  }),
  columnHelper.accessor("deliveryStatus", {
    header: "배송현황",
    footer: (info) => "배송현황",
  }),
  columnHelper.accessor("approvalStatus", {
    header: "승인현황",
    cell: (info) => (
      <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md opacity-100 select-none whitespace-nowrap bg-green-500/20">
        {info.getValue()}
      </div>
    ),
    footer: (info) => "승인현황",
  }),
];

export default function UserMain() {
  let [data, _setData] = React.useState(() => []);
  const [refeach, setfetch] = useState(false);

  //처음에 백엔드와 데이터 통신하거나 데이터 수정됐을 때 다시 불러오는 역할

  // useEffect(() => {
  //   (async () => {
  //     const response = await CreateAxiosInstance().get("/product/member/posts");
  //     const list = response.data.map((list: Person) => ({
  //       ...list,
  //       isCheck: false,
  //     }));
  //     _setData(list);
  //   })();
  // }, [refeach]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="container p-2 mx-auto sm:p-4 800 ">
      <div className="flex justify-center gap-3 p-5">
        <div className=" form-control">
          {/* <input
            type="text"
            placeholder="Search"
            className="input input-bordered md:w-auto"
          /> */}
        </div>

        <Link to="/new/uploadpd">
          <button className="bg-white btn btn-outline ">상품등록</button>
        </Link>

        <div className="">
          <button
            className="bg-white btn btn-outline"
            // onClick={() => {

            //   const checkItem = data
            //     .filter((data) => data.isCheck === true)
            //     .map((data) => data.id);

            //   (async () => {
            //     const response = await CreateAxiosInstance().post(
            //       "/product/delete"
            //     );
            //     const data = response.data.map((data: Person) => ({
            //       ...data,
            //     }));
            //     _setData(data);
            //     window.location.reload;
            //   })();
            // }}
          >
            등록취소
          </button>
        </div>
      </div>
      <table className="min-w-full overflow-x-auto table-lg">
        <thead className="bg-sky-300 ">
          {table.getHeaderGroups().map((headerGroup, index) => (
            <tr className="" key={headerGroup.id}>
              <th className="p-3">
                <input
                  type="checkbox"
                  defaultChecked
                  className="bg-white checkbox checkbox-md"
                  // onClick={() => {
                  //   const newData = [...data];
                  //   newData[index].isCheck = !newData[index].isCheck;
                  //   _setData(newData);
                  // }}
                />
              </th>
              {headerGroup.headers.map((header) => (
                <th className="text-xl" key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="text-center">
          {table.getRowModel().rows.map((row, index) => (
            <tr key={row.id}>
              <td className="p-3">
                <input
                  type="checkbox"
                  defaultChecked
                  className="bg-white checkbox checkbox-md"
                  // onClick={() => {
                  //   const newData = [...data];
                  //   newData[index].isCheck = !newData[index].isCheck;
                  //   _setData(newData);
                  // }}
                />
              </td>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {/* <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot> */}
      </table>
    </div>
  );
}
