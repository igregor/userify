import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

interface Props {
  setShowAdding: React.Dispatch<React.SetStateAction<boolean>>
}
const UserList: React.FC<Props> = ({setShowAdding}) => {
  const change = ():void => {
setShowAdding(true);
  }
  return (
    
    <Box ml={9.5} textAlign="left">
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      User list
    </Typography>
    <Box>This is user list</Box>
    <Button variant="contained" onClick={change}>Add user (+)</Button>
    
    </Box>
  );
}
export default UserList;