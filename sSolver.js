var cubo1 = ['#11', '#12', '#13', '#21', '#22', '#23', '#31', '#32', '#33' ]
var cubo2 = ['#14', '#15', '#16', '#24', '#25', '#26', '#34', '#35', '#36' ]
var cubo3 = ['#17', '#18', '#19', '#27', '#28', '#29', '#37', '#38', '#39' ]
var cubo4 = ['#41', '#42', '#43', '#51', '#52', '#53', '#61', '#62', '#63' ]
var cubo5 = ['#44', '#45', '#16', '#24', '#25', '#26', '#64', '#65', '#66' ]
var cubo6 = ['#47', '#48', '#49', '#57', '#58', '#59', '#67', '#68', '#69' ]
var cubo7 = ['#71', '#72', '#73', '#81', '#82', '#83', '#91', '#92', '#93' ]
var cubo8 = ['#74', '#75', '#76', '#84', '#85', '#86', '#94', '#95', '#96' ]
var cubo9 = ['#77', '#78', '#79', '#87', '#88', '#89', '#97', '#98', '#99' ]

$('#buscar').keyup(function() {
    // j - Columna
    // i - Fila
    var valor = $(this).val();
    //Aquí limpiar todo el css de Highlight
    $('input').removeClass('highline');
    $('table').removeClass('highcube');
    for(i=1; i<10; i++){
        for(j=1; j<10; j++){
            var c = "#"+i+""+j;
            if($(c).val()==valor && $(c).val()!=''){
                console.log(c+' '+valor);
                iluminarCaja(i,j);
                if(cubo1.includes(c)){
                    iluminarCuadro('#C1',1);
                } else if (cubo2.includes(c)) {
                    iluminarCuadro('#C2',2);
                } else if (cubo3.includes(c)) {
                    iluminarCuadro('#C3',3);
                } else if (cubo4.includes(c)) {
                    iluminarCuadro('#C4',4);
                } else if (cubo5.includes(c)) {
                    iluminarCuadro('#C5',5);
                } else if (cubo6.includes(c)) {
                    iluminarCuadro('#C6',6);
                } else if (cubo7.includes(c)) {
                    iluminarCuadro('#C7',7);
                } else if (cubo8.includes(c)) {
                    iluminarCuadro('#C8',8);
                } else if (cubo9.includes(c)) {
                    iluminarCuadro('#C9',9);
                } else {
                    console.log("No existe");
                }
            }
        }
    }
});

function iluminarCaja(fila,columna) {
    console.log('Highlight: \n>Fila:' + fila +'\n>Col: ' + columna );
    var clase = '';
    //fila
    for(n=1; n<10; n++){
        clase = '#'+fila+n;
        $(clase).addClass('highline');
    }
    //Columna
    for(m=1; m<10; m++){
        clase = '#'+m+columna;
        $(clase).addClass('highline');
    }
}

function iluminarCuadro(id, n){
    console.log('Ilumina el cuadro que tiene el numero');
    $(id).addClass('highcube');
}

function congelar(){
    for(i=1; i<10; i++){
        for(j=1; j<10; j++){
            var c = "#"+i+""+j;
            if($(c).val()){
                $(c).addClass('highbox');
                $(c).prop('disabled',true);
            }
        }
    }
}

function limpiar(){
    $('input').removeClass();
    $('table').removeClass('highbox');
    for(i=1; i<10; i++){
        for(j=1; j<10; j++){
            var c = "#"+i+""+j;
            $(c).prop('disabled',false);
            $(c).val('');
        }
    }
}
