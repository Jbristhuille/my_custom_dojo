/*
Un soldat se retrouve bloqué sur le champs de bataille, il doit vérifier dans ces differents sacs
le nombre de munitions restant à sa disposition.

Créer une fonction 'countAmmo' qui doit compter le nombre de munitions.
La fonction prend un paramètre 'bags' qui est un tableau contenant le nombre de munitions disponnible dans different sacs.
La fonction doit parcourir les sacs ('bags') et retourner le total des munitions.

Note: Dans 'bags' les valeurs négative doivent être ignoré

Exemple:
countAmmo([10, 2, 5]) -> 17
countAmmo([20, 0, 0, 63]) -> 83
countAmmo([]) -> 0
countAmmo(null) -> 0
countAmmo([-20, 10, 35]) -> 45
*/

function countAmmo(bags) {
    let ammo = 0;

    if (bags) {
        for (let i = 0; i < bags.length; i++) {
            if (bags[i] >= 0) ammo += bags[i];
        }
    }

    return ammo;
}

module.exports = countAmmo;