import SearchForm from "@/components/childs/Searchform";
import CocktailCard from "@/components/cocktailcard";
import Layout from "@/layout";
import { fetcher, useGetFetcher } from "@/lib/helper";
import { invokeExternalAPI } from "@/utilities/http";
import { Box, Grid, Stack, Typography } from "@mui/material";

const Index = ({ cocktails }) => {
  const params = {
    s: "new",
  };
  const newData = useGetFetcher("search.php", params);
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
          <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
            {cocktails?.data?.drinks?.map((item, index) => (
              <Grid key={index} width={"100%"} item xs={12} sm={4} md={3}>
                <CocktailCard item={item}></CocktailCard>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Box>
    </Layout>
  );
};

export default Index;

export async function getServerSideProps(ctx) {
  const res = await invokeExternalAPI("search.php", "get", {}, {}, { s: "s" });

  return {
    props: {
      cocktails: res,
    },
  };
}
