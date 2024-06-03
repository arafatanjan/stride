
import { Link } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
//import { toast } from 'react-toastify';

const SingleProductCardDashboard = ({ ball, onDelete }) => {
  const { _id, title, brand, price, description, image_url } = ball;
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
//console.log(ball);
   const handleDelete = async () => {
    // setToastMessage("Deleted successfully.");
    // setShowToast(true);
    // setTimeout(() => setShowToast(false),1000); 
    try {
      
      const response = await fetch(`http://localhost:5000/balls/${_id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the product.");
      }

      const data = await response.json();
      //console.log(data);
      if (!window.confirm('Are you sure you want to delete this item?')) {
        return;
      }
      //window.confirm('Delete the item?')
      // setToastMessage("Deleted successfully.");
      // setShowToast(true);
      // setTimeout(() => setShowToast(false),3000);
      toast.success("deleted successfully")
      onDelete(_id);     
      //toast("Wow so easy!")
      
    } catch (error) {
      console.error("Error deleting product:", error);
      setToastMessage("Failed to delete.");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
  
    <div className="card w-96 bg-base-100 shadow-xl">
    {/* {showToast && (
        <div className="fixed top-5 right-5 toast toast-middle w-10 toast-center">
          <div className="alert alert-error">
            <span>{toastMessage}</span>
          </div>
        </div>
      )} */}
      <figure>
        <img src={image_url} alt="ball" className="object-cover w-96 h-100"/>
      </figure>
      <div className="card-body p-4 justify-center">
        <div className="justify-center">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">{brand}</h3>
        <h3 className="text-xl font-semibold">{price}</h3>
        <p>{description}</p>
        </div>
        <div className="card-actions justify-center space-x-1">
          <button className="btn bg-indigo-500 text-white flex items-center space-x-2">
            <Link to={`/products/${_id}`}>See details</Link>
          </button>
          <button className="btn bg-green-600 text-white">
            <Link to={`edit/${_id}`}>Edit</Link>
          </button>
          <button onClick={handleDelete} className="btn bg-red-500 text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
    
    
  );
};

export default SingleProductCardDashboard;