import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../Firebase/Context";
import { AiTwotoneDelete } from 'react-icons/ai';
import { BiSolidHandRight } from 'react-icons/bi';

const Mycard = () => {
  
    const {user} =useContext(Authcontext)
    const [productcard,setProductcard]=useState({})
    
useEffect(()=>{

    fetch(`http://localhost:5010/mycard`)
    .then(res => res.json())
    .then(data => {
       
        const myCard = data.filter(items => items.userId == user.uid)
        fetch(`http://localhost:5010/amazonall`)
        .then(res => res.json())
        .then(products => {
           
            for (let item of myCard){

                const filter = products.find(product => product._id == item.productId)
                setProductcard(filter)

            }
        })
    })

},[])

console.log(productcard)

    return (
        <div className="flex justify-between max-w-screen-xl mx-auto p-5">
            <div className="bg-gray-100 shadow-xl flex justify-between rounded-xl mb-10 w-[600px]">
               <div className="">
                    <img className="w-full h-[200px]" src={productcard.photo} alt="" />
               </div>
               <div className="ml-2 mt-5 text-xl">
                <h2 className="font-semibold">{productcard.name}</h2>
                    <h2 className="font-semibold">{productcard.select}</h2>
                    <h2 className="font-semibold">{productcard.price}</h2>
                   
               </div>
              
                <BiSolidHandRight className="mt-10 text-3xl "></BiSolidHandRight>   <AiTwotoneDelete className="text-3xl mt-10 mr-2 text-red-400"></AiTwotoneDelete>
                
            </div>
           
        </div>
    );
};

export default Mycard;