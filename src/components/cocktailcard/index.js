import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

const CocktailCard = ({ item }) => {
  const route = useRouter();
  const sendtoDetails = (id) => {
    route.push(`/cocktail/${id}`);
  };

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.strDrinkThumb}
          alt={item.strDrink}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.strDrink}
          </Typography>
          <h6 color="text.secondary" style={{ margin: "5px 0 0 0" }}>
            {item.strGlass}
          </h6>
          <Typography variant="body2" color="text.secondary">
            {item.strInstructions.substring(0, 40)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => sendtoDetails(item.idDrink)}
          size="small"
          color="primary"
          variant="outlined"
        >
          Get Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default CocktailCard;
