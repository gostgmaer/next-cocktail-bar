//react-hooks/rules-of-hooks
import Header from "@/components/header/Header";
import getCocktail from "@/lib/helper";
import { mergeinOneArray } from "@/utilities/functions";
import { invokeAPI, invokeExternalAPI } from "@/utilities/http";
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
import React, { Fragment, useState } from "react";

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

const CockTailsDetails = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  const route = useRouter();
  //   console.log(route);
  // console.log(data);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let newarray;
  if (data) {
  const  output = Object.entries(data).map(([key, value]) => ({
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

   newarray = mergeinOneArray(filterArrayIngredient, filterArraymesure)
  }
  // const output = Object.entries(data).map(([key, value]) => ({
  //   key,
  //   value,
  // }));




  const backtoHomePage = (params) => {
    route.push("/");
  };

  if (route.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Header></Header>

      <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {data.strDrink.substring(0, 1)}
              </Avatar>
            }
            action={
              <IconButton onClick={backtoHomePage} aria-label="back">
                <ArrowBack />
              </IconButton>
            }
            title={data.strDrink}
            subheader={data.strGlass}
          />
          <CardMedia
            component="img"
            height="194"
            image={data.strDrinkThumb}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {data.strInstructions}
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
              {data.strTags && (
                <Typography paragraph>Tag: {data.strTags}</Typography>
              )}
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <span> is Alocholic: {data.Alcoholic ? "Yes" : "No"}</span>
                <span>Category: {data.strCategory}</span>
              </Typography>
              <Typography variant="h5">Ingredients:</Typography>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {newarray?.map(
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

export default CockTailsDetails;

export async function getStaticProps(context) {
  const { params } = context;
  const res = await invokeAPI("lookup.php?i=11007", "get", {}, {}, {});
  // console.log(res);
  // if (!res.idDrink) {
  //   return {
  //     notFound: true,
  //   };
  // }
  return {
    props: { data: res.drinks[0] },
  };
}

export async function getStaticPaths(ctx) {
  console.log("ctx", ctx);
  return {
    paths: [{ params: { cocktailId: "14195" } }],
    fallback: true,
  };
}
