// 1 ) Crea tu propia función forEach que funcione igual a Array.forEach. Algo asi:


function miForEach(arreglo, callback) {
  for (var i = 0; i < arreglo.length; i++) {
    callback(arreglo[i])
  }
}

// 	miForEach([1,2,3], function(){})

// 2 ) Crea tu propia función map que funcione igual a Array.map. Algo asi:

function miMap(arreglo, callback) {
  newArray = [];

  for (var i = 0; i < arreglo.length; i++) {
    var item = callback(arreglo[i]);
    newArray.push(item);
  }
  return newArray;
}


//
// 3 ) Crea tu propia función filter que funcione igual a Array.filter. Algo asi:

function miFilter(arreglo, filter) {
  newArray=[];
  for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] filter){
      var item = arreglo[i];
    }
    newArray.push(item)
  }
  return newArray
}

miFilter([1,2,3,4,5,6,7,8,9], <3);

//
// 4 ) Crea tu propia función reduce que funcione igual a Array.reduce. Algo asi:
function miReduce(arreglo, callback) {
  for (var i = 0; i < arreglo.length; i++) {
    arreglo[i]
  }
}
//
// Bonus:
// 1 ) Crea tu propia función sort que funcione igual a Array.sort. Algo asi:
// function miSort(arreglo, callback){
//
// 	}
