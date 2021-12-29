import React from "react";
import { TextField } from "@mui/material";

function SearchByName({ handleNameSearchInput }) {
  return (
    <TextField
      id="standard-basic"
      variant="standard"
      onChange={handleNameSearchInput}
      type="search"
      className="searchInput"
      placeholder="Search by name"
    />
  );
}
export default SearchByName;
