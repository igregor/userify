import { Box } from "@mui/material";
import UserTextField from "./UserTextField";
import { Typography } from "@mui/material";
import {Button} from "@mui/material";


interface Props {
  setShowAdding: React.Dispatch<React.SetStateAction<boolean>>
}

const AddingSpace: React.FC<Props> = ({setShowAdding})=> {
  const change = (): void => {
    setShowAdding(false);
  }
  return (
    
    <Box ml={9.5} textAlign="left">
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      Adding new user
    </Typography>
        <UserTextField
          id="user-name"
          label="name"
          onChangeHandler={}
         
        ></UserTextField>
        <br/>
        <UserTextField
          id="user-name"
          label="last name"
          onChangeHandler={}
          
        ></UserTextField>
         <br/>
        <UserTextField
          id="user-company"
          label="age"
          onChangeHandler={}
          
        ></UserTextField>
         <br/>
        <UserTextField
          id="user-project"
          label="picture"
          onChangeHandler={}
          
        ></UserTextField>
        <br/>
    <Button variant="contained" onClick={change}>Submit</Button>

    </Box>
  
  );
}

export default AddingSpace;
