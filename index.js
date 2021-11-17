const express = require('express');
const axios = require("axios");
const { response } = require('express');

const main = async () => {
  var response = await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu");
  var {
    data: { moves },
  } = response;
  var movimientos = moves.map((movimientos)=>{
    return {
      move: movimientos.move,
    };
  })
  console.log(movimientos);  
};
main();
const app = express();
const PORT = 3000;

/* El servidor recibe la solicitud y envia un hola mundo en respuesta*/
app.get('/', (req, res) => {
     res.json({
         message: "Los datos obtenidos fueron: "

     });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

