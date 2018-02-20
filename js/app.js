// 1 ) Crea tu propia función forEach que funcione igual a Array.forEach. Algo asi:

var persons = [{
    id: 1,
    name: "John",
    tags: "javascript"
  },
  {
    id: 2,
    name: "Alice",
    tags: "javascript"
  },
  {
    id: 3,
    name: "Roger",
    tags: "java"
  },
  {
    id: 4,
    name: "Adam",
    tags: "javascript"
  },
  {
    id: 5,
    name: "Alex",
    tags: "java"
  }
];

function miForEach(arreglo, callback) {
  for (var i = 0; i < arreglo.length; i++) {
    callback(arreglo[i])
  }
}

function prueba(element){
  var id = document.createElement('p');
  var name = document.createElement('p');
  var tag = document.createElement('p');
  var body= document.getElementById('body')
  id.textContent = element.id;
  name.textContent = element.name;
  tag.textContent = element.tags;
  body.appendChild(id);
  body.appendChild(name);
  body.appendChild(tag);
}

 miForEach(persons, prueba);
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

function miFilter(array, callback) {
    arr = [];
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i], i, array))
            arr.push(array[i]);
    }
    return arr;
};

test = miFilter([1, 2, 3, 4, 5, 6], function(numero, indice, array) {
    return numero % 2===0;
});

console.log(test)


//
// 4 ) Crea tu propia función reduce que funcione igual a Array.reduce. Algo asi:
function miReduce(arreglo, callback) {
  callback (arreglo);
}

function suma (arreglo){
  var total = 0;
  for (var i = 0; i < arreglo.length; i++) {
     total += arreglo[i];
  }
  return total
}

miReduce([1,2,3,4,5], suma)
//
// Bonus:
// 1 ) Crea tu propia función sort que funcione igual a Array.sort. Algo asi:
// function miSort(arreglo, callback){
//
// 	}
