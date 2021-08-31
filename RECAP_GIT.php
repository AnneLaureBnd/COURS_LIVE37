<!-------- GIT ---------->

à installer sur visual studio

quand on ouvre un terminal de commande, il faut écrire "cd" pour aller dans un dossier 

exemple : 

cd sites/kaamelott : se placer dans un dossier 

/sites/kaamelott cd ..

/sites/kaamelott$ ls : va afficher ce qu'il y a de dans

/sites/kaamelott$ git config --global user.name "Cécile Vilport" : cette configuration doit être valable sur l'ensemble de mes projets git (à venir et existant) avec --global / nom que je vais donner à mon projet existants et à venir.

/sites/kaamelott$ git config --global user.email "cecilevilport@gmail.com"


/sites/kaamelott$ git init : initialiser dans le dossier kaamelott
"Initialized empty Git repository in /home/annelaurebon/sites/kaamelott/.git/"

/sites/kaamelott$ git clone https://github.com/sin0light/ap : va cloner le fichier dans notre ide via le lien fourni
Cloning into 'api-kaamelott'...

<!------------------------------------------------------------------->

cd sites

/sites$ cd test

/sites/test$ git init

Initialized empty Git repository in /home/annelaurebon/sites/test/.git/

/sites/test$ git status

On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        index.html

nothing added to commit but untracked files present (use "git add" to track)

/sites/test$ git add index.html

/sites/test$ git status

On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   index.html
        
/sites/test$ git commit -m "Commit initial" : message avec -m 

[master (root-commit) f318c43] Commit initial
 1 file changed, 11 insertions(+)
 create mode 100644 index.html
 
 /sites/test$ git status
 
 On branch master
nothing to commit, working tree clean

/sites/test$ git commit

On branch master
nothing to commit, working tree clean

/sites/test$ git log

commit f318c43aff87fdfeff19bb928e7f30c917847925 (HEAD -> master)
Author: Anne-Laure Bonnefond <al.bonnefond@gmail.com>
Date:   Mon Nov 30 09:18:48 2020 +0000

    Commit initial
    
j'ai ajouté un dossier css que j'ai aussi link dans mon html :

/sites/test$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        css/

no changes added to commit (use "git add" and/or "git commit -a")

/sites/test$ git add index.html css/

/sites/test$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   css/style.css
        modified:   index.html
        
j'ai donc ajouté ce qui a été modifié et je les ai commit 



<!----------------------- RECAP ----------------------->

cd *+ nom du fichier dans lequel on se positionne* : se positionner dans un dossier, on recommence jusqu'à ce qu'on aille où on veut (un dossier dans un dossier ...)

git init : initialiser

git add -A : ajoute les nouveaux fichiers qui ont besoin d'e ajouté
git commit -am : ajoute que les fichiers qui ont déjà été traqué, modifié les fichiers qui ont déjà été traqués 
+ message ajouter et commité en même temps à condition que les fichiers ai déjà été commité en même temps, sinon on fait avec le -A

git commit -m : nom qu'on donne à notre sauvegarde

git status : A chaque fois que je veux ajouter quelques choses, je fais un git status pour voir puis un git add puis un git commit pour ajouter mon message (commentaire de mise à jour)

Restaurer un commit antérieur : 
git checkout 229ee5a: 7premiers caractères de mon identifiant que je veux rejoindre, ici par exemple, va enlever mon dossier image que j'avais crée. Donc supprime tous les commit qui ont été fait après.

Branch : faire des modifs en dehors de la branche principale

git branch refonte : pour créer une branche (non inventé refonte)

git branch : voir les branches qui existent et voir surlaquelle je travaille 

git checkout refonte : allé travailler sur ma branch refonte

à partir de ce moment je vais travailler sur la branche refonte et non plus master

git checkout master : revient sur la branche master

git log : va afficher toutes les commit faites et dispo sur la branche 

git rm : remove avec nom de fichier derrière et son chemin. Va supprimer le fichier seulement sur ma branche.

git merge refonte : je veux mettre refonte sur master. Il faut déjà être positionné sur master.Celle qui va recevoir les infos de l'autre. La branche mère. Attention il faut bien avoir commité !



<!----------------------- SAUVEGARDER NOTRE PROJET SUR GITHUB ----------------------->

git remote add origin *+lien fourni par github*

git push origin master (master étant le nom de la branche qu'on ajoute, le faire pour toutes les branches à push)

git pull origin master : récupérer une branch 