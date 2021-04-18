import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import UserOrderListShow from "../UserOrderListShow/UserOrderListShow";

const UserOrdersList = () => {
  const { logInUser } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = logInUser;
  const { email } = loggedIn;
  const [ordersCollection, setOrdersCollection] = useState([]);
  useEffect(() => {
    fetch("https://damp-fjord-88036.herokuapp.com/showUserOrderList?email=" + email, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        //setOrdersCollection(data);
        setOrdersCollection(data);
      });
  }, [email]);
  return (
    <div className="container">
      <div className="row text-center">
        <h3>Booking List</h3>
      </div>
      <div className="row">
        {ordersCollection.map((singleOrder) => (
          <UserOrderListShow
            key={singleOrder._id}
            singleOrder={singleOrder}
          ></UserOrderListShow>
        ))}
      </div>
    </div>
  );
};

export default UserOrdersList;
