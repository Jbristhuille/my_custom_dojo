/*
Une partie démarre, votre équipe doit choisir quel personnage choisir, quel champion sera choisi pour
se battre dans la faille de l'invocateur ?

Créer une fonction "pickAndBan", cette fonction prend en paramètre un tableau d'objet
contenant le nom d'un champions ainsi que sont état ("picked"[boolean]).

La fonction doit parcourir la liste en entré et vérifier si un champion est "pick" ou non.

La fonction retourne un objet contenant un tableau avec les noms des champions sélectionné ("champs"),
et le nombre de champions sélectionné ("picked").

Exemples:
pickAndBand([]) -> {champs: [], picked: 0}
pickAndBan([{name: "Thresh", picked: false}]) -> {champs: [], picked: 0}
pickAndBan([{name: "Lulu", picked: true}]) -> {champs: ["Lulu"], picked: 1})
pickAndBan(
    [{
        name: "Yasuo",
        picked: false
    }, {
        name: "Bard",
        picked: true
    }, {
        name: "Ezreal",
        picked: true
    }]) -> {champs: ["Bard", "Ezreal"], picked: 2}
*/

/* Your code here */


/***/

module.exports = pickAndBan;