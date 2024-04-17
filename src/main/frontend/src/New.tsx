import { Outlet } from "react-router-dom";
import Navigator from './components/navigator';

function New() {
    return (
        <div >
            <Navigator />
            <Outlet />
        </div>
    );
}

export default New;