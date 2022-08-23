import { Box, Grid } from "@mui/material";
import { useState } from "react";
import Cards from "./Cards";
import InputForm from "./InputForm";


function Main() {

  const [list, setList] = useState([
  ]);

  return (
    <Box sx={{maxWidth: 1600, mx: "auto"}}>
      <Grid container alignItems="top">
        <Grid item xs={12} sm={3}>
          <InputForm setList={setList} />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Cards list={list} setList={setList}/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Main;