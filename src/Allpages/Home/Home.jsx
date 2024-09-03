import { useLoaderData } from "react-router-dom";
import Banner from "../../Section/Banner/Banner";
import Secndb from "../../Section/Banner/Secnd/Secndb";
import Forthsect from "../../Section/Fourth/Forthsect";
import Brandcard from "./Brandcard/Brandcard";



const Home = () => {
    const cardbarand =useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Brandcard cardbarand={cardbarand}></Brandcard>
            <Secndb></Secndb>
            <Forthsect></Forthsect>
            {/* <Thisrdse/> */}
        </div>
    );
};

export default Home;