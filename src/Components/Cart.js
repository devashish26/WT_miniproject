import React from "react";
import { useData } from "../Utils/DataContext";
import StripeCheckout from "react-stripe-checkout";

export default function Cart() {
  const { data, removeFromCart, clearCart, addToOrders } = useData();

  const onRemove = (id) => () => {
    removeFromCart(id);
  };

  const onPaymentCompletion = ()=>{
    addToOrders();
    alert("Order Completed");
  }
  const publishableKey =
    "pk_test_51JdeY8SIty0bliO7n0EUmMgT3QFpuBUC40HFrd1kFZWOA5UNM7GuX5hQms97Y0W6iDUJJFnp1iy2j00u2HlR2sjz00uNrHkStz";

  return (
    <div className="container cart">
      {data.cart && data.cart.total ? (
        <>
          <h1 className="text-center"> Your Cart</h1>
          <table border-collapse="collapse">
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Cost</th>
              <th> Actions </th>
            </tr>
            {Object.keys(data["cart"]["items"]).map((id) => (
              <tr key={id}>
                <td>
                  {" "}
                  {data["cart"]["items"][id].name} (
                  {data["cart"]["items"][id].type}){" "}
                </td>
                <td> {data["cart"]["items"][id].quantity} </td>
                <td> {data["cart"]["items"][id].price} </td>
                <td> {data["cart"]["items"][id].cost} </td>
                <td>
                  {" "}
                  <button onClick={onRemove(id)}>Remove</button>{" "}
                </td>
              </tr>
            ))}

            <tr>
              <th> Total </th>
              <th> {data["cart"].quantity} </th>
              <th> - </th>
              <th> {data["cart"].total} </th>
              <th>
                {" "}
                <button onClick={clearCart}>Clear Cart</button>
              </th>
            </tr>
          </table>

          <StripeCheckout
            name="Shoppyy!"
            stripeKey={publishableKey}
            token={onPaymentCompletion}
            shippingAddress={true}
            amount={data["cart"].total * 100}
            panelLabel="Pay Now"
            currency="INR"
            ComponentClass="div"
          >
            <button>Pay Now</button>
          </StripeCheckout>
        </>
      ) : (
        <h1>Cart is empty</h1>
      )}
    </div>
  );
}