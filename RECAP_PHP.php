<?php include "header.php"; ?>

<main></main>

<?php include "footer.php"; ?>

Intervient au moment de générer la page de manière dynamique.
Un navigateur ne sait lire que du HTML.

JS quand on navigue, PHP avant qu'on affiche la page, vient générer notre page.

Architecture en MVC.

Ne pas fermer un fichier php si il ne contient pas de HTML car ça nous permet de mieux voir les erreurs et il se ferme automatiquement à la dernière ligne de code.

Le dossier index se terminera par index.phtml car il y a du php et du html qu'on range dans un dossier views.

L'include est à considérer comme un copié collé. On inclut un dossier là où on le copierait.

Racine : index.php, + dossier views avec index.phtml





<!-------- DECLARATION D'UNE VARIABLE -------->

<?php
$maVariable = "Hi !";

$place = 'la planète';
$msg = "Salut $place";
$msg2 = 'Salut' . $place;
echo($msg);

$user = new User();
$msg = "Salut {$user->getFirstName()}";
echo($msg);

?>;





<!-------- CONCATENATION -------->

Des chaînes à guillemets simples '', on concatène deux chaînes grâce au signe .
Des chaînes à guillemets doubles "" permettent d'intégrer les variables directement à la chaîne 





<!-------- TYPAGE / HINTING -------->

: string <!--chaine de caractères-->
: int <!--integer : nombre entier-->
: float <!--nombre à virgule-->
: bool <!--booléen : true ou false-->
: null <!--valeur null-->
: array <!--tableau-->
: object <!--objet-->
: iterable
: callable
: ?string <!--string ou rien-->
: ?int <!--nombre entier ou rien-->
: ?null <!-- peut être substitué avec la valeur null -->





<!-------- TYPAGE STRICT -------->

<!--afin d'éviter les erreurs, forcer un type-->

<?php

declare(strict_types=1);

?>





<!--On peut mettre une valeur par défaut dans une fonction : -->

<?php

function appendPunctuation(string $str, string $punctuation = '.'): string {
    return $str . $punctuation;
}

echo appendPunctuation('Salut');

?>





<!-------- TABLEAU ASSOCIATIF -------->

<!--Contrairement au tableau à index numériques, le tableau
associatif n'utilise pas des clés numériques mais des strings
arbitrairement fixées par le développeur.-->

<?php

$values = [
    'vegetable' => 'Échalote',
    'fruit' => 'Fraise'
];

$x = $values['vegetable'];

?>





<!-------- COMPARAISONS -------->

<?php

<, <=, >, >=, !=, !==, ==, ===

?>





<!-------- CONVERSION -------->

<!--fonction intval-->

<?php

$a = '1';  // '1'
$b = (int) '1';  // 1
$c = (float) '1';  // 1.0
$d = (bool) '1';  // true

?>





<!-------- BOUCLES -------->

<!-- WHILE -->

<!--La boucle while continue de tourner tant que sa condition est évaluée à true.-->

<?php 

$i = 1;

while ($i < 4) {
    echo $i;
    ++$i;
}

?>

<!-- FOR -->

<!--Notre tableau à index numériques est parcouru de la même manière qu'on parcourt un Array en javascript. On déclare un itérateur, et on l'incrémente à chaque tour de boucle en s'en servant comme clé numérique, jusqu'à atteindre la taille totale du tableau.-->

<?php 

$values = ['A', 'B', 'C', 'D'];

for ($i = 0, $max = count($values); $i < $max; ++$i) {
    echo $values[$i];
}

?>





<!-- FOREACH -->

<!--permet notamment de parcourir un tableau associatif (ou numérique). En effet, si une boucle for avec un itérateur est suffisante pour un tableau à index numériques, par nature elle ne peut pas boucler à travers des index associatifs.-->

<?php

$values = [
    'msg' => 'Salut',
    'name' => 'Jacques',
    'age' => 45,
    'city' => 'Rennes',
];

foreach ($values as $key => $value) {
    echo("Clé : $key.");
    echo('<br/>');
    echo("Valeur : $value.");    
}

?>





<!-------- CONNEXION A LA BDD -------->

<!--#sql-->

Pour se connecter avec fichier index.php: 

<?php

try {
    $bdd = new PDO('mysql:host=localhost;dbname=live-37_micromania;charset=utf8','cecilev','motdepasse') /*bdd est un nom random qu'on choisit et qu'on donne pour notre base de données = serveur, dbname = base, identifiant connexion, mot de passe de connexion, encodage.
        Soit tu essayes de te connecter, sinon si erreur va dans le catch suivant :*/
}

catch(Exception $e) 
{
    echo 'Probleme de connexion à la bdd';
    echo $e->getMessage();
}

//chercher les jeux en base de données

//requete SQL
$query = "SELECT nom_jeu, prix_jeu FROM jeux";

//préparer ma requete
$queryPrepare = $bdd -> prepare($query);

//executer la requete
$queryPrepare -> execute();

//recupération des données
$jeux = $queryPrepare -> fetchAll()(PDO::FETCH_ASSOC); //fetchAll() : je récupère TOUS les jeux. FETCH_ASSOC : tableaux associatif. fetch seul pour un seul.

//afficher en haut les données
var_dump($jeux);

require 'views/index.phtml';

?>

<!-- ------ dans le dossier phtml : -------->
<body> 
    <ul>
        <?php foreach($jeux as $jeu): ?>
        <li><?= $jeux['nom_jeu'] ?> : <?= $jeu['prix-jeu'] ?> €</li>
        <?php endforeach; ?>
    </ul>
</body>
<!-- va afficher une liste à puce, le nom du jeu, le prix et un € -->


<!-- ON REVIENT A LA PAGE PHP SUR LAQUELLE ON RAJOUTE CA :-->

<!-- on veut afficher le jeu avec l'id 6 -->

<?php 

//requete SQL
$id=6;

$query = "SELECT nom_jeu, prix_jeu FROM jeux WHERE id_jeu = ?";

//préparer ma requete
$queryPrepare = $bdd -> prepare($query);

//executer la requete
$queryPrepare -> execute([$id]);

//recupération des données
$jeux = $queryPrepare -> fetchAll(PDO::FETCH_ASSOC); //fetchAll() : je récupère TOUS les jeux. FETCH_ASSOC : tableaux associatif.

//afficher en haut les données
var_dump($jeux);

?>


<!--dans le phtml on rajoute :-->

<h2>Affichage du jeu qui est tout seul </h2>

<?= $jeu['nom_jeu'] ?> : <?= $jeu['prix_jeu'] ?> €

<!-- Les étiquettes doivent avoir les mêmes noms que les champs SQL -->

<!-- Si on crée une variable $id = 6; n'importe qui pourrait pirater notre site car tout le monde peut le modifier donc on met un "?" dans l'id jeu du $query et on le remet dans le tableau execute -->

<!-- PDO est plus sécurisé car interprété comme une chaine de caractère -->


POUR PLUS DE FACILITE :

<?php

try {
    $host = 'localhost';
    $base = 'live-37_micromania';
    $user = 'cecilev';
    $password = 'password';
    
    $bdd = new PDO("mysql:host=$host;dbname=$base;charset=utf8",$user,$password);
}

?>


<!--Créer un lien quand on clique :-->

<!--dans phtml :-->

<a href="jeu.php?id=3&nom=autre_info">Lien avec passage de datas</a> <!--le "?" va lancer la page en lui transmettant une information à laquelle je donne une id et une valeur de 3-->


<!--dans php :-->

<!--pour récupérer le paramètre qui est transmis dans l'url-->

<?php

$id = $_GET['id'];
$nom = $_GET['nom'];
echo $id;
echo $nom;

?>


<!--Evite de pouvoir modifier le code en postant un commentaire-->
<p><?= htmlspecialchars($comment['comment_description']) ?></p>





<!-------- INCLUDE / REQUIRE -------->

<?php

include ''; /*mettra juste un message d'erreur si il y a un bug et continuera*/
require ''; /*beaucoup plus strict, mettra un gros message d'erreur et stopera l'execution du programme*/

?>





<!-------- ISSET -------->

<!--La fonction isset permet simplement de savoir si une clé existe dans un tableau.-->

<?php

if (isset($_POST['nickname']) && isset($_POST['password'])) {
    echo $_POST['nickname'];
    echo '<br />';
    echo $_POST['password'];
}

?>





<!-------- VARIABLES SUPER GLOBALES -------->

<?php

$_POST; /*déclarée comme un tableau. une requête POST transporte les données de manière transparente, discrètement glissées dans ses métadonnées. POST est plutôt là pour envoyer quelque chose au serveur.*/
$_GET; /*requêtes. une requête GET les transporte directement dans l'URL. généralement utilisée pour demander à voir quelque chose*/
$_SESSION; /*partager et faire persister des informations entre plusieurs appels à la même page, ou entre plusieurs pages du même domaine. Durée de vie générale de 24'*/
$_COOKIE;
$_FILES; /*tableau associatif des valeurs uploadées au script courant via le protocole HTTP et la méthode POST.*/
$_SERVER; /*ce sont des valeurs utiles que nous fourni le serveur. Pour les afficher, il faut indiquer ce qu'on demande entre crochets puisque que c'est un array.*/

?>





<!-------- MERISE/MODELISATION -------->

_ Découverte des différents acteurs de ce système.
_ Révéler les différents flux d'informations.
_ Application des régles normalisées de création des objets de la base de données





<!---------- REGLES DES CLASSES ---------->

<!--Régle 1: Chaque acteur est une classe.-->

<!--Régle 2: Chaque relation (un flux reliant deux acteurs ou plus) devient une méthode portée (en général) par le destinataire du flux.-->

<!--Régle 3: Chaque table intermédiaire devient une classe.-->

<!--Régle 4: On cherche si deux objets n'ont pas un patrimoine commun, dans ce cas on créera un objet de base à ces 2 objets, dont ils hériteront.-->

<!--Régle 5: On cherchera éventuellement à parfaire le modéle objet en pensant à des développements futurs.-->

<?php

class Test 
{
    
}

$variable = new Test();
/*$variable : variable d'instance
new Test() : construire un objet selon le modéle fourni en argument.*/

?>





<!---------- CONSTRUCTOR ---------->

<?php

class Personne {
    function __construct() {
        echo "Je suis dans le constructeur de Personne\n";
    }
}

class Auditeur extends Personne {
    function __construct() {
        parent::__construct();
        echo "Je suis dans le constructeur d'un étudiant\n";
    }
}

$toto = new Auditeur();

?>





<!---------- DESTRUCTOR ---------->

<?php

__destruct () : void

//OU

parent::__destruct();

?>





<!-------- VISIBILITE -------->

<?php

public string $variable /*accessible partout par tout le monde*/
private string $variableSeconde /*accessible seulement dans la classe*/
protected int $variableTer /*accessible au sein de la classe mais aussi depuis les classes filles*/

/*Les objets de même type ont accès aux membres privés et protégés les uns des autres, même s'ils ne sont pas la même instance. Ceci est dû au fait que les détails spécifiques de l'implémentation sont déjà connus en interne par ces objets.*/

?>





<!---------- ACCESSEURS ---------->
<!--getters-->

<!--C'est une méthode publique, qui permet d'accèder en lecture à une propriété privée.-->





<!---------- MUTATEURS ---------->
<!--setters-->

<!--C'est une méthode publique, qui permet d'accèder en écriture à une propriété privée (donc, pour modifier sa valeur).-->
<!--permet d'embarquer un code de contrôle de cohérence de la nouvelle valeur à enregistrer.-->





<!-------- COOKIES -------->

<!--Déterminer nous même sa durée de vie.
Ensuite le cookie va se supprimer.
Durée exprimée en secondes.

Infos non  confidentielles.

On enregistre si la personne a déjà cliqué sur oui ou non.

On stock de la chaine de caractères.

index.php
cookie.php
index.phtml 

3 paramètres obligatoires : 
étiquette, valeur, durée de vie en seconde timestamp
-->


<?php

time() -> donne le timestamp actuel
time() + 30*24**3600 -> dans 1mois

=> setcookie('prenom','Cécile', time() + 30*24**3600);

/*paramètres non obligatoires :*/
=> setcookie('prenom','Cécile', time() + 30*24**3600, '/admin', 'live-37.ide.3wa.io', true, true);

/*endroit sur mon site qui a le droit d'accéder au cookie, domaine sur lequel le cookie sera accessible, le lien après le http, pour éviter de le lire d'ailleurs.*/
true /*: que les sites sécurisés en https qui auront le cookie */
true /*: httponly, évite d'avoir accès en javascript, accès possible seulement par le protocole http.*/

//fonctionne aussi avec 
setrawcookie();

/*pour accéder au cookie on utilise une variable super globale :*/
$_COOKIE;
?>

<!--PHP supporte les cookies HTTP de manière transparente.

Les cookies sont un mécanisme d enregistrement d informations sur le client, et de lecture de ces informations.

Seulement du texte sur le poste client.

A appeler avant le code HTML;

On peut écraser un cookie existant en le rappelant et en mettant les mêmes premiers paramètres.-->

<!--On peut le SUPPRIMER également :-->

<?php

unset($_COOKIE['3waDP']);

?>

<!--4ko de taille et 20 max par domaine.-->





<!---------- FILES ---------->

<!--formulaire d'upload de fichier en HTML-->

<form enctype="multipart/form-data" action="traitement.php" method="post">
    
  <input type="hidden" name="MAX_FILE_SIZE" value="30000" />
  
  Envoyez ce fichier : 
  
  <input name="userfile" type="file" />
  
  <input type="submit" value="Envoyer le fichier" />
  
</form>


<!--côté PHP-->

<?php

$uploaddir = '/var/www/uploads/';

$uploadfile = $uploaddir . basename($_FILES['userfile']['name']);

echo '<pre>';

if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
    
    echo "Le fichier est valide, et a été téléchargé
           avec succès. Voici plus d'informations :\n";
           
} 

else {
    echo "Attaque potentielle par téléchargement de fichiers.
          Voici plus d'informations :\n";
}

echo 'Voici quelques informations de débogage :';

print_r($_FILES);

echo '</pre>';

?>





<!---------- HEADER() ---------->

<!--Règle importante : l'appel de cette fonction doit se faire avant tout envoi au navigateur (instruction echo, print, espace blanc, balise html...) sous peine de générer une erreur de type Headers already sent...-->

<!--redirection temporaire, non prise en compte pour le référencement google-->

<?php

header ('Location:index.php');

?>

<!--pour une redirection permanente et prise en compte du référencement google : -->

<?php   

  header('Status: 301 Moved Permanently', false, 301);  
  
  header('Location: adresse_de_la_page_B'); 
  
  //OU
  
  header(Location : adresse_de_la_page_B, false, 301);
  
?>





<!---------- MVC ---------->

<!--Model Vue Controler-->

<!--
Modèle : gère les données du site
Vue : affichage
Contrôleur : gère la logique du code qui prend des décisions
-->





<!---------- TAMPON ---------->

<!--Les valeurs tampons permettent de mettre des données "de côté" et les ressortir quand on en a besoin-->

<?php

ob_start();

?>





<!---------- SESSION ---------->

<?php

session_start(); /*à placer en haut de la page index.php. Pas de paramètres. Toujours true.*/
//elle vérifie l'état de la session courante. Si elle est inexistante, alors le serveur la crée sinon il la poursuit.
//si oubli d'appel : headers already sent...

?>

<!--enregistrer une nouvelle variable de session-->

<?php
  // Démarrage ou restauration de la session
  session_start();
  // Ecriture d'une nouvelle valeur dans le tableau de session
  $_SESSION['login'] = '3waDP';
  
?>


<!--lire la valeur d'une variable de session-->

<?php // ici, je suis dans une autre page que celle qui a créé la variable de session...
  // Démarrage ou restauration de la session
  session_start();
  // Lecture d'une valeur du tableau de session
  echo $_SESSION['login'];
  
?>





<!-------- PASSWORD HASH -------->

<?php
//créer un mdp hashé
 $user_password = password_hash($_POST['user_password'], PASSWORD_DEFAULT);
 
 //se connecter avec un mdp hashé
 $test = password_verify($_POST['user_password_verify_connexion'], $user['user_password']);
 
 ?>





<!-------- FONCTION VARIABLE -------->

<?php 

$fv = 'test';
$fv(); // ceci appellera, indirectement, la fonction test()

?>





<!-------- ERREUR -------->

<?php

... or die("Probleme d'accès");

trigger_error("Probleme de fichier");  // dans ce cas, l'erreur est de niveau **E_USER_NOTICE**

// OU

trigger_error("something bad happened", E_USER_ERROR);  // pour forcer le niveau d'erreur à **E_USER_ERROR**

//lancer une exception
//erreur générée par l'exécution du programme
throw new Exception("Gross Katastrof, Verbotten ");

?>

<!-- ERROR REPORTING -->

<?php

error_reporting(E_ALL); // équivalent au suivant 
error_reporting(-1); // reporte toute les erreurs, de tous les types
error_reporting(0);	// pour désactiver l'error reporting
error_reporting(E_ERROR | E_WARNING | E_PARSE);	// pour combiner les niveaux de rapports
error_reporting(E_ALL & ~E_NOTICE);	// Montre toutes les erreurs **sauf** les notifications
	...

?>

<!-- DANS PHP.INI -->

<?php

; Default Value: E_ALL & ~E_NOTICE & ~E_STRICT & ~E_DEPRECATED
; Development Value: E_ALL
; Production Value: E_ALL & ~E_DEPRECATED & ~E_STRICT
; http://php.net/error-reporting
	error_reporting = E_ALL

?>

<!-- VALEURS -->


<!--
E_ERROR : Les erreurs sont affichées par défaut, et l'exécution du script est interrompue
E_WARNING : Les avertissements sont affichés par défaut, mais n'interrompent pas l'exécution du script
E_NOTICE : Les remarques ne sont pas affichées par défaut, et indiquent que le script a rencontré quelque chose qui peut être une erreur, ou autre chose de moins grave
E_USER_ERROR : Message d'erreur généré par l'utilisateur. Générée par l'appel de trigger_error()
E_STRICT : Permet d'obtenir des suggestions de PHP pour assurer une meilleure compatibilité de celui-ci
E_ALL : Toutes les erreurs et alertes supportées
-->





<!---------- RECAPTCHA ---------->

<!--De google, V3-->





<!---------- HEBERGEMENT ---------->

<!--Evx Online, français et écolo.
FTP : protocole de transfert de fichier vers un serveur-->





<!---------- PROJET FINAL ---------->

<!--

_ Faire un espace admin
_ Gérer les sliders, promos, articles, commentaires
_ Champs sensibles : html special chars : failles de de sécurité xss et sql à bien contrôler !
_ Pas erreurs 404 ou 500
_ Il faut du responsive
_ Ne pas reprendre des bouts de code en ligne ou des exos du cours copié collé
_ Mettre des noms de classes cohérents
_ Meta description à renseigner, petit texte qui apparait dans le moteur de recherche, il faut bien renseigner le meta title et le meta description
_ Un seul h1 par page 
_ Bien faire un htaccess
_ On peut inscrire notre site sur google
_ Avoir un bon SEO pour un bon référencement
_ Mettre un bon alt sur les images, permet aux aveugles d avoir une bonne description de l image 
_ Balise Title
_ Pas d id dans les foreach
_ Passer le site dans le validateur 3W3C, chaque page une par une, mettre l url du site, mettre tous les urls de toutes les pages
_ Pas de style ni de script dans le html, pas de on click ou de on change 
_ Pas de bootstrap, media query 
_ Eviter le br 
_ Mettre des commentaires, même dans le HTML 
_ Mettre des title sur les a 
_ Une seule feuille css, on peut faire 2 feuilles de style si on veut faire un truc différent pour la page admin
_ Mettre le normalize.css 
_ Pas d id dans le css, sauf pour les ancres
_ Admin en responsive aussi 
_ Pas mettre de !important
_ Couleurs en rgba
_ Pseudo class comme before et after en css 
_ Des classes communes pour plusieurs éléments 
_ Sélécteurs avancés comme nth-child 
_ Flex ou grid
_ Variables css 
_ Ne pas utiliser % et px mais plutôt em et rem 

_ Il faut que le site reste fonctionnel même si l utilisateur a désactivé le js 
_ Utiliser npm est facultatif mais apprécié (ex mettre de la couleur dans la console)

_ Pas faire de requetes dans le html 
_ Hasher les mdps
_ Les champs sont écrits avec des - si plusieurs mots et pas séparés avec des espaces 
_ Exporter notre base de données et l importer dans notre dossier 
_ Faire une cpature d écran de notre concepteur et la joindre en pdf avec notre projet
_ Au moins 4 tables dans la bdd
_ GROUP BY
_ Utilisation d une requete dans une requete 

_ Ranger les liens dans le head ensemble

meta charset et autres meta,title css script (font en script), jquery en premier dans les scripts

meta 
title
style
script

Mettre Show Invisible pour supprimer les espaces et autres trucs inutiles

Cahier des charges : tout ce qui est attendu et ses limites (normalement le faire signer)
Facilite le travail
Toutes fonctionnalités pages par pages
Maquette
Bdd

-->