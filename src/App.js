import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
import Mainpage from "./Components/Mainpage/Mainpage";

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
