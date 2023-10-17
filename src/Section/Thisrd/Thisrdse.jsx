import { AiOutlineCar, AiFillSafetyCertificate } from 'react-icons/ai';
import { Ri24HoursFill } from 'react-icons/ri';

const Thisrdse = () => {
    return (
        <div className="mt-20 flex justify-center ">

            <div className="bg-gray-100 p-12">
                <AiOutlineCar className='text-6xl'></AiOutlineCar> 
                <h2 className='text-2xl font-semibold'>FREE SHIPPING ON ORDER OVER $200</h2> 
                <h2>Typi non habent claritatem insitam; est usus  legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.</h2>              

            </div>
            <div className="bg-gray-100 p-12">
                <Ri24HoursFill className='text-6xl'></Ri24HoursFill> 
                <h2 className='text-2xl font-semibold'>24 HOURS LIVE CUSTOMER SUPPORT</h2> 
                <h2>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.</h2>
            </div>
            <div className="bg-gray-100 p-12">
                <AiFillSafetyCertificate className='text-6xl'></AiFillSafetyCertificate> 
                <h2 className='text-2xl font-semibold'>SHOPPING WITH SAFE 256-BIT ENCRIPTION</h2> 
                <h2>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.</h2>
            </div>
            
        </div>
    );
};

export default Thisrdse;