import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCheckbox } from "../../store/profile/actions";

export const Profile = () => {
  const dispatch = useDispatch(); // хук возвращает функцию диспатч
  const state = useSelector((state) => state);
  const handleClick = () => {
    dispatch(toggleCheckbox);
  };
  return (
    <>
      <h3>Profile Page</h3>
      {state.showName && <span>{state.name}</span>}
      <FormGroup>
        <FormControlLabel
          control={<Checkbox onClick={handleClick} />}
          label="Hide name"
        />
      </FormGroup>
    </>
  );
};
