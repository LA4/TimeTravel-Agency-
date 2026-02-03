# TimeTravel Agency - Webapp Interactive

Bienvenue chez **TimeTravel Agency**, la référence absolue du voyage temporel de luxe.

Notre plateforme immersive vous invite à transcender les frontières du présent pour vivre des expériences historiques exclusives. De l'effervescence de la Belle Époque à la majesté sauvage du Crétacé, nous façonnons des séjours sur mesure pour les voyageurs les plus exigeants, alliant technologie de pointe et authenticité historique.

---

##  Fonctionnalités Clés

Notre application a été conçue pour offrir une immersion totale dès la première seconde.

###  Hero Section Immersive
Une porte d'entrée spectaculaire vers le passé :
*   **Atmosphère Cinématographique** : Une playlist vidéo séquentielle haute définition tourne en boucle, transportant l'utilisateur de la romance parisienne aux paysages préhistoriques.
*   **Interface "Liquid Glass"** : Le titre et la proposition de valeur flottent dans un conteneur en verre dépoli ultra-moderne, assurant une lisibilité parfaite sur les fonds dynamiques.
*   **Navigation Fluide** : Un système de défilement doux ("smooth scroll") guide l'utilisateur vers la découverte.

###  Galerie de Destinations Interactives
Trois époques emblématiques présentées via une interface utilisateur révolutionnaire :
1.  **Paris 1889** : L'Exposition Universelle et l'inauguration de la Tour Eiffel.
2.  **Crétacé (-65M)** : Une immersion sauvage au temps des derniers dinosaures.
3.  **Florence 1504** : La Renaissance italienne à son apogée artistique.

**Expérience Utilisateur (UX) :**
*   **Design Minimaliste** : Par défaut, les cartes présentent une esthétique épurée (Titre uniquement).
*   **Immersion Instantanée** : Au clic, l'arrière-plan de la section entière change pour afficher le visuel haute définition de l'époque choisie.
*   **Mode "Focus" Modal** : Simultanément, la carte s'ouvre en **Modal** plein écran, révélant les détails historiques sur une surface "Ultra Liquid Glass".

###  Boutty le Concierge : L'IA au service du Voyage
Un assistant personnel intelligent disponible 24/7 pour accompagner nos voyageurs.

---

##  L'Agent Intelligent : Boutty le Concierge

Au cœur de l'expérience utilisateur réside **Boutty**, notre intelligence artificielle conversationnelle (anciennement connue sous le nom de code Chronos).

*   **Personnalité** : Professionnel, chaleureux et érudit. Il s'exprime avec l'élégance d'un concierge de grand hôtel et la passion d'un historien chevronné.
*   **Capacités** :
    *   **Conseil Personnalisé** : Recommande des époques en fonction des intérêts de l'utilisateur (art, aventure, romance).
    *   **Expertise Historique** : Répond aux questions précises sur les époques (costumes, événements, personnalités).
    *   **Support Technique** : Guide l'utilisateur dans l'interface de l'application.
*   **Technologie** : Propulsé par l'API **Mistral AI** (modèle *Mistral Small*), garantissant des réponses pertinentes, nuancées et rapides.

---

##  Stack Technique

Ce projet repose sur une architecture moderne et performante :

*   **Frontend** : [React](https://react.dev/) (Architecture de composants)
*   **Styling** : [Tailwind CSS](https://tailwindcss.com/) (Design system utilitaire et réactif)
*   **Animations** : [Framer Motion](https://www.framer.com/motion/) (Transitions complexes et layout animations)
*   **Intelligence Artificielle** : API [Mistral AI](https://mistral.ai/) (Intégration backend via Next.js/Node.js)
*   **Tooling** : Vite (Build tool ultra-rapide)

---

##  Installation & Démarrage

Suivez ces étapes pour déployer l'agence temporelle sur votre machine locale.

### Prérequis
*   Node.js (version 16 ou supérieure)
*   npm ou yarn

### Instructions

1.  **Cloner le dépôt**
    ```bash
    git clone https://github.com/LA4/TimeTravel-Agency-.git
    cd TimeTravel-Agency-
    ```

2.  **Installer les dépendances**
    ```bash
    npm install
    ```

3.  **Configuration des variables d'environnement**
    Créez un fichier `.env.local` à la racine et ajoutez votre clé API Mistral :
    ```env
    MISTRAL_API_KEY=**************
    ```

4.  **Lancer le serveur de développement**
    ```bash
    npm run dev
    ```
    L'application sera accessible à l'adresse `http://localhost:3000`.

---

##  Transparence IA & Outils

Ce projet est le fruit d'une synergie entre développement humain et assistance par IA :

*   **Assistant de Développement** : **Google Gemini** piloté par l'agent **Antigravity** et **VS Code**.
*   **Prototypage Interface (UI)** : **v0.dev** (Vercel) pour la génération rapide de composants.
*   **Intelligence Chatbot** : **Mistral AI** (API).
*   **Création Visuelle** : **Gemini** & **Runway** (Assets graphiques et vidéos).
*   **Environnement de Dév** : **VS Code**.

###  Coût Estimatif
L'utilisation intensive des outils d'IA générative (Prompts de code, générations d'images/vidéos et prototypes UI) pour ce projet est estimée à environ **15€** (incluant crédits v0, API Mistral et abonnements divers).

---

##  Licence

**Projet Pédagogique - M1/M2 Digital & IA**

Ce projet a été réalisé dans un cadre éducatif. Il simule une application réelle mais ne commercialise aucun voyage temporel (pour le moment). Tous droits réservés à leurs propriétaires respectifs.

---

*© 2157 Time Travel Agency. Tous droits temporels réservés.*