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
];

export default function ApprWait() {
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

  const [data, _setData] = React.useState<Person[]>(defaultData);
  const [refeach, _setfetch] = useState(false);
  //처음에 백엔드와 데이터 통신하거나 데이터 수정됐을 때 다시 불러오는 역할

  // useEffect(() => {
  //   (async () => {
  //     const response = await CreateAxiosInstance().get("/products/wait");
  //     const list = response.data.map((list: Person) => ({
  //       ...list,
  //     }));
  //     _setData(list);
  //   })();
  // }, []);

  //   useEffect(() => {
  //     (async () => {
  //       const response = await CreateAxiosInstance().get("/products/wait");
  //       const list = response.data.map((list: Person) => ({
  //         ...list,
  //       }));
  //       _setData(list);
  //     })();
  //   }, [refeach]);

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

  
  const approve = async(rowId:string) => {
    console.log(rowId);
    const idSelect = data[parseInt(rowId)].id;
    console.log(idSelect);
    const response = await CreateAxiosInstance().patch("/products/accept", {id : idSelect});
    if(response.status === 204) {
      const newData : Person[] = await CreateAxiosInstance().get("/product/wait");
      _setData(newData);
      _setfetch((refeach) => !refeach);
         
    }
  }
  const reject = async(rowId:string) => {
    console.log(rowId);
    const idSelect = data[parseInt(rowId)].id;
    console.log(idSelect);
    const response = await CreateAxiosInstance().patch("/products/cancel", {id : idSelect});
    if(response.status === 204) {
      const newData : Person[] = await CreateAxiosInstance().get("/product/wait");
      _setData(newData);
      _setfetch((refeach) => !refeach);
         
    }
  }
  return (
    <div className="items-center font-sans bg-slate-100">
      {/* 메뉴바 */}
      <div className="pl-5 border-t-2 shadow-sm navbar bg-base-100">
        <Link
          to={"/new/apprwait"}
          className="text-xl w-44 text-cb btn btn-ghost hover:bg-cb hover:text-white"
        >
          품목리스트
        </Link>
        <Link
          to={"/new/containerList"}
          className="text-xl font-thin text-gray-400 w-44 btn btn-ghost hover:bg-cb hover:text-white"
        >
          컨테이너리스트
        </Link>
      </div>
      {/* 승인대기 */}
      <div className="container px-16 pt-5">
        <div className="flex gap-12">
          <Link
            to="/new/apprWait"
            className="w-2/12 p-3 text-xl font-bold text-center bg-white border-2 rounded-lg text-cb hover:bg-cb hover:text-white border-cb"
          >
            승인대기리스트
          </Link>
          {/* 승인완료 */}
          <Link
            to="/new/apprComplete"
            className="w-2/12 p-3 text-xl font-thin text-center text-gray-400 bg-white border-2 border-gray-400 rounded-lg hover:bg-cb hover:text-white hover:border-cb"
          >
            승인완료리스트
          </Link>
        </div>

        <div className="h-2" />
        <table className="min-w-full overflow-x-auto font-sans bg-white rounded-lg table-lg">
          <thead className="bg-[#74B5DD] text-white">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      className="font-sans text-xl"
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
                <th className="font-sans text-xl">승인/반려</th>
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
                    <button
                      onClick={() => approve(row.id)}
                      className="p-3 text-xl font-bold text-center bg-white border-2 rounded-lg px-14 text-appr hover:bg-appr hover:text-white border-appr"
                    >
                      승인
                    </button>
                    {/* 승인완료 */}
                    <button
                      onClick={() => reject(row.id)}
                      className="p-3 text-xl font-bold text-center bg-white border-2 rounded-lg text-reg hover:bg-reg hover:text-white border-reg px-14"
                    >
                      반려
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
  );
}

