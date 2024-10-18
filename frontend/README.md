# Application du Club L'Image en Boite

## Introduction
Bienvenue dans l'application de club L'Image en Boite ! Cette application sert de plateforme pour explorer diverses fonctionnalités liées au club, notamment les mises à jour des actualités, une galerie de membres, un calendrier d'événements et bien plus encore. Construite avec la stack MERN (MongoDB, Express, React, Node.js), cette application est conçue pour offrir une expérience utilisateur conviviale tout en présentant des informations importantes sur notre club.

## Directives de collaboration
Pour garantir que tout le monde reste à jour avec les dernières modifications, veuillez vous rappeler de :

- **Tirer les dernières modifications** depuis la branche principale avant de commencer à travailler. Cela aide à éviter les conflits et garantit que vous travaillez avec le code le plus actuel.
  
- **Pousser vos modifications** vers la branche principale une fois que vous avez terminé votre travail. Cela permet de synchroniser la base de code et permet à vos coéquipiers de voir vos mises à jour.

Tirer et pousser régulièrement les modifications aidera à maintenir une collaboration fluide tout au long du processus de développement.

Voici le dépôt GitHub du projet : 

## Accès à l'application
Pour accéder à l'application. Ouvrez votre navigateur web et naviguez vers l'URL fournie par votre environnement de développement.
Démarrer l'application :
Utilisez cette commande pour lancer l'application en mode développement : `cd frontend` puis `npm run dev`.

Voici une liste des chemins que vous pouvez visiter dans l'application :

- **Accueil** : `/` - Affiche la page d'accueil avec un aperçu et un contenu en vedette.
- **Liste des Actualités** : `/Actualites` - Montre une liste des derniers articles d'actualité.
- **Page des Actualités** : `/Actualites/id` - Affiche les détails d'un article d'actualité spécifique. Remplacez `id` par l'identifiant réel de l'actualité.
- **À Propos** : `/a-propos` - Fournit des informations sur le club et sa mission.
- **Calendrier** : `/Calendrier` - Affiche un calendrier avec les événements à venir.
- **Détails de l'Événement** : `/Calendrier/event` - Montre les détails d'un événement spécifique.
- **Galerie** : `/Galerie` - Affiche une collection de photos des diverses activités du club.
- **Galerie des Membres** : `/Galerie/member` - Montre les photos d'un membre spécifique.
- **Inscription** : `/Inscription` - Permet aux nouveaux utilisateurs de s'inscrire pour un compte.
- **Connexion** : `/Connexion` - Permet aux utilisateurs existants de se connecter à leur compte.

## Composants et Pages
L'application est structurée autour des composants et pages clés suivants :

- **Home** : La page d'accueil qui présente un aperçu des offres du club et des événements à venir.
- **NewsList** : Un composant qui liste tous les articles d'actualité disponibles pour les utilisateurs.
- **NewsPage** : Affiche des informations détaillées sur un article d'actualité sélectionné.
- **AboutUs** : Fournit des informations de base sur le club, ses objectifs et ses activités.
- **Calendrier** : Affiche la vue principale du calendrier, mettant en avant les événements prévus.
- **CalendrierPage** : Montre des informations détaillées sur un événement spécifique dans le calendrier.
- **Galerie** : Une collection de photos des membres et des activités du club.
- **GaleriePage** : Affiche une galerie spécifique à un membre sélectionné, mettant en avant ses contributions et ses événements.
- **Login** : Un composant pour l'authentification des utilisateurs.
- **Register** : Permet aux nouveaux utilisateurs de créer un compte au sein du club.

## Conclusion
Ce README fournit un aperçu complet de l'application du CLUB. Vous pouvez personnaliser ou développer ce document à mesure que le projet évolue.
