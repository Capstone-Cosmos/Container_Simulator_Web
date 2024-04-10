import { createBrowserRouter } from "react-router-dom";
import UserSignIn from "./pages/member/UserSignIn";
import UserMain from "./pages/member/UserMain";
import Login from "./pages/Login";
import ManagerSingIn from "./pages/manager/ManagerSignIn";
import Root from "./Root";
import ErrorComponent from "./components/ErrorComponent";
import ChoosePosition from "./pages/ChoosePosition";
;


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
      {
        path: "usermain",
        element: <UserMain />,
      },
    ],
  },
]);

export default router;
