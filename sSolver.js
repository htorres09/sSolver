var cubo = []
var fil = []
var col = []
var filSol = [];
var colSol = [];
var arregloFilas = [];
var arregloColumnas = [];
var arregloComplemento = [];

$(document).ready(function(){
  inicializar();
  obtenerArreglos();
  for (s=1; s<10; s++){
    $("#sf"+s).val(filSol[s-1]);
    $("#sc"+s).val(colSol[s-1]);
  }
});

$('#buscar').keyup(function() {
    // j - Columna    // i - Fila
    var valor = $(this).val();
    //Aquí limpiar todo el css de Highlight
    $('input').removeClass('highline');
    $('input').removeClass('higherror');
    $('table').removeClass('highcube');
    for(i=1; i<10; i++){
        for(j=1; j<10; j++){
            var c = "#"+i+""+j;
            if($(c).val()==valor && $(c).val()!=''){
                iluminarCaja(i,j);
                for(n=0;n<9;n++){
                  if(cubo[n].includes(c)){
                    iluminarCuadro('#C'+(n+1),(n+1))
}/*.if*/ }/*.for*/ }/*.if*/ }/*.for*/ }/*.for*/ });

$(':input').keyup(function() {
  inicializar();
  discriminarRestantes();
  var valor = $(this).val();
  //Aquí limpiar todo el css de Highlight
  $('input').removeClass('highline');
  $('input').removeClass('higherror');
  $('table').removeClass('highcube');
  for(i=1; i<10; i++){
      for(j=1; j<10; j++){
          var c = "#"+i+""+j;
          if($(c).val()==valor && $(c).val()!=''){
              iluminarCaja(i,j);
              for(n=0;n<9;n++){
                if(cubo[n].includes(c)){
                  iluminarCuadro('#C'+(n+1),(n+1))
                }
              }
          }
      }
  }
});

function inicializar(){
  //Soluciones
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

  //IDs Filas
  fil[0] = ['#11', '#12', '#13', '#14', '#15', '#16', '#17', '#18', '#19' ]
  fil[1] = ['#21', '#22', '#23', '#24', '#25', '#26', '#27', '#28', '#29' ]
  fil[2] = ['#31', '#32', '#33', '#34', '#35', '#36', '#37', '#38', '#39' ]
  fil[3] = ['#41', '#42', '#43', '#44', '#45', '#46', '#47', '#48', '#49' ]
  fil[4] = ['#51', '#52', '#53', '#54', '#55', '#56', '#57', '#58', '#59' ]
  fil[5] = ['#61', '#62', '#63', '#64', '#65', '#66', '#67', '#68', '#69' ]
  fil[6] = ['#71', '#72', '#73', '#74', '#75', '#76', '#77', '#78', '#79' ]
  fil[9] = ['#81', '#82', '#83', '#84', '#85', '#86', '#87', '#88', '#89' ]
  fil[8] = ['#91', '#92', '#93', '#94', '#95', '#96', '#97', '#98', '#99' ]
  //IDs columnas
  col[0] = ['#11', '#21', '#31', '#41', '#51', '#61', '#71', '#81', '#91' ]
  col[1] = ['#12', '#22', '#32', '#42', '#52', '#62', '#72', '#82', '#92' ]
  col[2] = ['#13', '#23', '#33', '#43', '#53', '#63', '#73', '#83', '#93' ]
  col[3] = ['#14', '#24', '#34', '#44', '#54', '#64', '#74', '#84', '#94' ]
  col[4] = ['#15', '#25', '#35', '#45', '#55', '#65', '#75', '#85', '#95' ]
  col[5] = ['#16', '#26', '#36', '#46', '#56', '#66', '#76', '#86', '#96' ]
  col[6] = ['#17', '#27', '#37', '#47', '#57', '#67', '#77', '#87', '#97' ]
  col[7] = ['#18', '#28', '#38', '#48', '#58', '#68', '#78', '#88', '#98' ]
  col[8] = ['#19', '#29', '#39', '#49', '#59', '#69', '#79', '#89', '#99' ]

  //IDs Cuadros
  cubo[0] = ['#11', '#12', '#13', '#21', '#22', '#23', '#31', '#32', '#33' ]
  cubo[1] = ['#14', '#15', '#16', '#24', '#25', '#26', '#34', '#35', '#36' ]
  cubo[2] = ['#17', '#18', '#19', '#27', '#28', '#29', '#37', '#38', '#39' ]
  cubo[3] = ['#41', '#42', '#43', '#51', '#52', '#53', '#61', '#62', '#63' ]
  cubo[4] = ['#44', '#45', '#46', '#54', '#55', '#56', '#64', '#65', '#66' ]
  cubo[5] = ['#47', '#48', '#49', '#57', '#58', '#59', '#67', '#68', '#69' ]
  cubo[6] = ['#71', '#72', '#73', '#81', '#82', '#83', '#91', '#92', '#93' ]
  cubo[7] = ['#74', '#75', '#76', '#84', '#85', '#86', '#94', '#95', '#96' ]
  cubo[8] = ['#77', '#78', '#79', '#87', '#88', '#89', '#97', '#98', '#99' ]

}

function verNumero(n){
  var valor = n;
  for(i=1; i<10; i++){
      for(j=1; j<10; j++){
          var c = "#"+i+""+j;
          if($(c).val()==valor && $(c).val()!=''){
              iluminarCaja(i,j);
              for(n=0;n<9;n++){
                if(cubo[n].includes(c)){
                  iluminarCuadro('#C'+(n+1),(n+1))
                }
              }
          }
      }
  }
}

function limpiarNumeros(){
  for(i=1; i<10; i++){
      for(j=1; j<10; j++){
          var c = "#"+i+""+j;
          if(($(c).hasClass('highline'))){
              $(c).removeClass('highline');
          }
          if(($(c).hasClass('higherror'))){
              $(c).removeClass('higherror');
          }
      }
  }
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

function obtenerArreglosComplementarios(){
  for(i=0; i<9; i++){
    var cuadro = [];
    for(e in cubo[i]){
      if(parseInt($(cubo[i][e]).val())){
        cuadro.push(parseInt($(cubo[i][e]).val()));
      }
    }
    arregloComplemento.push(cuadro);
  }
}

function iluminarCaja(fila,columna) {
    //console.log('Highlight: \n>Fila:' + fila +'\n>Col: ' + columna );
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
    //console.log('Iluminar cuadro');
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
    for(i=1; i<10; i++){
        for(j=1; j<10; j++){
            var c = "#"+i+""+j;
            if(!($(c).hasClass('highbox'))){
                $(c).val('');
            }
            if(($(c).hasClass('higherror'))){
                $(c).removeClass('higherror');
            }
        }
    }
}

function borrar(){
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

function guardar(){
  var id = '', val = 0;
  var texto = '{ "sudoku" : [';
  //leer la matriz y agregarla a texto
  for(i=0; i<9; i++){
    for(j=0; j<9; j++){
      id = '#'+(i+1)+(j+1);
      val = $(id).val();
      texto += ' { "id": "' + id + '", "valor": "' + val +'"';
      if($(id).hasClass('highbox')){
        texto += ', "class":"highbox" },';
      } else {
         texto += ' },';
      }
    }
  }
  texto = texto.replace(/,\s*$/, "");
  texto += ']}';

  var obj = JSON.parse(texto);
  exportJSON(obj, 'sudokuActual');
}

function exportJSON(objeto, nombre){
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(objeto));
  var downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", nombre + '.json');
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

function contarBlancos(){
  var cuenta = 0;
  for(i=1; i<=9; i++){
    for(j=1; j<=9; j++){
      if($('#'+i+j).val()==''){
        cuenta++;
      }
    }
  }
  console.log(cuenta);
}


function discriminarRestantes(){
  obtenerArreglos();
  //Remover elementos de la solución que estan en los arreglos fila y columna
  for(n=0; n<9; n++){
    for(m=0; m<9; m++){
      if(filSol[n].includes(arregloFilas[n][m])){
        filSol[n].splice($.inArray(arregloFilas[n][m],filSol[n]),1);
      }
      if(colSol[n].includes(arregloColumnas[n][m])){
        colSol[n].splice($.inArray(arregloColumnas[n][m],colSol[n]),1);
      }
    }
    v = n+1;
    $("#sf"+v).val(filSol[n]);
    $("#sc"+v).val(colSol[n]);
  }
}

function verificar() {
    verificarCuadro();
    verificarLineas();
}

function verificarCuadro() {
    var cuadro = []
    var ids = [];
    for(k=0; k<9; k++){
      cuadro[k] = [];
    }

    // Obtener arreglos de los 9 cuadros
    for(i=0; i<9; i++){
      for(j=0; j<9; j++){
        cuadro[i].push($(cubo[i][j]).val());
      }
    }

    // Obtener los ids de las cajas repetidas
    for(l=0; l<9; l++){
      ids = ids.concat(comparar(cuadro[l], cubo[l]));
    }

    // Agrega clase a los ids
    agregarClase(ids, 'higherror');
}

function verificarLineas() {
    var ids = [];
    // Obtener arreglos de los 9 cuadros
    obtenerArreglos();

    // Obtener las ids de cajas repetidas en linea
    for(n=0; n<9; n++){
      ids = ids.concat(comparar(arregloFilas[n], fil[n]));
    }
    // Obtener las ids de cajas repetidas en columna
    for(n=0; n<9; n++){
      ids = ids.concat(comparar(arregloColumnas[n], col[n]));
    }

    // Agrega clase a los ids
    agregarClase(ids, 'higherror');
}

function comparar(arrCubo, arrIds){
  var indices = [];
  for(i=0; i<arrCubo.length; i++){
    if(arrCubo[i]!=''){
      for(j=i+1; j<arrCubo.length; j++){
        if(arrCubo[j]!=''&&i!=j){
          if(arrCubo[j]==arrCubo[i]){
            if(!(indices.includes(arrIds[j]))){
              indices.push(arrIds[j]);
            }
          }
        }
      }
    }
  }
  return indices;
}

function agregarClase(ids, clase){
  for(n in ids){
      if(!($(ids[n]).hasClass('highbox'))){
          $(ids[n]).addClass(clase);
      }/*.for*/ }/*.for*/
}/*.agregarClase*/
