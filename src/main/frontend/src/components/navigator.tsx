import { Link } from "react-router-dom";

function Navigator() {
  return (
    <header className="w-full p-8 bg-white">
      {/* 메뉴바 */}
      <Link className="font-bold text-cb text-7xl" to={"/"}>
        Cosmos
      </Link>
    </header>
  );
}
export default Navigator;
