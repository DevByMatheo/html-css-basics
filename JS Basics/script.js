//console.log("Problème !");  console.error("Problème !"); console.clear();

/*
    document.write()
    alert() / confirm()
    prompt()
    parseInt()
*/ 
 
//const PI = 3.14; -> valeur constant mais contenu modifiable pour tableaux / objet, ...

// document.write(age++); l'incrémentation age +1 se fait ap l'affichage != ++age
// === Egalité valeur et type / !== type ou valeur -> True


let nom = "Mathéo";

if(nom == "Mathéo") {
    document.write("OUI");
    let age = prompt("Comment âges as tu ? ");
    age = parseInt(age);

    if(0 < age && age <= 18 ) {
        document.write("<br> Vous êtes mineur");
    } else if( age >= 18 ) {
        document.write("<br> Vous êtes majeurs");
    } else {
        document.write("Vous avez menti sur votre age"); 
    }
    
    // ou

    let res = (age >= 18) ? "majeur" : "mineur";
    document.write("<br> Vous êtes " + res);

} else {
    document.write("<br> NON");
}


switch(nom) {
    case "Mathéo":
    case "mathéo":
        document.write("<br> OK");
        break;
    
    default :
        alert("<br> Pas OK");
        break;
}
