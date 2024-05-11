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
    orderTime: "양",
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

export default function ContainerList() {
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

  // const [data, _setData] = React.useState(() => [...defaultData]);

  const [data, _setData] = React.useState<Person[]>(() => []);
  const [refeach, _setfetch] = useState(false);
  //처음에 백엔드와 데이터 통신하거나 데이터 수정됐을 때 다시 불러오는 역할

  useEffect(() => {
    (async () => {
      const response = await CreateAxiosInstance().get("/products");
      const list = response.data.map((list: Person) => ({
        ...list,
      }));
      _setData(list);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await CreateAxiosInstance().get("/products");
      const list = response.data.map((list: Person) => ({
        ...list,
      }));
      _setData(list);
    })();
  }, [refeach]);

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

  const deleteIndexInfo = table.getState().rowSelection;
  const deleteIndex = Object.keys(deleteIndexInfo).map((row) => parseInt(row));
  const deleteIdList = deleteIndex
    .map((id) => data[id])
    .map((dataIndex) => dataIndex.id);
  console.log(deleteIdList);
  // 인덱스는 0부터 시작하므로 id에서 1을 빼줍니다.

  const selectedHeaderGroup = table.getHeaderGroups()[0];

  return (
    <div className="container p-2 mx-auto font-sans bg-slate-100 sm:p-4">
      {/* 서치바 등록취소 버튼 */}
      <div className="flex items-center justify-center gap-3 p-5">
        <div className="w-9/12">
          <tr className="w-full" key={selectedHeaderGroup.id}>
            <Filter
              column={selectedHeaderGroup.headers[2].column}
              table={table}
            />
          </tr>
        </div>

        <Link
          to="/new/uploadpd"
          className="w-2/12 p-3 text-xl text-center bg-white border-2 rounded-lg text-cb hover:bg-cb hover:text-white border-cb "
        >
          상품등록
        </Link>

        <div
          className="w-2/12 p-3 text-xl text-center bg-white border-2 rounded-lg text-cb hover:bg-cb hover:text-white border-cb"
          onClick={() => {
            (async () => {
              const response = await CreateAxiosInstance().post(
                "/products/delete",
                { productIds: deleteIdList }
              );
              if (response.status === 204) {
                const newData: Person[] = await CreateAxiosInstance().get(
                  "/product"
                );
                _setData(newData);
                _setfetch((refeach) => !refeach);
              }
            })();
          }}
        >
          등록취소
        </div>
      </div>

      <div className="h-2" />
      <table className="min-w-full overflow-x-auto font-sans bg-white table-lg">
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
        <tfoot></tfoot>
      </table>
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
    <div className="flex items-center w-full gap-2 focus:border-sky-300 input input-bordered">
      <input
        type="text"
        value={(column.getFilterValue() ?? "") as string}
        onChange={(e) => column.setFilterValue(e.target.value)}
        className="w-full rounded"
        placeholder={`Search...`}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="w-4 h-4 opacity-70"
      >
        <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
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
