

const Singledetails = ({ items }) => {
    const { name, photo, price, rating, brand_name,
        select} =items;
    console.log(items)
    return (
        <>
   
     

            <div className="max-w-screen-xl mx-auto p-10 grid lg:grid-cols-2 grid-cols-1 ">
                <div className="bg-gray-200 w-72 p-2 rounded-lg">
                    <div>
                        <img src={photo} className="w-full h-[230px]" alt="" />
                    </div>
                    <div className="text-center italic mb-2">
                        <p className="text-2xl font-semibold">{name}</p>
                        <p className="text-3xl font-semibold mt-2">Brand: {brand_name}</p>
                        <p className="font-semibold">Price : {price}</p>
                        <p className="font-semibold">Rating:{rating}</p>
                        <p className="font-semibold">Types : {select}</p>
                    </div>
                    <div className="mb-2">
                        <button className="btn btn-primary w-full">Details</button>
                    </div>
                    <div className="mb-2">
                        <button className="btn btn-secondary w-full">Update</button>
                    </div>
                </div>
            </div>
     </>
    );
};

export default Singledetails;