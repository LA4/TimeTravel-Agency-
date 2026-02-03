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

## Maquette :
D'accord, je comprends. Vous souhaitez une explication détaillée (le "blueprint") de la maquette pour pouvoir la réaliser ou la présenter, en respectant scrupuleusement les consignes de votre document (Paris 1889, Crétacé, Florence 1504).

Voici la structure logique et visuelle de votre webapp, décomposée section par section :

1. Le Header (Navigation "Glassmorphism")
Visuel : Une barre translucide avec un effet de flou d'arrière-plan (backdrop-blur).

Contenu : * À gauche : Logo "Chronos" en police Serif élégante.

Au centre : Liens de navigation (Destinations, Expériences, Concierge).

À droite : Un bouton CTA "Réserver" avec une bordure dorée lumineuse.

2. Hero Section (L'immersion temporelle)
Fond : Une vidéo en boucle d'une nébuleuse sombre avec des particules d'or qui flottent.

Élément Central : L'horloge SVG. Elle ne doit pas être une simple image, mais une animation fluide où les aiguilles tournent à des vitesses différentes, symbolisant le flux temporel.

Typographie : Le titre "CHRONOS" en très grand (8xl), avec un sous-titre qui présente la promesse de l'agence : "Explorez l'histoire, réinventée."

3. Section Destinations (Les 3 cartes imposées)
Conformément à vos consignes, cette section présente les trois époques clés sous forme de cartes interactives (effet de survol qui agrandit la carte) :

Carte 1 : Paris 1889 (L'Exposition Universelle)

Visuel : Gravure dorée de la Tour Eiffel en construction sur fond sombre.

Texte : "L'âge de fer et des lumières".

Carte 2 : Le Crétacé (L'Ère des Géants)

Visuel : Silhouette de dinosaure dans une jungle luxuriante stylisée.

Texte : "L'aube de la vie sauvage".

Carte 3 : Florence 1504 (La Renaissance)

Visuel : Coupole du Duomo ou esquisse de Léonard de Vinci.

Texte : "Le zénith du génie humain".

4. Le Widget "Chronos Concierge" (IA Agent)
Emplacement : Fixe, en bas à droite de l'écran.

Apparence : Une icône de sablier qui, lorsqu'on clique dessus, ouvre une fenêtre de chat élégante (fond sombre, texte doré).

Comportement : C'est ici que l'API Mistral Small interviendra pour répondre aux questions des clients sur les protocoles de sécurité temporelle ou les détails des époques.

5. Le Footer (Identité & Légal)
Design : Très épuré, séparé par une fine ligne dorée.

Détails : Liens vers les réseaux sociaux et la mention spéciale demandée par le brief : "© 2157 Chronos Agency. All temporal rights reserved."

Résumé des codes couleurs pour votre design :
Noir Obsidienne : #0A0A0A (Fond principal)

Or Champagne : #D4AF37 (Titres, boutons et détails)

Gris Anthracite : #1A1A1A (Cartes et sections secondaires)