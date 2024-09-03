
import shoes from '../../../../public/shoes.png'
import oil from '../../../../public/oil.png'
import cap from '../../../../public/cap.png'
const Secndb = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold mt-8 mb-20 italic text-center ">STAR <span className="text-red-600">PICKS</span></h1>
            
           <div className="lg:flex justify-center items-center">
                <div>
                    <img className="md:pl-52 lg:pl-0 w-[500px]" src={'https://i.ibb.co/98HJnpz/star-img-removebg-preview.png'} alt="" />
                </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
    
                  
                    <div className="card w-64 ml-20 lg:ml-0 h-64 bg-base-100 shadow-xl hover:shadow-2xl hover:shadow-red-200">
                            <figure><img src={'https://i.ibb.co/yykGCjj/star-product-2.png'} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes</h2>
                            <p>Lorem Ipsum Shoes</p>
                           
                        </div>
                        

                        
                 </div>

                    <div className="card w-64 ml-20 lg:ml-0 h-64 bg-base-100 shadow-xl hover:shadow-2xl hover:shadow-red-200">
                        <figure><img src={'https://i.ibb.co/p11DN2t/star-product-1.png'} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Outdor</h2>
                            <p>Night outdoor shoes</p>

                        </div>
                </div>
                    <div className="card w-64 ml-20 lg:ml-0 h-64 bg-base-100 shadow-xl hover:shadow-2xl hover:shadow-red-200">
                        <figure><img src={'https://i.ibb.co/pKw0b6V/star-product-3.png'} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Bags</h2>
                            <p>Gold women bags</p>

                        </div>

           </div>
                    <div className="card w-64 ml-20 lg:ml-0 h-64 bg-base-100 shadow-xl hover:shadow-2xl hover:shadow-red-200">
                        <figure><img className='w-40'
                        src={shoes} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Boots</h2>
                            <p>Autumn Season Footwear  </p>

                        </div>

                    </div>
                    <div className="card w-64 ml-20 lg:ml-0 h-64 bg-base-100 shadow-xl hover:shadow-2xl hover:shadow-red-200">
                        <figure><img className='w-32' 
                        src={oil} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Oil</h2>
                            <p>Face Oil </p>

                        </div>

                    </div>
                    <div className="card w-64 ml-20 lg:ml-0 h-64 bg-base-100 shadow-xl hover:shadow-2xl hover:shadow-red-200">
                        <figure><img className="mt-10 w-36" 
                        src={cap} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Hats</h2>
                            <p>Modern Women Hats </p>

                        </div>

                    </div>
        </div>
        </div>
        </div>
    );
};

export default Secndb;