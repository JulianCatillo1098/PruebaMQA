import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  TextField,
  Box,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ContenedorPreguntas, nombreUsuario } from "../store/maqSlice"; // Asegúrate de que la ruta sea correcta y el slice esté exportado correctamente
import { useNavigate } from "react-router-dom";

export const IngresoUsuario = () => {
  const dispatch = useDispatch();
  const { nombre, preguntas } = useSelector((state) => state.Usuario);
  const navigate = useNavigate();
  
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const funcionSubmit = (data) => {
    dispatch(nombreUsuario(data.nombre)); // Asumiendo que la acción nombreUsuario espera un argumento con el nombre
    dispatch(ContenedorPreguntas());
  };
  const IrPrimerPunto = ()=>{
    navigate("/respuesta_primer_punto")
  }
  const IrSegundoPunto = ()=>{
    navigate("/respuesta_segundo_punto")
  }
  const nombreMayuscula = nombre?.toUpperCase();

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
            label="Ingrese su nombre"
            type="text"
            {...register("nombre", {
              required: true,
            })}
          />
        </Container>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Button
            variant="contained"
            type="submit"
            color="primary"
            style={{ marginTop: "10px" }}
          >
            Continuar
          </Button>
        </Container>
      </form>
      <div>
        {preguntas ? (
          <>
            <h3 style={{ padding: "30px" }}>
              Hola {nombreMayuscula}.<br /> A continuación, se presentan los
              puntos que surgieron durante la prueba realizada el día miércoles.
              Por favor, haga clic en cualquiera de los dos botones
              proporcionados para visualizar la respuesta correspondiente a cada
              pregunta.
            </h3>
            <Container>
              <Box border={1} borderColor="primary.main" padding={2}>
                1- Realice un programa que a partir de un parámetro de
                entrada(N) cree una matriz de N*N y realice las siguientes
                tareas: <br />
                <br />● Valide el valor N del parámetro de entrada que sea mayor
                a 1. <br />
                ● Llene la matriz con valores aleatorios.
                <br />
                ● Imprima por pantalla el resultado de la suma de las diagonales
                de la matriz.
                <br />● Todo el proceso se debe hacer con un solo recorrido a la
                matriz.
                <Container style={{ textAlign: "right" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: "30px" }}
                    onClick={IrPrimerPunto}
                  >
                    Ver respuesta
                  </Button>
                </Container>
              </Box>
            </Container>
            <Container>
              <Box border={1} borderColor="primary.main" padding={2}>
                2- Realizar un algoritmo donde se pueda ubicar 4 reinas en un
                tablero 4X4 sin que ninguna de ellas se amenace entre sí.
                <Container style={{ textAlign: "right" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: "30px" }}
                    onClick={IrSegundoPunto}
                  >
                    Ver respuesta
                  </Button>
                </Container>
              </Box>
            </Container>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
