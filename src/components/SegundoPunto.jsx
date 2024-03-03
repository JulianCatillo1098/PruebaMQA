import React from "react";
import { TableroAjedrez } from "./TableroAjedrez";
import { AppBar, Button, Container, Grid, Toolbar, Typography } from "@mui/material";
import algoritmo1 from "../images/algoritmo1.png";
import algoritmo2 from "../images/algoritmo2.png";
import algoritmo3 from "../images/algoritmo3.png";
import { useNavigate } from "react-router-dom";

export const SegundoPunto = () => {
  const navigate = useNavigate();
  const volver = () => {
    navigate("/");
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            Prueba MQA
          </Typography>
          <Typography variant="h6" component="div">
            Julian Santiago Castillo Corredor
          </Typography>
        </Toolbar>
      </AppBar>

      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Button
          variant="contained"
          color="error"
          style={{ margin: "10px" }}
          onClick={volver}
        >
          Volver
        </Button>
      </Container>

      <Grid item xs={12} lg={12} marginTop={5}>
        <TableroAjedrez></TableroAjedrez>
      </Grid>

      <Grid item xs={12} lg={12} marginTop={10}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={algoritmo1} alt="algoritmo1" />
          <img src={algoritmo2} alt="algoritmo2" />
          <img src={algoritmo3} alt="algoritmo3" />
        </div>
      </Grid>
    </>
  );
};
