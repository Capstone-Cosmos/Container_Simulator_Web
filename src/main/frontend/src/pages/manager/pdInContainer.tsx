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
import { Link, useParams } from "react-router-dom";
import PalletModal from "./PalletModal";

interface Person {
  id: number;
  productName: string;
  quantity: number;
  height: number;
  weight: number;
  deadline: Date;
  firstAddress: string;
  finalAddress: string;
  orderTime: Date;
  deliveryStatus: null;
  approvalStatus: string;
}
interface Loading {
  id: number;
  containerId: number;
  palletName: string;
  weight: number;
  palletType: string;
  height: number;
  deadline: Date;
  x: number;
  y: number;
  z: number;
}
const unloadingDefaultData: Person[] = [
  {
    id: 5,
    productName: "오렌지 취소",
    quantity: 500,
    height: 5.0,
    weight: 43.0,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "부산항",
    finalAddress: "대구시청",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인대기",
  },
  {
    id: 4,
    productName: "수박",
    quantity: 500,
    height: 5.0,
    weight: 43.0,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "부산항",
    finalAddress: "대구시청",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인",
  },
  {
    id: 4,
    productName: "수박",
    quantity: 500,
    height: 5.0,
    weight: 43.0,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "부산항",
    finalAddress: "대구시청",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인",
  },
  {
    id: 4,
    productName: "수박",
    quantity: 500,
    height: 5.0,
    weight: 43.0,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "부산항",
    finalAddress: "대구시청",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인",
  },
  {
    id: 4,
    productName: "수박",
    quantity: 500,
    height: 5.0,
    weight: 43.0,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "부산항",
    finalAddress: "대구시청",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인",
  },
  {
    id: 4,
    productName: "수박",
    quantity: 500,
    height: 5.0,
    weight: 43.0,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "부산항",
    finalAddress: "대구시청",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인",
  },
  {
    id: 4,
    productName: "수박",
    quantity: 500,
    height: 5.0,
    weight: 43.0,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "부산항",
    finalAddress: "대구시청",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인",
  },
  {
    id: 4,
    productName: "수박",
    quantity: 500,
    height: 5.0,
    weight: 43.0,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "부산항",
    finalAddress: "대구시청",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인",
  },
];
const loadingDefaultData: Loading[] = [
  {
    id: 2,
    containerId: 1,
    palletName: "바나나",
    weight: 83.0,
    palletType: "PALLET_TYPE_11A",
    height: 5.15,
    deadline: new Date("2024-04-21T18:00:00"),
    x: 3.14,
    y: 6.23,
    z: 18.13,
  },
  {
    id: 7,
    containerId: 2,
    palletName: "고구마",
    weight: 83.0,
    palletType: "PALLET_TYPE_11A",
    height: 5.15,
    deadline: new Date("2024-04-21T18:00:00"),
    x: 3.14,
    y: 6.23,
    z: 18.13,
  },
  {
    id: 7,
    containerId: 2,
    palletName: "고구마",
    weight: 83.0,
    palletType: "PALLET_TYPE_11A",
    height: 5.15,
    deadline: new Date("2024-04-21T18:00:00"),
    x: 3.14,
    y: 6.23,
    z: 18.13,
  },{
    id: 7,
    containerId: 2,
    palletName: "고구마",
    weight: 83.0,
    palletType: "PALLET_TYPE_11A",
    height: 5.15,
    deadline: new Date("2024-04-21T18:00:00"),
    x: 3.14,
    y: 6.23,
    z: 18.13,
  },{
    id: 7,
    containerId: 2,
    palletName: "고구마",
    weight: 83.0,
    palletType: "PALLET_TYPE_11A",
    height: 5.15,
    deadline: new Date("2024-04-21T18:00:00"),
    x: 3.14,
    y: 6.23,
    z: 18.13,
  },{
    id: 7,
    containerId: 2,
    palletName: "고구마",
    weight: 83.0,
    palletType: "PALLET_TYPE_11A",
    height: 5.15,
    deadline: new Date("2024-04-21T18:00:00"),
    x: 3.14,
    y: 6.23,
    z: 18.13,
  },{
    id: 7,
    containerId: 2,
    palletName: "고구마",
    weight: 83.0,
    palletType: "PALLET_TYPE_11A",
    height: 5.15,
    deadline: new Date("2024-04-21T18:00:00"),
    x: 3.14,
    y: 6.23,
    z: 18.13,
  },{
    id: 7,
    containerId: 2,
    palletName: "고구마",
    weight: 83.0,
    palletType: "PALLET_TYPE_11A",
    height: 5.15,
    deadline: new Date("2024-04-21T18:00:00"),
    x: 3.14,
    y: 6.23,
    z: 18.13,
  },{
    id: 7,
    containerId: 2,
    palletName: "고구마",
    weight: 83.0,
    palletType: "PALLET_TYPE_11A",
    height: 5.15,
    deadline: new Date("2024-04-21T18:00:00"),
    x: 3.14,
    y: 6.23,
    z: 18.13,
  },
];

export default function PdinContainer() {
  const [rowSelection, setRowSelection] = React.useState({});
  const {urlContainerId} = useParams();
  console.log(urlContainerId);
  const unloadingColumns = React.useMemo<ColumnDef<Person>[]>(
    () => [
      {
        id: 'index',
        header: () => "번호",
        cell: ({row}) => <div>{parseInt(row.id) + 1}</div>
      },
      {
        accessorKey: "productName",
        header: () => "제품명",
      },
      {
        accessorKey: "weight",
        header: () => "무게",
      },
      {
        accessorKey: "quantity",
        header: () => "개수",
      },
      {
        accessorKey: "deadline",
        header: () => "마감날짜",
      },
    ],
    []
  );
  const loadingColumns = React.useMemo<ColumnDef<Loading>[]>(
    () => [
      {
        id: "index",
        header: () => "번호",
        cell: ({row}) => <div>{parseInt(row.id) + 1}</div>
      },
      {
        accessorKey: "palletName",
        header: () => "제품명",
      },
      {
        accessorKey: "weight",
        header: () => "무게",
      },
      {
        accessorKey: "palletType",
        header: () => "팔레트 종류",
      },
     

    ],
    []
  );
  // const [data, _setData] = React.useState(() => [...loadingData]);

  const [unloadingData, _setUnloading] =
    React.useState<Person[]>(unloadingDefaultData);
  const [loadingData, _setLoading] = React.useState<Loading[]>(()=>[]);
  const [refeach, _setfetch] = useState(false);
  //처음에 백엔드와 데이터 통신하거나 데이터 수정됐을 때 다시 불러오는 역할

  // useEffect(() => {
  //   (async () => {
  //     const unloadResponse = await CreateAxiosInstance().get("/products/decide");
  //     const unloadList = unloadResponse.data.map((list: Person) => ({
  //       ...list,
  //     }));
  //     _setUnloading(unloadList);
  //     const loadResponse = await CreateAxiosInstance().get(`/pallets/${urlContainerId}`);
  //     const loadList = loadResponse.data.map((list: Person) => ({
  //       ...list,
  //     }));
  //     _setLoading(loadList);
  //   })();
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     const unloadResponse = await CreateAxiosInstance().get("/products/decide");
  //     const unloadList = unloadResponse.data.map((list: Person) => ({
  //       ...list,
  //     }));
  //     _setUnloading(unloadList);
  //     const loadResponse = await CreateAxiosInstance().get(`/pallets/${urlContainerId}`);
  //     const loadList = loadResponse.data.map((list: Person) => ({
  //       ...list,
  //     }));
  //     _setLoading(loadList);
  //   })();
  // }, [refeach]);

  const unloadingTable = useReactTable({
    data: unloadingData,
    columns: unloadingColumns,
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

  const loadingTable = useReactTable({
    data: loadingData,
    columns: loadingColumns,
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
  };
  const unLoading = async (rowId: string) => {
    console.log(rowId);
    const idSelect = loadingData[parseInt(rowId)].id;
    console.log(idSelect);
    const response = await CreateAxiosInstance().delete(`pallets/${idSelect}`, { params :{id: idSelect,}
    });
    if (response.status === 204) {
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
          {/* [하늘색 테이블]컨테이너 들어가기 전 데이터 */}
          <div className="min-w-full overflow-auto max-h-[500px] max-w-1/2 rounded-md table-sm">
            <div className="flex items-center justify-center w-full p-1 text-2xl text-white bg-cb">
              적재대기리스트
            </div>
            <div className="bg-white h-[300px] ">
              <table className="w-full overflow-auto font-sans bg-white ">
                <thead className="bg-[#74B5DD] text-white">
                  {unloadingTable.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => {
                        return (
                          <th
                            className="font-sans text-[16px]"
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
                      <th className="font-sans text-[16px]">등록</th>
                    </tr>
                  ))}
                </thead>
                <tbody className="text-center">
                  {unloadingTable.getRowModel().rows.map((row) => {
                    return (
                      <tr key={row.id}>
                        {row.getVisibleCells().map((cell) => {
                          return (
                            <td className="font-bold" key={cell.id}>
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </td>
                          );
                        })}
                        <td className="flex items-center justify-center gap-12">
                          {/* 승인완료 */}
                          <PalletModal urlContainerId={urlContainerId} productId={unloadingData[parseInt(row.id)].id} />
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
                {loadingTable.getHeaderGroups().map((headerGroup) => (
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
                    <th className="font-sans">취소</th>
                  </tr>
                ))}
              </thead>
              <tbody className="text-center">
                {loadingTable.getRowModel().rows.map((row) => {
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
                          취소
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
