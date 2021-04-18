import React, { useEffect, useState } from "react";
import ShowAllOrdersList from "../ShowAllOrdersList/ShowAllOrdersList";

const OrderList = () => {
  const [usersOrders, setUsersOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allUsersOrders")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setUsersOrders(data);
      });
  }, []);
  return (
    <div className="container">
      <div className="row text-center">
        <h3>Order List</h3>
      </div>
      <div className="row">
        <table className="table table-striped table-hover table-responsive-sm">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email ID</th>
              <th scope="col">Service</th>
              <th scope="col">Pay With</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          {usersOrders.map((userOrder) => (
            <ShowAllOrdersList
              key={userOrder._id}
              userOrder={userOrder}
            ></ShowAllOrdersList>
          ))}
        </table>
      </div>
    </div>
  );
};

export default OrderList;
