import { createBrowserRouter } from "react-router-dom";
import UserSignIn from "./pages/member/UserSignIn";

import App from "./App";
import ErrorComponent from "./components/ErrorComponent";
import ChoosePosition from "./pages/ChoosePosition";
import Login from "./pages/Login";
import ManagerSingIn from "./pages/manager/ManagerSignIn";

import Manager from "./manager";
import ApprComplete from "./pages/manager/ApprComplete";
import ApprWait from './pages/manager/ApprWait';
import ContainerList from "./pages/manager/containerList";
import ContainerUpload from './pages/manager/containerUpload';
import PdinContainer from "./pages/manager/pdInContainer";
import UploadPd from "./pages/member/UploadPd";
import UserMain from "./pages/member/UserMain";
import User from "./user";




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
    path: "/user",
    element: <User />,
    children : [
      {
        path: "usermain",
        element: <UserMain />,
      },
      {
        path: "uploadpd",
        element: <UploadPd />,
      },
    ]
  }, 
  {
    path: '/manager',
    element: <Manager />,
    children : [
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
  }
]);

export default router;
