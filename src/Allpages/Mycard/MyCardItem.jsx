import React from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BiSolidHandDown, BiSolidHandRight } from 'react-icons/bi';

const MyCardItem = ({ card, handleDelete }) => {
    const {photo,name,select,price,_id} = card;
    console.log(card);
    return (
        <>
            <article className="flex shadow-xl transition hover:shadow-xl hover:shadow-red-300">
                <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                    <time
                        
                        className="flex items-center justify-between gap-4 text-xs font-bold uppercase "
                    >
                        <span>{card?.select}</span>
                        <span className="w-px flex-1 bg-gray-900/10"></span>
                        <span>{card?.brand_name}</span>
                    </time>
                </div>

                <div className="hidden sm:block sm:basis-56">
                    <img
                        alt=""
                        src={card?.photo}
                        className="aspect-square h-full w-full object-cover"
                    />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                        <a href="#">
                            <h3 className="font-bold uppercase ">
                               {card?.name}
                            </h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed ">
                            {card?.description}
                        </p>
                    </div>

                    <div className="sm:flex sm:items-end sm:justify-end">
                        <a
                            href="#"
                            className="block bg-red-600 px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-red-400"
                        >
                            <button onClick={() => handleDelete(_id)}> Delete</button>
                          
                        </a>
                    </div>
                </div>
            </article> 
        </>
    );
};

export default MyCardItem;