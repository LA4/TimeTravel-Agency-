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
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │ HEADER FIXE (Glassmorphism)                               │   │
│  │  Chronos    Destinations | Experiences | Concierge | Contact  │
│  │                                               [Explore Button] │   │
│  └────────────────────────────────────────────────────────────┘   │
│                                                                     │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │                        HERO SECTION                        │   │
│  │                   (100% viewport height)                  │   │
│  │                                                            │   │
│  │  Background: Nebula cosmic + gradient overlay             │   │
│  │  + Clock SVG animée (rotation continue)                  │   │
│  │  + Particules de nebula (blur effects)                   │   │
│  │                                                            │   │
│  │              [Luxury Temporal Journeys]                   │   │
│  │                                                            │   │
│  │                      CHRONOS                              │   │
│  │              (Playfair Display, 8xl bold)                │   │
│  │                                                            │   │
│  │        Step beyond the boundaries of time.               │   │
│  │     Curated historical experiences crafted               │   │
│  │        for the most discerning travelers.                │   │
│  │                                                            │   │
│  │          [Begin Your Journey]  [View Destinations]       │   │
│  │                                                            │   │
│  │                    ↓ SCROLL TO EXPLORE ↓                 │   │
│  │                                                            │   │
│  └────────────────────────────────────────────────────────────┘   │
│                                                                     │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │                   DESTINATIONS SECTION                    │   │
│  │                                                            │   │
│  │           Curated Experiences (champagne gold)            │   │
│  │         Our Signature Destinations (6xl font)            │   │
│  │                                                            │   │
│  │  Each destination has been meticulously curated...       │   │
│  │                                                            │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │   │
│  │  │ ANCIENT ROME │  │VICTORIAN LOND│  │  NEO-TOKYO   │  │   │
│  │  │    79 AD     │  │    1887      │  │   2157       │  │   │
│  │  │              │  │              │  │              │  │   │
│  │  │ [Glasmorph]  │  │ [Glasmorph]  │  │ [Glasmorph]  │  │   │
│  │  │ Card avec    │  │ Card avec    │  │ Card avec    │  │   │
│  │  │ backdrop blur│  │ backdrop blur│  │ backdrop blur│  │   │
│  │  │              │  │              │  │              │  │   │
│  │  │ Experience   │  │ Experience   │  │ Experience   │  │   │
│  │  │ the zenith   │  │ Immerse      │  │ Venture into │  │   │
│  │  │ of imperial  │  │ yourself in  │  │ a dazzling   │  │   │
│  │  │ grandeur...  │  │ an era of...│  │ future...   │  │   │
│  │  │              │  │              │  │              │  │   │
│  │  │ • Colosseum  │  │ • Grand balls│  │ • Rooftop    │  │   │
│  │  │ • Imperial   │  │ • West End   │  │ • Cyberpunk  │  │   │
│  │  │ • Symposium  │  │ • Botanical  │  │ • Tech       │  │   │
│  │  │ • Forum      │  │ • Library    │  │ • Fusion     │  │   │
│  │  │              │  │              │  │              │  │   │
│  │  │ [Learn More] │  │ [Learn More] │  │ [Learn More] │  │   │
│  │  │              │  │              │  │              │  │   │
│  │  └──────────────┘  └──────────────┘  └──────────────┘  │   │
│  │                                                            │   │
│  │  Background décoration: Blurred circles (primary/5)      │   │
│  │                                                            │   │
│  └────────────────────────────────────────────────────────────┘   │
│                                                                     │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │                    FOOTER SECTION                         │   │
│  │                                                            │   │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐   │   │
│  │  │ Chronos  │ │Destinat. │ │Company   │ │  Legal   │   │   │
│  │  │          │ │          │ │          │ │          │   │   │
│  │  │Luxury    │ │• Ancient │ │• About   │ │• Privacy │   │   │
│  │  │temporal  │ │  Rome    │ │• Concier.│ │• Terms   │   │   │
│  │  │journeys  │ │• Victorian│ │• Contact │ │• Temporal│   │   │
│  │  │          │ │  London  │ │          │ │  Disc.  │   │   │
│  │  │          │ │• Neo-    │ │          │ │          │   │   │
│  │  │          │ │  Tokyo   │ │          │ │          │   │   │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────┘   │   │
│  │                                                            │   │
│  │  © 2157 Chronos Agency. All temporal rights reserved.    │   │
│  │                  Instagram | Twitter | LinkedIn           │   │
│  │                                                            │   │
│  └────────────────────────────────────────────────────────────┘   │
│                                                                     │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │          CHATBOT WIDGET (Coin bas-droit fixe)            │   │
│  │                                                            │   │
│  │  ┌──────────────────────────────────────────────┐        │   │
│  │  │ Chronos Concierge      [_] [×]                │        │   │
│  │  │                                                │        │   │
│  │  │ Bonjour! Je suis le Chronos Concierge...   │        │   │
│  │  │ Comment puis-je vous aider?                  │        │   │
│  │  │                                                │        │   │
│  │  │ [Votre message...]                   [Envoyer]│        │   │
│  │  │                                                │        │   │
│  │  │ (Glasmorphic design avec backdrop blur)      │        │   │
│  │  │                                                │        │   │
│  │  └──────────────────────────────────────────────┘        │   │
│  │                                                            │   │
│  └────────────────────────────────────────────────────────────┘   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘