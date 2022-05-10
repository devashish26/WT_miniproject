import React from "react";
import { useData } from "../Utils/DataContext";

export default function Profile() {
  const { data } = useData();
  return (
    <div className="container cart">
      {data && data.user && data.orders ? (
        <>
          <h1> {data.user.userName}'s Order History </h1>
          
          {Object.keys(data.orders).map((key) => (
            <div>
              
            <hr />
              <strong>{key}</strong>
            <hr />
              <table key={key} border-collapse="collapse">
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Cost</th>
                </tr>
                {Object.keys(data.orders[key].items).map((id) => (
                  <tr key={id}>
                    <td>
                      {data.orders[key].items[id].name} (
                      {data.orders[key].items[id].type}){" "}
                    </td>
                    <td> {data.orders[key].items[id].quantity} </td>
                    <td> {data.orders[key].items[id].price} </td>
                    <td> {data.orders[key].items[id].cost} </td>
                  </tr>
                ))}

                <tr>
                  <th> Total </th>
                  <th> {data.orders[key].quantity} </th>
                  <th> - </th>
                  <th> {data.orders[key].total} </th>
                </tr>
              </table>
              
            </div>
          ))}
        </>
      ) : (
        <h1> Loading</h1>
      )}
    </div>
  );
}
