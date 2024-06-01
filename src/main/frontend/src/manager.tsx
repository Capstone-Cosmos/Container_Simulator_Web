import { Outlet } from "react-router-dom";
import ManagerNavi from "./components/managerNavi";

function Manager() {
    return (
        <div className="h-full bg-slate-100">
            <ManagerNavi />
            <Outlet />
        </div>
    );
}

export default Manager;