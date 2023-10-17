import { Outlet } from "react-router-dom";
import Navbar from "../Section/Navbar/Navbar";
import Fotter from "../Section/Fotter/Fotter";



const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
         <Outlet></Outlet>  
         <Fotter></Fotter>
      
        </div>
    );
};

export default Layout;