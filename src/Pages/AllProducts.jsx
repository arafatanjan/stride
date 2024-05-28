import { useEffect, useState } from "react";
import SingleProductCardDashboard from "../Components/dashboard/SingleProductCardDashboard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/balls/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">All Produts</h1>
      <div className="my-16 flex flex-wrap gap-4">
        {products.map((ball) => (
          <SingleProductCardDashboard
            key={ball.id}
            ball={ball}
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;