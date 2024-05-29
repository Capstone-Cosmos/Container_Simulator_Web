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
import { Link, Outlet } from "react-router-dom";


interface Person {
  id: number;
  containerName: string;
  weight: number;
  containerType: string;
  deadline: Date;
  startingPoint: string;
  destination: string;
}

const defaultData: Person[] = [
  {
    id: 3,
    containerName: "바나나적재칸",
    weight: 300,
    containerType: "20FT DRY",
    deadline: new Date("2024-04-21T18:00:00"),
    startingPoint: "대구항",
    destination: "샌프란시스코",
  },
  {
    id: 67,
    containerName: "소고기적재칸",
    weight: 500,
    containerType: "40FT DRY",
    deadline: new Date("2024-04-21T18:00:00"),
    startingPoint: "소레포구항",
    destination: "LA",
  },
];

export default function ContainerList() {
  const [rowSelection, setRowSelection] = React.useState({});

  const columns = React.useMemo<ColumnDef<Person>[]>(
    () => [
      {
        id: "index",
        header: "번호",
        cell: ({ row }) => <div>{parseInt(row.id) + 1}</div>,
      },
      {
        accessorKey: "containerName",
        header: () => "컨테이너 이름",
      },
      {
        accessorKey: "weight",
        header: () => "적재현황(kg)",
      },
      {
        accessorKey: "containerType",
        header: () => "컨테이너 종류",
      },
      {
        accessorKey: "deadline",
        header: () => "마감일",
        cell: ({ row }) => <div>{customTime(row)}</div>,
      },
      {
        accessorKey: "startingPoint",
        header: () => "출발지",
      },
      {
        accessorKey: "destination",
        header: () => "도착지",
      },
    ],
    []
  );

  
  // const customTime = (row: any) => {
  //   const oriDate = new Date(row.original.deadline);
  // //   console.log(oriDate);
  // //   const year = oriDate.getFullYear();
  // //   const month = String(oriDate.getMonth() + 1).padStart(2, "0");
  // //   const day = String(oriDate.getDate()).padStart(2, "0");
  // //   const hours = String(oriDate.getHours()).padStart(2, "0");
  // //   const minutes = String(oriDate.getMinutes()).padStart(2, "0");
    

  //   return `${year}-${month}-${day} ${hours}:${minutes}`;
  // };
// 날짜 객체 생성
const customTime = (row: any) => {
  const oriDate = new Date(row.original.deadline);

  // 날짜를 문자열로 변환하고 'GMT' 부분 앞에서 줄바꿈
  const dateString = oriDate.toString();
  const dateArray = dateString.split("GMT");
  const formattedDate = (
    <span>
      {dateArray[0]}
      <br />
      GMT{dateArray[1]}
    </span>
  );

  return formattedDate;
};

  const [data, _setData] = React.useState<Person[]>(defaultData);

  // const [data, _setData] = React.useState<Person[]>(() => []);
  const [refeach, _setfetch] = useState(false);
  //처음에 백엔드와 데이터 통신하거나 데이터 수정됐을 때 다시 불러오는 역할

  // useEffect(() => {
  //   (async () => {
  //     const response = await CreateAxiosInstance().get("/containers");
  //     const list = response.data.map((list: Person) => ({
  //       ...list,
  //     }));
  //     _setData(list);
  //   })();
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     const response = await CreateAxiosInstance().get("/containers");
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
  

  const deleteContainer = async (rowId: string) => {
    console.log(rowId);
    const idSelect = data[parseInt(rowId)].id;
    console.log(idSelect);
    const response = await CreateAxiosInstance().delete("/containers", {
      params: { id: idSelect },
    });
    if (response.status === 204) {
      _setfetch((refeach) => !refeach);
    }
  };

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
    <div className="flex flex-col items-center justify-center h-full mx-auto font-sans bg-slate-100">
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
        </div>

        <div className="h-2" />
        <div className="h-[800px] bg-white overflow-hidden rounded-lg">
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
                  <th className="font-sans text-xl">컨테이너 삭제</th>
                </tr>
              ))}
            </thead>
            <tbody className="text-center">
              {table.getRowModel().rows.map((row) => {
                return (
                  <tr key={row.id}>
                    {/* <button onClick={()=>{console.dir(row.id)}}>
                      확인용
                    </button> */}
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
                    <td className="">
                      {/* 승인완료 */}
                      <Link
                        to={`./${data[parseInt(row.id)].id}`}
                        className="p-3 text-xl font-bold text-center bg-white border-2 rounded-lg text-gre hover:bg-gre hover:text-white border-gre"
                      >
                        관리
                      </Link>
                    </td>
                    <td>
                      <button onClick={() => deleteContainer(row.id)} className="p-3 text-xl font-bold text-center bg-white border-2 rounded-lg text-reg hover:bg-reg hover:text-white border-reg ">
                        삭제
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
        type="string"
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
