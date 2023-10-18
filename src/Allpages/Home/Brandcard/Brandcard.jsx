import { Link } from "react-router-dom";


const Brandcard = ({ cardbarand }) => {
    console.log(cardbarand)
    return (
        <>       
        
        <h1 className="text-center mt-12 mb-5 font-bold italic text-6xl">All Of Brand Here </h1>
       <div className="container mx-auto">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 gap-5 mt-32 mb-28 lg:p-10 bg-gray-100 ">
                    {
                        cardbarand.map(item => <div key={item.id}>
                            


                            <Link to={`/details/${item.brand_name}`}>

                                <div className=" h-72 bg-base-100 shadow-xl rounded-lg">
                                    <figure><img className="h-[200px] rounded-lg" src={item.image} /></figure>
                                    <div className="card-body">
                                        <h2 className="text-2xl text-center font-semibold italic"> {item.brand_name}</h2>
                                    </div>
                                </div>

                            </Link>

                            
                            </div>)
                    }


                </div>
       </div>
        </>

    );
};

export default Brandcard;