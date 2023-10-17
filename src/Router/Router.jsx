import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Erro from "../Allpages/Erro";
import Home from "../Allpages/Home/Home";
import Addproduct from "../Allpages/Addproduct/Addproduct";
import Mycard from "../Allpages/Mycard/Mycard";
import Login from "../Allpages/Login/Login";
import Register from "../Allpages/Register/Register";


const Router = createBrowserRouter([
    {
        path: "/",
        element:<Layout></Layout>,
        errorElement:<Erro></Erro>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/addproduct',
                element:<Addproduct></Addproduct>
            },
            {
                path:'/mycard',
                element:<Mycard></Mycard>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    },
]);

export default Router;