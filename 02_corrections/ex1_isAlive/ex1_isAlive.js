/*
Un aventurier est retrouvé inconscient, un médecin essaie de déterminer si celui-ci est toujours en vie.

Créer une fonction 'isAlive' qui va vérifier si un joueur est vivant ou mort.
Si le joueur est vivant la fonction doit retourner 'Is alive with ... HP' (... étant remplacé par le nombre de points de vie)
Sinon, le joueur est mort et la fonction doit retourner 'Player is dead !'

Exemples:
isAlive(10) -> 'Is alive with 10 HP'
isAlive(58) -> 'Is alive with 58 HP'
isAlive(0) -> 'Player is dead !'
isAlive(-10) -> 'Player is dead !'
*/

/* Your code here */
function isAlive(playerLife) {
    if (playerLife > 0) return `Is alive with ${playerLife} HP`;
    else return "Player is dead !";
}
/***/

module.exports = isAlive;