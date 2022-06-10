import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import ItemUser from "./ItemUser";

interface Props {
  setShowAdding: React.Dispatch<React.SetStateAction<boolean>>;
  showAdding: boolean;
}
const UserList: React.FC<Props> = ({ setShowAdding, showAdding }) => {
  const change = (): void => {
    setShowAdding(true);
  };
  return (
    <Box ml={9.5} textAlign="left">
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        User list
      </Typography>
      {!showAdding && <ItemUser />}

      <Button variant="contained" onClick={change}>
        Add user (+)
      </Button>
    </Box>
  );
};
export default UserList;
