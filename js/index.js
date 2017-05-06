$(document).ready(init);

function init() {
    var header = $('#header');
    var circulo = $('#circulo');
    var cuadrado = $('#cuadrado');
    var triangulo = $('#triangulo');
    var play = $('#play');

    parallaxHeader(header);
    cambioSVG(circulo);cambioSVG(cuadrado);cambioSVG(triangulo);cambioSVG(play);
    cambioAutomaticoSVG(circulo,cuadrado,triangulo,play);
}


// ###################################################################
// PARALLAX MOUSE MOVE HEADER
// ###################################################################

function parallaxHeader(header) {
    var movimientos = 20;
    var cantidadCapas = 2;
    header.mousemove(function (event) {
        var x = event.pageX / ($(this)["0"].offsetWidth / 2);
        var y = event.pageY / ($(this)["0"].offsetHeight / 2);
        for (var i = 0; i < cantidadCapas; i++) {
            var nuevoX = (x * movimientos) * (i + 1);
            var nuevoY = (y * movimientos) * (i + 1);
            $('.mascara' + (i + 1)).css("transform", "translate3d(" + nuevoX + "px, " + nuevoY + "px, " + "0px)");
        }
    });
}


// ###################################################################
// CAMBIO HOVER DE IMAGEN POR SRC
// ###################################################################

function cambioSVG(figura) {
    var link_File_Header = 'images/header/cuadro_';
    var NombreFigura = figura.attr('id');

    figura.hover(function () {
        figura.attr('src', link_File_Header + NombreFigura + 'Hover.svg');
    }, function () {
        figura.attr('src', link_File_Header + NombreFigura + '.svg');
    });
}

// ###################################################################
// CAMBIO AUTOMATICO IMAGEN POR SRC
// ###################################################################

function cambioAutomaticoSVG(circulo,cuadrado,triangulo,play) {
    
    var link_File_Header = 'images/header/cuadro_';
    var NombreFigura = [circulo.attr('id'),cuadrado.attr('id'),triangulo.attr('id'), play.attr('id')];
    var tiempo = 1000;
    
     setInterval(function () {
        if (circulo.attr('src') == link_File_Header + NombreFigura[0] + '.svg') {
            circulo.attr('src', link_File_Header + NombreFigura[0] + 'Hover.svg');
        } else {
            circulo.attr('src', link_File_Header + NombreFigura[0] + '.svg');
        }
    }, tiempo*1);
    
    setInterval(function () {
        if (cuadrado.attr('src') == link_File_Header + NombreFigura[1] + '.svg') {
            cuadrado.attr('src', link_File_Header + NombreFigura[1] + 'Hover.svg');
        } else {
            cuadrado.attr('src', link_File_Header + NombreFigura[1] + '.svg');
        }
    }, tiempo*2);
    
    setInterval(function () {
        if (triangulo.attr('src') == link_File_Header + NombreFigura[2] + '.svg') {
            triangulo.attr('src', link_File_Header + NombreFigura[2] + 'Hover.svg');
        } else {
            triangulo.attr('src', link_File_Header + NombreFigura[2] + '.svg');
        }
    }, tiempo*3);
    
    setInterval(function () {
        if (play.attr('src') == link_File_Header + NombreFigura[3] + '.svg') {
            play.attr('src', link_File_Header + NombreFigura[3] + 'Hover.svg');
        } else {
            play.attr('src', link_File_Header + NombreFigura[3] + '.svg');
        }
    }, tiempo*4);
}