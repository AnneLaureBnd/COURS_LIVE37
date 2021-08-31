// ------ BASES ------

// un commentaire sur une seule ligne 

/* un commentaire sur plusieurs lignes*/

//ecriture en console outil de débugage (page inspecter de google, à droite on a console). On va les placer à des endroits stratégiques. Si on voit qu'ils ne s'affichent pas c'est que l'erreur est dans cette partie de code.
console.log("Coucou le live37 !!!"); 

//ecriture sur la page va s'afficher à l'endroit où y a le script. On peut mettre des balises html autour pour spécifier
document.write("Message sur le site")

//ouverture d'une boite de dialogue : va afficher une petite fenetre en mode pop up sur la plage
alert("attention ça va exploser")

//déclaration d'une vairiable en camelCase
let maPremiereVariable;

//mettre qqch à l'intérieur de la variable, le = sera le contenu de ma variable
maPremiereVariable = "Bonjour";

console.log(maPremiereVariable);

maPremiereVariable = "Au revoir";

// déclaration et affectation en une ligne
//let maPremiereVariable = "Bonjour";

const x = 5;
console.log(x);

//interdit !!!
//x = 7;

let chaineDeCaractere = `
    <p>Bonjour tout le monde</p>
    <p> ,comment vous allez 
    ?l'avion va 
    décoller</p>`;

let isString = true; //ou false    

let toto = null;

let autreVar = undefined;


//exemple :
let prenom = "Cécile";

let nom = "Vilport";

//pour mettre un espace on peut le mettre direct dans les "" ou sinon on le rajoute dans la console
console.log(prenom + " " + nom);

//le ${ ne fonctionne que dans les cotes. on a mis un espace entre les deux chaines pour faire afficher l'espace
console.log(`${prenom} ${nom}`);

//avec les cotes on n'a qu'à mettre le texte et le dollar accolade juste pour les variables. moins galere que les + et "" partout. ${} ne fonctionne qu'avec les cotes ``
console.log(`${prenom} ${nom}, bonjour comment allez vous , vous avez ${x} ans`);

// ou ancienne méthode
console.log(prenom + " " + nom +", bonjour comment allez vous , vous avez " + x +" ans");

//mettre une chaine de caractère en valeur numérique
montant = Number(montant)

//mettre en minuscule 
choice.toLowerCase()

//mettre en majuscule
choice.toUpperCase()

//arrondir le chiffre à 2 chiffres après la virgule
donnee.toFixed(2)

exemple.innerHTML = x; // ou innerText etc ... (affichera du texte dans le HTML)





// ------ PARSE ------

parseInt : nombre entier;

parseFloat : nombre à virgule;





// ------ PROMPT ------

let age = window.prompt("Quel age as-tu ?");

console.log(`Tu as ${age} ans`);





// ------ CALCUL ------


let addition = x + y;
console.log(addition);

let soustraction = x - y;
console.log(soustraction);

let multiplication = x * y;
console.log(multiplication);

let division = x / y;
console.log(division);

let modulo = x % y;
console.log(modulo);

console.log(eval(calcul)) // NON RECOMMANDE !

console.log(`Resultat du calcul = ${eval(calcul)}`)

//L'ordinateur va générer un des 3 choix aléatoirement pour jouer
let ordiNb = Math.floor(Math.random()*3);   // 0, 1, 2. Math.random va générer un nombre entre 0 et 0.99. On le multiplie par 3 puis on l'arrondie pour faire un chiffre entier.





// ------ COMPARATEURS ------

console.log( y == '10'); //égalité standard/ compare la valeur mais pas le type

console.log( y === '10'); //égalité stricte // compare valeur et type de 

console.log( x != y); //différent standard

console.log( x !== y); //différent strict





// ------ CONDITIONS ------

if(age >= 100){
    console.log("Vous êtes centenaire");
    alert("Youpi");
}
else if(age >=18){"+"
   console.log("Vous êtes majeur"); 
}
else{
     console.log("Vous êtes mineur"); 
}


while(isNaN(age) || age<0){ //isNotaNumber
    age = window.prompt("Quel age as-tu ?");
    x = 6;
    console.log(x)
}

cpt = cpt+1;
    cpt+=1;
    cpt++; // /!\ cpt++ veut dire qu'on incrémente après avoir demandé la donnée. Il vaut mieux écrire ++cpt car on demande la veleur de la donnée après incrémentation





//------ ERROR EN CONSOLE ------

console.error();





// ------ REQUETES ------

200 : ok
404 : n'existe pas
403 : la page existe mais pas le droit d'y accéder
500 : traitement de la requête a été interrompue par une erreur fatale côté serveur





// ------ WHILE ------ Boucle, "Tant que". && : et, || : ou (s'écrit avec shift + alt + L )

while(isNaN(secondNombre)){
    secondNombre = prompt("Saisissez un deuxième nombre");
}

while ((arithmetique === "/") && (secondNombre === "0")) {
    secondNombre = prompt("Saisissez une valeur autre que 0")
}





// ------ SWITCH ------
    
    switch(choix){ //choix multiple
    case "1": case "5":   //choix 1 OU 5, ne pas oublier les 2 petits points pour le OU
        console.log("Vous avez gagné un stylo");
        break;
    case "2": case "6":
        console.log("Vous avez gagné un voyage");
        break;  //arrête de chercher si tu as eu déjà eu la réponse
    default:  //valeur par défaut
        console.log("Vous n'avez pas saisi le bon chiffre");
}





// ------ OBJET ------

//un objet
const client = {
    prenom:"Jean",
    nom:"Dupont",
    ville:"Lille"
}

//ajouter une propriété avec sa valeur
client.codePostal = "59000";





// ------ TABLEAUX ------

//déclarer un tableau vide, Pour un tableau on met toujours les crochets
const liste = []; 

//déclarer un tableau plein, on peut mettre tous les types de varaiables. La première valeur est la case 0, puis 1 puis 2 ...
const listePleine = ["Pain","Beurre","Boursin","Chocolat",12,true,["jgkhj","jghkjh"]]; 

//On veut afficher le "Beurre"
console.log(listePleine[1]);

//accéder à une case d'un tableau qui est dans un tableau, ici "jgkhj", la ligne 0 de mon 2eme tableau qui est situé à la ligne 6 de mon premier tableau
console.log(listePleine[6][0]);

//ajouter une valeur à la fin d'un tableau
listePleine.push("Banane");
console.log(listePleine);

//ajouter une valeur à la fin d'un tableau qui est dans un tableau
listePleine[6].push("titi");

//ajouter une valeur au début d'un tableau
listePleine.unshift("Chantilly");
console.log(listePleine);

// ARRAY veut dire Tableau en anglais dans le console.log

push : ajoute une ligne à la fin du tableau;
unshift : ajoute une ligne au début du tableau;
pop : supprime la dernière case;
shift : supprime la première case;


//supprimer la dernière case
listePleine.pop();
console.log(listePleine);

//supprimer la première case
listePleine.shift();
console.log(listePleine);

//join --> transformer un tableau en une chaine de caractère / Je veux que le tableau s'affiche en une seule ligne et je veux que les cases soit séparées par un "/" dans ma ligne de chaine de caractères
console.log(listePleine.join(" / "));

//récupérer la taille d'un tableau
let taille = listePleine.length;
console.log(`Mon tableau contient ${taille} cases.`); //affichera : mon tableau contient 7 cases

//Je veux ajouter en 4ème position (après chocolat), sans supprimer, la case Farine.
//0: sans supprimer, 1: en supprimant une case, 2: en supprimant 2 case
listePleine.splice(4,0,"Farine");
console.log(listePleine);






// ------ LA BOUCLE FOR ------
//je crée une variable qui s'appelle i, qui sera mon index et qui commencera à la case 0, entre chaque tour je vais rajouter 1. Donc tant que i est strictement inférieur à 4.
//dans mon write je vais afficher chaque valeur de la boucle jusqu'à se termine
//LENGTH et pas ght !! ATTENTION SI CA BUG !

const listePleine = ["Pain","Beurre","Boursin","Chocolat"];

//for(initialisation d'un index;condition;incrementation)
for(let i=0;i<listePleine.length;i++){
    document.write(`<p>${listePleine[i]}</p>`)
}

//i est égal à 1 et la boucle v aller jusqu'à 20 avant de s'arrêter
for(let i=1;i<=20;i++){
    document.write(`<p>${i}</p>`);
}

//i est égal à 20 et ira en décroissant jusqu"à 1
for(let i=20;i>0;i--){
    document.write(`<p>${i}</p>`);
}





//------ TIMESTAMP ------

timestamp : heure Unix, nombre exacte de secondes écoulées depuis le 01/01/1970 à 00:00:00 , heure * minutes * secondes => 24*60*60.
Date();





//------ NEW DATE ------

//donner la valeur numérique correspondant à la date donnée sous forme du nombre en millisecondes écoulées depuis le 01/01/1970 00:00:00 UTC
const debutJuillet = new Date('July 01, 20 00:00:00 GMT+0200'); //1593554400000
const debutJuilletNb = Number(debutJuillet/1000);
console.log(debutJuillet.getTime()/1000);

//donner la valeur numérique correspondant au moment présent sous la forme du nombre de millisecondes écoulées depuis le premier janvier 1970 00:00:00 UTC
Date.now()

//pour le convertir dans l'autre sens, ne pas oublier de faire *1000
let date = new Date(orders[i].timestamp*1000);






// ------ FONCTIONS ------

// ARITE :
Nombre d'arguments d'une fonction

//création d'une fonction
function sayHello(nom, prenom){ //les parenthèses doivent contenir des arguments (optionnel). Appeler les arguments évite de déclarer les variables.
    const hello = `Bonjour ${prenom} ${nom}`;
    return hello;

}

//si je veux mettre un argument facultatif :
function sayHi(name, nickname="Mr/Mme") { //Si la personne ne met pas son prénom, ça sera remplacé par la valeur par défaut "Mr/Mme"

//autre façon d'écrire une fonction plus rapidement :
buttonHello.addEventListener('click',()=>{
    alert("Bonjour");
    console.log('Toto');
})

//dans une fonction on peut mettre do
do {
    
}





// ------ THROW DICE ------
//lancer 6 dés de 5 faces
throwDice(6, 5); // 





// ------ DOM ------

//definition 
Document Object Model (DOM);

//attendre le chargement du dom
document.addEventListener('DOMContentLoaded',function(){
}





// ------ WINDOW ------
//L'objet window est l'objet global qui représente un onglet du navigateur

//largeur de l'onglet
window.innerWidth;

//hauteur de l'onglet 
window.innerHeight;





// ------ DOCUMENT ------
//Le document est une propriété de l'objet window, il représente le HTML et on s'en sert pour modifier ou créer toutes choses.






// ------ EVENEMENTS ------

//ajouter un évènement :
buttonHello.addEventListener('click',sayHello);

//supprimer un évènement :
buttonHello.removeEventListener('click',sayHello);

//querySelector
//sélectionner du HTML
let articles = document.querySelectorAll("article");

//sélectionne un élément, le premier qu'il trouvera
let article = document.querySelector("article"); //pour HTML ici sinon pour une div CSS ".red". On met le "." que dans la prenthèse du querySelector. Pas besoin par la suite pour un addEventListener ou remove(...)
    //element = document.querySelector('li:nth-child(2)'); // Sélectionne la 2ème <li>
    
article.style.height="200px";

//on déléctionne une div, avec sa classe on l'enlève et on remplace
divRed = document.querySelector(".red");
divRed.classList.remove("red");
divRed.classList.add("redTopRight");

//ajouter une classe
titles[i].classList.add("green");
        
//effet interrupteur
titles[i].classList.toggle("green");
        
//enlever une classe
titles[i].classList.remove("blue");

//getElementById
//sélection par l'ID
let buttonColor = document.getElementById("changeColor");
    
//ajouter un évènement sur le bouton
buttonColor.addEventListener('click',changeColorBack);
   
//classList
//La propriété classList est utilisé pour ajouter ou enlever des classes CSS aux éléments sélectionnés.

let a = document.querySelector('ul > li:first-child a');
a.classList.add('yellow');
a.classList.remove('test');
//Ici, on a ajouté simplement la classe yellow et on a enlevé la classe test.

//toggle
//La méthode toggle est souvent utilisé pour cacher ou afficher un élément. Cette méthode ajoute une classe si l'élément sélectionné ne possède pas cette classe, elle enlève la classe si l'élément la possède. On peut imaginer cliquer un bouton et quand on le clique, on affiche ou cache un élément.

/*CSS*/
.active {
    display: block;
}
// JS
a.classList.toggle('active');





// ------ KEYBOARDS EVENTS ------

//keydown / keyup / nom de touche : event.code === 'Space'
document.addEventListener('keydown', function(event) {
}





// ------ MOUSE EVENTS ------

//click / dblclick / mousemove / mousedown, mouseup, mouseover, mouseout, contextmenu
document.addEventListener('click', function(event) {
}





// ------ PREVENT DEFAULT ------

//On empêche le comportement par défaut de l'élément :
 event.preventDefault();
 
 
 
 
 
// ------ SET TIME OUT ------

// 1000ms = 1sec

//après le chargement du DOM, on lance une fonction anonyme (c'est quand on crée directement la fonction ici au lieu de mettre une fonction callback)
document.addEventListener("DOMContentLoaded",function(){
    
    //programmer un timer qui déclenche la fonction sayHello au bout de 3 secondes
    let alertId = window.setTimeout(sayHello,3000);
    
    //lorsqu'on clique sur le bouton stop, ça annule le futur déclanchement du timer
    document.getElementById("stop").addEventListener('click',()=>{
        clearTimeout(alertId);
    })
})

function sayHello(){
    alert("Bonjour");
}





// ------ SET INTERVAL ------

//Cette méthode va nous permettre de définir une action qui sera exécutée à intervalles réguliers. S'écrie exacement pareil que le setTimeOut
let  intervalID  =  window.setInterval(callBackFunction [, delay, param1, param2, ...]);

//clearInterval
//Cette méthode va nous permettre d'arrêter le "timer" à tout moment.

window.clearInterval(intervalID);





// ------ FPS ------

//va être exécute à chaque fois que le navigateur fait appel au rafraichissement de l'écran auprès de la machine du client (rafraichissement assuré en grande partie par le processeur graphique).
//requestAnimationFrame est plus adapté à la création d'animations fluides,
//le rafraichissement va dépendre de la machine client, en général un écran est rafraichi 60 fois par seconde, on dit que l'on affiche 60 FPS (frames par seconde)
//le navigateur va optimiser et préparer le rafraichissement, contrairement à un setInterval, il sait ce qu'il a à faire au prochain rafraichissement et va le prioriser et l'optimiser,
//le navigateur ne fera l'action de rafraichissement que si l'onglet du navigateur comportant le script est actif, contrairement à setInterval et setTimeout qui continuerons à être exécutés même si un autre onglet est actif (donc on optimise la charge du navigateur).

let div;
let cpt = 0;
document.addEventListener("DOMContentLoaded", function() {
    div = document.getElementById("result");
    window.requestAnimationFrame(updateTime);
});

function updateTime() {
    window.requestAnimationFrame(updateTime);
    div.innerHTML = ++cpt; //on va afficher dans le HTML le compteur qui s'incrémente à chaque tour
}

//Cette méthode va nous permettre d'arrêter l’exécution du rafraichissement à tout moment.
window.cancelAnimationFrame(updateTime);





// ------ CANVAS ------

// DANS LE HTML ! On ne le définie pas dans le CSS car il sera étiré. On lui applique sa hauteur et sa largeur dans le HTML.
<canvas id="monCanvas" width="700" height="450">
Votre navigateur ne supporte pas le canvas
</canvas>

//En canvas on efface l'image et on la repositionne ailleurs pour avoir l'impression de mouvement.
// On vide le Canvas avant de redessiner
ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);

//On charge le DOM :
document.addEventListener("DOMContentLoaded", function(){

//Commencer le JS, on sélectionne le canvas au début de la feuille JS :
let canvasDom = document.getElementById("monCanvas"); //synthaxe préférée. sinon : let canvasDom = document.querySelector("#monCanvas"); 

//on détermine le contexte :
let ctx = canvasDom.getContext(`2d`);





// RECTANGLE 

//on détermine la couleur du rectangle avant de le dessiner (comme nous quand on choisit d'abord la couleur du feutre avant de dessiner)
ctx.strokeStyle = "#FF00DD";

//on détermine l'épaisseur du contour
ctx.lineWidth = 3;

//définir une couleur de remplissage
ctx.fillStyle = "#175EF6";

//dessiner un rectangle :
ctx.strokeRect(50,150,100,300); //x, y, w, h : x et y par rapport au point supérieur gauche. x: horizontal, y: vertical. puis width et height

//si je ne change pas mes données et que je redessine un rectangle, il concervera la couleur et l'épaisseur. Il faut lui demander de changer pour qu'il change de couleur et épaisseur.

//créer un rectangle rempli
ctx.fillRect(500,250,160,30);

//puis le dessiner
ctx.strokeRect(500,250,160,30)





//CERCLE

//commencer un tracé
ctx.beginPath();

//définir des points et relier des points
//relier deux points
lineTo();

//se déplacer à un point spécifique
moveTo();

//dessiner un arc, un cercle
ctx.arc(circle.x,circle.y,radius,0,Math.PI*2,false); //arc( x, y, radius, startAngle, endAngle, sensAntiHoraire )

ctx.fill();
ctx.stroke();
ctx.closePath();





// TEXT

//déterminer la police de caractère
ctx.font = "bold 18px Verdana";

//écrire le texte
ctx.fillText("Coucou", 500,20); //Coucou sera écrit à 500px du bord gauche et 20 du haut. Il prendra la dernière couleur choisie dans le fillStyle au dessus. Privilégier fillText que strokeText car sinon ca va faire un contour pas très propre.

//contour du texte
ctx.strokeText();

//autres propriétés
ctx.textAlign();
ctx.textBaseline();

//écrit un autre texte après le premier
// On ecrit World et on se sert de la méthode `measureTexte` pour le place après Hello !
ctx.fillText('world', 10+ctx.measureText('Hello').width+10, 50);
    
//si on veut écrire un 3e texte
// On ecrit '!'
ctx.fillText('!', 10 +ctx.measureText('Hello').width + ctx.measureText('world').width+20, 50);





// IMAGE

//on déclare l'image
let myImg = new Image();

//il va chercher l'image
myImg.src = "http://lorempixel.com/output/nature-q-c-101-81-8.jpg"; //"https://picsum.photos/200/300?grayscale"

//on lui demande de charger l'image
myImg.onload = function(){
    
//puis on lui demande de se placer à 300px du haut et 300px de la gauche
ctx.drawImage(myImg,300,300);
    }
})





// ------ CLASSES ------

//la classe est comme un moule, le nom de la classe commence toujours par une majuscule !
//la classe ne doit être utilisée que pour quelque chose en rapport avec sa classe.
//une méthode est une fonction dans la class. Les fonctions dans les classes deviennent des méthodes.

class Animal {
    //ici on y place les méthodes, c'est à dire toutes les caractéristiques communes de chaque animaux (il mange, il a une vitesse, des pattes ...)
    mange () {
        console.log('l\' animal mange');
    }
    
    //ceci est une méthode avec un argument
    galope (vitesse){
        console.log(`l'animal galope à une vitesse de ${this.vitesse}`);
    }
}

//un objet qui représente l'appel de ma classe
let chien = new Animal; // ou new Animal (); dépend de la convention

//appel d'une méthode
chien.mange();
chien.galope();
chien.galope(10); //ne va pas fonctionner, il écrira en console "l'animal galope à une vitesse de undefined"


//Il nous manque le constructor pour que ça soit prit en compte.



//Constructeur :

class Animal {
    //le constructeur démarre dès que la class est appelée
    constructor () {
        this.vitesse = 10; //je fais appelle à la vitesse
    }
    
    mange () {
        console.log('l\' animal mange');
    }
    
    galope (vitesse){
        console.log(`l'animal galope à une vitesse de ${this.vitesse}`); //m'affichera "(...) à une vitesse de 10"
    }
    
    //accesseurs
    
    setVitesse(vitesse){
        this.vitesse = vitesse //this.vitesse affectera la vitesse de tout le constructor
    }
    
    getVitesse(){
        console.log(this.vitesse)//this.vitesse va se référer à la vitesse de toute la class. juste ${vitesse} serait resté dans notre méthode.
    }
}

//la création de l'objet l'appelle une instanciation
//c'est comme si on créait une copie
let chien = new Animal;

chien.mange();

chien.galope();//donnera 10

chien.galope(20) //donnera encore 10 car pas encore modifié

chien.setVitesse(30) //30

chien.getVitesse()//30

chien.galope(100) //ne fonctionne pas, sauf si je met this.vitesse après galope (vitesse) {
    
    
//Exporter la class pour un autre dossier (un fichier par class)
export default Animal;

//L'importer dans une autre feuille JS, écrire cette ligne tout en haut :
import Animal from './Animal.js';

//dans le html, rajouter cette ligne :
<script type="module" src="main.js"></script>//le module sert pour l'import et export




//On peut rajouter une classe enfant à la classe parent :
class Rabbit extends Animal {
    
//Quand on hérite d'une classe en JavaScript, si les deux classes ont un constructeur on doit appeler la méthode

constructor() {
        super(); // Le constructeur de la classe parente.
    }

    hide() {
        console.log(`${this.name} se cache!`);
    }

    stop() {
        // Appel la methode stop presente dans le parent 
        super.stop(); // call parent stop
        this.hide(); // and then hide
    }
}

// ma classe Rabbit herite de animal . elle prend pour acqui toutes ses methodes 
let lapin1 = new Rabbit('bug bunny')//on peut écrire dans la parenthèse directement le nouveau nom car on a un contructeur avec this.name et argument name.




//autre exemple avec comme premier fichier :
class Request {
    
    getInputs(inputs) {//va récupérer les inputs de mon formulaire
    
        inputs.forEach(input => {//pour chaque élément. un for each ne prend pas en compte les éléments vides, par exemples les cases vides d'un tableau.
        
        //exemple de Philippe :
        //classe = ["Teo", "Mohamed", "Dawud", "Dorine"];
        //classe.forEach (eleve => {  
        //console.log(eleve);})
        //il n'y a pas besoin de déclarer élève. le for de for each le fait tout seul
            
            console.log(input.value);
        });
    }
}

export default Request;

//exporter plusieurs fonctions sans exporter toute la classe
export { fonction 1, fonction 2 };

//pareil pour l'import
import { fonction 1, fonction 2 } from './fonctions.js;



//et comme 2e fichier

'use-strict';

import Request from './request.js';

function recupInputs(event){
    
    //arrêter de recharger la page, on ne veut pas que le comportement de base se fasse.
    event.preventDefault();
 
    console.log(event);
    
    let request = new Request();
    
    let inputs = document.querySelectorAll('input');
    
    request.getInputs(inputs);
    
}

document.querySelector("#form").addEventListener('submit', recupInputs);





//CONSTRUCTOR

class CustomErrorsConstructor extends Error {
    constructor(message, name) {
        // attention le constructeur de la classe Error n'accepte qu'un argument
        super(`${message} ${name}`);
        this.message = message;
        this.name = name;
    }

}





//Pour résumer, la composition, c'est simplement quand une classe est composée d'autres classes, ou quand un objet comporte une ou plusieurs références d'autres objets.

//L'héritage, c'est quand une classe hérite de méthodes et propriétés d'une autre classe.

//Exemple : ici, on a donc une classe qui hérite : la classe CustomErrors, et une classe Form dépendante de la classe CustomError.




//En JavaScript, Les prototypes ne sont pas un type de données, c'est comme une fonction. Les données c'est ce qu'on met dans une fonction (ou string etc)

//js : piloter, aiguiller l'internaute dans ses decision, php va le sécuriser.

//POO: va permettre de mieux ranger le code, plus maintenable, plus pro, mieux le faire évoluer. Empecher répétition de code. Va plus sécurier car mieux contrôler les entrées dans notre programme. On sécurise, on met beaucoup de rêgles. Le programme sera utilisable en toute sécurité et sans bugs. Gagne en temps et lisibilité du code. Deviendra systématique avec l'expérience.

// LOCAL STORAGE : endroit de notre navigteur où on peut stocker des infos

post(data) {
    localStorage.setItem('valid-contact', JSON.stringify(data));
}






// ------ FRAMEWORK ------

Outil basé sur un langage. framework js, php, css ...Animal
Permet de faire des choses en écrivant moins de code. Va simplifier le travail, gagner du temps.
Node js, angular, react, jquery (est une librairie, considéré aussi comme framework).chaineDeCaractere
Jquery : manipulation du dom
Vue JS: dédié applications, dans le développement d applications js. Pas mal de formulaires.
Bootsrap
Symphony
...





// ------ VUE JS ------

Vue.js est un framework JavaScript qui permet de développer des interfaces utilisateur de manière simple et efficace.

Analyse constament ce qu on effectue. 
HTML : v-model="message" : dès que je vais taper quelque chose de dans, il va être interpréter de façon dynamique et réactive. 
Data biding. Données bi directionnelles.

Computed properties : va trier, filtrer la data pour la ranger et ou la transformer. Manipuler les données puis utiliser le résultat pour le Vue JS. 



//HTML
Dans le head HTML :
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>


Dans le body :
<div id="app"></div>




<input type="text" id="message" v-model="message"></input>

<p>{{message}}</p> //synthaxe moustache
<p v-text="message"></p> //synthaxe directive
<p v-html="message"></p> //directive aussi mais va afficher du HTML


// TABLEAU
<li v-for="(article, i) of listeDeCourses">{{i}}:{{article}}</li>

// OU
<li v-for="article of listeDeCourses" v-text="article"></li>


//OBJET
<td v-for="info in personne">{{info}}</td> // for in pour objet
<tr v-for="ami of amis"></tr> // for of pour tableau
<td v-for="coord in ami">{{coord}}</td>

//DIRECTIVES
<ul>
    <li v-for="person in persons" v-if="person.age === 18">
        {{ person.name }}
    </li>
    <li v-else-if="person.age > 10 && person.age < 35">
        {{ person.name }}
    </li>
    <li v-else>
        {{ person.name }}
    </li>
</ul>

//JS
//on instancie toujours une nouvelle "Vue"
new Vue({
    //Vue.js recherche un élément par son ID, qu'on lui spécifie quand on l'instancie.
    el:"#app", //el : propriété
    components: { TaskList }, // NE pas oublier d'enregistrer le composant. (autre fichier vue)
    data:{ //obligatoire. C'est une propriété
        message:'',
        listeDeCourses:["pain", "beurre", "boursin"], //tableau
        
        personne:{name:"John Doe", tel:"0600000000"}, //objet
        
        amis:[this.personne,
            {name:"John Doe",tel:"0612451245"},
            {name:"Victor Hugo",tel:"0456454564"},
            {name:"Emile Zola",tel:"0612451245"},
            ]
    }
    computed:{
        //Une 'Computed Property' est un objet qui contient des méthodes.

        //C'est l'équivalent du Data Object mais dynamique.

        //Une 'Computed Property' est calculée de manière dynamique en fonction de la valeur d'autres propriétés.
    }
    methods:{
        
    }
});

//Pour placer le composant dans l'html
<task-list></task-list>

//EVENT HANDLING

// le @submit.prevent pour e.preventDefault()
//nous allons appeler la méthode createContact() quand on envoie le formulaire.
/*<form action="" @submit.prevent="createContact" > 
    <label for="name">Name</label> 
        <input type="text" v-model="name" id="name"> 
    <label for="email">Email</label> 
        <input type="email" v-model="email" id="email"> 
    <label for="phone">Phone</label> 
        <input type="tel" v-model="phone" id="phone"> 
    <button type="submit">Submit</button>
</form>

<button @click="doSomething">Cliquer</button> 
    <!--    le .prevent pour un lien-->
<a @click.prevent="intercept" href="test.php">Lien quelconque</a>*/

//FONCTION FLECHE
=> Une fonction flèche sur une ligne effectue un retour implicite des données.

//PROPS
//Les props sont des propriétés que l'on passe à un composant à l'endroit où on se sert du composant. Il peut avoir n'importe quelle valeur, des images d'un slider par exemple
                        
                        



// ------ LOCAL STORAGE ------

Permet de sauvegarder les datas au sein de notre navigateur. (Pas l'ordinateur).
Pendant une durée indéterminée

!= Session storage : se stock pendant la durée de la session. Si on se déconnecte on perd les données (ou si on est plus actif etc ... Au bout de 24' inactif on perd la session)

//Pour les données simples : pas de tableau, pas d'objets

let prenom = "Cécile";
let nom = "Vilport";

//enregistrer dans le local storage
window.localStorage.setItem('datas', prenom);

//enregistrer dans le session storage
window.sessionStorage.setItem('datas', nom);

//supprimer tout le local storage (vidé)
window.localStorage.clear();

//supprimer juste une clé en particulier (supprime définitivement)
window.localStorage.removeItem('datas');

//récupérer des infos qui sont dans le storage
let recup = window.localStorage.getItem('datas');
console.log(recup);



//pour les données complexes, il faut les transformer en format simple

//créer un tableau
let tableau = ["pain", "beurre", "boursin"];
console.log(tableau); // va s'afficher comme un tableau array

//transformer le tableau en chaine de caractères grâce à JISON
tableau = JSON.stringify(tableau);
console.log(tableau);

//enregistrer dans le storage
window.localStorage.setItem('tableau', tableau);

//on aurait pu le faire en une seule ligne sinon :
//window.localStorage.setItem('tableau',JSON.stringify(["pain", "beurre", "boursin"]));

//récupère
let recupTab = window.localStorage.getItem('tableau');

//retransforme le tableau en tableau : JSON => tableau
recupTab = JSON.parse(recupTab);

//si on avait voulu le faire en une seule ligne
//recupTab = JSON.parse(localStorage.getItem('tableau'));


//tester si une clé existe. exemple de récupération de panier sur une page sur laquelle on revient plus tard
let panier = localStorage.getItem('panier');
console.log(panier);

if(panier==null){
    panier=[];
}
else {
    panier = JSON.parse(panier);
}





//-------- AJAX --------

/*
JS envoie des requêtes HTTP vers le serveur pour obtenir des infos

Asynchronous JavaScript And XML

On n'utilise plus XML mais JSON
*/



/*-- FETCH --*/

// 0n construit une url avec le constructeur URL.
let url = new URL('http://localhost/JS6.1/server/getjson.php');

// On y ajoute des paramètres
url.searchParams.set('prenom', contact.prenom);
url.searchParams.set('nom', contact.nom);
// url est maintenant http://localhost/JS6.1/server/getjson.php?prenom=test&nom=test

// avec "=>" return est implicite.

fetch(url); //est une promesse, requête de type GET

fetch(url)
    .then(response => response.json()) //on parse la réponse. response.text() peut également être utilisé ici
    .then(data => {
        document.getElementById(
            'getResponse'
        ).innerHTML = `${data.results.prenom} ${data.results.status}`;
    })
    .catch(err => console.error(err));
    
 
    
/*-- VERSION ASYNCHRONE --*/
    
async function getRequest(e) {
    let response = await fetch(url);
    let data = await response.json();
    document.getElementById('getResponse').innerHTML = `${data.results.prenom} ${data.results.status}`; 
}



/*-- VERSION POST --*/

let formData = new FormData(this); // récupération du formulaire

// Le premier argument du constructeur est notre url, le second est un objet option
let req = new Request('server/postjson.php', {
    method: 'POST',
    body: formData,
});

// On a la requête, on peut envoyer
fetch(req)
    .then(res => res.json())
    .then(data => {
        document.getElementById('postResponse').innerHTML = `
        <p>status:${data.results.status}:</p> <p>nom:${data.results.contact.nom},</p><p>prenom: ${data.results.contact.prenom}</p>`;
    })
    .catch(err => console.error(err));
    
    
    
/*-- EN JQUERY --*/

//requête GET :

function jqueryGetRequest(e) {
    e.preventDefault();
    $('#getResponse').html(`<p>Loading Informations</p>`);
    
    // méthode jQuery qui formate les données d'un formulaire
    const data = $(this).serialize();

    $.get(`server/getjson.php?${data}`, function (res) {
        $('#getResponse').html(
            `<p>${res.results.status}</p><p>${res.results.prenom}</p>`
        );
    });
}

//requête POST :

function jqueryPostRequest(e) {
    e.preventDefault();
    $('#getResponse').html(`<p>Loading Informations</p>`);
    
    // autre méthode jQuery qui formate les données d'un formulaire
    const data = $(this).serializeArray();

    $.post('server/postjson.php', data, function (res) {
        $('#postResponse').html(
            `<p>${res.results.status}</p><p>${res.results.contact.nom}</p><p>${res.results.contact.prenom}</p>`
        );
    });
}



/*-- PROMESSES --*/
async function getUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Une petite modification pour utiliser `reject`, 
            // la promesse gèrera automatiquement l'erreur
            if (localStorage.getItem('users') === null) {
                reject(new Error('users is null'));
            }
            resolve(localStorage.getItem('users'));
        }, 1000);
    });
}

btn.addEventListener('click', async function () {
    // pour pouvoir utiliser await.
    let users = await getUsers();
    console.log(users);
        
    console.log('promesse finie'); // Ne s'exécute pas tant que le code avant n'est pas finie.
});





//-------- PAIEMENT --------

Stripe

On met le lien script vers la biblioteuque du formlaire de paiement,

Prevoir le montant du paiement avec le formulaire
Créer le formulaire de paiement

"intention de paiement"
& paiement en lui même 

code fournis par l appli avec une clef de sécurité
on définie des styles pour le form 
créer un événement dans le template
avec le fetch ils envoient le détail de commande

PHTML et JS 