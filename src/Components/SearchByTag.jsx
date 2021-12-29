import React from "react";
import { TextField } from "@mui/material";

function SearchByTag({ handleTagSearchInput }) {
  return (
    <TextField
      id="standard-basic"
      variant="standard"
      onChange={handleTagSearchInput}
      type="search"
      className="searchInput"
      placeholder="Search by tag"
    />
  );
}
export default SearchByTag;
