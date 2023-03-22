import CocktailCard from "@/components/cocktailcard";
import Header from "@/components/header/Header";
import Loader from "@/components/loader";
import { useGlobalContext } from "@/context/globalContext";
import { invokeExternalAPI } from "@/utilities/http";
import { Box, Grid, Paper, styled } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const Cocktail = ({ cocktails, loading, user }) => {
  //  const [loading, setLoading] = useState(true);
  // const { loading, setloading } = useGlobalContext();

  return (
    <div>
      <Header></Header>
      <h2>List of News</h2>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          gap={"15.25px"}
          p="10px"
          width="100%"
          m="0"
          columns={12.5}
        >
          {cocktails.drinks.slice(0,20).map((drink) => (
            <CocktailCard item={drink} key={drink.idDrink} />
          ))}
        </Grid>
      </Box>
      {/* <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <Item>xs=2</Item>
          </Grid>
        ))}
      </Grid>
    </Box> */}
      {/* <div>
        <ul>
          {cocktails.drinks.map((item, index) => (
            <li style={{ padding: "5px" }} key={item.idDrink}>
              <span>
                {item.idDrink} -{item.strDrink} -{" "}
                <Link href={`/cocktail/${item.idDrink}`}>{item.strDrink}</Link>
              </span>

              <hr />
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Cocktail;

export async function getServerSideProps(ctx) {
  // const {loading, setloading,}= useGlobalContext()
  let loading = true;

  const { data, error } = await invokeExternalAPI(
    "search.php",
    "get",
    {},
    {},
    { s: "s" }
  );
  // setTimeout(() => {

  // }, 1000);

  loading = false;

  return {
    props: {
      cocktails: data,
      error: error,
      loading: loading,
    },
  };
}
