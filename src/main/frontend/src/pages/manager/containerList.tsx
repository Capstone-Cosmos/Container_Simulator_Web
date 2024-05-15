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
  id: string;
  weight: number;
  max_weight: number;
  deadline: string;
}

const defaultData: Person[] = [
  {
    id: "10",
    weight: 5000,
    max_weight: 8000,
    deadline: "2024-04-23T18:00:00",
  },
  {
    id: "20",
    weight: 3000,
    max_weight: 4000,
    deadline: "2022-04-04:00:00",
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
        accessorKey: "id",
        header: () => "컨테이너 ID",
      },
      {
        accessorKey: "weight",
        header: () => "현 재고량",
      },
      {
        accessorKey: "max_weight",
        header: () => "최대용량",
      },
      {
        accessorKey: "deadline",
        header: () => "마감일",
      },
    ],
    []
  );

  const [data, _setData] = React.useState(() => [...defaultData]);

  // const [data, _setData] = React.useState<Person[]>(() => []);
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
  console.log(selectedHeaderGroup.headers[5]);
  return (
    <div className="flex flex-col items-center justify-center mx-auto font-sans bg-slate-100">
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
      <div className="container px-16 pt-5">
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
            to="/new/containerUpload"
            className="w-2/12 p-3 text-xl text-center bg-white border-2 rounded-lg text-cb hover:bg-cb hover:text-white border-cb "
          >
            컨테이너 등록
          </Link>

          <div
            className="w-2/12 p-3 text-xl text-center bg-white border-2 rounded-lg text-reg hover:bg-reg hover:text-white border-reg"
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
            컨테이너 삭제
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
                <th className="font-sans text-xl">컨테이너 관리</th>
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
                    <Link to={"/new/pdincontainer"} className="p-3 text-xl font-bold text-center bg-white border-2 rounded-lg text-gre hover:bg-gre hover:text-white border-gre px-14"
                    >
                      관리
                    </Link>
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
        type="number"
        value={(column.getFilterValue() ?? "") as number}
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
