# **_Kasa_**, locations entre particuliers

Le site Kasa est un site de locations d'appartements entre particuliers qui est en place depuis plus de 10 ans. À ce titre, l'entreprise veut faire une refonte de son site web.

## _Objectifs du projet_

Développer l'ensemble de l'application ainsi que ses composants avec React, en suivant les maquettes Figma fournies. Tout l'intérêt de cette refonte est d'utiliser la puissance et la flexibilité de React. Les composants doivent être et seront réutilisables, notamment pour les onglets ouvrants et le carrousel de photo.

## _Cahier des charges_

### _Spécification fonctionnelles_

#### _Galerie_

- Les images de la galerie doivent **boucler**. C'est à dire que l'utilisateur doit pouvoir passer de la première à la dernière image en cliquant sur le bouton "précédent" (flèche vers la gauche). De la même manière, si l'utilisateur utilise le bouton "suivant" (flèche vers la droite) quand il est sur la dernière image, la galerie doit revenir à la première image de la liste.
- Si la galerie ne possède qu'une seule image disponible, les deux flèches (boutons "précédent" et "suivant") ne doivent **pas apparaitre** dans l'interface.
- La galerie doit toujours avoir les **mêmes dimensions** (hauteur et largeur) pour une taille d'écran donnée, des tailles qui sont indiquées dans la maquette Figma. Une attention particulière doit être accordée à la hauteur de la galerie.
- Pour se conformer au point précédent, les images doivent **cover** et être **centrées** afin de respecter la présentation du site.

#### _Collapse_

- Lors de l'affichage du site, par défaut, les Collapses doivent être **fermés** au premier chargement de la page.
- L'utilisateur doit pouvoir **ouvrir ou fermer** les collapses d'un simple **clic** sur ce dernier.

### _Spécifications techniques_

- Découper le plus possible le code en composants modulaires et réutilisables.
- Structurer de façon logique les fichiers du projet.
- Utiliser les évènements appropriés pour coller au comportement souhaité.
- Utiliser les listes en itérant dessus.
- Utiliser les props pour permettre aux composants de communiquer entre eux.
- La page 404 doit être renvoyée pour chaque route inexistante ou pour toute valeur dans l'url qui ne correspond à aucune donnée du projet.

## _Technologies utilisées_

- HTML 5
- CSS 3
- Sass
- JavaScript
- React

## Pour aller plus loin

Le site est à présent plus moderne et fonctionnel. L'ajout de composants supplémentaires pourrait pousser la logique plus loin. Permettre une recherche par filtrage pourrait également être un ajout intéressant pour le projet.
