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
import axios from "axios";
import { access } from "fs";
import { CreateAxiosInstance } from "../../shared/axios/createAxiosInstance";
import { Link } from "react-router-dom";

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
  orderTime: string;
  deliveryStatus: null;
  approvalStatus: string;
}

const defaultData: Person[] = [
  {
    id: 2,
    memberId: "test1",
    productName: "백산수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: "24년 5월",
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: "새벽5시에시킴",
    deliveryStatus: null,
    approvalStatus: "승인완료",
  },
  {
    id: 1,
    memberId: "test1",
    productName: "삼다수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: "24년 5월",
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: "새벽5시에시킴",
    deliveryStatus: null,
    approvalStatus: "승인완료",
  },

  {
    id: 3,
    memberId: "test1",
    productName: "아리수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: "24년 5월",
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: "새벽5시에시킴",
    deliveryStatus: null,
    approvalStatus: "승인완료",
  },
];

export default function UserMain() {
  const [rowSelection, setRowSelection] = React.useState({});

  const columns = React.useMemo<ColumnDef<Person>[]>(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }) => (
          <div className="px-1">
            <IndeterminateCheckbox
              {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler(),
              }}
            />
          </div>
        ),
      },
      {
        id: "index",
        header: "번호",
        cell: ({ row }) => <div>{parseInt(row.id) + 1}</div>,
      },
      {
        accessorKey: "productName",
        header: () => "제품명",
      },
      {
        accessorKey: "quantity",
        header: () => "수량",
      },
      {
        accessorKey: "orderTime",
        header: () => "주문시간",
      },
      {
        accessorKey: "firstAddress",
        header: () => "처음배송지",
      },
      {
        accessorKey: "finalAddress",
        header: () => "최종배송지",
      },
      {
        accessorKey: "deliveryStatus",
        header: () => "배송현황",
      },
      {
        accessorKey: "approvalStatus",
        header: () => "승인현황",
      },
    ],
    []
  );

  const [data, _setData] = React.useState(() => [...defaultData]);
  const [refeach, setfetch] = useState(false);
  //처음에 백엔드와 데이터 통신하거나 데이터 수정됐을 때 다시 불러오는 역할

  // useEffect(() => {
  //   (async () => {
  //     const response = await CreateAxiosInstance().get("/product/member/posts");
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

  // table.getState().rowSelection 객체에서 숫자만 추출하여 배열로 만듭니다.
  const delteSelection = table.getState().rowSelection;
  const selectedRows = Object.keys(delteSelection)
    .filter((key) => !isNaN(Number(key))) // 숫자인 키만 필터링합니다.
    .map(Number); // 각 키를 숫자로 변환하여 배열로 만듭니다.

  const selectedHeaderGroup = table.getHeaderGroups()[0];
  console.log(selectedHeaderGroup);
  //console.dir 해볼것
  return (
    <div className="container p-2 mx-auto sm:p-4 800 ">
      {/* 서치바 등록취소 버튼 */}
      <div className="flex justify-center gap-3 p-5">
        <div>
          <tr key={selectedHeaderGroup.id}>
            <Filter
              column={selectedHeaderGroup.headers[2].column}
              table={table}
            />
          </tr>
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

      <div className="h-2" />
      <table className="min-w-full overflow-x-auto table-lg">
        <thead className="bg-sky-300 ">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th className="text-xl" key={header.id} colSpan={header.colSpan}>
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
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          
        </tfoot>
      </table>

      <div>{selectedRows}</div>
    </div>
  );
}

function Filter({
  column,
  table,
}: {
  column: Column<any, any>;
  table: Table<any>;
}) {
  return (
    <input
      type="text"
      value={(column.getFilterValue() ?? "") as string}
      onChange={(e) => column.setFilterValue(e.target.value)}
      placeholder={`Search...`}
      className="border rounded shadow w-36"
    />
  );
}

function IndeterminateCheckbox({
  indeterminate,
  className = "bg-white checkbox checkbox-md",
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) {
  const ref = React.useRef<HTMLInputElement>(null!);

  React.useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return (
    <input
      type="checkbox"
      ref={ref}
      className={className + " cursor-pointer"}
      {...rest}
    />
  );
}
