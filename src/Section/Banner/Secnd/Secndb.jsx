

const Secndb = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold mt-8 mb-20 italic text-center ">STAR PICKS</h1>
            
           <div className="lg:flex">
                <div>
                    <img className="md:pl-52 lg:pl-0" src={'https://i.ibb.co/dQ4Bf36/star-img.jpg'} alt="" />
                </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
    
                  
                    <div className="card w-64 ml-20 lg:ml-0 h-64 bg-base-100 shadow-xl">
                            <figure><img src={'https://i.ibb.co/yykGCjj/star-product-2.png'} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes</h2>
                            <p>Lorem Ipsum Shoes</p>
                           
                        </div>
                        

                        
                 </div>

                    <div className="card w-64 ml-20 lg:ml-0 h-64 bg-base-100 shadow-xl">
                        <figure><img src={'https://i.ibb.co/p11DN2t/star-product-1.png'} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Outdor</h2>
                            <p>Night outdoor shoes</p>

                        </div>
                </div>
                    <div className="card w-64 ml-20 lg:ml-0 h-64 bg-base-100 shadow-xl">
                        <figure><img src={'https://i.ibb.co/pKw0b6V/star-product-3.png'} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Bags</h2>
                            <p>Gold women bags</p>

                        </div>

           </div>
                    <div className="card w-64 ml-20 lg:ml-0 h-64 bg-base-100 shadow-xl">
                        <figure><img src={'http://klambi.kenzap.com/wp-content/uploads/2016/12/star-product-4.png'} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Boots</h2>
                            <p>Autumn Season Footwear  </p>

                        </div>

                    </div>
                    <div className="card w-64 ml-20 lg:ml-0 h-64 bg-base-100 shadow-xl">
                        <figure><img src={'http://klambi.kenzap.com/wp-content/uploads/2016/12/star-product-5.png'} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Summer</h2>
                            <p>Summer beach Shoes</p>

                        </div>

                    </div>
                    <div className="card w-64 ml-20 lg:ml-0 h-64 bg-base-100 shadow-xl">
                        <figure><img className="mt-10" src={'http://klambi.kenzap.com/wp-content/uploads/2016/12/star-product-6.png'} alt="Shoes" /></figure>
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