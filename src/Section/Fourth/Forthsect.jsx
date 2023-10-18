

const Forthsect = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold italic text-center mt-24 mb-28">Top Categories on This Week</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ml-16 md:ml-5 p-8  justify-between gap-5 mb-10">
                <div>
                    <img className="rounded-full w-[250px]" src={'https://i.ibb.co/9gd7sFp/dsd2.jpg'} alt="" />
                    <h1 className="text-3xl mt-5 font-semibold ml-10">Mans ware</h1>
                    <p className="font-bold ml-16"> 10 product</p>
                </div>
                <div>
                    <img className="rounded-full" src={'https://i.ibb.co/QN0zVCG/4-2-245x245.jpg'} alt="" />
                    <h1 className="text-3xl mt-5 font-semibold ml-20">Bags</h1>
                    <p className="font-bold ml-20"> 9 product</p>
                </div>
                <div>
                    <img className="rounded-full" src={'https://i.ibb.co/3mwVCKT/5-2-245x245.jpg'} alt="" />
                    <h1 className="text-3xl mt-5 font-semibold ml-16">Women</h1>
                    <p className="font-bold ml-20"> 8 product</p>
                </div>
                <div>
                    <img className="rounded-full" src={'https://i.ibb.co/ZHGLVhc/1-4-245x245.jpg'} alt="" />
                    <h1 className="text-3xl mt-5 font-semibold ml-24">Jeans</h1>
                    <p className="font-bold ml-24"> 7 product</p>
                </div>

         </div>
        </div>
    );
};

export default Forthsect;