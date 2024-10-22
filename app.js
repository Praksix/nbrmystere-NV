function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  let nombre = getRandomInt(10);
  
console.log(nombre);

let essai;
let indic = document.querySelector("h2");

function jeu(event) {
    // la position en X et Y de l'endroit où l'utilisateur a cliqué ou fait des trucs
    event.preventDefault();
    console.log(event.target);

   
  
    // Récupérer l'élément de input
    let nbrInput = document.getElementById("nbr");
  
    // Récupérer la valeur
    console.log(nbrInput.value);
  
    // Créer un nouvel élément du DOM
    let newLi = document.createElement("li");
    newLi.textContent = nbrInput.value;
  


    let ul = document.querySelector("ul");
    ul.appendChild(newLi);

    essai = nbrInput.value;


    if (essai > nombre) {
        indic.tinnerHTML = "c'est moins !"
    } else if(essai < nombre){
        indic.innerHTML = "c'est plus !"
    }else {
        indic.innerHTML = "Gagné !"
        
    }
    
  }


// 1. RECUPERER LE NOEUD SUR LEQUEL ON VEUT AGIR
let form = document.querySelector(".jeu");
let indice = document.querySelector("h2");

// 2. AJOUTER UN ECOUTER DEVENEMENT
form.addEventListener("submit", jeu);
