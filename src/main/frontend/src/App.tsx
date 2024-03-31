import { Route, Routes } from 'react-router-dom';
import UserSignIn from './pages/UserSignIn';
import Test from './pages/Test';
import UserMain from './pages/UserMain';
import Login from './pages/Login';
import ManagerSingIn from './pages/ManagerSignIn';

function App(){
  return(
      <Routes>
        <Route path='/' element={<Test />} />
        <Route path='/member/join' element={<UserSignIn />} />
        <Route path='/manager/join' element={<ManagerSingIn />} />
        <Route path='/member/login' element={<Login />} />
        <Route path='/usermain' element={<UserMain />} />
      </Routes>
  )
}

export default App