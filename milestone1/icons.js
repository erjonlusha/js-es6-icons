$(document).ready(function () {
  // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family
  
  class Icon {
    constructor(name, prefix, type, family){
      this.name = name;
      this.prefix = prefix;
      this.type = type;
      this.family = family
    }
  }

  const icons = [
    new Icon("cat", "fas", "fa-cat", "animals"),
    new Icon("crow", "fas", "fa-crow", "animals"),
    new Icon("dog", "fas", "fa-dog", "animals"),
    new Icon("dove", "fas", "fa-dove", "animals"),
    new Icon("dragon", "fas", "fa-dragon", "animals"),
    new Icon("horse", "fas", "fa-horse", "animals"),
    new Icon("hippo", "fas", "fa-hippo", "animals"),
    new Icon("fish", "fas", "fa-fish", "animals"),
    new Icon("carrot", "fas", "fa-carrot", "fruits & vegetables"),
    new Icon("apple-alt", "fas", "fa-apple-alt", "fruits & vegetables"),
    new Icon("lemon", "fas", "fa-lemon", "fruits & vegetables"),
    new Icon("pepper-hot", "fas", "fa-pepper-hot", "fruits & vegetables"),
    new Icon("user-astronaut","fas", "fa-user-astronaut","users & people"),
    new Icon("user-graduate","fas", "fa-user-graduate","users & people"),
    new Icon("user-ninja","fas", "fa-user-ninja","users & people"),
    new Icon("user-secret","fas", "fa-user-secret","users & people"),

  ];
  console.log(icons);

  // Selezioniamo il container icons

  const container = document.getElementById("icons");

  //inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)
  icons.forEach(icon => {
    const markup = `
    <div>
       <i class="${icon.prefix} ${icon.type}"></i>
       <div class="title">
       ${icon.name.toUpperCase()}
       </div>
    </div>
    `;
    container.insertAdjacentHTML('beforeend', markup);

});


});

/* ---- FUNCTIONS ----*/
// Creiamo una funzione per iterare nell'array e che appenda al container le icone.
// tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array
// tip: il template literal ci puo aiutare con il markup

