import { useContext, useState } from "react";
import { Authcontext } from "../../Firebase/Context";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
    const { singnusers,googlelogin } = useContext(Authcontext)
    const [passwrong, setpasswrong] = useState('');
    const location = useLocation();
    const navigate = useNavigate()
    const handlelogin = e => {
       
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        setpasswrong('')
        singnusers(email,password)
        .then(res => {
            console.log(res.user)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your suceessfully login',
                showConfirmButton: false,
                timer: 1500
            })
            navigate(location?.state ? location.state : '/')
        })
        .catch(error => {
            console.log(error)
            setpasswrong(error.message)
        })
    }

    const handlegoogle = () => {
        googlelogin()
            .then(res => {
                console.log(res.user)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <form onSubmit={handlelogin}>

            <div className="relative flex lg:ml-[470px] mb-10 mt-12 flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                <div className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border shadow-pink-500/40">
                    <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
                        Sign In
                    </h3>
                </div>
                <div className="flex flex-col gap-4 p-6">
                    <div className="relative h-11 w-full min-w-[200px]">
                        <input name="email" type="email"
                            className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"

                        required/>
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Email
                        </label>
                    </div>
                    <div className="relative h-11 w-full min-w-[200px]">
                        <input name="password" type="password"
                            className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"

                        required/>
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Password
                        </label>
                    </div>
                    <div className="-ml-2.5">
                        <div className="inline-flex items-center">
                            <label
                                className="relative flex items-center p-3 rounded-full cursor-pointer"
                                htmlFor="checkbox"
                                data-ripple-dark="true"
                            >
                                <input
                                    type="checkbox"
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                                    id="checkbox"
                                />
                                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3.5 w-3.5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        stroke-width="1"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </span>
                            </label>
                            <label
                                className="mt-px font-light text-gray-700 cursor-pointer select-none"
                                htmlFor="checkbox"
                            >
                                Remember Me
                            </label>
                        </div>
                    </div>
                </div>
                <div className="p-6 pt-0">
 <input type="submit" value="Sign in" className="btn btn-secondary w-full" />
                    <p className="text-center">
                        {
                            passwrong && <span className=" text-red-400">{passwrong}</span>
                        }
                    </p>
                    <p className="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
                        You are new here?Please
                        <a
                            href="/register"
                            className="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-pink-500"
                        >
                         Register
                        </a>
                    </p>
                </div>
                <div className=" mb-7">

                    <button onClick={handlegoogle} className="btn w-full font-semibold"> <FcGoogle className="text-2xl"></FcGoogle>Google</button>
                </div>
            </div>



        </form>
    );
};

export default Login;