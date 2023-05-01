import { fetcher, useFetcher, useGetFetcher } from "@/lib/helper";
import { invokeAPI, invokeExternalAPI } from "@/utilities/http";
import { baseURL } from "@/utilities/settings";
import useSWR from "swr";
import { Search } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const SearchForm = () => {
  const [val, setval] = useState();
  const HandleChange = (second) => {
    console.log(second);
  };

  // const handleSearch = async (second) => {
  //   console.log(val);
  //   const res = await invokeAPI("search.php", "get", {}, {}, { s: val });
  //   console.log(res);
  // };

  // useEffect(() => {
  //   handleSearch();
  // }, [val]);

  const { data, mutate } = useSWR(`${baseURL}${"search.php"}`, fetcher);

  console.log(mutate);
  return (
    <Box
      sx={{
        px: 5,
        flex: 2.5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 5,
        flexDirection: "column",
        m: "0px !important",
        gap: 2,
        border: "none",
      }}
    >
      <Typography>Search Your Favorite Cocktail</Typography>
      <FormControl sx={{ m: 0, width: "35%" }} variant="outlined">
        <OutlinedInput
          id="outlined-adornment-search"
          size="small"
          placeholder="Searching for...."
          color="error"
          // @ts-ignore
          onChange={(e) => setval(e.target.value)}
          sx={{
            borderRadius: "1200px",
            p: 0,
            height: "44px",
            overflow: "hidden",
          }}
          endAdornment={
            <Button
              variant="contained"
              color="inherit"
              aria-label="more"
              id="long-button"
              // onClick={handleSearch}
              aria-haspopup="true"
              disableElevation
              endIcon={<Search />}
              sx={{
                display: "flex",
                gap: "1",
                justifyContent: "center",
                px: 3.5,
                height: "100%",
                textTransform: "capitalize",
                background: "#F6F9FC",
                borderRadius: "0 0 0 0",
                margin: 0,
                alignItems: "center",
                borderLeft: "1px solid #DAE1E7",
              }}
            >
              Search
            </Button>
          }
          inputProps={{
            "aria-label": "weight",
          }}
        />
      </FormControl>
    </Box>
  );
};

export default SearchForm;
