import Box from "@mui/material/Box";


const ItemUser: React.FC  = () => {
  
  const getUser = (name: string, lastName: string, age: string): object => {
    return{
     name, lastName, age
    }
    
  };

  return (
    <Box sx={{ bgcolor: "gainsboro", width: 220, height: 150 }}>
      
      
    </Box>
  );
};
export default ItemUser;
