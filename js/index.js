$(document).ready(init);

function init() {
    slider();
    header();
    sobre_mi();
    trabajos();
    espacios();
    formulario();
}

$(document).scroll(function(){
//        console.log($(window).scrollTop());
        if($(document).scrollTop()>683){
            $('#menu').css('background-color','#febb48');
            $('#menu a').css('color','#2b1b34');
            $('#menu li').css('font-size','0.7em').css('font-size','0.7em').css('margin','0px 10px');
            $('.logo a').css('font-size','0.8em').css('border','2px solid #2b1b34');
        }else{
            $('#menu').css('background-color','');
            $('#menu a').css('color','');
            $('#menu li').css('font-size','').css('font-size','').css('margin','');
            $('.logo a').css('font-size','').css('border','');
        }
    });

function header() {
    var header = $('#header');
    var circulo = $('#circulo');
    var cuadrado = $('#cuadrado');
    var triangulo = $('#triangulo');
    var play = $('#play');

    parallaxHeader(header);
    cambioSVG(circulo);
    cambioSVG(cuadrado);
    cambioSVG(triangulo);
    cambioSVG(play);
    cambioAutomaticoSVG(circulo, 1);
    cambioAutomaticoSVG(cuadrado, 2);
    cambioAutomaticoSVG(triangulo, 3);
    cambioAutomaticoSVG(play, 4);
}

function sobre_mi() {
    var secSaludo = $('.saludo');
    var secAyuda = $('.ayuda');
    var retrato = $('.image_me img');

    fondoHover(secSaludo, secAyuda, retrato);
}

function trabajos() {
    lista_Trabajos();
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

function cambioAutomaticoSVG(figura, turno) {

    var link_File_Header = 'images/header/cuadro_';
    var tiempo = 1000;

    setInterval(function () {
        if (figura.attr('src') == link_File_Header + figura.attr('id') + '.svg') {
            figura.attr('src', link_File_Header + figura.attr('id') + 'Hover.svg');
        } else {
            figura.attr('src', link_File_Header + figura.attr('id') + '.svg');
        }
    }, tiempo * turno);
}
// ###################################################################
// EFECTOS SIMPLES
// ###################################################################

function fondoHover(secSaludo, secAyuda, retrato) {

    secSaludo.hover(function () {
        secSaludo.addClass("bkd_oscura");
        retrato.addClass("r_morado");
    }, function () {
        secSaludo.removeClass("bkd_oscura");
        retrato.removeClass("r_morado");
    });

    secAyuda.hover(function () {
        secAyuda.addClass('bkd_dorada');
        retrato.addClass("r_dorado");
    }, function () {
        secAyuda.removeClass('bkd_dorada');
        retrato.removeClass("r_dorado");
    });
}


function espacios() {
    $('.visual').hover(function () {
        $('#sass').addClass('espacio').removeClass('Noespacio');
        $('#css').addClass('espacio').removeClass('Noespacio');
    }, function () {
        $('#sass').addClass('Noespacio');
        $('#css').addClass('Noespacio');
    });
}

// ###################################################################
// SLIDER
// ###################################################################

function slider() {
    $('.center').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
                },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
                }
            ]
    });
}

// ###################################################################
// TRABAJOS DE PORTAFOLIO
// ###################################################################

function lista_Trabajos() {

    var array = [{
            identificado: 'apros',
            titulo: 'Proyecto: Plantilla Apros',
            resumen: 'Proyecto ganador de la hackaton "Laboratoria Talent Fest" realizado en la ciudad de Arequipa',
            tools: '<i title="Framework CSS" class="devicon-foundation-plain-wordmark colored"></i> <i title="Libreria Javascript" class="devicon-jquery-plain-wordmark colored"></i> <i title="Preprocesador CSS" class="devicon-sass-original colored"></i> <i title="Google Maps API" class="devicon-google-plain colored"></i>',
            gestion: '<i title="Software de control de versiones" class="devicon-git-plain-wordmark colored"></i> <i title="Plataforma de desarrollo" class="devicon-github-plain-wordmark colored"></i>',
            demo: 'https://maryorychavez.github.io/apros-TalentFest/',
            pantalla:'images/webs/apros.PNG'
    },
        {
            identificado: 'lyft',
            titulo: "Proyecto: Lyft",
            resumen: "Pagina Web First-movil que simula la app 'Lyft'. Incluye un geolocalizador GPS que trabaja con la API de Google Maps.",
            tools: '<i title="Framework CSS" class="devicon-bootstrap-plain-wordmark colored"></i> <i title="Libreria Javascript" class="devicon-jquery-plain-wordmark colored"></i> <i title="Google Maps API" class="devicon-google-plain colored"></i>',
            gestion: '<i title="Software de control de versiones" class="devicon-git-plain-wordmark colored"></i> <i title="Plataforma de desarrollo" class="devicon-github-plain-wordmark colored"></i>',
            demo: 'https://maryorychavez.github.io/lyftProyect/',
            pantalla:'images/webs/lyft.png'
    },
        {
            identificado: 'user360',
            titulo: "Proyecto: User Testing 360°",
            resumen: "Web One-Page responsive para promocionar APP",
            tools: '<i title="Framework CSS" class="devicon-bootstrap-plain-wordmark colored"></i> <i title="Libreria Javascript" class="devicon-jquery-plain-wordmark colored"></i>',
            gestion: '<i title="Software de control de versiones" class="devicon-git-plain-wordmark colored"></i> <i title="Plataforma de desarrollo" class="devicon-github-plain-wordmark colored"></i>',
            demo: 'https://maryorychavez.github.io/user-360/',
            pantalla:'images/webs/user360.png'
    },
        {
            identificado: 'danza',
            titulo: "Proyecto: Danza-Arte",
            resumen: "'Trabajo de Maquetación. Layout multi-paginas para un estudio de danza",
            tools: '<i title="Framework CSS" class="devicon-bootstrap-plain-wordmark colored"></i> <i title="Libreria Javascript" class="devicon-jquery-plain-wordmark colored"></i>',
            gestion: '<i title="Software de control de versiones" class="devicon-git-plain-wordmark colored"></i> <i title="Plataforma de desarrollo" class="devicon-github-plain-wordmark colored"></i>',
            demo: 'https://maryorychavez.github.io/danza-arte/',
            pantalla:'images/webs/danza.png'
    }]
    $('.slick-next,.slick-prev').click(function () {
        for (var i = 0; i < array.length; i++) {
            if ($('.center .slick-center').children("img").attr("alt") == array[i].identificado) {
                $('#titulo_proyecto').html(array[i].titulo);
                $('#resumen_proyecto').html(array[i].resumen);
                $('#tools_proyecto').html(array[i].tools);
                $('#gestion_proyecto').html(array[i].gestion);
                $("#demo_proyecto").attr("href", array[i].demo).attr("target", '_blank');
                $('.web').attr('src',array[i].pantalla);
            }
        }
    });
}

// ###################################################################
// FORMULARIO DE CONTACTO
// ###################################################################

function formulario() {
    var mensaje = "";
    var nombre = "";
    var correo = "";

    $("#enviar_mensaje").on("click", function () {
        mensaje = $("#mensaje").val();
        nombre = $("#nombre").val();
        correo = $("#correo").val()
        $.ajax({
            url: "//formspree.io/maryory.chavez@gmail.com",
            method: "POST",
            data: {
                name: nombre,
                _replyto: correo,
                message: mensaje
            },
            dataType: "json"
        });
        console.log("enviado");
        return false;
    });
}