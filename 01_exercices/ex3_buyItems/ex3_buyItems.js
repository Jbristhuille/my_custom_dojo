/*
Un aventurier entre dans une boutique et souhaite acheter des objets.
Il fournit une liste au vendeur sous la forme d'un tableau (ex: ['sword', 'bombs']).
Le vendeur va chercher dans son magasin les objets demandé et les donnes à l'aventurier.

Créer une fonction 'buyItems' qui prend en paramètre un tableau de string et qui retournera un tableau d'objet.
La liste des objets disponnible est présente dans la constante 'shop'.
La fonction 'buyItems' doit trouver les objets présent dans la liste 
et retourner un tableau d'objet contenant tout les objets correspondant.

Note: Les objets qui ne sont pas présent dans la boutique ('shop') ne doivent peuvent pas être retourné et doivent donc être ignoré

Exemples:
buyItems(['sword', 'bombs']) -> [{id: 1, name: 'sword'}, {id: 5, name: 'bombs'}]
buyItems([]) -> []
buyItems(['skull', 'arrows']) -> [{id: 3, name: 'arrows'}]
*/

const shop = [{
    id: 1,
    name: "sword"
}, {
    id: 2,
    name: "bow"
}, {
    id: 3,
    name: "arrows"
}, {
    id: 4,
    name: "water"
}, {
    id: 5,
    name: "bombs"
}];

/* Your code here */


/***/

module.exports = buyItems;