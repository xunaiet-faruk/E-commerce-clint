import { useLoaderData } from "react-router-dom";
import Singledetails from "./Singledetails";
import Amazonslider from "../Component/Amojonslider/Amazonslider";


const Cards = () => {
    const alldata =useLoaderData()
    console.log(alldata)
    return (

        <div>
            <div>
                <Amazonslider></Amazonslider>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">

            {

alldata.map((items,idx) => <Singledetails key={idx} items={items}></Singledetails>)


            }
            </div>
        </div>
    );
};

export default Cards;