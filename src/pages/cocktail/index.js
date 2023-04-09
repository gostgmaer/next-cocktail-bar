

import SearchForm from "@/components/childs/Searchform";
import CocktailCard from "@/components/cocktailcard";
import Layout from "@/layout";
import { fetcher, useGetFetcher } from "@/lib/helper";
import { invokeExternalAPI } from "@/utilities/http";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const index = ({ cocktails }) => {
  
 
  return (
    <Layout>
      <Box width={"100%"}>
        <Stack
          justifyContent={"space-between"}
          overflow="hidden"
          width={"100%"}
        >
          <SearchForm />
        </Stack>
        <Stack overflow="hidden" width={"100%"}>
          <Grid container spacing={2} columns={12.5}>
            {cocktails?.data?.drinks?.map((item) => (
              <Grid key={item.id} item xs={3}>
                <CocktailCard item={item}></CocktailCard>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Box>
    </Layout>
  );
};

export default index;

// export async function getServerSideProps(ctx) {
//   const res = await invokeExternalAPI("search.php", "get", {}, {}, { s: "s" });
 

//   return {
//     props: {
//       cocktails: res,
//     },
//   };
// }
export async function getStaticProps() {
  const res = await invokeExternalAPI("search.php", "get", {}, {}, { s: "s" });
  
  return {
    props: {  cocktails: res,}, // will be passed to the page component as props
  };
}

