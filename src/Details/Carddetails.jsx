
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../Firebase/Context";
import Swal from "sweetalert2";
import Rating from "react-rating";
import './Carddetails.css'
import { IoIosAddCircleOutline } from "react-icons/io";

const Carddetails = () => {


    const data = useLoaderData()
    const { user } = useContext(Authcontext)
    console.log(user)
    console.log(data)

    const handleCard = () => {
        const card = { userId: user.uid, productId: data._id }

        fetch(`https://ecomerce-side-backend.vercel.app/addcard`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(card)
        })
            .then(res => res.json())
            .then(data => {

                if (data) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }



    return (
       <div className="max-w-screen-xl mx-auto mb-32">

        <div className="flex justify-center">
            <div className="flex justify-center items-center">
                <img className="w-[320px] " src={data?.photo} alt="" />
            </div>
                <div className=" shadow-xl h-[450px] mt-5 rounded-r-xl shadow-gray-200 border-r-2 border-red-600  w-[320px] space-y-3 py-12 px-5">
                    <h1 className="text-2xl font-semibold">{data?.name}</h1>
                    <p className="text-red-600">{data?.price}</p>
                 
                    <p className="font-semibold ">

                        <Rating
                            emptySymbol={<svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4 text-[#DD2955]"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                />
                            </svg>}
                            fullSymbol={<svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-4 h-4 text-red-600 "
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clipRule="evenodd"
                                />
                            </svg>}
                            initialRating={
                                data?.rating
                            }
                            readonly
                        />

                    </p>
                    <p>{data?.description}</p>
                    <div className="pt-5">
                        <button onClick={handleCard} className="text-xl  box-border border-b-2 border-red-600 w-48 h-8 rounded-lg  e relative group"><span className="pr-8">Add Card</span><span className="bg-red-600 absolute right-0 top-0  h-full flex items-center justify-center px-1 group-hover:duration-300 group-hover:w-full w-10 duration-300 rounded-md"><IoIosAddCircleOutline className="text-2xl text-white" /></span></button>

                    </div>

            </div>
        </div>

       </div>
    );
};

export default Carddetails;



