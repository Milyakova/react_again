import { useEffect, useRef, useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

import "./form.styles.css";

export const Form = ({ onSubmit, buttonName = "submit" }) => {
  const [value, setValue] = useState("");

  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    console.log("did mount", inputRef);
    inputRef.current?.focus();

    return () => {
      console.log("will unmount");
    };
  }, []);

  return (
    <form onSubmit={handleSubmit} className="d-inline-flex">
      {/* <input value={value} onChange={handleChange} type="text" ref={inputRef} /> */}
      {/* <input type="submit" /> */}
      <TextField
        className="textfield"
        value={value}
        onChange={handleChange}
        inputRef={inputRef}
      />
      <Button className="btn" type="submit" variant="contained">
        {buttonName}
      </Button>
    </form>
  );
};
