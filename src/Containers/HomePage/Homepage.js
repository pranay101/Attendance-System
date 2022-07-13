import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Mainpage from "../../Components/Mainpage/Mainpage"


const Homepage = () => {
    return (
        <div className="h-screen w-screen flex">
          <>
            <div className="hidden lg:inline-flex w-5/12">
              <Sidebar />
            </div>
    
            <Mainpage />
          </>
        </div>
      );
}

export default Homepage