$(document).ready(function(){

    //Efeito Hide e Show
    $('.esconder').click(function () { 
        $('.bloco.azul').hide();
    });

    $('.exibir').click(function () { 
        $('.bloco.azul').show();
    });

    //Efeito Fade
    $('.fadeIn').click(function () { 
        $('.bloco.vermelho').fadeIn('slow');
    });

    $('.fadeOut').click(function () { 
        $('.bloco.vermelho').fadeOut('slow');
    });

    $('.fadeToggle').click(function () { 
        $('.bloco.vermelho').fadeToggle('slow');
    });

    $('.fadeTo').click(function () { 
        $('.bloco.vermelho').fadeTo('slow', 0.05);  
    });

    //Efeito Slide
    $('.slideDown').click(function () {
        $('.bloco.verde').slideDown('slow'); 
    });

    $('.slideUp').click(function () { 
        $('.bloco.verde').slideUp('slow');
    });

    $('.slideToggle').click(function () { 
        $('.bloco.verde').slideToggle('slow');
    });

    //Efeito Animação
    $('.animate').click(function () { 
        $('.bloco.amarelo').animate({height:'300px', width: '300px'});
    });

});