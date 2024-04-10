import { Link } from "react-router-dom";

function Navigator() {
  return (
    <header className="w-full p-8 bg-[#F8F9FA]">
      
            {/* 메뉴바 */}
            <Link className="font-bold text-red-700 text-7xl" to={"/"}>
              Cosmos
            </Link>
          
    </header>
  );
}
export default Navigator;
