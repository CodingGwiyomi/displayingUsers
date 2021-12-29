import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function ExpandButton({ index, gender, age, location, number }) {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <>
      <span>
        {clicked === index ? (
          <RemoveIcon onClick={() => toggle(index)} />
        ) : (
          <AddIcon onClick={() => toggle(index)} />
        )}
      </span>

      <div>
        {clicked === index && (
          <>
            <div>Gender: {gender}</div>
            <div>Age: {age}</div>
            <div>Location: {location.city + ", " + location.state}</div>
            <div>Number: {number}</div>
          </>
        )}
      </div>
    </>
  );
}
export default ExpandButton;
