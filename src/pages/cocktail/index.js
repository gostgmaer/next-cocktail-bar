import CocktailCard from "@/components/cocktailcard";
import Header from "@/components/header/Header";
import Loader from "@/components/loader";
import { useGlobalContext } from "@/context/globalContext";
import { invokeAPI, invokeExternalAPI } from "@/utilities/http";
import useSWR from "swr";
import {
  Box,
  Button,
  Grid,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Cocktail = ({ cocktails, loading, user }) => {
  const [cocktailData, setCocktailData] = useState(cocktails);
  const [search, setSearch] = useState(null);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: "start",
    color: theme.palette.text.secondary,
  }));
  // const fetcher = url => axios.get(url).then(res => res.data)
  const handleChange = async (event) => {
    const { data, error } = await invokeExternalAPI(
      "search.php",
      "get",
      {},
      {},
      { s: event.target.value }
    );
    if (data) {
      setCocktailData(data);
    }
    console.log(error);

    console.log(data);
  };
  // const { data, error,isLoading } = useSWR('https://www.thecocktaildb.com/api/json/v1/1/search.php?', fetcher)
  // console.log(data);
  useEffect(() => {}, [search]);

  const SearchForm = () => {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          gap={"15.25px"}
          p="20px"
          width="100%"
          justifyContent={"space-between"}
          m="0"
          columns={12.5}
        >
          <Box
            display={"flex"}
            justifyContent="space-between"
            p="10px 0"
            gap={"15.25px"}
            width="100%"
          >
            {" "}
            <Typography gutterBottom variant="h5" component="div">
              Search Your Favorite Cocktail
            </Typography>
            <TextField
              onChange={handleChange}
              label="Search Cocktails"
              id="outlined-size-small"
              size="small"
            />
          </Box>
        </Grid>
      </Box>
    );
  };

  return (
    <div>
      <Header></Header>

      <SearchForm></SearchForm>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          gap={"15.25px"}
          p="20px"
          width="100%"
          m="0"
          columns={12.5}
        >
          {cocktailData.drinks.slice(0, 20).map((drink) => (
            <Grid key={drink.idDrink} xs={3}>
              <Item>
                <CocktailCard item={drink} />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Cocktail;

export async function getServerSideProps(ctx) {
  let loading = true;

  const { data, error } = await invokeExternalAPI(
    "search.php",
    "get",
    {},
    {},
    { s: "s" }
  );

  return {
    props: {
      cocktails: data,
      error: error,
    },
  };
}
