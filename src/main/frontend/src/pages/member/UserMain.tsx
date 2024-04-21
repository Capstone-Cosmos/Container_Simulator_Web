import { useState, EventHandler, ReactNode } from "react";
import { Link } from "react-router-dom";

export default function UserMain() {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table hover:table-auto table-lg">
          <thead>
            <tr>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-sm"
              />
              <th>번호</th>
              <th>Job</th>
              <th>company</th>
              <th>location</th>
              <th>Last Login</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-sm"
              />
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td>Blue</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>company</th>
              <th>location</th>
              <th>Last Login</th>
              <th>Favorite Color</th>
            </tr>
          </tfoot>
        </table>
        {/* ------------------------------------------------------------- */}
      </div>
{/* 마크 디자인 */}
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="p-6 px-0 overflow-scroll">
          <table className="w-full text-left table-auto min-w-max">
            <thead>
              <tr>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Transaction
                  </p>
                </th>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Amount
                  </p>
                </th>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Date
                  </p>
                </th>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Status
                  </p>
                </th>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Account
                  </p>
                </th>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://docs.material-tailwind.com/img/logos/logo-spotify.svg"
                      alt="Spotify"
                      className="inline-block relative object-center !rounded-full w-12 h-12 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                    />
                    <p className="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                      Spotify
                    </p>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    $2,500
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    Wed 3:00pm
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="w-max">
                    <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md opacity-100 select-none whitespace-nowrap bg-green-500/20">
                      <span className="">paid</span>
                    </div>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-12 p-1 border rounded-md h-9 border-blue-gray-50">
                      <img
                        src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                        alt="visa"
                        className="inline-block relative object-center !rounded-none rounded-md h-full w-full object-contain p-1"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal capitalize text-blue-gray-900">
                        visa
                      </p>
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                        06/2026
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <button
                    className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
                    type="button"
                  >
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-4 h-4"
                      >
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                      </svg>
                    </span>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://docs.material-tailwind.com/img/logos/logo-amazon.svg"
                      alt="Amazon"
                      className="inline-block relative object-center !rounded-full w-12 h-12 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                    />
                    <p className="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                      Amazon
                    </p>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    $5,000
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    Wed 1:00pm
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="w-max">
                    <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md opacity-100 select-none whitespace-nowrap bg-green-500/20">
                      <span className="">paid</span>
                    </div>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-12 p-1 border rounded-md h-9 border-blue-gray-50">
                      <img
                        src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png"
                        alt="master-card"
                        className="inline-block relative object-center !rounded-none rounded-md h-full w-full object-contain p-1"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal capitalize text-blue-gray-900">
                        master card
                      </p>
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                        06/2026
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <button
                    className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
                    type="button"
                  >
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-4 h-4"
                      >
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                      </svg>
                    </span>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://docs.material-tailwind.com/img/logos/logo-pinterest.svg"
                      alt="Pinterest"
                      className="inline-block relative object-center !rounded-full w-12 h-12 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                    />
                    <p className="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                      Pinterest
                    </p>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    $3,400
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    Mon 7:40pm
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="w-max">
                    <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-md opacity-100 select-none whitespace-nowrap bg-amber-500/20 text-amber-900 ">
                      <span className="">pending</span>
                    </div>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-12 p-1 border rounded-md h-9 border-blue-gray-50">
                      <img
                        src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png"
                        alt="master-card"
                        className="inline-block relative object-center !rounded-none rounded-md h-full w-full object-contain p-1"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal capitalize text-blue-gray-900">
                        master card
                        {/* <!-- -->
                <!-- -->1234 */}
                      </p>
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                        06/2026
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <button
                    className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
                    type="button"
                  >
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-4 h-4"
                      >
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                      </svg>
                    </span>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://docs.material-tailwind.com/img/logos/logo-google.svg"
                      alt="Google"
                      className="inline-block relative object-center !rounded-full w-12 h-12 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                    />
                    <p className="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                      Google
                    </p>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    $1,000
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    Wed 5:00pm
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="w-max">
                    <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md opacity-100 select-none whitespace-nowrap bg-green-500/20">
                      <span className="">paid</span>
                    </div>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-12 p-1 border rounded-md h-9 border-blue-gray-50">
                      <img
                        src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                        alt="visa"
                        className="inline-block relative object-center !rounded-none rounded-md h-full w-full object-contain p-1"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal capitalize text-blue-gray-900">
                        visa
                        {/*   <!-- -->
                <!-- -->1234 */}
                      </p>
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                        06/2026
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <button
                    className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
                    type="button"
                  >
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-4 h-4"
                      >
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                      </svg>
                    </span>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://docs.material-tailwind.com/img/logos/logo-netflix.svg"
                      alt="netflix"
                      className="inline-block relative object-center !rounded-full w-12 h-12 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                    />
                    <p className="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                      netflix
                    </p>
                  </div>
                </td>
                <td className="p-4">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    $14,000
                  </p>
                </td>
                <td className="p-4">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    Wed 3:30am
                  </p>
                </td>
                <td className="p-4">
                  <div className="w-max">
                    <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-red-900 uppercase rounded-md opacity-100 select-none whitespace-nowrap bg-red-500/20">
                      <span className="">cancelled</span>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 p-1 border rounded-md h-9 border-blue-gray-50">
                      <img
                        src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                        alt="visa"
                        className="inline-block relative object-center !rounded-none rounded-md h-full w-full object-contain p-1"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal capitalize text-blue-gray-900">
                        visa
                        {/* <!-- -->
                <!-- -->1234 */}
                      </p>
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                        06/2026
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <button
                    className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
                    type="button"
                  >
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-4 h-4"
                      >
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                      </svg>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="w-full px-4 pt-5 mx-auto mb-8 ">
            <div className="py-1 text-sm text-gray-700">
              Made with{" "}
              <a
                className="font-semibold text-gray-700"
                href="https://www.material-tailwind.com/?ref=tailwindcomponents"
                target="_blank"
              >
                Material Tailwind
              </a>{" "}
              by{" "}
              <a
                href="https://www.creative-tim.com?ref=tailwindcomponents"
                className="font-semibold text-gray-700"
                target="_blank"
              >
                {" "}
                Creative Tim
              </a>
              .
            </div>
          </div>
        </div>
      </div>
      {/* -----------------보라 검정 테이블------------- */}
      <div className="container p-2 mx-auto sm:p-4 800 table-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="bg-sky-300 ">
              <tr className="text-center">
                <th className="p-3">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="bg-white checkbox checkbox-md"
                  />
                </th>
                <th className="p-3">Client</th>
                <th className="p-3">Issued</th>
                <th className="p-3">Due</th>
                <th className="p-3 text-right">Amount</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr className="border-b border-opacity-20 y-300 ">
                <td className="p-3">
                <input
                    type="checkbox"
                    defaultChecked
                    className="bg-white checkbox checkbox-md"
                  />
                </td>
                <td className="p-3">
                  <p>Microsoft Corporation</p>
                </td>
                <td className="p-3">
                  <p>14 Jan 2022</p>
                  <p className="">Friday</p>
                </td>
                <td className="p-3">
                  <p>01 Feb 2022</p>
                  <p className="">Tuesday</p>
                </td>
                <td className="p-3 text-right">
                  <p>$15,792</p>
                </td>
                <td className="p-3">
                  <div className="w-max">
                    <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-red-900 uppercase rounded-md opacity-100 select-none whitespace-nowrap bg-red-500/20">
                      <span className="">cancelled</span>
                    </div>
                  </div>
                </td>
                
              </tr>
              <tr className="border-b border-opacity-20 y-300 ">
                <td className="p-3">
                  <p>97412378923</p>
                </td>
                <td className="p-3">
                  <p>Tesla Inc.</p>
                </td>
                <td className="p-3">
                  <p>14 Jan 2022</p>
                  <p className="">Friday</p>
                </td>
                <td className="p-3">
                  <p>01 Feb 2022</p>
                  <p className="">Tuesday</p>
                </td>
                <td className="p-3 text-right">
                  <p>$275</p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="w-max">
                    <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md opacity-100 select-none whitespace-nowrap bg-green-500/20">
                      <span className="">paid</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-opacity-20 y-300 ">
                <td className="p-3">
                  <p>97412378923</p>
                </td>
                <td className="p-3">
                  <p>Coca Cola co.</p>
                </td>
                <td className="p-3">
                  <p>14 Jan 2022</p>
                  <p className="">Friday</p>
                </td>
                <td className="p-3">
                  <p>01 Feb 2022</p>
                  <p className="">Tuesday</p>
                </td>
                <td className="p-3 text-right">
                  <p>$8,950,500</p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="w-max">
                    <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-md opacity-100 select-none whitespace-nowrap bg-amber-500/20 text-amber-900 ">
                      <span className="">pending</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-opacity-20 y-300 ">
                <td className="p-3">
                  <p>97412378923</p>
                </td>
                <td className="p-3">
                  <p>Nvidia Corporation</p>
                </td>
                <td className="p-3">
                  <p>14 Jan 2022</p>
                  <p className="">Friday</p>
                </td>
                <td className="p-3">
                  <p>01 Feb 2022</p>
                  <p className="">Tuesday</p>
                </td>
                <td className="p-3 text-right">
                  <p>$98,218</p>
                </td>
                <td className="p-3 text-right">
                  <span className="px-3 py-1 font-semibold rounded-md ">
                    <span>Pending</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
