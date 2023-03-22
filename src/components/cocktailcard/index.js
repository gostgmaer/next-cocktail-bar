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
  // const Item = styled(Paper)(({ theme }) => ({
  //     backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //     ...theme.typography.body2,
  //     padding: theme.spacing(1),
  //     textAlign: "center",
  //     color: theme.palette.text.secondary,
  //   }));

  const route = useRouter();
  const sendtoDetails = (id) => {
    route.push(`/cocktail/${id}`);
  };

  return (
    <Grid xs={3}>
      <Card sx={{ maxWidth: 345 }}>
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
          >
            Get Details
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CocktailCard;
