import React from 'react';
import { render } from 'react-dom';
import Media from './src/playlist/components/media';
//console.log("hola mundo")

//aquí le  digo de  donde  buscarlo a la app
const container = document.getElementById('app')

//ReactDOM.render(que voy a renderizar, donde lo haré);
//const holaMundo= <h1>hola Estudiantes</h1>;
render(<Media type="video" title="Qué es responseve Desing?" author="Paulina Collaguazo" image= "./images/covers/html5.jpg"/>, app);