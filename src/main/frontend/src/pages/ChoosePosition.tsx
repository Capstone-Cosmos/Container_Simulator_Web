import { useState, EventHandler, ReactNode } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

export default function ChoosePosition() {
  return (
    <div>
      {/* 사용자회원가입 박스 */}
      <div>
        {/* 사용자 아이콘 */}
          <svg
           className="h-52 w-52"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path
              stroke="#74B5DD"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="10"
              d="M108.933 97.377c-.895-.09-1.97-.09-2.956 0-21.32-.717-38.252-18.185-38.252-39.685 0-21.948 17.738-39.775 39.775-39.775 21.948 0 39.775 17.827 39.775 39.775-.089 21.5-17.021 38.968-38.342 39.685ZM64.142 130.433c-21.68 14.513-21.68 38.163 0 52.586 24.635 16.483 65.037 16.483 89.673 0 21.679-14.513 21.679-38.163 0-52.586-24.546-16.393-64.948-16.393-89.673 0Z"
            />
          </svg>
        {/* 사용자 회원가입 */}
        <div></div>
      </div>

      {/* 담당자회원가입 박스 */}
      <div>
        {/* 담당자 아이콘 */}
        <div></div>
        {/* 담장자 회원가입 */}
        <div></div>
      </div>
    </div>
  );
}
