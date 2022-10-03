# Roadmap

- initialiser score à 0

## newQuestion()

- [x] Choper une question ALÉATOIRE
- [x] Choper les réponses correspondantes
- [x] Chopper la catégorie
- [x] Associer l’image à la catégorie
- [] startQuestion()

## startQuestion()

- Faire disparaitre le contenu de l’écran (display : none ?)
- Attendre une petite seconde (sleep)
- Choper la balise question (querrySelector)
- Afficher la nouvel question (innerText)
- choper la balise image (querrySelector)
- Afficher la nouvelle image (innerHTML)
- choper les balises réponses (querrySelector)
- Afficher les réponses

## selectAnswer()

- addEventListener click sur balises
  - Si clique sur bonne réponse
    - Apparait vert, +1 au score, fait apparaitre le bouton suivant
  - Sinon
    - Apparait rouge, bonne réponse en vert, fait apparaitre le bouton suivant

## nextQuestion()

- addEventListener click sur Next
  - newQuestion()
