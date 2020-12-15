$(document).ready(function () {
 // icone come da milestone 1
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

  // colori come da milestone 2
 const blue = "blue";
  const orange = "orange";
  const purple = "purple";

  //aggiungiamo dei colori come da milestone 2
icons.forEach(icon => {
    if (icon.family === "animals") {
    icon.color = blue;
    } else if(icon.family === "fruits & vegetables") {
      icon.color = orange;
    }else{
      icon.color = purple;
    }
  });

  //inseriamo le icone nel container come da milestone 2
  const container = document.getElementById("icons");
    icons.forEach(icon => {
      const markup = `
      <div>
        <i class="${icon.prefix} ${icon.type}" style="color:${icon.color}"></i>
        <div class="title">
          ${icon.name.toUpperCase()}
        </div>
      </div>
      `;
    container.insertAdjacentHTML('beforeend', markup);

  });


  //estrapoliamo i tipi di icone
  const select = $("#type");
  

  //aggiungiamo i tipi alla select
  select.append('<option value="animals">Animals</option>');
  select.append('<option value="fruits & vegetables">Fruits & Vegetables</option>');
  select.append('<option value="users & people">User & People</option>');

  //al change mostriamo solo le icone filtrate
  //mostriamo come passare un parametro a change e contemporaneamente destrutturiamo
  const elSelect = document.getElementById("type") 
    elSelect.addEventListener("change", event =>{
      const scelta = $('#type option:selected').val();
      const arrayFilter = newIcons.filter(icon => icon.family == scelta);
  
      container.innerHTML= "";  
      arrayFilter.forEach(icon => {
        const markup = `
          <div>
            <i class="${icon.prefix} ${icon.type}" style="color:${icon.color}"></i>
            <div class="title">
              ${icon.name.toUpperCase()}
            </div>
          </div>
        `;
        container.insertAdjacentHTML('beforeend', markup);
      });

      if (scelta == ""){
        newIcons.forEach(icon => {
          const markup = `
            <div>
              <i class="${icon.prefix} ${icon.type}" style="color:${icon.color}"></i>
              <div class="title">
                ${icon.name.toUpperCase()}
              </div>
            </div>
          `;
        container.insertAdjacentHTML('beforeend', markup);
    
      });
    }
  });

/* ---- FUNCTIONS ----*/

});