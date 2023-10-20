import React from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BiSolidHandDown, BiSolidHandRight } from 'react-icons/bi';

const MyCardItem = ({ card, handleDelete }) => {
    const {photo,name,select,price,_id} = card;
    return (
        <>
            <div  className="bg-gray-100 shadow-xl md:ml-40 lg:ml-0 ml-0 grid grid-cols-1  lg:grid-cols-2 md:grid-cols-1  justify-between rounded-xl mb-10 md:w-[400px] lg:w-[600px]">
                <div className="">
                    <img className="w-full md:h-[180px] lg:h-[200px]" src={photo} alt="" />
                </div>
                <div className="ml-2 mt-10 space-y-3 text-xl ">
                    <h2 className="font-semibold">{name}</h2>
                    <h2 className="font-semibold">{select}</h2>
                    <h2 className="font-semibold">{price}</h2>
                   <div className='flex justify-end mt-12'>
                        
                        <AiTwotoneDelete onClick={() => handleDelete(_id)} className="text-3xl   mr-2 text-red-400"></AiTwotoneDelete>
                   </div>
                </div>

    


            </div>  
        </>
    );
};

export default MyCardItem;