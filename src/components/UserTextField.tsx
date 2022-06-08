import * as React from "react";
import { TextField } from "@mui/material";

interface Props {
  id: string
  label: string
  onChangeHandler: any

}
const UserTextField: React.FC<Props> = ({ id, label, onChangeHandler }) => {
  
  return (
    <TextField
      id={id}
      label={label}
      variant="filled"
      size="small"
      onChange={(e) => {
        onChangeHandler(e.target.value);
      }}
      value=""
    />
  );
}

export default UserTextField;
