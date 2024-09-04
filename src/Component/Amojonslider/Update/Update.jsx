import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const updateProduct = useLoaderData()
    console.log(updateProduct)

    const handlesubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const brand_name = e.target.brand_name.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const photo = e.target.photo.value;
        const description = e.target.description.value;
        const select = e.target.select.value;
        const products = { name, price, rating, photo, description, select }

        fetch(`https://ecomerce-side-backend.vercel.app/products/${updateProduct._id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(products)


        })
            .then(res => res.json())
            .then(data => {

                if (data) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })



    }



    return (
        <div className="p-10 mx-6 mb-12 rounded-xl shadow-xl border-t-2 border-b-2 border-red-600 ">
            <form onSubmit={handlesubmit}>
                <div className="flex gap-6">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">NAME</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="name" name="name" defaultValue={updateProduct.name} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="brand name" defaultValue={updateProduct.brand_name} name="brand_name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex gap-6">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Price" defaultValue={updateProduct.price} name="price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Rating" defaultValue={updateProduct.rating} name="rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <label className="input-group">

                        <input type="text" placeholder="Photo url" defaultValue={updateProduct.photo} name="photo" className="input input-bordered w-full" />
                    </label>
                </div>
                <select name="select" defaultValue={updateProduct.select} className="select w-full mb-4 mt-5 border rounded-md">
                    <option disabled selected>Pick your own category</option>
                    <option>Cloths</option>
                    <option>Screen care</option>
                    <option>hair product</option>
                    <option>Shoes</option>
                    <option>Bags</option>
                </select>
                <div className="mt-5">
                    <textarea name="description" defaultValue={updateProduct.description} id="" cols="30" placeholder="Description" rows="6" className="w-full border-2"></textarea>
                </div>
                <div className="mt-5">
                    <input type="submit" value="Submit Button" className="btn btn-block hover:btn-secondary" />
                </div>


            </form>
        </div>
    );
};

export default Update;