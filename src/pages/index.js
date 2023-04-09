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
import Layout from "@/layout";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const index = () => {
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
        <Stack  
          overflow="hidden"
        
          width={"100%"}>
          <Grid container spacing={3} columns={12.5}>
            <Grid item xs={4}>
              asdasd
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Layout>
  );
};

export default index;
