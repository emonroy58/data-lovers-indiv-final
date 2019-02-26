let basePokemon = {}; //inicializar BD
const arrayTipoPokemon = [];
let selectType;
const url = './data/pokemon/pokemon.json'; //ruta del archivo .json


const btnPokemon = document.getElementById('btn-Pokemon');
const productWrapper = document.getElementById('list-pokemon');
const viewPokemons = () => { //muestra pokemon por tipo
  const basePokemon = getPokemon(); //lectuta de la BD por medio de GET
  // const basePokemon = JSON.parse(localStorage.getItem('data'));
  const base = basePokemon.pokemon;
  let viewAllPokem = '';
  for (let i in base) {
    //console.log('Tipo Poekemon: ',pokemon);
    viewAllPokem = viewAllPokem + `  
      
        <div class="card col-lg-3 col-md-6 col-sm-12">
         <div class="card-body bg-dark" style="width = 20rem;">
           <img src="${base[i].img}" class="card-img-top" alt="${base[i].name}">
           <div class="card-body">
           <h5 id="product-name" class="card-title d-flex justify-content-center">${base[i].name}</h5>
           </div>
         </div> 
        </div>               
        `
    arrayTipoPokemon.push(base[i].type[0]); //almacena tipo de pokemon en arrayTipoPokemon
  }
  //arrayDataPokemTipo almacena elementos unicos menu Filtrar, por mecio de filter
  let arrayDataPokemTipo = arrayTipoPokemon.filter(function (item, index, array) {
    return array.indexOf(item) === index;
  })
  //console.log(arrayDataPokemTipo);
  dataFilter(arrayDataPokemTipo)

  productWrapper.innerHTML = viewAllPokem;
  return viewAllPokem;
}
btnPokemon.addEventListener('click', viewPokemons); //fin muestreo de tarjetas



//funcion llenado de menu filtro

menuFiltro = document.getElementById('menu-filtro');
const dataFilter = (arrayDataPokemTipo) => {

  let llenado = '';
  for (let i = 0; i < arrayDataPokemTipo.length; i++) {
    llenado = llenado + `
     <a id="${arrayDataPokemTipo[i]} " class="dropdown-item" href="#">${arrayDataPokemTipo[i]}</a>      `
  }
  menuFiltro.innerHTML = llenado; //fin llenado del filtro

  const clasePokemon = document.getElementsByClassName('dropdown-item'); //asignar propiedad ClassName
  for (let i = 0; i < clasePokemon.length; i++) { //lectura de className y asignar click
    clasePokemon[i].addEventListener("click", () => {
      const basePokemon = getPokemon();
      const base = basePokemon.pokemon;
      //console.log(clasePokemon[i].id);            //variable que contiene click/Tipo
      selectType = clasePokemon[i].id
      //console.log(base);  
      let objPokemon = window.dataPokemon.filterTypePokemons(base, selectType);
      printPokemons(objPokemon)

      //.log(objPokemon);
    }) //fin funct filtro

  }

}


printPokemons= (objPokemon)=>{//funcion Imprimir por tipo

  let viewAllPokem = '';
  for (let i in objPokemon) {
    //console.log('Tipo Poekemon: ',pokemon);
    viewAllPokem = viewAllPokem + `  
      
        <div class="card col-lg-3 col-md-6 col-sm-12">
         <div class="card-body bg-dark" style="width = 20rem;">
           <img src="${objPokemon[i].img}" class="card-img-top" alt="${objPokemon[i].name}">
           <div class="card-body">
           <h5 id="product-name" class="card-title d-flex justify-content-center">${objPokemon[i].name}</h5>
           </div>
         </div> 
        </div>               
        `
   // arrayTipoPokemon.push(objPokemon[i].type[0]); //almacena tipo de pokemon en arrayTipoPokemon
  }
  productWrapper.innerHTML = viewAllPokem;
  return viewAllPokem;
}






fetch(url) //lectura del archivo .json
  .then(response => response.json())
  .then(data => {
    localStorage.setItem('data', JSON.stringify(data))
    return data
  }) //procesa datos
  //console.log (data); 

  .catch(err => (err))

function getPokemon() {
  const stringPokemon = JSON.parse(localStorage.getItem('data'));
  const base = basePokemon.pokemon;
  console.log(stringPokemon);
  // viewPokemons(basePokemon)
  return stringPokemon;
}
