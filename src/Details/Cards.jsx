import { useLoaderData, useParams } from "react-router-dom";
import Singledetails from "./Singledetails";
import Amazonslider from "../Component/Amojonslider/Amazonslider";
import { useEffect } from "react";
import { useState } from "react";


const Cards = () => {
    const alldata = useLoaderData()

    const { brands } = useParams()

    const [data, setdata] = useState();

    useEffect(() => {

        fetch(`https://ecomerce-side-backend.vercel.app/slider/${brands}`)
            .then(res => res.json())
            .then(data => {
                if (data?.length) {
                    setdata(data[0])
                    console.log(data);
                }
            })


    }, [brands])


    return (

        <div>
            <div>
                <Amazonslider data={data}></Amazonslider>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto gap-4 mt-12 mb-12">

                {

                    alldata.map((items, idx) => <Singledetails key={idx} items={items}></Singledetails>)


                }
            </div>
        </div>
    );
};

export default Cards;