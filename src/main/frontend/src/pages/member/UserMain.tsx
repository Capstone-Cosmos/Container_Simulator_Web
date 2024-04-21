import React, { useState, EventHandler, ReactNode } from "react";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom/client'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

type Person = {
  index: number
  Name: string
  count: number
  orderDate: string
  shipAddr: string
  status: string
  
}
//person 데이터를 ts를 이용해 만듬
const defaultData: Person[] = [
  {
    index: 1,
    Name: 'linsley',
    count: 24,
    orderDate: "23-11-20 18:33",
    shipAddr: "파주시",
    status: '승인',
  },
  {
    index: 2,
    Name: 'miller',
    count: 40,
    orderDate: "23-11-30 13:33",
    shipAddr: "서울",
    status: '대기',
    
  },
  {
    index: 2,
    Name: 'dirte',
    count: 45,
    orderDate: "24-10-20 14:23",
    shipAddr: "광명",
    status: '반려',
  },
]
//Person 타입을 data에 적용한다.
const columnHelper = createColumnHelper<Person>()
//열이라는 필터를 적용하기 위해 accessor 쓴다. 이를 사용하기 위해 columnHelper를 생성하고 Person 타입을 붙인다.
const columns = [
  columnHelper.accessor('index', {
    header: () => '번호',
    cell: info => info.getValue(),
    footer: info => '번호',
  }),
  columnHelper.accessor(row => row.Name, {
    id: 'Name',
    header: () => '상품명',
    cell: info => <i>{info.getValue()}</i>,
    footer: info => '상품명',
  }),
  columnHelper.accessor('count', {
    header: () => '주문개수',
    cell: info => info.getValue(),
    footer: info => '주문개수',
  }),
  columnHelper.accessor('orderDate', {
    header: () => <span>주문일자</span>,
    footer: info => '주문일자',
  }),
  columnHelper.accessor('status', {
    header: '상태',
    footer: info => '상태',
  }),
  columnHelper.accessor('shipAddr', {
    header: '배송지',
    footer: info => '배송지',
  }),
]
//
export default function UserMain() {
  const [data, _setData] = React.useState(() => [...defaultData])
  const rerender = React.useReducer(() => ({}), {})[1]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
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
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
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
        </tfoot>
      </table>
      <div className="h-4" />
      <button onClick={() => rerender()} className="p-2 border">
        Rerender
      </button>
    </div>
  )
}


