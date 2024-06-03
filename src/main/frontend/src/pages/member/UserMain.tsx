import React, { HTMLProps, useEffect, useState } from "react";

import {
  Column,
  ColumnDef,
  Table,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Link } from "react-router-dom";
import { CreateAxiosInstance } from "../../shared/axios/createAxiosInstance";

interface Person {
  id: number;
  memberId: string;
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

const defaultData: Person[] = [
  {
    id: 2,
    memberId: "test1",
    productName: "백산수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "반려",
  },
  {
    id: 1,
    memberId: "test1",
    productName: "삼다수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인",
  },

  {
    id: 3,
    memberId: "test1",
    productName: "아리수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인대기",
  },
  {
    id: 2,
    memberId: "test1",
    productName: "백산수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "반려",
  },
  {
    id: 1,
    memberId: "test1",
    productName: "삼다수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인",
  },

  {
    id: 3,
    memberId: "test1",
    productName: "아리수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인대기",
  },
  {
    id: 2,
    memberId: "test1",
    productName: "백산수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "반려",
  },
  {
    id: 1,
    memberId: "test1",
    productName: "삼다수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인",
  },

  {
    id: 3,
    memberId: "test1",
    productName: "아리수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인대기",
  },
  {
    id: 2,
    memberId: "test1",
    productName: "백산수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "반려",
  },
  {
    id: 1,
    memberId: "test1",
    productName: "삼다수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인",
  },

  {
    id: 3,
    memberId: "test1",
    productName: "아리수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인대기",
  },
  {
    id: 2,
    memberId: "test1",
    productName: "백산수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "반려",
  },
  {
    id: 1,
    memberId: "test1",
    productName: "삼다수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인",
  },

  {
    id: 3,
    memberId: "test1",
    productName: "아리수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인대기",
  },
  {
    id: 2,
    memberId: "test1",
    productName: "백산수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "반려",
  },
  {
    id: 1,
    memberId: "test1",
    productName: "삼다수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인",
  },

  {
    id: 3,
    memberId: "test1",
    productName: "아리수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인대기",
  },
  {
    id: 3,
    memberId: "test1",
    productName: "아리수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인대기",
  },
  {
    id: 2,
    memberId: "test1",
    productName: "백산수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "반려",
  },
  {
    id: 1,
    memberId: "test1",
    productName: "삼다수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인",
  },

  {
    id: 3,
    memberId: "test1",
    productName: "아리수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인대기",
  },
  {
    id: 3,
    memberId: "test1",
    productName: "아리수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인대기",
  },
  {
    id: 2,
    memberId: "test1",
    productName: "백산수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "반려",
  },
  {
    id: 1,
    memberId: "test1",
    productName: "삼다수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인",
  },

  {
    id: 3,
    memberId: "test1",
    productName: "아리수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인대기",
  },
  {
    id: 3,
    memberId: "test1",
    productName: "아리수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인대기",
  },
  {
    id: 2,
    memberId: "test1",
    productName: "백산수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "반려",
  },
  {
    id: 1,
    memberId: "test1",
    productName: "삼다수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인",
  },

  {
    id: 3,
    memberId: "test1",
    productName: "아리수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인대기",
  },
  {
    id: 3,
    memberId: "test1",
    productName: "아리수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인대기",
  },
  {
    id: 2,
    memberId: "test1",
    productName: "백산수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "반려",
  },
  {
    id: 1,
    memberId: "test1",
    productName: "삼다수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인",
  },

  {
    id: 3,
    memberId: "test1",
    productName: "아리수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인대기",
  },
  {
    id: 3,
    memberId: "test1",
    productName: "아리수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인대기",
  },
  {
    id: 2,
    memberId: "test1",
    productName: "백산수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "반려",
  },
  {
    id: 1,
    memberId: "test1",
    productName: "삼다수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인",
  },

  {
    id: 3,
    memberId: "test1",
    productName: "아리수",
    quantity: 200,
    height: 30,
    weight: 30,
    deadline: new Date("2024-04-21T18:00:00"),
    firstAddress: "파주",
    finalAddress: "논산",
    orderTime: new Date("2024-04-21T18:00:00"),
    deliveryStatus: null,
    approvalStatus: "승인대기",
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
        cell: ({ row }) => <div>{row.id ? parseInt(row.id) + 1 : null}</div>,
      },
      {
        accessorKey: "productName",
        header: () => "제품명",
      },
      {
        accessorKey: "quantity",
        header: () => "수량(개)",
      },
      {
        accessorKey: "orderTime",
        header: () => "주문시간",
        cell: ({ row }) => <div>{customTime(row)}</div>,
      },
      {
        accessorKey: "firstAddress",
        header: () => "1차배송지",
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
        cell: ({ row }) => <div>{approvalCss(row)}</div>,
      },
    ],
    []
  );

  const approvalCss = (row: any) => {
    if (row.original.approvalStatus === "승인대기") {
      return <div className="text-[17px] text-gre">승인대기</div>;
    } else if (row.original.approvalStatus === "승인") {
      return <div className="text-appr text-[17px]">승인</div>;
    } else if (row.original.approvalStatus === "반려") {
      return <div className="text-reg text-[17px]">반려</div>;
    }
  };

  const customTime = (row: any) => {
    const oriDate = new Date(row.original.deadline);

    const year = oriDate.getFullYear();
    const month = String(oriDate.getMonth() + 1).padStart(2, "0");
    const day = String(oriDate.getDate()).padStart(2, "0");
    const hours = String(oriDate.getHours()).padStart(2, "0");
    const minutes = String(oriDate.getMinutes()).padStart(2, "0");

    return (
      <div>
        {`${year}-${month}-${day} ${hours}:${minutes}`}
        <br />
        {`GMT+0900(한국 표준시)`}
      </div>
    );
  };
  const resetSelection = () => {
    table.toggleAllRowsSelected(false);
  };
  // const [data, _setData] = React.useState(() => [...defaultData]);

  const [data, _setData] = React.useState<Person[]>(() => []);
  const [refeach, _setfetch] = useState(false);
  const [selectedRow, setSelectedRow] = useState<Person | null>(null);

  const handleRowClick = (row: Person) => {
    setSelectedRow(row);
    // 모달 열기 등의 작업을 수행할 수 있습니다.
  };

  const handleSaveChanges = (updatedData: Person) => {
    // 수정된 데이터를 원본 데이터 배열에서 찾아 업데이트합니다.
    const newData = data.map((item) =>
      item.id === updatedData.id ? updatedData : item
    );
    _setData(newData);
    // 모달 닫기 등의 작업을 수행할 수 있습니다.
  };
  //처음에 백엔드와 데이터 통신하거나 데이터 수정됐을 때 다시 불러오는 역할

  // useEffect(() => {
  //   (async () => {
  //     const response = await CreateAxiosInstance().get("/products");
  //     const list = response.data.map((list: Person) => ({
  //       ...list,
  //     }));
  //     _setData(list);
  //   })();
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     const response = await CreateAxiosInstance().get("/products");
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
    enableRowSelection: (row) => row.original.approvalStatus !== "승인",

    //enable row selection for all rows
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
  
  // 인덱스는 0부터 시작하므로 id에서 1을 빼줍니다.

  const selectedHeaderGroup = table.getHeaderGroups()[0];

  return (
    <div className="h-full font-sans bg-slate-100">
      {/* 주문내역, 상품등록하기 네이게이션바 */}
      <div className="pl-5 border-t-2 shadow-sm navbar bg-base-100">
        <Link
          to={"/user/usermain"}
          className="text-xl text-cb w-44 btn btn-ghost hover:bg-cb hover:text-white"
        >
          주문내역
        </Link>
        <Link
          to={"/user/uploadpd"}
          className="text-xl font-thin text-gray-400 w-44 btn btn-ghost hover:bg-cb hover:text-white"
        >
          상품등록하기
        </Link>
      </div>
      {/* 서치사&표 */}
      <div className="container p-2 mx-auto sm:p-4">
        {/* 서치바 등록취소 버튼 */}
        <div className="flex items-center justify-center gap-3 pb-2">
          <div className="w-9/12">
            <tr className="w-full" key={selectedHeaderGroup.id}>
              <Filter
                column={selectedHeaderGroup.headers[2].column}
                table={table}
              />
            </tr>
          </div>

          <Link
            to="/user/uploadpd"
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
                  // const newData: Person[] = await CreateAxiosInstance().get(
                  //     "/products"
                  // );
                  // _setData(newData);
        
                  resetSelection();
                  _setfetch((refeach) => !refeach);
                }
              })();
            }}
          >
            등록취소
          </div>
        </div>
        {/* 표 */}
        <div className="h-2" />
        <div className="h-[675px] overflow-auto bg-white rounded-lg flex flex-col justify-between">
          <table className="min-w-full overflow-x-auto font-sans bg-white table-sm">
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
          <div className="flex items-center justify-end flex-shrink-0 gap-5 pb-3">
            {/* 페이지쪽수 */}
            <div className="flex justify-between w-[54%]">
              <div className="flex gap-2">
                <button
                  className="p-1"
                  onClick={() => table.setPageIndex(0)}
                  disabled={!table.getCanPreviousPage()}
                >
                  {"<<"}
                </button>
                <button
                  className="p-1"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  {"<"}
                </button>
                <span className="flex items-center gap-1">
                  <strong>
                    {table.getState().pagination.pageIndex + 1} /{" "}
                    {table.getPageCount()}
                  </strong>
                </span>
                <button
                  className="p-1"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  {">"}
                </button>
                <button
                  className="p-1"
                  onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                  disabled={!table.getCanNextPage()}
                >
                  {">>"}
                </button>
              </div>
              <div className="pr-4">
                <select
                value={table.getState().pagination.pageSize}
                onChange={(e) => {
                  table.setPageSize(Number(e.target.value));
                }}
                
              >
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
              </div>
              
            </div>

            {/* 페이지 내용 몇개 보여주는지 */}
          </div>
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
        type="text"
        value={(column.getFilterValue() ?? "") as string}
        onChange={(e) => column.setFilterValue(e.target.value)}
        className="w-full rounded focus:ring-0"
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
