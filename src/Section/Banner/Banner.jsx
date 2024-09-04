import { useState, useEffect } from 'react';
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';
import { FaFireAlt } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";

const Banner = () => {
    const slides = [
        {
            image: "https://footflare.dexignzone.com/xhtml/images/banner/pic2.png",
            text: (
                <>
                    <h1 className='text-6xl font-bold '>Men Shoes Step Up Your Style</h1>
                    <p className='text-xl'>Premium Comfort StefanSlippers.2024 Reebok The Best Classical <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,<br /> doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, exercitationem.</p>
                </>
            )
        },
        {
            image: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-38.png",
            img2: 'https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-39.png',
            text: (
                <>
                    <h1 className='text-6xl font-bold'>Roco Wireless Headphone & Smart Digital Watch</h1>

                    <p className='text-xl'>
                        Discover the perfect blend of style and functionality with Roco Wireless Headphones and Smart Digital Watch. Enjoy superior sound quality and smart features for a seamless daily life.
                    </p>
                </>
            )
        },
        {
            image: "https://i.ibb.co/WvhQszS/image-removebg-preview-2024-09-03-T115124-321.png",
            text: (
                <>
                    <h1 className='text-6xl font-bold'>Elevate Your Style Latest</h1>

                    <p className='text-xl'>
                        Discover the ultimate blend of sophistication and practicality with our smart leather bag. Crafted for the modern man, it offers sleek design and ample functionality to keep you organized and stylish. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </>
            )
        },
        {
            image: "https://i.ibb.co/jVfxxXD/image-removebg-preview-2024-09-04-T161913-550.png",
            text: (
                <>
                    <h1 className='text-6xl font-bold'>Unleash Your Radiance</h1>

                    <p className='text-xl'>
                        Discover the perfect shade to enhance your natural beauty. Our premium makeup products are designed to give you a flawless finish, whether for a daily look or a special occasion.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, nihil.
                    </p>
                </>
            )
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 2000); 
        return () => clearInterval(interval);
    }, [handleNext]);

    return (
        <div className="relative overflow-hidden max-w-screen-xl mx-auto">
            {/* Slide Container */}
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="flex justify-evenly  w-full flex-shrink-0 ">
                        {/* Text Content */}
                        <div className="w-1/2 px-4 space-y-7 mt-20">
                            <div className='flex  items-center gap-2'>
                                <FaFireAlt className='text-red-600 text-xl' />

                                <h1 className='text-red-600'> Hot Deal In This Week</h1>
                            </div>
                            {slide.text}
                            <div className='flex gap-12 items-center'>

                                <div className='flex items-center gap-1 bg-gray-200 w-36 py-3 rounded-xl justify-center cursor-pointer hover:bg-gray-300 hover:text-red-600'>
                                    <MdTravelExplore className='text-xl' />
                                    <h1 className=''>Explore</h1>

                                </div>

                                <div className='flex justify-center items-center gap-12'>


                                    <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                        <div className="avatar">
                                            <div className="w-12">
                                                <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/others/author1.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-12">
                                                <img src=
                                                    "https://new.axilthemes.com/demo/template/etrade/assets/images/others/author4.png" />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-12">
                                                <img src=
                                                    "https://new.axilthemes.com/demo/template/etrade/assets/images/others/author2.png" alt="" />                                        </div>
                                        </div>
                                        <div className="avatar placeholder">
                                            <div className="bg-neutral text-neutral-content w-12">
                                                <span>+99</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rating flex flex-col">
                                        <div>
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input
                                                type="radio"
                                                name="rating-2"
                                                className="mask mask-star-2 bg-orange-400"
                                            />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                        <div>
                                            <h1 className='font-semibold text-red-600'>100 + Reviews</h1>
                                        </div>

                                    </div>


                                </div>

                            </div>

                        </div>

                        {/* Image Content */}
                        <div className="w-1/2 px-4">
                            <img className='w-32' src={slide.img2} alt="" />
                            <img className='w-[600px] animate-pulse' src={slide.image} alt={`Slide ${index + 1}`} />
                        </div>

                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-[500px] left-0 transform -translate-y-1/2 flex justify-end w-full px-4 z-10">
                {/* Previous Button */}
                <CiCircleChevLeft
                    onClick={handlePrevious}
                    className="cursor-pointer text-5xl font-semibold hover:bg-black rounded-full hover:text-white"
                />
                {/* Next Button */}
                <CiCircleChevRight
                    onClick={handleNext}
                    className="cursor-pointer text-5xl font-semibold hover:bg-black rounded-full hover:text-white"
                />
            </div>
        </div>
    );
};

export default Banner;
