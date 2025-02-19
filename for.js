// Fonction qui vérifie si un bouton est vide (c'est-à-dire qu'il peut être utilisé)
function estValide(button) {
    return button.innerHTML.length == 0; // Retourne true si le bouton n'a pas de contenu
}

// Fonction qui place un symbole ('X' ou 'O') dans un bouton
function setSymbol(btn, symbole) {
    btn.innerHTML = symbole; // Modifie le texte intérieur du bouton avec le symbole donné
}

// Fonction qui vérifie si un joueur a gagné
function rechercherVainqueur(pions, joueurs, tour) {
    // Vérification des lignes
    if (
        pions[0].innerHTML == joueurs[tour] &&
        pions[1].innerHTML == joueurs[tour] &&
        pions[2].innerHTML == joueurs[tour]
    ) {
        pions[0].style.backgroundColor = "#9ACD32";
        pions[1].style.backgroundColor = "#9ACD32";
        pions[2].style.backgroundColor = "#9ACD32";
        return true; // Victoire détectée
    }

    if (
        pions[3].innerHTML == joueurs[tour] &&
        pions[4].innerHTML == joueurs[tour] &&
        pions[5].innerHTML == joueurs[tour]
    ) {
        pions[3].style.backgroundColor = "#9ACD32";
        pions[4].style.backgroundColor = "#9ACD32";
        pions[5].style.backgroundColor = "#9ACD32";
        return true;
    }

    if (
        pions[6].innerHTML == joueurs[tour] &&
        pions[7].innerHTML == joueurs[tour] &&
        pions[8].innerHTML == joueurs[tour]
    ) {
        pions[6].style.backgroundColor = "#9ACD32";
        pions[7].style.backgroundColor = "#9ACD32";
        pions[8].style.backgroundColor = "#9ACD32";
        return true;
    }

    // Vérification des colonnes
    if (
        pions[0].innerHTML == joueurs[tour] &&
        pions[3].innerHTML == joueurs[tour] &&
        pions[6].innerHTML == joueurs[tour]
    ) {
        pions[0].style.backgroundColor = "#9ACD32";
        pions[3].style.backgroundColor = "#9ACD32";
        pions[6].style.backgroundColor = "#9ACD32";
        return true;
    }

    if (
        pions[1].innerHTML == joueurs[tour] &&
        pions[4].innerHTML == joueurs[tour] &&
        pions[7].innerHTML == joueurs[tour]
    ) {
        pions[1].style.backgroundColor = "#9ACD32";
        pions[4].style.backgroundColor = "#9ACD32";
        pions[7].style.backgroundColor = "#9ACD32";
        return true;
    }

    if (
        pions[2].innerHTML == joueurs[tour] &&
        pions[5].innerHTML == joueurs[tour] &&
        pions[8].innerHTML == joueurs[tour]
    ) {
        pions[2].style.backgroundColor = "#9ACD32";
        pions[5].style.backgroundColor = "#9ACD32";
        pions[8].style.backgroundColor = "#9ACD32";
        return true;
    }

    // Vérification des diagonales
    if (
        pions[0].innerHTML == joueurs[tour] &&
        pions[4].innerHTML == joueurs[tour] &&
        pions[8].innerHTML == joueurs[tour]
    ) {
        pions[0].style.backgroundColor = "#9ACD32";
        pions[4].style.backgroundColor = "#9ACD32";
        pions[8].style.backgroundColor = "#9ACD32";
        return true;
    }

    if (
        pions[2].innerHTML == joueurs[tour] &&
        pions[4].innerHTML == joueurs[tour] &&
        pions[6].innerHTML == joueurs[tour]
    ) {
        pions[2].style.backgroundColor = "#9ACD32";
        pions[4].style.backgroundColor = "#9ACD32";
        pions[6].style.backgroundColor = "#9ACD32";
        return true;
    }

    return false; // Aucune victoire trouvée
}

// Fonction qui vérifie si la partie est un match nul
function matchNul(pions) {
    for (var i = 0, len = pions.length; i < len; i++) {
        if (pions[i].innerHTML.length == 0) return false; // Si une case est vide, la partie n'est pas finie
    }

    return true; // Toutes les cases sont remplies, c'est un match nul
}

// Objet qui affiche des messages à l'utilisateur
var Afficheur = function(element) {
    var affichage = element; // Élément où les messages seront affichés

    function setText(message) {
        affichage.innerHTML = message; // Modifie le texte affiché
    }

    return { sendMessage: setText }; // Retourne un objet avec une méthode pour envoyer un message
};

// Fonction principale du jeu
function main() {
    var pions = document.querySelectorAll("#Jeu button"); // Récupère tous les boutons du jeu
    var joueurs = ["X", "O"]; // Définition des joueurs
    var tour = 0; // Indique le joueur en cours (0 = X, 1 = O)
    var jeuEstFini = false; // Indique si la partie est terminée
    var afficheur = new Afficheur(document.querySelector("#StatutJeu")); // Initialisation de l'affichage des messages

    // Affichage du message de début de partie
    afficheur.sendMessage(
        "Le jeu peut commencer ! <br /> Joueur " + joueurs[tour] + " c'est votre tour."
    );

    // Ajout d'un écouteur d'événement sur chaque bouton (case du jeu)
    for (var i = 0;  i < pions.length; i++) {
        pions[i].addEventListener("click", function() {
            if (jeuEstFini) return; // Si la partie est terminée, ne rien faire

            if (!estValide(this)) { // Vérifie si la case est occupée
                afficheur.sendMessage(
                    "Case occupée ! <br />Joueur " + joueurs[tour] + " c'est toujours à vous !"
                );
            } else {
                setSymbol(this, joueurs[tour]); // Place le symbole du joueur actuel
                jeuEstFini = rechercherVainqueur(pions, joueurs, tour); // Vérifie si le joueur actuel gagne

                if (jeuEstFini) {
                    afficheur.sendMessage(
                        "Le joueur " + joueurs[tour] + ' a gagné ! <br /> <a href="morpion.html">Rejouer</a>'
                    );
                    return; // Arrête le jeu
                }

                if (matchNul(pions)) { // Vérifie si la partie est un match nul
                    afficheur.sendMessage(
                        'Match Nul ! <br/> <a href="morpion.html">Rejouer</a>'
                    );
                    return;
                }

                tour++; // Change de joueur
                tour = tour % 2; // Alterne entre 0 et 1
                afficheur.sendMessage("Joueur " + joueurs[tour] + " c'est à vous !");
            }
        });
    }
}

// Démarrage du jeu
main();
