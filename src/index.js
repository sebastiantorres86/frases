import React from "react";
import ReactDOM from "react-dom";
import App from './App'

const anecdotes = [
  ['Yo soy el puente' , "Mauro Díaz"],
  ['Necesito contexto please' , "Agustin Nasillo"],
  ['Hay clientes que quieren ser golpeados' , "Ale Lasanta"],
  ['Carguen las horas carajo' , "Gustavo Rosa"],
  ['Es muy dificil' , "Anónimo"],
  ['Lo que abunda no daña excepto en lo que a largo de cuerda de bungee jumping respecta' , "Agustin Nasillo"],
  ['Hay que reconocer que parece sólido cuando habla', "Anónimo"],
  ['Chupa y escupe' , "Anónimo"],
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
