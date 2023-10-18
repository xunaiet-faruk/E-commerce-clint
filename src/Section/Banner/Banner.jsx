

const Banner = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="relative">
                <img className="w-full" src={'https://i.ibb.co/b15627g/slider-1.jpg'} alt="" />
            </div>
            <div className="absolute lg:-mt-80  md:-mt-60 -mt-44 ml-[230px] lg:ml-[610px] md:ml-[500px]">
                <h1 className="lg:text-8xl md:text-4xl text-1xl italic font-semibold">FEELING  </h1>
                <span className="lg:text-6xl text-1xl md:text-3xl italic font-bold">BLACK</span>
                <p className="">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie<br/> consequat.</p>
             
            </div>
        </div>
    );
};

export default Banner;