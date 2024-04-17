import { useState, EventHandler, ReactNode } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

export default function ChoosePosition() {
  return (
    /* 백그라운드 */
    <div className="flex items-center justify-center bg-slate-100 h-svh">
      {/* 박스 전체 2개 */}
      <div className="flex text-4xl text-center text-[#74b5dd] font-sans font-bold gap-5 h-5/6 bg-gray-100 w-7/12">
        {/* 사용자회원가입 박스 */}
        <Link
          to="/member/join"
          className="border-[#74B5DD] justify-center w-1/2 mt-16 text-center rounded columns h-4/5 bg-gray-100 place-content-center border-2 group hover:bg-[#74b5dd]"
        >
          {/* 사용자 아이콘 */}
          <div className="flex justify-center bg-gray-100 group-hover:bg-[#74b5dd]">
            <svg
              className="h-64 w-64 stroke-[#74b5dd] bg-gray-100 item group-hover:stroke-[#F8F9FA] group-hover:bg-[#74b5dd]"
              xmlns="http://www.w3.org/2000/svg "
              fill="none"
              viewBox="0 0 215 215"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="10"
                d="M108.933 97.377c-.895-.09-1.97-.09-2.956 0-21.32-.717-38.252-18.185-38.252-39.685 0-21.948 17.738-39.775 39.775-39.775 21.948 0 39.775 17.827 39.775 39.775-.089 21.5-17.021 38.968-38.342 39.685ZM64.142 130.433c-21.68 14.513-21.68 38.163 0 52.586 24.635 16.483 65.037 16.483 89.673 0 21.679-14.513 21.679-38.163 0-52.586-24.546-16.393-64.948-16.393-89.673 0Z"
              />
            </svg>
          </div>

          {/* 사용자 회원가입 */}
          <div className="mt-20 mb-3 bg-gray-100 group-hover:bg-[#74b5dd] group-hover:text-[#F8F9FA]">사용자</div>
          <div className="bg-gray-100 group-hover:bg-[#74b5dd] group-hover:text-[#F8F9FA]">회원가입</div>
        </Link>

        {/* 담당자회원가입 박스 */}
        <Link
          to="/manager/join"
          className="border-[#74B5DD] items-center justify-center w-1/2 mt-16 bg-gray-100 rounded h-4/5 place-content-center border-2 group hover:bg-[#74b5dd]"
        >
          {/* 담당자 아이콘 */}
          <div className="flex justify-center bg-gray-100 group-hover:bg-[#74b5dd] ">
            <svg
              className="group-hover:stroke-[#F8F9FA] items-center justify-center w-64 h-64 bg-gray-100 group-hover:bg-[#74b5dd] stroke-[#74B5DD]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 215 215"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="10"
                d="M107.5 107.5c24.738 0 44.792-20.054 44.792-44.792 0-24.737-20.054-44.791-44.792-44.791-24.738 0-44.791 20.053-44.791 44.791 0 24.738 20.053 44.792 44.791 44.792ZM30.548 197.083c0-34.668 34.49-62.708 76.952-62.708"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="10"
                d="M122 159.816v-7.632c0-4.513 3.7-8.205 8.223-8.205 7.894 0 11.101-5.58 7.154-12.391-2.302-3.939-.904-9.026 3.043-11.242l7.483-4.349c3.453-2.052 7.894-.821 9.95 2.626l.493.82c3.947 6.811 10.361 6.811 14.308 0l.493-.82c2.056-3.447 6.497-4.595 9.95-2.626l7.483 4.349c3.947 2.298 5.345 7.303 3.043 11.242-3.947 6.811-.74 12.391 7.154 12.391 4.523 0 8.223 3.692 8.223 8.205v7.632c0 4.513-3.7 8.205-8.223 8.205-7.894 0-11.101 5.58-7.154 12.391 2.302 3.939.904 9.026-3.043 11.242l-7.483 4.349c-3.453 2.052-7.894.821-9.95-2.626l-.493-.82c-3.947-6.811-10.361-6.811-14.308 0l-.493.82c-2.056 3.447-6.497 4.595-9.95 2.626l-7.483-4.349c-3.947-2.298-5.345-7.303-3.043-11.242 3.947-6.811.74-12.391-7.154-12.391-4.523.082-8.223-3.61-8.223-8.205Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="10"
                d="M165 172c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16Z"
              />
            </svg>
          </div>

          {/* 담장자 회원가입 */}
          <div className="mt-20 mb-3 bg-gray-100 group-hover:bg-[#74b5dd] group-hover:text-[#F8F9FA]">담당자</div>
          <div className="bg-gray-100 group-hover:bg-[#74b5dd] group-hover:text-[#F8F9FA]">회원가입</div>
        </Link>
      </div>
    </div>
  );
}
