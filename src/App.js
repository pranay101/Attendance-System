// packages
import "./App.css";
import axios from "axios";
import {Route,Routes} from "react-router-dom"

// containers
import Homepage from "./Containers/HomePage/Homepage"
import StudentDashboard from "./Containers/Dashboard/StudentDashboard"



// Axios config baseurl
axios.defaults.baseURL = process.env.REACT_APP_BASEURL;

function App() {
  return (
    <div className="h-screen w-screen flex">
      <Routes >
        <Route path="/"  element={<Homepage/>}/>
        <Route path="/dashboard"  element={<StudentDashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
