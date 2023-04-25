import * as React from "react";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import { useSelector } from "react-redux";
import "./Filter.css";

function Filter({ value, handleChange }) {
  const { darkMode } = useSelector((state) => state.darkModeReducer);
  return (
    <div className={darkMode ? "inputElemDarkMode" : "inputElem"}>
      <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel
          id={
            darkMode
              ? "demo-simple-select-helper-label-darkMode"
              : "demo-simple-select-helper-label"
          }
        >
          Filter by Region
        </InputLabel>
        <Select
          labelId={
            darkMode
              ? "demo-simple-select-helper-label-darkMode"
              : "demo-simple-select-helper-label"
          }
          id={
            darkMode
              ? "demo-simple-select-helper-label-darkMode"
              : "demo-simple-select-helper-label"
          }
          value={value}
          label="region"
          onChange={handleChange}
          variant="standard"
          disableUnderline
        >
          <MenuItem value={"Africa"}>Africa</MenuItem>
          <MenuItem value={"America"}>America</MenuItem>
          <MenuItem value={"Asia"}>Asia</MenuItem>
          <MenuItem value={"Europe"}>Europe</MenuItem>
          <MenuItem value={"Oceania"}>Oceania</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Filter;

// const Filter = ({ value, handleChange }) => (
//   <Box className={"adeT"}>
//     <FormControl fullWidth>
//       <InputLabel id="demo-simple-select-label">Filter By Region</InputLabel>
//       <Select
//         labelId="demo-simple-select-label"
//         id="demo-simple-select"
//         value={value}
//         label="Filter By Region"
//         onChange={handleChange}
//         variant="standard"
//         disableUnderline
//       >
//         <MenuItem value={"Africa"}>Africa</MenuItem>
//         <MenuItem value={"America"}>America</MenuItem>
//         <MenuItem value={"Asia"}>Asia</MenuItem>
//         <MenuItem value={"Europe"}>Europe</MenuItem>
//         <MenuItem value={"Oceania"}>Oceania</MenuItem>
//       </Select>
//     </FormControl>
//   </Box>
// );

// export default Filter;
