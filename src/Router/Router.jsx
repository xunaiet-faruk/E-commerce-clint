import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Erro from "../Allpages/Erro";
import Home from "../Allpages/Home/Home";
import Addproduct from "../Allpages/Addproduct/Addproduct";
import Mycard from "../Allpages/Mycard/Mycard";
import Login from "../Allpages/Login/Login";
import Register from "../Allpages/Register/Register";
import Privaterote from "../Privateroute/Privaterote";
import Cards from "../Details/Cards";


const Router = createBrowserRouter([
    {
        path: "/",
        element:<Layout></Layout>,
        errorElement:<Erro></Erro>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() => fetch('/Homecard.json')
            },
            {
                path:'/addproduct',
                element: <Privaterote><Addproduct></Addproduct></Privaterote>
            },
            {
                path:'/mycard',
                element: <Privaterote><Mycard></Mycard></Privaterote>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/details/:brands',
                element:<Cards></Cards>,
                loader: ({params}) => fetch(`http://localhost:5010/amazon/${params.brands}`)
            },
          
        ]
    },
]);

export default Router;