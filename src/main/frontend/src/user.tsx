import { Outlet } from "react-router-dom";
import UserNavigator from "./components/userNavigator";

function User() {
    return (
        <div className="h-full bg-slate-100">
            <UserNavigator />
            <Outlet />
        </div>
    );
}

export default User;