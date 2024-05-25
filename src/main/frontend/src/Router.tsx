import { createBrowserRouter } from "react-router-dom";
import UserSignIn from "./pages/member/UserSignIn";

import Login from "./pages/Login";
import ManagerSingIn from "./pages/manager/ManagerSignIn";
import App from "./App";
import ErrorComponent from "./components/ErrorComponent";
import ChoosePosition from "./pages/ChoosePosition";
import New from "./New";

import UploadPd from "./pages/member/UploadPd";
import UserMain from "./pages/member/UserMain";
import ApprWait from './pages/manager/ApprWait';
import ApprComplete from "./pages/manager/ApprComplete";
import ContainerList from "./pages/manager/containerList";
import ContainerUpload from './pages/manager/containerUpload';
import PdinContainer from "./pages/manager/pdInContainer";




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
      {
        path: "uploadpd",
        element: <UploadPd />,
      },
      {
        path: "apprWait",
        element: <ApprWait />,
      },
      {
        path: "apprComplete",
        element: <ApprComplete />,
      },
      {
        path: "containerList",
        element: <ContainerList />,
      },
      {
        path: "containerlist/:urlContainerId",
        element: <PdinContainer />,
      },
      {
        path: "containerUpload",
        element: <ContainerUpload />,
      },
      
    ]
  }, 
]);

export default router;
