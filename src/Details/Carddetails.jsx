
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../Firebase/Context";
import Swal from "sweetalert2";


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
        <div className="text-center">
            <div className="flex justify-center items-center">
                <img className="w-[900px]  h-[500px]" src={data.photo} alt="" />


            </div>
            <p className="text-2xl tex-red-200 font-semibold mt-3 italic">{data.name}</p>
            <p className="text-center text-4xl font-bold mb-4">{data.description}</p>
            <p className="text-center text-4xl font-bold mb-4">{data.price}</p>



            <button onClick={handleCard} className="btn bg-gray-300 px-16 hover:bg-black hover:text-white mb-5">ADD CARD </button>




        </div>
    );
};

export default Carddetails;



