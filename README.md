# TimeTravel-Agency


## Architecture 

Page d'accueil : 
    - Hero avec : 
            - un titre
            - une description du service 'TimeTravel'
            - un bouton 'Book Now'
            - Une video de presentation - active par defaut
            - Cards interactives pour les 3 époques 
            - Un chatbot qui permet de répondre a la FAQ - Répond au questions, ou selon un questionnaire renvoir vers la bonne destination.
        
    - Au click d'une card :
        -  Redirection vers une page de la destination concernées
        -  On voit le visuel de la destination 
        -  Les informations détaillés de la destination
        -  Un chatbot qui permet des conseils personnalisés sur les destination

```bash

```


## Informations sur le déroulé

- phase 1 : 
1.2.a -> template généré par v02.dev.vercel (cout : 4,76 crédits)

## Maquette du Projet (État Actuel)

Voici la structure actuelle de l'application, telle qu'implémentée :

### 1. Le Header (Navigation "Glassmorphism")
*   **Visuel** : Barre de navigation translucide avec effet "frosted glass" (`backdrop-blur`).
*   **Navigation** : Le logo "Time Travel Agency" permet de revenir en haut de page avec un défilement fluide.
*   **Actions** : Bouton "Galerie" et liens de navigation.

### 2. Hero Section (L'immersion temporelle)
*   **Fond Vidéo Dynamique** : Playlist séquentielle de 3 vidéos ("Romance", "Florence", "Dinosaure") qui tournent en boucle.
*   **Interface Liquide** : Le titre et le texte d'accroche sont encapsulés dans une carte "Liquid Glass" (transparence + flou + reflet) pour une lisibilité parfaite sur les vidéos.
*   **Navigation** : Le bouton "View Destinations" déclenche un scroll fluide vers la section suivante.

### 3. Section Destinations (Interactive & Immersive)
Une grille de 3 cartes représentant les époques clés :
1.  **Paris 1889** (Exposition Universelle)
2.  **Crétacé -65M années** (Dinosaures)
3.  **Renaissance Florence 1504**

**Interactions Avancées :**
*   **Vue par défaut** : Cartes compactes affichant uniquement le titre (approche minimaliste).
*   **Mode "Focus" (Modal)** : Au clic, la carte s'ouvre en **plein écran (Modal)** avec une transition fluide (Framer Motion `layoutId`).
*   **Effet "Ultra Liquid Glass"** : La carte ouverte est semi-transparente (`bg-white/5`, `backdrop-blur-3xl`), donnant l'impression d'une vitre high-tech flottante.
*   **Immersion Totale** : Au clic, l'arrière-plan de toute la section change instantanément pour afficher le visuel de l'époque sélectionnée.

### 4. Le Widget "Chronos Concierge" (IA Agent)
*   **Emplacement** : Fixe en bas à droite.
*   **Fonction** : Chatbot IA pour assister les voyageurs temporels.

### 5. Codes Couleurs & Design System
*   **Ambiance** : Sombre, Premium, Mystérieuse.
*   **Palette** :
    *   Fond : Noir Obsidienne / Vidéos sombres.
    *   Accents : Or Champagne (#D4AF37) pour les éléments de luxe.
    *   UI : Transparence, Flou (Glassmorphism), et Reflets lumineux.