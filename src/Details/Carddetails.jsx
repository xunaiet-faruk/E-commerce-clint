
import { useLoaderData } from "react-router-dom";


const Carddetails = () => {


    const data = useLoaderData()


    console.log(data)
    return (
        <div className="text-center">
        <div className="flex justify-center items-center">
          <img className="w-[900px]  h-[500px]" src={data.photo} alt="" />
           

        </div>
        <p className="text-2xl tex-red-200 font-semibold mt-3 italic">{data.name}</p>
            <p className="text-center text-4xl font-bold mb-4">{data.description}</p>
            <button className="btn bg-gray-300 px-16 hover:bg-black hover:text-white mb-5">ADD CARD </button>
        </div>
    );
};

export default Carddetails;