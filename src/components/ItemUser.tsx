import Box from "@mui/material/Box";

interface Props {
  userPropertiesList: any;
}
const ItemUser: React.FC<Props> = ({ userPropertiesList }) => {
  return (
    <Box sx={{ bgcolor: "gainsboro", width: 220, height: 150 }}>
      {userPropertiesList}
    </Box>
  );
};
export default ItemUser;
