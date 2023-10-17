import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../../Firebase/Context";


const Navbar = () => {

    const { user, logout } =useContext(Authcontext)
   
    const handleclick = () => {
        logout()
            .then(() => {
                console.log('user succecfully')
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
      

        <div className="lg:flex md:flex justify-between max-w-7xl mx-auto p-10 ml-20">
            <div className="md:mt-6 lg:mt-0">
                <img className="w-[180px]  ml-8 lg:ml-0 md:pl-5 pl-20" src={`https://i.ibb.co/PYQ3VBt/logo-1.png`} alt="" />
            </div>

           <div className="flex items-center justify-center gap-5  lg:ml-20 mt-5 lg:pl-0 lg:mt-0">
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

            
            <div className="grid grid-cols-1 items-center lg:grid-cols-3">

                <div>
                    {
                        user && <p>{user?.displayName}</p>
                    }
                </div>
               <div>
                    {

                        user ?


                            <button onClick={handleclick} className="btn bg-blue-200 font-bold px-8">Sign out</button>


                            :

                            <Link to='/login'>
                                <button className="btn ml-5 bg-blue-200 font-bold px-8">Login</button>
                            </Link>


                    }
               </div>
                <div>
                    {
                        user && <img className="w-12  rounded-full h-12" src={user?.photoURL}></img>
                    }

                </div>
            </div>
        </div>
        
    );
};

export default Navbar;