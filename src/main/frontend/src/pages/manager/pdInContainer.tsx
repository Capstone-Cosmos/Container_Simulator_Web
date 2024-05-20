import React, { HTMLAttributes, HTMLProps, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import {
  Column,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  Table,
  useReactTable,
} from "@tanstack/react-table";

import { CreateAxiosInstance } from "../../shared/axios/createAxiosInstance";
import { Link } from "react-router-dom";

interface Person {
  id: number;
  productName: string;
  quantity: number;
  height: number;
  weight: number;
  deadline: string;
  firstAddress: string;
  finalAddress: string;
  orderTime: string;
  deliveryStatus: null;
  approvalStatus: string;
}

const defaultData: Person[] = [
  {
    id: 5,
    productName: "키위주스",
    quantity: 500,
    height: 5.0,
    weight: 43.0,
    deadline: "2024-04-21T18:00:00",
    firstAddress: "부산항",
    finalAddress: "대구시청",
    orderTime: "2024-04-24T16:25:19.024496",
    deliveryStatus: null,
    approvalStatus: "승인대기",
  },
  {
    id: 4,
    productName: "수박",
    quantity: 500,
    height: 5.0,
    weight: 43.0,
    deadline: "2024-04-21T18:00:00",
    firstAddress: "부산항",
    finalAddress: "대구시청",
    orderTime: "2024-04-24T16:25:19.024496",
    deliveryStatus: null,
    approvalStatus: "승인",
  },
  {
    id: 4,
    productName: "수박",
    quantity: 500,
    height: 5.0,
    weight: 43.0,
    deadline: "2024-04-21T18:00:00",
    firstAddress: "부산항",
    finalAddress: "대구시청",
    orderTime: "2024-04-24T16:25:19.024496",
    deliveryStatus: null,
    approvalStatus: "승인",
  },
  {
    id: 4,
    productName: "수박",
    quantity: 500,
    height: 5.0,
    weight: 43.0,
    deadline: "2024-04-21T18:00:00",
    firstAddress: "부산항",
    finalAddress: "대구시청",
    orderTime: "2024-04-24T16:25:19.024496",
    deliveryStatus: null,
    approvalStatus: "승인",
  },
  {
    id: 4,
    productName: "수박",
    quantity: 500,
    height: 5.0,
    weight: 43.0,
    deadline: "2024-04-21T18:00:00",
    firstAddress: "부산항",
    finalAddress: "대구시청",
    orderTime: "2024-04-24T16:25:19.024496",
    deliveryStatus: null,
    approvalStatus: "승인",
  },
  {
    id: 4,
    productName: "수박",
    quantity: 500,
    height: 5.0,
    weight: 43.0,
    deadline: "2024-04-21T18:00:00",
    firstAddress: "부산항",
    finalAddress: "대구시청",
    orderTime: "2024-04-24T16:25:19.024496",
    deliveryStatus: null,
    approvalStatus: "승인",
  },
  {
    id: 4,
    productName: "수박",
    quantity: 500,
    height: 5.0,
    weight: 43.0,
    deadline: "2024-04-21T18:00:00",
    firstAddress: "부산항",
    finalAddress: "대구시청",
    orderTime: "2024-04-24T16:25:19.024496",
    deliveryStatus: null,
    approvalStatus: "승인",
  },
  {
    id: 4,
    productName: "수박",
    quantity: 500,
    height: 5.0,
    weight: 43.0,
    deadline: "2024-04-21T18:00:00",
    firstAddress: "부산항",
    finalAddress: "대구시청",
    orderTime: "2024-04-24T16:25:19.024496",
    deliveryStatus: null,
    approvalStatus: "승인",
  },
];

export default function PdinContainer() {
  const [rowSelection, setRowSelection] = React.useState({});

  const columns = React.useMemo<ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "productName",
        header: () => "제품명",
      },
      {
        accessorKey: "orderTime",
        header: () => "주문시간",
      },
      {
        accessorKey: "deadline",
        header: () => "마감날짜",
      },
      {
        accessorKey: "quantity",
        header: () => "수량",
      },
    ],
    []
  );

  // const [data, _setData] = React.useState(() => [...defaultData]);

  const [loadingData, _setLoading] = React.useState<Person[]>(defaultData);
  const [unloadingData, _setUnloading] = React.useState<Person[]>(defData2);
  const [refeach, _setfetch] = useState(false);
  //처음에 백엔드와 데이터 통신하거나 데이터 수정됐을 때 다시 불러오는 역할

  // useEffect(() => {
  //   (async () => {
  //     const response = await CreateAxiosInstance().get("/products/decide");
  //     const list = response.data.map((list: Person) => ({
  //       ...list,
  //     }));
  //     _setData(list);
  //   })();
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     const response = await CreateAxiosInstance().get("/products/decide");
  //     const list = response.data.map((list: Person) => ({
  //       ...list,
  //     }));
  //     _setData(list);
  //   })();
  // }, [refeach]);

  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection,
    },
    enableRowSelection: true, //enable row selection for all rows
    // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });

  const loading = async (rowId: string) => {
    console.log(rowId);
    const idSelect = loadingData[parseInt(rowId)].id;
    console.log(idSelect);
    const response = await CreateAxiosInstance().patch("/products/cancel", {
      id: idSelect,
    });
    if (response.status === 204) {
      const newLoadingData: Person[] = await CreateAxiosInstance().get(
        "/product/decide"
      );
      _setLoading(newLoadingData);
      _setfetch((refeach) => !refeach);
    }
  };

  const unLoading = async (rowId: string) => {
    console.log(rowId);
    const idSelect = loadingData[parseInt(rowId)].id;
    console.log(idSelect);
    const response = await CreateAxiosInstance().patch("/products/cancel", {
      id: idSelect,
    });
    if (response.status === 204) {
      const newUnloadingData: Person[] = await CreateAxiosInstance().get(
        "/product/decide"
      );
      _setUnloading(newUnloadingData);
      _setfetch((refeach) => !refeach);
    }
  };
  
  return (
    <div className="items-center h-full font-sans bg-slate-100">
      {/* 메뉴바 */}
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
      {/* 메뉴바 아래부분 */}
      <div className="flex flex-row items-center justify-center gap-4 px-16 pt-5 pb-6">
        {/* 시뮬레이션 ui */}
        <div className="flex flex-col gap-4 min-w-[60%]">
          <div className="w-full bg-black h-[400px]">d d d</div>
          {/* 컨테이너 들어가기 전 데이터 */}
          <div className="min-w-full overflow-auto max-h-[500px] max-w-1/2 rounded-md table-sm">
            <div className="flex items-center justify-center w-full p-1 text-2xl text-white bg-cb">
              적재대기리스트
            </div>
            <div className="bg-white h-[300px] ">
              <table className="w-full overflow-auto font-sans bg-white ">
                <thead className="bg-[#74B5DD] text-white">
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => {
                        return (
                          <th
                            className="font-sans "
                            key={header.id}
                            colSpan={header.colSpan}
                          >
                            {header.isPlaceholder ? null : (
                              <>
                                {/* 헤더 텍스트 부분 */}
                                {flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                              </>
                            )}
                          </th>
                        );
                      })}
                      <th className="font-sans ">적재</th>
                    </tr>
                  ))}
                </thead>
                <tbody className="text-center">
                  {table.getRowModel().rows.map((row) => {
                    return (
                      <tr key={row.id}>
                        {row.getVisibleCells().map((cell) => {
                          return (
                            <td key={cell.id}>
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </td>
                          );
                        })}
                        <td className="flex items-center justify-center gap-12">
                          {/* 승인완료 */}
                          <button
                            onClick={() => loading(row.id)}
                            className="p-2 text-base font-bold text-center bg-white border-2 rounded-lg text-appr hover:bg-appr hover:text-white border-appr"
                          >
                            적재
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot></tfoot>
              </table>
            </div>
          </div>
        </div>
        {/* 컨테이너 실은 후 데이터 */}
        <div className="max-h-full overflow-auto min-w-[40%] rounded-md">
          <div className="flex items-center justify-center w-full p-1 text-2xl text-white bg-gre">
            컨테이너에 적재된 품목
          </div>
          <div className="w-full h-[700px] bg-white">
            <table className="w-full font-sans bg-white table-sm">
              <thead className="text-white bg-gre">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <th
                          className="font-sans"
                          key={header.id}
                          colSpan={header.colSpan}
                        >
                          {header.isPlaceholder ? null : (
                            <>
                              {/* 헤더 텍스트 부분 */}
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                            </>
                          )}
                        </th>
                      );
                    })}
                    <th className="font-sans">하차</th>
                  </tr>
                ))}
              </thead>
              <tbody className="text-center">
                {table.getRowModel().rows.map((row) => {
                  return (
                    <tr key={row.id}>
                      {row.getVisibleCells().map((cell) => {
                        return (
                          <td key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        );
                      })}
                      <td className="flex items-center justify-center gap-12">
                        {/* 승인완료 */}
                        <button
                          onClick={() => unLoading(row.id)}
                          className="p-2 text-base font-bold text-center bg-white border-2 rounded-lg text-reg hover:bg-reg hover:text-white border-reg "
                        >
                          하차
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
