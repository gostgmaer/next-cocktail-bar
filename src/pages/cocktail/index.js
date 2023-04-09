// import getConfig from 'next/config';
// const { publicRuntimeConfig } = getConfig();

// let homepath = '/home';

// console.log(publicRuntimeConfig);
// if (publicRuntimeConfig.ENV !== 'local') {
//   homepath = `${publicRuntimeConfig.EXTRA_PATH}${homepath}`;
// }

// const Index = () => {};
// Index.getInitialProps = async ctx => {
//  // console.log(ctx.res);
//   ctx.res.writeHead(302, { Location: homepath });
//   ctx.res.end();
// };

// export default Index;

import SearchForm from "@/components/childs/Searchform";
import CocktailCard from "@/components/cocktailcard";
import Layout from "@/layout";
import { fetcher, useGetFetcher } from "@/lib/helper";
import { invokeExternalAPI } from "@/utilities/http";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const index = ({ cocktails }) => {
  const [CockTail, setCockTail] = useState(cocktails);
  const [val, setVal] = useState(null);
  const params ={
    s:'new'
  }
  const newData = useGetFetcher('search.php',params)
  console.log(newData);
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

