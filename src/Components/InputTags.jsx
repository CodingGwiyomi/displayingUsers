import React, { useState } from "react";
import { TextField } from "@mui/material";
import "../App.css";

const InputTags = ({ chosenTags, userId }) => {
  const [tags, setTags] = useState([]);

  const addTags = (event) => {
    if (
      event.key === "Enter" &&
      event.target.value !== "" &&
      !tags.includes(event.target.value)
    ) {
      setTags([...tags, event.target.value]);
      chosenTags([...tags, event.target.value, userId]);
      event.target.value = "";
    }
  };

  return (
    <div className="tags-input">
      <div className="tag-container">
        {tags.map((tag, index) => (
          <ul key={index}>
            <span className="tag">{tag}</span>
          </ul>
        ))}
      </div>
      <TextField
        id="tag-filter"
        variant="standard"
        type="text"
        onKeyUp={(event) => addTags(event)}
        placeholder="Add a tag"
      />
    </div>
  );
};
export default InputTags;
