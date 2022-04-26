import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { setName, toggleCheckbox } from "../../store/profile/actions";
import { selectName, selectShowName } from "../../store/profile/selectors";
import { usePrev } from "../../utils/usePrev";
import { Form } from "../Form/Form";

export const Profile = ({ onLogout }) => {
  const dispatch = useDispatch(); // хук возвращает функцию диспатч

  const name = useSelector(selectName);
  const showName = useSelector(selectShowName);
  const prevName = usePrev(name);

  const handleClick = () => {
    dispatch(toggleCheckbox);
  };
  const handleSubmit = (text) => {
    dispatch(setName(text));
  };
  return (
    <div className="container">
      <h3>Profile Page</h3>
      <button className="btn btn-primary" onClick={onLogout}>
        Logout
      </button>
      {showName && <span>{name}</span>}
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
