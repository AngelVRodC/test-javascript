'use strict';

const h1 = document.createElement("h1");
const textNode = document.createTextNode("Hello World");
h1.appendChild(textNode);
document.body.appendChild(h1);

const imagen = document.createElement("img");
imagen.src = 'http://via.placeholder.com/350x150';
document.body.appendChild(imagen);