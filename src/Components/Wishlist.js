import React from "react";
import { useData } from "../Utils/DataContext";

export default function Wishlist() {
  const { data, clearWishlist} = useData();

  const onRemove = (id) => () => {
    alert("Table Booked");
    console.log('done!')
  };
  

  return (
    <div className="container cart">
      {data.wishlist && data.wishlist.total ? (
        <>
          <h1 className="text-center"> Your items</h1>
          <table border-collapse="collapse">
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Cost</th>
              <th> Actions </th>
            </tr>
            {Object.keys(data["wishlist"]["items"]).map((id) => (
              <tr key={id}>
                <td>
                  {" "}
                  {data["wishlist"]["items"][id].name} (
                  {data["wishlist"]["items"][id].type}){" "}
                </td>
                <td> {data["wishlist"]["items"][id].quantity} </td>
                <td> {data["wishlist"]["items"][id].price} </td>
                <td> {data["wishlist"]["items"][id].cost} </td>
                <td>
                  {" "}
                  <button onClick={onRemove(id)}>Confirm</button>{" "}
                </td>
              </tr>
            ))}

            <tr>
              <th> Total </th>
              <th> {data["wishlist"].quantity} </th>
              <th> - </th>
              <th> {data["wishlist"].total} </th>
              <th>
                {" "}
                <button onClick={clearWishlist}>Done</button>
              </th>
            </tr>
          </table>
          <center>Book!</center>
        </>
      ) : (
        <h1>Enjoy!</h1>
      )}
    </div>
  );
}
