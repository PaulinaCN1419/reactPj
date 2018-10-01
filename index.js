import React from 'react';
import { render } from 'react-dom';
import Playlist from './src/playlist/components/playlist';
import data from './src/api.json';
//console.log("hola mundo")

//aquí le  digo de  donde  buscarlo a la app
const container = document.getElementById('app')

//ReactDOM.render(que voy a renderizar, donde lo haré);
//const holaMundo= <h1>hola Estudiantes</h1>;
render(<Playlist data={data}/>, app);