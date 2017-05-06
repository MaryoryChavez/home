$(document).ready(init);

function init() {
    var header = $('#header');
    var circulo = $('#circulo');
    var cuadrado = $('#cuadrado');
    var triangulo = $('#triangulo');
    var play = $('#play');

    parallaxHeader(header);
    cambioSVG(circulo); cambioSVG(cuadrado); cambioSVG(triangulo); cambioSVG(play);
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
    
    figura.hover(function(){
        figura.attr('src', link_File_Header+NombreFigura+'Hover.svg');
    },function(){
        figura.attr('src',link_File_Header+NombreFigura+'.svg');
    });
}


// ###################################################################
// CAMBIO AUTOMATICO IMAGEN POR SRC
// ###################################################################

function cambioAutomaticoSVG(circulo,cuadrado,triangulo,play){
    
}