import React from "react";
import { useData } from "../Utils/DataContext";
import { useAuth } from "../Utils/AuthContext";
import { useParams } from "react-router";

export default function Product() {
  const { id } = useParams();
  const { user } = useAuth();
  const { addToCart, products, data, addToWishlist } = useData();

  const onAddToCart = (type) => () => {
    if (user) {
      addToCart(id, type);
      console.log(data);
    } else alert("Please login to proceed any further.");
  };

  const onAddToWishlist = ()=>{
    addToWishlist(id);
  }
  return (
    <div className="container product-wrapper">
      {products && products[id] ? (
        <>
          <div className="row">
            <div className="col">
              <img src={products[id].img} alt={products[id].name} />
            </div>

            <div className="col">
              <h1> {products[id].name} </h1>
              <p>
                <strong> Type : </strong> {products[id].type}
              </p>

              <p>
                <strong> Size : </strong> {products[id].size}
              </p>
              <div className="row">
                <div className="col">
                  charges along with ₹{products[id].buyPrice} <br />
                  <button className="standalone" onClick={onAddToCart(0)}>
                    Buy Now
                  </button>
                </div>
                <div className="col">
                charges along with ₹{products[id].rentPrice}<br />
                  <button className="standalone" onClick={onAddToCart(1)}>
                    Rent per day
                  </button>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </>
      ) : (
        <>
          <h1>Loading</h1>
        </>
      )}
    </div>
  );
}
