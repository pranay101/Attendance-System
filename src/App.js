import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
import Mainpage from "./Components/Mainpage/Mainpage";
import axios from "axios";


// Axios config baseurl

axios.defaults.baseURL=process.env.REACT_APP_BASEURL

function App() {
  return (
    <div className="h-screen w-screen flex">
      <div className="hidden lg:inline-flex w-1/4">
        <Sidebar />
      </div>

      <Mainpage />
    </div>
  );
}

export default App;
