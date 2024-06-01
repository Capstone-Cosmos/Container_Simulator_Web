import { Link, useNavigate } from "react-router-dom";

function ManagerNavi() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  };
  return (
    <header className="flex items-center justify-between w-full p-8 bg-white">
      {/* 메뉴바 */}
      <Link className="font-bold text-cb text-7xl" to={"/manager/apprWait"}>
        Cosmos
      </Link>
      <div className="flex gap-3 pt-3 text-cb">
        <div>매니저</div>
        <button onClick={logout} className=" hover:text-reg">
          로그아웃
        </button>
      </div>
    </header>
  );
}
export default ManagerNavi;
