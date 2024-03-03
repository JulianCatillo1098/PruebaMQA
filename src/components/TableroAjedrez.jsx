import React from 'react';
import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { botonsolucion } from '../store/maqSlice';

export const TableroAjedrez = () => {
    const { boton } = useSelector((state) => state.Usuario);
    const dispatch =useDispatch()
    const otraSolucion= ()=>{
    dispatch(botonsolucion())
    }
    const renderBoard = (solution) => {
    return (
        <Grid container spacing={0}>
          {solution.map((row, rowIndex) => (
            <Grid key={rowIndex} container item xs={12} justifyContent="center" style={{marginBottom: 19}}>
              {row.map((cell, colIndex) => (
                <Grid key={colIndex} item margin={2}>
                  <Paper style={{ padding: 10, textAlign: 'center' }}>
                    <Typography variant="h5">{cell}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          ))}
        </Grid>
      );
    };
  
    // Soluciones de las reinas en un tablero de ajedrez de 4x4
    const solutions = [
      [
        [' - ',' R ',' - ',' - '],
        [' - ',' - ',' - ','R'],
        ['R',' - ',' - ',' - '],
        [' - ',' - ','R',' - ']
      ],
      [
        ['-','-','R','-'],
        ['R','-','-','-'],
        ['-','-','-','R'],
        ['-','R','-','-']
      ]
    ];
    return (<>
    <div>
          <Typography variant="h5" align="center">Solución</Typography>
          <br />
          { boton ? (
            <>
              
              {renderBoard(solutions[0])}
            </>
          ) : (
            <>
            
              {renderBoard(solutions[1])}
            </>
          )}
        </div>
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
            onClick={otraSolucion}
            color="primary"
            style={{ marginTop: "10px" }}
          >
            Otra solución
          </Button>
        </Container>
    </>
        
      )
};