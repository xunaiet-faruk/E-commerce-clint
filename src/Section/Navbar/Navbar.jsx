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
      

        <div className="max-w-screen-xl mx-auto">
            <div className="lg:flex md:flex justify-between items-center  p-10 lg:ml-20">
                <div className="md:mt-3 lg:mt-0">
                    <img className="lg:w-[130px]  lg:ml-0 ml-20  md:w-[150px]" src={`https://i.ibb.co/PYQ3VBt/logo-1.png`} alt="" />
                </div>

                <div className="flex items-center justify-center gap-5 pr-6 lg:pr-0 md:pr-0 lg:ml-2 mt-5 lg:pl-0 lg:mt-0">
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
                    <div className="ml-28 lg:ml-0 md:ml-0">
                        {

                            user ?


                                <button onClick={handleclick} className="btn bg-blue-200 font-bold px-8">Sign out</button>


                                :

                                <Link to='/login'>
                                    <button className="btn  bg-blue-200 font-bold px-8">Login</button>
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
       </div>
        
    );
};

export default Navbar;