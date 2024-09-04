import React, { useState } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const Singledetails = ({ items }) => {
    const { _id, name, photo, price, rating, brand_name, select, description } = items;

    // State to manage whether the full description is shown
    const [showFullDescription, setShowFullDescription] = useState(false);

    // Function to handle toggling the description view
    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    // Split the description into words
    const descriptionWords = description.split(" ");
    const shouldShowMore = descriptionWords.length > 5; 

    return (
        <div className="">
            <div className="w-full max-w-[370px] space-y-3 rounded-xl p-4 shadow-xl hover:shadow-red-300">
                <div className="relative flex h-48 w-full justify-center lg:h-[260px]">
                    <div className="absolute left-4 right-4 top-4 flex items-center justify-between"></div>
                    <img className="rounded-lg object-cover w-full h-full" src={photo} alt="card navigate ui" />
                </div>
                <div className="space-y-2 font-semibold">
                    <div className="flex justify-between items-center">
                        <h6 className="text-sm md:text-base lg:text-lg">{name}</h6>
                        <p className="font-semibold">
                            <Rating
                                emptySymbol={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4 text-[#DD2955]"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                        />
                                    </svg>
                                }
                                fullSymbol={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-4 h-4 text-red-600"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                }
                                initialRating={rating}
                                readonly
                            />
                        </p>
                    </div>
                    <p className="text-xs font-semibold text-gray-400 md:text-sm">
                        {showFullDescription ? description : `${descriptionWords.slice(0, 10).join(" ")}...`}
                        {shouldShowMore && (
                            <button
                                onClick={toggleDescription}
                                className="text-red-500 hover:underline ml-1"
                            >
                                {showFullDescription ? "See Less" : "See More"}
                            </button>
                        )}
                    </p>
                    <p>{price}</p>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-6 text-sm md:text-base">
                    <Link to={`/update/${_id}`}>
                        <button className="rounded-lg bg-gray-400 px-4 py-2 font-semibold text-white duration-300 hover:scale-95 hover:bg-gray-600">
                            Update
                        </button>
                    </Link>
                    <Link to={`/items/${_id}`}>
                        <button className="rounded-lg border border-red-600 px-4 py-1 font-semibold text-red-600 duration-300 hover:scale-105 hover:bg-red-600 hover:text-white">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Singledetails;
