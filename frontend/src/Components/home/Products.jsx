/* eslint-disable no-undef */
import SingleProduct from "./SingleProducts";

// eslint-disable-next-line react/prop-types
const Products = ({ data }) => {
  return (
    <div>
      <h1 className="my-8 text-2xl font-bold text-center">Our Products</h1>

      <div className="flex gap-2 px-6 justify-center items-center ">
        {
          // eslint-disable-next-line react/prop-types
          data.slice(0, 5).map((ball) => (
            <SingleProduct key={ball.id} ball={ball} />
          ))
        }
      </div>
    </div>
  );
};

export default Products;