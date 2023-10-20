import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../Firebase/Context";
import { AiTwotoneDelete } from 'react-icons/ai';
import { BiSolidHandRight } from 'react-icons/bi';
import Swal from "sweetalert2";
import MyCardItem from "./MyCardItem";

const Mycard = () => {

    const { user } = useContext(Authcontext)
    const [productcard, setProductcard] = useState([])

    useEffect(() => {

        fetch(`https://ecomerce-side-backend.vercel.app/mycard`)
            .then(res => res.json())
            .then(data => {

                const myCard = data.filter(items => items.userId == user.uid)
                // console.log(myCard)
                fetch(`https://ecomerce-side-backend.vercel.app/amazonall`)
                    .then(res => res.json())
                    .then(products => {
                        const newArr = [];
                        for (let item of myCard) {

                            const filter = products.find(product => product._id == item.productId)
                            if (filter) {
                                newArr.push(filter)
                            }
                        }
                        setProductcard(newArr)
                    })
            })

    }, [])

    console.log(productcard)

    const handleDelete = async (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {

            if (result.isConfirmed) {
                fetch(`https://ecomerce-side-backend.vercel.app/delete-cart/${id}`, {
                    method: "DELETE",
                }).then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const filter = productcard.filter(item => item._id != id);
                            setProductcard(filter)
                        }

                    })

            }
        })



    }


    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 justify-between max-w-screen-xl mx-auto">
            {
                productcard?.map(item => <MyCardItem key={item._id} handleDelete={handleDelete} card={item} />)
            }

        </div>
    );
};

export default Mycard;