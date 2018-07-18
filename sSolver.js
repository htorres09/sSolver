var cubo1 = ['#11', '#12', '#13', '#21', '#22', '#23', '#31', '#32', '#33' ]
var cubo2 = ['#14', '#15', '#16', '#24', '#25', '#26', '#34', '#35', '#36' ]
var cubo3 = ['#17', '#18', '#19', '#27', '#28', '#29', '#37', '#38', '#39' ]
var cubo4 = ['#41', '#42', '#43', '#51', '#52', '#53', '#61', '#62', '#63' ]
var cubo5 = ['#44', '#45', '#46', '#54', '#55', '#56', '#64', '#65', '#66' ]
var cubo6 = ['#47', '#48', '#49', '#57', '#58', '#59', '#67', '#68', '#69' ]
var cubo7 = ['#71', '#72', '#73', '#81', '#82', '#83', '#91', '#92', '#93' ]
var cubo8 = ['#74', '#75', '#76', '#84', '#85', '#86', '#94', '#95', '#96' ]
var cubo9 = ['#77', '#78', '#79', '#87', '#88', '#89', '#97', '#98', '#99' ]

var filSol = [];
var colSol = [];
var arregloFilas = [];
var arregloColumnas = [];

$(document).ready(function(){
  console.log("Ready");
  $('.solucion').prop('disabled', true);
  inicializar();
  obtenerArreglos();
  for (s=1; s<10; s++){
    $("#sf"+s).val(filSol[s-1]);
    $("#sc"+s).val(colSol[s-1]);
  }
});

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

$(':input').keyup(function() {
  inicializar();
  discriminarRestantes();
});

function inicializar(){
  filSol[0] = [1,2,3,4,5,6,7,8,9]
  filSol[1] = [1,2,3,4,5,6,7,8,9]
  filSol[2] = [1,2,3,4,5,6,7,8,9]
  filSol[3] = [1,2,3,4,5,6,7,8,9]
  filSol[4] = [1,2,3,4,5,6,7,8,9]
  filSol[5] = [1,2,3,4,5,6,7,8,9]
  filSol[6] = [1,2,3,4,5,6,7,8,9]
  filSol[7] = [1,2,3,4,5,6,7,8,9]
  filSol[8] = [1,2,3,4,5,6,7,8,9]

  colSol[0] = [1,2,3,4,5,6,7,8,9]
  colSol[1] = [1,2,3,4,5,6,7,8,9]
  colSol[2] = [1,2,3,4,5,6,7,8,9]
  colSol[3] = [1,2,3,4,5,6,7,8,9]
  colSol[4] = [1,2,3,4,5,6,7,8,9]
  colSol[5] = [1,2,3,4,5,6,7,8,9]
  colSol[6] = [1,2,3,4,5,6,7,8,9]
  colSol[7] = [1,2,3,4,5,6,7,8,9]
  colSol[8] = [1,2,3,4,5,6,7,8,9]
}

function obtenerArreglos(){
  arregloFilas = [];
  arregloColumnas = [];
  
  for(i=1; i<10; i++){
      var fila = [];
      for(j=1; j<10; j++){
        if($('#'+i+j).val()==""){
          fila.push(0)
        } else {
          fila.push(parseInt($('#'+i+j).val()))
        }
      }
      arregloFilas.push(fila);
  }

  for(j=1; j<10; j++){
      var columna = [];
      for(i=1; i<10; i++){
        if($('#'+i+j).val()==""){
          columna.push(0)
        } else {
          columna.push(parseInt($('#'+i+j).val()))
        }
      }
      arregloColumnas.push(columna);
  }

}

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
    $('table').removeClass('highcube');
    for(i=1; i<10; i++){
        for(j=1; j<10; j++){
            var c = "#"+i+""+j;
            $(c).prop('disabled',false);
            $(c).val('');
        }
    }
}

function discriminarRestantes(){
  obtenerArreglos();
  //Remover elementos de la solución que estan en los arreglos fila y columna
  for(n=0; n<9; n++){
    console.log("Arreglo Filas: " + filSol[n].toString());
    console.log("Arreglo Columnas: " + colSol[n].toString());
    for(m=0; m<9; m++){
      if(filSol[n].includes(arregloFilas[n][m])){
        console.log("Elemento a eliminar: " + arregloFilas[n][m]);
        filSol[n].splice($.inArray(arregloFilas[n][m],filSol[n]),1);
      }
      if(colSol[n].includes(arregloColumnas[n][m])){
        console.log("Elemento a eliminar: " + arregloColumnas[n][m]);
        colSol[n].splice($.inArray(arregloColumnas[n][m],colSol[n]),1);
      }
    }
    console.log("Arreglo Filas: " + filSol[n].toString());
    console.log("Arreglo Columnas: " + filSol[n].toString());
    v = n+1;
    $("#sf"+v).val(filSol[n]);
    $("#sc"+v).val(colSol[n]);
  }

}
