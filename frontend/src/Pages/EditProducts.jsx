import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const EditProducts = () => {
  const ball = useLoaderData();
//console.log(ball);
  const [title, setTitle] = useState(ball.title);
  const [price, setPrice] = useState(ball.price);
  const [brand, setBrand] = useState(ball.brand);
  const [id, setId] = useState(ball.id);
  const [description, setDescription] = useState(ball.description);
  const [image_url, setImageURL] = useState(ball.image_url);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    //const id = form.id.value;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const data = {  title, brand, price, description, image_url };
    if (!window.confirm('Are you sure you want to edit this item?')) {
      return;
    }
    await fetch(`http://localhost:5000/balls/${ball._id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => setShowToast(true));   
      setTimeout(() => setShowToast(false), 3000); 
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Edit Product</h1>
      {showToast && (
        <div className="toast toast-center toast-middle">
        <div className="alert alert-success">
          <span>Edit successfully.</span>
        </div>
      </div>
      )}
      <div className="my-16">
        <form onSubmit={handleSubmit}>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="brand"
              placeholder="Brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="number"
              name="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="image_url"
              placeholder="Image URL"
              value={image_url}
              onChange={(e) => setImageURL(e.target.value)}
            />
          </div>
          {/* <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="id"
              placeholder="ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div> */}
          <div className="mt-2 flex justify-center items-center">
            <input
              className="btn mt-4 w-full bg-red-500 text-white p-4"
              type="submit"
              value="Edit product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProducts;