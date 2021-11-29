var teclas = {
    LEFT:37,
    UP: 38,
    RIGHT:39,
    DOWN:40
};

console.log(teclas);

document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento)
{
    switch(evento.keyCode)
    {
        case teclas.UP:
            console.log("Arriba");
        break;
        case teclas.DOWN:
            console.log("Abajo");
        break;
        case teclas.RIGHT:
            console.log("Derecha");
        break;
        case teclas.LEFT:
            console.log("Izquierda");
        break;
        default:
    }
}