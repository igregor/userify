import { Box } from "@mui/material";
import UserTextField from "./UserTextField";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";



interface Props {
  setShowAdding: React.Dispatch<React.SetStateAction<boolean>>;
  setUsers: any;
}

const AddingSpace: React.FC<Props> = ({ setShowAdding, setUsers }) => {
  const [name, setName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [age, setAge] = useState<string>();
  const [picture, setPicture] = useState<string>();

  const dataInputs = {
    name: name,
    setName: setName,
    lastName: lastName,
    setLastName: setLastName,
    age: age,
    setAge: setAge,
    picture: picture,
    setPicture: setPicture,
  }
  const change = (): void => {
    setShowAdding(false);
    setUsers([name, lastName, age, picture]);
  };

  return (
    <Box ml={9.5} textAlign="left">
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Adding new user
      </Typography>
      <UserTextField
        id="user-name"
        label="name"
        onChangeHandler={setName}
      ></UserTextField>
      <br />
      <UserTextField
        id="user-name"
        label="last name"
        onChangeHandler={setLastName}
      ></UserTextField>
      <br />
      <UserTextField
        id="user-company"
        label="age"
        onChangeHandler={setAge}
      ></UserTextField>
      <br />
      <UserTextField
        id="user-project"
        label="picture"
        onChangeHandler={setPicture}
      ></UserTextField>
      <br />
      {name}
      <Button variant="contained" onClick={change}>
        Submit
      </Button>
    </Box>
  );
};

export default AddingSpace;
