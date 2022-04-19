import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { setName, toggleCheckbox } from "../../store/profile/actions";
import { selectName, selectShowName } from "../../store/profile/selectors";
import { Form } from "../Form/Form";

export const Profile = () => {
  const dispatch = useDispatch(); // хук возвращает функцию диспатч
  const state = useSelector(selectName);
  const showName = useSelector(selectShowName);
  const handleClick = () => {
    dispatch(toggleCheckbox);
  };
  const handleSubmit = (text) => {
    dispatch(setName(text));
  };
  return (
    <div className="container">
      <h3>Profile Page</h3>
      {showName && <span>{state}</span>}
      <FormGroup>
        <FormControlLabel
          control={<Checkbox onClick={handleClick} />}
          label="Hide name"
        />
      </FormGroup>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};
// используем не хуки, а коннект (из классовых компонентов)
// export const ProfileToConnect = ({
//   name,
//   showName,
//   changeName,
//   changeCheckBox,
// }) => {
//   const handleClick = () => {
//     // dispatch(toggleCheckbox);
//     changeCheckBox();
//   };
//   const handleSubmit = (text) => {
//     // dispatch(setName(text));
//     changeName(text);
//   };
//   return (
//     <div className="container">
//       <h3>Profile Page</h3>
//       {/* {state.showName && <span>{state.name}</span>} */}
//       {showName && <span>{name}</span>}
//       <FormGroup>
//         <FormControlLabel
//           control={<Checkbox onClick={handleClick} />}
//           label="Hide name"
//         />
//       </FormGroup>
//       <Form onSubmit={handleSubmit} />
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   name: state.profile.name,
//   showName: state.profile.showName,
// });
// const mapDispatchToProps = {
//   changeName: setName,
//   changeCheckBox: () => toggleCheckbox,
// };
// export const Profile = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ProfileToConnect);
