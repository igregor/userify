import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function UserList() {
  return (
    <Box ml={9.5} textAlign="left">
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      User list
    </Typography>
    <Box>This is user list</Box>
    <Button variant="contained">Add user (+)</Button>
    
    </Box>
  );
}
