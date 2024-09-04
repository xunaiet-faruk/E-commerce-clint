import Swal from "sweetalert2";


const Addproduct = () => {

    const handlesubmit = e => {
        e.preventDefault();
        const form = e.target; // Reference to the form
        const name = form.name.value;
        const brand_name = form.brand_name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const description = form.description.value;
        const select = form.select.value;
        const users = { name, brand_name, price, rating, photo, description, select };
        console.log(users);

        fetch('https://ecomerce-side-backend.vercel.app/amazon', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully added!',
                        
                    });
                    console.log(data);

                    form.reset();
                }
            })
            .catch(error => {
                console.error("Error adding product:", error);
            });
    };



    return (
        <div className="flex flex-col justify-center items-center mb-12">
            <div className="p-10  rounded-xl shadow-xl  border-r-2 border-l-2 border-red-300 w-[800px] ">
                <form onSubmit={handlesubmit}>
                    <div className="">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">NAME</span>
                            </label>
                            <label className="input-group">

                                <input type="text" placeholder="name" name="name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" placeholder="brand name" name="brand_name" className="input input-bordered w-full"  required/>
                            </label>
                        </div>
                    </div>
                    <div className="">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">

                                <input type="text" placeholder="Price" name="price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">

                                <input type="text" placeholder="Rating" name="rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Photo url" name="photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <select name="select" className="select  mb-4 mt-5 border rounded-md w-full">
                        <option disabled selected>Pick your own category</option>
                        <option>Cloths</option>
                        <option>Screen care</option>
                        <option>hair product</option>
                        <option>Shoes</option>
                        <option>Bags</option>
                    </select>
                    <div className="mt-5">
                        <textarea name="description" id="" cols="30" placeholder="Description" rows="6" className="w-full border-2 p-3"></textarea>
                    </div>
                    <div className="mt-5 flex justify-end items-end">
                        <input type="submit" value="Add Products" className="rounded-xl border-b-2   border-red-600 font-semibold text-red-600 duration-300 hover:scale-105 hover:bg-red-600 hover:text-white cursor-pointer px-12 py-2" />
                    </div>


                </form>
            </div>
        </div>
    );
};

export default Addproduct;