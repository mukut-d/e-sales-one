import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

const Ratings = () => {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);

    // other logic
  };
  // Optinal callback functions
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);

  return (
    <div className="App">
      <Rating
        className=""
        SVGstyle={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "red",
        }}
        emptyClassName="flex "
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        /* Available Props */
      />
    </div>
  );
};

export default Ratings;
