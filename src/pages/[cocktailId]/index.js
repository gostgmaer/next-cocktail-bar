import Header from "@/components/header/Header";
import { mergeinOneArray } from "@/utilities/functions";
import { invokeExternalAPI } from "@/utilities/http";
import styled from "@emotion/styled";
import {
  ArrowBack,
  ConstructionOutlined,
  Expand,
  ExpandMoreOutlined,
  Favorite,
  MoreVert,
  Share,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  // transition: theme.transitions.create("transform", {
  //   duration: theme.transitions.duration.shortest,
  // }),
}));

const cockTailsDetails = ({ cocktail }) => {
  const [expanded, setExpanded] = React.useState(false);
  const route = useRouter();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const output = Object.entries(cocktail).map(([key, value]) => ({
    key,
    value,
  }));

  const filterArrayIngredient = output
    .filter((item) => item.key.match("strIngredient"))
    .map((item, index) => ({ Ingredient: item.value, id: index + 1 }))
    .filter((item) => item.Ingredient !== null);

  const filterArraymesure = output
    .filter((item) => item.key.match("strMeasure"))
    .map((item, index) => ({ value: item.value, id: index + 1 }))
    .filter((item) => item.value !== null);

  const backtoHomePage = (params) => {
    route.push("/cocktail");
  };

  // const newarray = mergeinOneArray(filterArrayIngredient, filterArraymesure)
  // console.log(newarray);

  return (
    <div>
      <Header></Header>

      <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {cocktail.strDrink.substring(0, 1)}
              </Avatar>
            }
            action={
              <IconButton onClick={backtoHomePage} aria-label="back">
                <ArrowBack />
              </IconButton>
            }
            title={cocktail.strDrink}
            subheader={cocktail.strGlass}
          />
          <CardMedia
            component="img"
            height="194"
            image={cocktail.strDrinkThumb}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {cocktail.strInstructions}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Favorite />
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreOutlined />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              {cocktail.strTags && (
                <Typography paragraph>Tag: {cocktail.strTags}</Typography>
              )}
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <span> is Alocholic: {cocktail.Alcoholic ? "Yes" : "No"}</span>
                <span>Category: {cocktail.strCategory}</span>
              </Typography>
              <Typography variant="h5">Ingredients:</Typography>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {mergeinOneArray(filterArrayIngredient, filterArraymesure).map(
                  (dataItem) => (
                    <Fragment key={dataItem.id}>
                      <ListItem alignItems="flex-start">
                        <ListItemText
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                          primary={`${dataItem.Ingredient} : `}
                          secondary={dataItem.value}
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </Fragment>
                  )
                )}
              </List>
            </CardContent>
          </Collapse>
        </Card>
      </Box>
    </div>
  );
};

export default cockTailsDetails;

export async function getServerSideProps(ctx) {
  const { params } = ctx;

  const { data, error } = await invokeExternalAPI(
    "lookup.php",
    "get",
    {},
    {},
    { i: params.cocktailId }
  );

  return {
    props: {
      cocktail: data.drinks[0],
      error: error,
    },
  };
}
