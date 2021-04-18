import React from "react";

const ShowAllOrdersList = (props) => {
  const {
    _id,
    name,
    email,
    payWith,
    date,
    service,
    currentStatus,
  } = props.userOrder;

  let value2, value3;
  if (currentStatus === "Pending") {
    value2 = "Ongoing";
    value3 = "Done";
  } else if (currentStatus === "Ongoing") {
    value2 = "Pending";
    value3 = "Done";
  } else if (currentStatus === "Done") {
    value2 = "Pending";
    value3 = "Ongoing";
  }

  const updateStatus = (e) => {
    const bookDetails = {
      status: e.target.value,
    };
    console.log(bookDetails);
    fetch(`http://localhost:5000/update/${_id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("updated this product");
        }
      });
  };
  return (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{service.serviceTitle}</td>
        <td>{payWith}</td>
        <td>
          <select
            name="orderStatus"
            id="cars"
            onChange={updateStatus}
            defaultValue="Hello"
          >
            <option value={currentStatus}>{currentStatus}</option>
            <option value={value2}>{value2}</option>
            <option value={value3}>{value3}</option>
          </select>
        </td>
      </tr>
    </tbody>
  );
};

export default ShowAllOrdersList;
