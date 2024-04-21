import { Outlet } from "react-router-dom";
import Navigator from './components/navigator';

function New() {
    return (
        <div className="h-screen bg-slate-100">
            <Navigator />
            <Outlet />
        </div>
    );
}

export default New;