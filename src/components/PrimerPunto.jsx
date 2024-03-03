import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  TextField,
  Grid,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { validarParametro } from "../validaciones/Validaciones";
import { useNavigate } from "react-router-dom";

export const PrimerPunto = () => {
  const navigate = useNavigate();

  const [matriz, setMatriz] = useState([]);
  const [sumaDiagonalPrincipal, setSumaDiagonalPrincipal] = useState(0);
  const [sumaDiagonalSecundaria, setSumaDiagonalSecundaria] = useState(0);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const generarMatrizAleatoria = (N) => {
    const newMatriz = [];
    let sumaDiagPrincipal = 0;
    let sumaDiagSecundaria = 0;
    for (let i = 0; i < N; i++) {
      const row = [];
      for (let j = 0; j < N; j++) {
        const randomNumber = Math.floor(Math.random() * 100);
        row.push(randomNumber);
        if (i === j) sumaDiagPrincipal += randomNumber;
        if (i + j === N - 1) sumaDiagSecundaria += randomNumber;
      }
      newMatriz.push(row);
    }
    setMatriz(newMatriz);
    setSumaDiagonalPrincipal(sumaDiagPrincipal);
    setSumaDiagonalSecundaria(sumaDiagSecundaria);
  };

  const funcionSubmit = (data) => {
    const parametro = parseInt(data.parametro);
    generarMatrizAleatoria(parametro);
  };

  const volver = () => {
    navigate("/");
  };

  return (
    <div>
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

      <form onSubmit={handleSubmit(funcionSubmit)}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <TextField
            label="Ingrese parametro"
            type="number"
            {...register("parametro", {
              required: true,
              validate: validarParametro,
            })}
          />
          {errors.parametro && (
            <Typography variant="body2" color="red" sx={{ marginTop: 3 }}>
              El parametro debe ser mayor a 1
            </Typography>
          )}
        </Container>
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Button
            variant="contained"
            type="submit"
            color="primary"
            style={{ margin: "10px" }}
          >
            Continuar
          </Button>
          <Button
            variant="contained"
            color="error"
            style={{ margin: "10px" }}
            onClick={volver}
          >
            Volver
          </Button>
        </Container>
      </form>

      <Grid container spacing={2} style={{ justifyContent: "center", marginTop: "5px" }}>
  <Grid item>
    <div style={{ padding: "20px" }}>
      {matriz.length > 0 && (
        <Grid container spacing={4}>
          {matriz.map((row, rowIndex) => (
            <Grid key={rowIndex} container item spacing={4}>
              {row.map((col, colIndex) => (
                <Grid key={colIndex} item>
                  {col}
                </Grid>
              ))}
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  </Grid>
  <Grid item>
    <div style={{ padding: "20px" }}>
      <Grid container spacing={2}>
        <Grid item>
          <Typography>Suma primera diagonal: </Typography>
          <div style={{ border: "2px solid blue", padding: "20px" }}>
            {sumaDiagonalPrincipal}
          </div>
        </Grid>
        <Grid item>
          <Typography>Suma segunda diagonal: </Typography>
          <div style={{ border: "2px solid green", padding: "20px" }}>
            {sumaDiagonalSecundaria}
          </div>
        </Grid>
      </Grid>
    </div>
  </Grid>
</Grid>

    </div>
  );
};
