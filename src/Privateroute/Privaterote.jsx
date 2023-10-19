import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../Firebase/Context";
import { useContext } from "react";


const Privaterote = ({children}) => {
   
    const { user, loader } = useContext(Authcontext);
    const location = useLocation();
    if (loader) {
        return <div className="flex justify-center"><span className="loading loading-spinner loading-lg mt-28"></span></div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>;


};

export default Privaterote;