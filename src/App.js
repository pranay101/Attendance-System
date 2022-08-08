// packages
import "./App.css";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
// containers
import Homepage from "./Containers/HomePage/Homepage";
import StudentDashboard from "./Containers/StudentDashboard/StudentDashboard";
import MentorDashboard from "./Containers/MentorDashboard/MentorDashboard";
import { ProtectedRoute } from "./Utilities/ProtectedRoute";
import { user as userAtom } from "./RecoilConfig";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom";

// Axios config baseurl
axios.defaults.baseURL = process.env.REACT_APP_BASEURL;

function App() {
  const [user, setUser] = useRecoilState(userAtom);
  const navigate = useNavigate();
  useEffect(() => {
    const userFromLocalStorage = JSON.parse(localStorage.getItem("user")) || null;
    if (userFromLocalStorage) {
      setUser(userFromLocalStorage);

        


      if (userFromLocalStorage.userType === "MENTOR")
        navigate("/mentordashboard", { replace: true });
      else
        navigate("/studentdashboard", { replace: true });
    }
    
  }, []);
  return (
    <div className="h-screen w-screen flex">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/studentdashboard"
          element={
            <ProtectedRoute isAllowed={user}>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mentordashboard"
          element={
            <ProtectedRoute isAllowed={user}>
              <MentorDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
