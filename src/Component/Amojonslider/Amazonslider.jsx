import { useCallback, useEffect, useState } from "react";

const Amazonslider = ({ data }) => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const [carouselImages, setCarouselImages] = useState([]);

    // Extract images from data and set them to carouselImages
    useEffect(() => {
        if (data) {
            const images = [data.img1, data.img2, data.img3, data.img4].filter(Boolean); // Extract images and filter out any undefined or null values
            setCarouselImages(images);
        }
    }, [data]);

    const prevSlider = () =>
        setCurrentSlider((currentSlider) =>
            currentSlider === 0 ? carouselImages.length - 1 : currentSlider - 1
        );

    const nextSlider = useCallback(() => {
        setCurrentSlider((currentSlider) =>
            currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1
        );
    }, [carouselImages.length]);

    // Automatically change slider every 3 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);
        return () => clearInterval(intervalId);
    }, [nextSlider]);

    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="h-60 w-full md:h-[470px] lg:h-[540px] relative overflow-hidden">
             
                {/* Dots */}
                <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
                    {carouselImages.map((img, idx) => (
                        <button
                            key={`${img}_${idx}`}
                            onClick={() => setCurrentSlider(idx)}
                            className={`rounded-full duration-500 bg-white ${currentSlider === idx ? "w-8" : "w-2"
                                } h-2`}
                        ></button>
                    ))}
                </div>
                {/* Carousel container */}
                <div
                    className="ease-linear duration-500 flex transform-gpu"
                    style={{ transform: `translateX(-${currentSlider * 100}%)` }}
                >
                    {/* Sliders */}
                    {carouselImages.map((slide, idx) => (
                        <img
                            key={slide}
                            src={slide}
                            className="min-w-full h-60 bg-black/20 sm:h-96 md:h-[540px] object-cover"
                            alt={`Slider - ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Amazonslider;
