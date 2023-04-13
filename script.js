$(document).ready(function(){
    tab();
    game();
});

function tab(){
    for (let i = 0; i < 3; i++) {
        $("#tabuleiro").append("<div id = 'linha_" + i.toString() + "' class = 'linha' >");

        for (let j = 0; j < 3; j++) {
            var nome_casa = "casa_" + i.toString() + "_" + j.toString();

            $("#linha_"+i.toString()).append("<div id = '" + nome_casa + "'  class = 'casa' >"); 
        }
    }
}

function game(){
    var i = 0;
    var endGame = false;

    $(".casa").click(function(){
        var casa_selecionada = $(this).attr("id");

        if(i%2==0 && i < 9 && endGame == false && $("#"+casa_selecionada).hasClass("casaO")== false && $("#"+casa_selecionada).hasClass("casaX")== false){
            $("#"+casa_selecionada).css("background-color", "black");
            $("#"+casa_selecionada).addClass("casaO");
            i++;
        }else if(i % 2 != 0 && i < 9 && endGame == false && $("#"+casa_selecionada).hasClass("casaO")== false && $("#"+casa_selecionada).hasClass("casaX")== false){
            $("#"+casa_selecionada).css("background-color", "red");
            $("#"+casa_selecionada).addClass("casaX");
            i++;
        }

        Owin();
        function Owin(){
            var casa00O = $("#casa_0_0").hasClass("casaO");
            var casa01O = $("#casa_0_1").hasClass("casaO");
            var casa02O = $("#casa_0_2").hasClass("casaO");
            var casa10O = $("#casa_1_0").hasClass("casaO");
            var casa11O = $("#casa_1_1").hasClass("casaO");
            var casa12O = $("#casa_1_2").hasClass("casaO");
            var casa20O = $("#casa_2_0").hasClass("casaO");
            var casa21O = $("#casa_2_1").hasClass("casaO");
            var casa22O = $("#casa_2_2").hasClass("casaO");

            if(casa00O == true && casa01O == true && casa02O == true){
                endGame = true;
                $("#Owin").css("display", "block"); 
            }else if(casa10O == true && casa11O == true && casa12O == true){
                endGame = true;
                $("#Owin").css("display", "block");
            }else if(casa20O == true && casa21O == true && casa22O == true){
                endGame = true;
                $("#Owin").css("display", "block");
            }else if(casa00O == true && casa10O == true && casa20O == true){
                endGame = true;
                $("#Owin").css("display", "block");
            }else if(casa01O == true && casa11O == true && casa21O == true){
                endGame = true;
                $("#Owin").css("display", "block");
            }else if(casa02O == true && casa12O == true && casa22O == true){
                endGame = true;
                $("#Owin").css("display", "block");
            }else if(casa00O == true && casa11O == true && casa22O == true){
                endGame = true;
                $("#Owin").css("display", "block");
            }else if(casa02O == true && casa11O == true && casa20O == true){
                endGame = true;
                $("#Owin").css("display", "block");
            }            
        }
        Xwin();
        function Xwin(){
            var casa00X = $("#casa_0_0").hasClass("casaX");
            var casa01X = $("#casa_0_1").hasClass("casaX");
            var casa02X = $("#casa_0_2").hasClass("casaX");
            var casa10X = $("#casa_1_0").hasClass("casaX");
            var casa11X = $("#casa_1_1").hasClass("casaX");
            var casa12X = $("#casa_1_2").hasClass("casaX");
            var casa20X = $("#casa_2_0").hasClass("casaX");
            var casa21X = $("#casa_2_1").hasClass("casaX");
            var casa22X = $("#casa_2_2").hasClass("casaX");

            if(casa00X == true && casa01X == true && casa02X == true){
                endGame = true;
                $("#Xwin").css("display", "block");
            }else if(casa10X == true && casa11X == true && casa12X == true){
                endGame = true;
                $("#Xwin").css("display", "block");
            }else if(casa20X == true && casa21X == true && casa22X == true){
                endGame = true;
                $("#Xwin").css("display", "block");
            }else if(casa00X == true && casa10X == true && casa20X == true){
                endGame = true;
                $("#Xwin").css("display", "block");
            }else if(casa01X == true && casa11X == true && casa21X == true){
                endGame = true;
                $("#Xwin").css("display", "block");
            }else if(casa02X == true && casa12X == true && casa22X == true){
                endGame = true;
                $("#Xwin").css("display", "block");
            }else if(casa00X == true && casa11X == true && casa22X == true){
                endGame = true;
                $("#Xwin").css("display", "block");
            }else if(casa02X == true && casa11X == true && casa20X == true){
                endGame = true;
                $("#Xwin").css("display", "block");
            }
        }

    })
}

