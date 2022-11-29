/*
Une libraire cherche à trier les livres présents dans sa boutique.
Certains sont inutilisables et doivent être jeter, les autres seront rangés par ordre alphabétique.

Créer une fonction "sortBooks" qui reçoit en paramètre un tableau contenant le nom des différent livres ou  null".
La fonction "sortBooks" doit:
  1. Filter le tableau pour retirer les valeurs égales à "null"
  2. Trier le tableau par ordre alphabétique
  3. Retourner le tableau filtré et trié

Notes: 
- Tu peut utiliser la fonction "sort" pour trier le tableau.
- Si le tableau passé en paramètre est "null" alors la fonction doit retourné un tableau vide.

Exemples:
sortBooks(['b', 'c', 'a']) => ['a', 'b', 'c']
sortBooks(['b', 'c', null, null, 'a']) => ['a', 'b', 'c']
sortBooks(null) => []
*/

/* Your code here */



/***/

module.exports = sortBooks;
