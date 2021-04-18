import React, { useEffect, useState } from "react";
import ReferenceInfo from "../ReferenceInfo/ReferenceInfo";

const References = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://damp-fjord-88036.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div className="container" style={{ marginTop: "8%" }}>
      <h1 className="text-center" style={{ color: "rgb(180,1,1)" }}>
        References
      </h1>
      <div className="row mt-4">
        {reviews.map((review) => (
          <ReferenceInfo key={review._id} review={review}></ReferenceInfo>
        ))}
      </div>
    </div>
  );
};

export default References;
