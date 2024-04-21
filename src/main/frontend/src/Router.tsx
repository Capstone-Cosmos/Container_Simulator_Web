import { createBrowserRouter } from "react-router-dom";
import UserSignIn from "./pages/member/UserSignIn";

import Login from "./pages/Login";
import ManagerSingIn from "./pages/manager/ManagerSignIn";
import App from "./App";
import ErrorComponent from "./components/ErrorComponent";
import ChoosePosition from "./pages/ChoosePosition";
import New from "./New";
import UserMain from './pages/member/UserMain';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Login />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "chooseposition",
        element: <ChoosePosition />,
      },
      {
        path: "member/join",
        element: <UserSignIn />,
      },
      {
        path: "manager/join",
        element: <ManagerSingIn />,
      },
    ],
  },
  {
    path: "/new",
    element: <New />,
    children : [
      {
        path: "usermain",
        element: <UserMain />,
      },
    ]
  }
  
]);

export default router;
