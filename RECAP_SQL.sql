---------- UML/RELATIONS ----------

_ Diagramme des USE CASE
_ Diagrammes statiques : OBJET ou CLASSE ou COMPOSANTS, le temps, la chronologie n intervient pas
_ Diagrammes dynamiques : essentiellement ETAT TRANSITION ou SEQUENCE, le temps est une donnée importante





---------- SGBD(R) ----------

 Système de Gestion de Base de Données
 Ou (R)DBMS
 
 
 
 
 
 ---------- CRUD ----------
 
 Create Read Update Delete
 
 Create : INSERT;
 Read : SELECT;
 Update : UPDATE;
 Delete : DELETE; -- /!\ bien mettre where sinon supprimera toute la table !
 
 
 
 
 
 ---------- TRANSACTIONNEL ---------
 
Commit : ok;
Rollback : annuler;





 ---------- LDD ----------
 
Langage de Description des Données LDD
(ou comment créer et supprimer des contenants)

LDD (contenant) / Ne peut pas être suppr par un rollback / Commit automatique
_ DROP (suppr)
_ ALTER (modif)
_ CREATE (ajout)


LMD (contenu) / Transactionnel : peut être suppr par un rollback
_ DELETE (suppr)
_ INSERT (ajout)
_ UPDATE (modif)





MCD : Model conceptuel de données

varchar : 1 à 256 caractères 

SELECT * FROM consoles;

SELECT nom_console FROM consoles;

SELECT nom_console,prix_console FROM consoles;

SELECT nom_jeu, prix_jeux FROM jeux WHERE prix_jeux>50;

SELECT nom_jeu, prix_jeu FROM jeux WHERE prix_jeu>50 AND nom_jeux LIKE 'C%'; /*=> et va afficher les noms de jeux qui commencent par un C majuscule ou minuscule*/

SELECT nom_jeu, prix_jeu FROM jeux WHERE prix_jeu>50 ORDER BY prix_jeu ASC; /*=> par ordre croissant (ascendant)*/

SELECT SUM(stock_jeu) FROM jeux; /*somme tous mes jeux */

SELECT SUM(stock_jeu*prix_jeu) FROM jeux; /* valeur € du stock */

/*il vaut mieux utliser cette technique qui donne un alias à ce qu'on recherche, càd qu'on lui donne un nom : */

SELECT SUM(stock_jeu*prix_jeu) as valeur_stock FROM jeux;

SELECT SUM(stock_jeu) as stock, id_console FROM jeux GROUP BY id_console; /* appeler par son ID / pour chaque id_console */

SELECT AVG(prix_jeu) as prixmoyen, id_console FROM jeux GROUP BY id_console; /*prix moyen des jeux*/

/*pour arrondir à 2 chiffres après la virgule :*/

SELECT ROUND (AVG(prix_jeu),2) as prixmoyen, id_console FROM jeux GROUP BY id_console;

SELECT COUNT(id_jeu) as nbJeux FROM jeux; /*nombre de jeux que j'ai au total (9 jeux différents)*/

SELECT id_console,COUNT(id_jeu) as nbJeux FROM jeux GROUP BY id_console; /*nombre de jeux par console(pas les stocks, juste les jeux, il y en a 3 différents sur une console par exemple)*/

SELECT id_console,AVG(prix_jeu) as moyenne FROM jeux GROUP BY id_console; /*moyenne des prix des jeux*/

SELECT id_console,AVG(prix_jeu) as moyenne FROM jeux GROUP BY id_console HAVING AVG(prix_jeu)>40; /*garde que ceux qui ont une moyenne supérieure à 40)*/

SELECT id_console,AVG(prix_jeu) as moyenne FROM jeux GROUP BY id_console HAVING AVG(prix_jeu)>40 ORDER BY moyenne DESC; /*même chose avec prix décroissants*/

SELECT id_console,AVG(prix_jeu) as moyenne FROM jeux GROUP BY id_console HAVING AVG(prix_jeu)>40 ORDER BY moyenne DESC LIMIT 1; /*limité au premier résultat qui sera le seul affiché*/

SELECT jeux.id_console,nom_console,AVG(prix_jeu) as moyenne FROM jeux INNER JOIN consoles ON jeux.id_console = consoles.id_console GROUP BY id_console HAVING AVG(prix_jeu)>40 ORDER BY moyenne DESC; /* va afficher l'id console, son nom et sa moyenne*/

/*on peut mettre plusieurs INNER JOIN */

SELECT jeux.id_console,nom_console,AVG(prix_jeu) as moyenne FROM jeux  INNER JOIN consoles ON jeux.id_console = consoles.id_console WHERE /*insérer quelques chose ici*/ GROUP BY id_console  HAVING AVG(prix_jeu)>40  ORDER BY moyenne DESC LIMIT 3 OFFSET 2  /*déterminer un départ avec offset*/

SELECT jeux.id_console,nom_console, nom_jeu FROM jeux INNER JOIN consoles ON jeux.id_console = consoles.id_console LIMIT 3 OFFSET 2; /*va afficher id_console, nom_console, nom_jeu*/



'c%' : commence par un c majuscule ou minuscule
'%c%' : contient un c majuscule ou minuscule
'%c' : termine par un c majuscule ou minuscule





---------- INSERER DES DONNES ----------

INSERT INTO jeux VALUES (NULL, 'Pokemon Rouge', 12,39.90, 'img/pokemon.jpg','jeu trop nul', 1980, 1)
/*null pour l'id autoincrémenté. On insère tous les champs dans l'ordre.*/

/*autre méthode*/
INSERT INTO jeux(nom_jeu, stock_jeu, description_jeu) VALUES ('Mario PARTY 10', 13, 'grfder')

INSERT INTO jeux(nom_jeu, stock_jeu, description_jeu) VALUES (?, ?, ?)





---------- UPDATE ----------

UPDATE articles SET article_visibility = 0 WHERE alias = ?





---------- LIAISONS ----------

Type cascade pour un blog par exemple car quand on supprime un article on veut supprimer les commentaires associés
Type restrict pour une console avec des jeux





---------- FONCTIONS D'AGREGATIONS ----------

SUM : somme

MIN : fonctions moins en stock_jeu

MAX : valeur max

COUNT : compter le nombre d enregistrement

AVG : moyenne





---------- SERVEUR ----------

MYSQL Li : moins secure
PDO : mieux

/*allé voir en php avec #sql*/

MVC : architecture, facon d organiser le code

Model Vue Controler, les vues c est le dossier VIEWS

Faire un dossier config avec la data

A la racine les dossiers principaux, les controleurs qui controlent et generent la page.

Model : dossiers accès base de données. 1 dossier par table de base de données. jeuModel.php, consoleModel.php. Mettre les fonctions php en rapport. "retourne moi l'ensemble des jeux". Ne pas oublier de typer la fonction (ex: :array)

Par exemple : jeux et consoles donc 2 fichiers de type model. Un dossier SQL qui pointe vers la table jeu et un vers la table console.

Vue : template, qui affiche les données. index.phtml. On aura un dossier Layout qui contiendra les header footer etc qui sont communs à toutes les pages et qui appelera les autres pages grâce à un lien <?php include $template; ?>. Dans mon jeu.php on écrira $template = 'jeu.phtml'; puis require 'views/layout.phtml';

Controler : fichiers qui controlent la page, controlent parce qu ils controlent les entrées sorties. C est eux qui vont générer notre page. J ai besoin des articles pour mon blog, il va appeler la page, il veut controler il va appeler la vue qui correspond. C est lui qui possede toute l arborescence. Chaque page de site aura un controler. Comme index.php et jeu.php.

Dans l index on appelera les fonctions par exemple dans index.php on mettra en haut "$jeux = getAllGames();". Permet d avoir moins de code, de mieux l organier et de ne pas le réecrire 2x par exemple dans la page index.

Dans les fichiers model on mettra les fonctions qui contiendront le require, les query avec le SELECT puis le return.

On rajoute un dossier public ou asset avec des sous dossiers CSS, JS, img, fonts ...

Notre index.php en racine est notre rooter. Il inclue les fichiers indispensables.

_require des modeles

_index.php?page=(...)

_if(isset($_GET['page'])){
    redirige vers la bonne page
    switch ($_GET['page']){
    
        case 'jeu':
        include 'controllers/jeu.php';
        break;
        
        default: si l'utilisateur s'amuse à bidouiller le lien url dans la barre de recherche google
        include 'controllers/index.php';
    }
}

else {
    include 'controllers/index.php';
    redirige vers la page d accueil par défaut
}


Fichiers MVC :

_config
    database.php
_controllers
    index.php
    jeu.php
_models
    consoleModel.php
    jeuModel.php
_public
    _css
    _fonts
    _img
    _js
_views
    index.phtml
    jeu.phtml
    layout.phtml : contient tout le code commun à l ensemble des pages de mon site.
index.php