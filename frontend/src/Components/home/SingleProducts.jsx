import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProduct = ({ ball }) => {
  const { id, title, brand, price, description, image_url } = ball;

  return (
    <div className="w-72 mx-auto bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <div className="relative ">
        <img src={image_url} alt="balls" className="object-cover w-full h-60" />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
      </div>
      <div className="py-4 px-6 ">
      <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
       <h3 className="text-lg text-gray-700">{brand}</h3>
        <h3 className="text-lg font-semibold mt-2">{price}</h3>
        <p className="text-sm text-gray-700 mt-2">
         {description.split(' ').slice(0, 10).join(' ')}{description.split(' ').length > 10 ? '...' : ''}
          </p>
       <div className="flex items-center justify-center">
         <button className="btn btn-primary mt-3 text-sm px-1 py-0">
          <Link to={`/products/${id}`}>See details</Link>
          </button>
         </div>      
      </div>
    </div>
  );
};

export default SingleProduct;
