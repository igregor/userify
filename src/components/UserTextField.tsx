import * as React from "react";
import { TextField } from "@mui/material";

interface Props {
  id: string
  label: string

}
const UserTextField: React.FC<Props> = ({ id, label, /*setItem*/ }) => {
  // const onChangeHandler = (e) => setItem(e.target.value);
  return (
    <TextField
      id={id}
      label={label}
      variant="filled"
      size="small"
      // onChange={onChangeHandler}
      value=""
    />
  );
}

export default UserTextField;
