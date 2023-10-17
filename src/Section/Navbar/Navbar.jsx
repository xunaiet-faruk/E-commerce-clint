import { NavLink } from "react-router-dom";


const Navbar = () => {


   


    return (
      

        <div className="lg:flex md:flex justify-between max-w-7xl mx-auto p-10">
            <div className="md:mt-6 lg:mt-0">
                <img className="w-[180px]  ml-8 lg:ml-0 md:pl-5 pl-20" src={`https://i.ibb.co/PYQ3VBt/logo-1.png`} alt="" />
            </div>

           <div className="flex items-center justify-center gap-5   mt-5 lg:pl-0 lg:mt-0">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline text-red-500" : "font-semibold "
                    }
                >
                    HOME
                </NavLink>
                <NavLink
                    to="/addproduct"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline text-red-500" : "font-semibold"
                    }
                >
                    ADD CARD
                </NavLink>
                <NavLink
                    to="/mycard"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline text-red-500" : "font-semibold"
                    }
                >
                    MY CARD
                </NavLink>
               
           </div>

            
                <div className="pl-36 md:pl-14 mt-5 lg:pl-0 lg:mt-0">
                    <button className="btn bg-gray-600 text-white font-semibold ">Login </button>
                </div>

        </div>
        
    );
};

export default Navbar;