import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full p-8 bg-[#F8F9FA]">
      <ul>
        <li>
          <div >
            {/* 메뉴바 */}
            <Link className="font-bold text-[#74B5DD] text-7xl" to={"/"}>
              Cosmos
            </Link>
          </div>
        </li>
      </ul>
    </header>
  );
}
export default Header;
