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

const cockTailsDetails = ({ data }) => {
  const [expanded, setExpanded] = React.useState(false);
  const route = useRouter();
  console.log(route);
  const first = async (second) => {
    const newDaa = await invokeAPI(
      "search.php",
      "get",
      {},
      {},
      { i: route.query.cocktailId }
    );
    console.log(newDaa);
  };
  first()

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // const output = Object.entries(data).map(([key, value]) => ({
  //   key,
  //   value,
  // }));

  // const filterArrayIngredient = output
  //   .filter((item) => item.key.match("strIngredient"))
  //   .map((item, index) => ({ Ingredient: item.value, id: index + 1 }))
  //   .filter((item) => item.Ingredient !== null);

  // const filterArraymesure = output
  //   .filter((item) => item.key.match("strMeasure"))
  //   .map((item, index) => ({ value: item.value, id: index + 1 }))
  //   .filter((item) => item.value !== null);

  const backtoHomePage = (params) => {
    route.push("/");
  };

  // const newarray = mergeinOneArray(filterArrayIngredient, filterArraymesure)
  // console.log(newarray);

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
              {/* <List
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
              </List> */}
            </CardContent>
          </Collapse>
        </Card>
      </Box>
    </div>
  );
};

export default cockTailsDetails;

export async function getStaticProps(context) {
  const { params } = context;
  const res = await getCocktail(params.cocktailId);
  console.log(context);
  if (!res.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data: res },
  };
}
export async function getStaticPaths() {
  return {
    // paths,{}
    paths: [{ params: { cocktailId: "14195" } }],
    fallback: true,
  };
}
