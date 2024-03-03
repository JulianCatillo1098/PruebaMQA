function ubicarReinas() {
    let tablero = [
        ["-", "-", "-", "-"],
        ["-", "-", "-", "-"],
        ["-", "-", "-", "-"],
        ["-", "-", "-", "-"],
    ];
    function esSeguro(tablero, fila, columna) {
        for (let i = 0; i < columna; i++) {
            if (tablero[fila][i] === 1) {
                return false;
            }
        }
        for (let i = fila, j = columna; i >= 0 && j >= 0; i--, j--) {
            if (tablero[i][j] === 1) {
                return false;
            }
        }
        for (let i = fila, j = columna; i < tablero.length && j >= 0; i++, j--) {
            if (tablero[i][j] === 1) {
                return false;
            }
        }
        return true;
    }

    function ubicarReinasUtil(tablero, columna) {
        if (columna >= tablero.length) {
            return true;
        }
        for (let i = 0; i < tablero.length; i++) {
            if (esSeguro(tablero, i, columna)) {
                tablero[i][columna] = 1;

                if (ubicarReinasUtil(tablero, columna + 1)) {
                    return true;
                }

                tablero[i][columna] = 0; 
            }
        }
        return false;
    }
    if (ubicarReinasUtil(tablero, 0) === false) {
        console.log("No hay solución");
        return;
    }

    
    console.log("Solución encontrada:");
    for (let i = 0; i < tablero.length; i++) {
        console.log(tablero[i]);
    }
}
ubicarReinas();