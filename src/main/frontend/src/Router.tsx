import { createBrowserRouter } from "react-router-dom";
import UserSignIn from "./pages/member/UserSignIn";
import UserMain from "./pages/member/UserMain";
import Login from "./pages/Login";
import ManagerSingIn from "./pages/manager/ManagerSignIn";
import App from "./App";
import ErrorComponent from "./components/ErrorComponent";
import ChoosePosition from "./pages/ChoosePosition";
import New from "./New";
import BoxPage from "./pages/BoxPage";



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
      {
        path: "usermain",
        element: <UserMain />,
      },
      {
        path: "boxpage",
        element: <BoxPage />,
      },
    ],
  },
  {
    path: "/new",
    element: <New />,
  }
  
]);

export default router;
