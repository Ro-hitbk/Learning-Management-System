import { Routes, Route } from 'react-router-dom';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import ProtectedRoutes from './pages/auth/protectedroutes';
import Profile from './pages/dashboard/profile';
import Notification from './pages/dashboard/notification';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} /> 
      <Route element = {<ProtectedRoutes/>}>
        <Route path="/dashboard/" element={<Profile />} />
        <Route path="/dashboard/profile" element={<Profile/>} />
        <Route path="/dashboard/notification" element={<Notification/>} />
      </Route>
    </Routes>
  );
}

export default App;
