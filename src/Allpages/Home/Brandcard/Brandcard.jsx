import { useEffect, useState } from "react";
import { CiSaveDown1 } from "react-icons/ci";
import { Link } from "react-router-dom";

const Brandcard = ({ cardbarand }) => {
    const [datas, setdata] = useState();

    useEffect(() => {
        fetch('./Homecard.json')
            .then(res => res.json())
            .then(data => setdata(data));
    }, []);

    return (
        <>
            <h1 className="text-center mt-12 mb-5 font-bold italic text-6xl">All Of <span className="text-red-600 mt-12">Brand</span> Here</h1>
            <p className="text-center text-3xl font-semibold">Click Your Favorite Brand</p>
            <div className="text-center flex justify-center items-center p-5">
                <CiSaveDown1 className="text-4xl animate-bounce text-red-600 font-bold"/>

            </div>

            <div className="container mx-auto">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 gap-5 mt- mb-28 lg:p-10">
                    {
                        datas?.map(item => (
                            <div key={item.id}>
                                <Link to={`/details/${item.brand_name}`}>
                                    <div className="bg-base-100 border shadow-xl hover:shadow-red-200 rounded-xl h-[320px] flex justify-center items-center"> {/* Center content using Flexbox */}
                                        <img className="max-h-full max-w-full" src={item?.image} alt={item?.brand_name} />
                                    </div>
                                    <p className="text-center text-2xl font-bold">{item?.brand_name}</p>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Brandcard;
