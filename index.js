const express = require("express");
const axios = require("axios");
const { response } = require("express");

require('dotenv').config({path: './.env'});
const puerto = process.env.PORT;


const main = async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu");
  const {
    data: { moves },
  } = response;
  let pokeMoves = [];
  moves.map((movimientos) => {
    pokeMoves.push(movimientos.move);
  });
  return pokeMoves;
};

const app = express();
//const PORT = 3000;


/* El servidor recibe la solicitud y envia un hola mundo en respuesta*/
app.get('/', async (req, res) => {
  const pokemonMoves = await main();
  res.json({
    statusCode: 200,
    message: "request was proceced succesfully",
    data: pokemonMoves,
  });
});

app.listen(puerto, () => {
  console.log(`Servidor escuchando en http://localhost:${puerto}`);
});