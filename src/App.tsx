import { Routes, Route } from 'react-router-dom';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import ProtectedRoutes from './pages/auth/protectedroutes';
import Profile from './pages/dashboard/profile';
import Notification from './pages/dashboard/notification';
import Courses from './pages/student/courses';
import Assessment from './pages/student/assessments';
import Batch from './pages/student/batch';
import Progress from './pages/student/progress';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} /> 
      <Route element = {<ProtectedRoutes/>}>

        <Route path="/dashboard/" element={<Profile />} />
        <Route path="/dashboard/student/profile" element={<Profile/>} />
        <Route path="/dashboard/student/notification" element={<Notification/>} />
        <Route path="/dashboard/student/courses" element={<Courses/>} />
        <Route path="/dashboard/student/assessment" element={<Assessment/>}/>
        <Route path="/dashboard/student/batch" element={<Batch/>} />
        <Route path="/dashboard/student/progress" element={<Progress/>} />

        <Route path="/dashboard/teacher/profile" element={<Profile/>} />
        <Route path="/dashboard/teacher/notification" element={<Notification/>} />

      </Route>
    </Routes>
  );
}

export default App;
