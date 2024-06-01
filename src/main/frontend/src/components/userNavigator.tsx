import { Link, useNavigate } from "react-router-dom";

function UserNavigator() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  };
  return (
    <div>
      <header className="flex items-center justify-between w-full p-8 bg-white">
        {/* 메뉴바 */}
        <Link className="font-bold text-cb text-7xl" to={"/user/usermain"}>
          Cosmos
        </Link>
        <div className="flex gap-3 pt-3 text-cb">
          <div>사용자</div>
          <button onClick={logout} className=" hover:text-reg">
            로그아웃
          </button>
        </div>
      </header>
      {/* 주문내역, 상품등록하기 네이게이션바 */}
      
    </div>
  );
}
export default UserNavigator;
