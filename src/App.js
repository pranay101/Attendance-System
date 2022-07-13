// packages
import "./App.css";
import axios from "axios";
import {Route,Routes} from "react-router-dom"

// containers
import Homepage from "./Containers/HomePage/Homepage"
import Dashboard from "./Containers/Dashboard/Dashboard"


// Axios config baseurl
axios.defaults.baseURL = process.env.REACT_APP_BASEURL;

function App() {
  return (
    <div className="h-screen w-screen flex">
      <Routes >
        <Route path="/dashboard"  element={<Dashboard/>}/>
        <Route path="/"  element={<Homepage/>}/>
      </Routes>
    </div>
  );
}

export default App;
