let hasKilledAmajah = false;
let hasStolenCrown = false;
let hasFoughtInArmy = false;
let hasKilledTheKing = false; // Ajout de la variable

function makeChoice(choice) {
    switch (choice) {
        case 'killAmajah':
            hasKilledAmajah = true;
            document.getElementById('killAmajahButton').style.display = 'none';
            document.getElementById('killKingButton').style.display = 'inline';
            break;
        case 'killKing':
            hasKilledTheKing = true;
            break;
        case 'stealCrown':
            hasStolenCrown = true;
            break;
        case 'fightInArmy':
            hasFoughtInArmy = true;
            break;
    }

    updateStoryText();
    updateBackground();
}

function updateStoryText() {
    let storyText = "Once upon a time...";
    
    if (hasKilledAmajah)
        storyText += "You killed Amajah. "
    if (hasKilledTheKing)
        storyText += "You killed the King. ";
    if (hasStolenCrown)
        storyText += " You stole the crown. ";
    if (hasFoughtInArmy)
        storyText += " You fought in the army. ";
    document.getElementById('story-text').innerHTML = storyText;
}

function updateBackground() {
    if (hasKilledAmajah || hasKilledTheKing) {
        document.body.style.backgroundImage = "url('./fond.jpg')";
    } else {
        document.body.style.backgroundImage = "url('play/entrer/img/machine.jpg')";
    }
}

// Initialise le texte de l'histoire et le fond au chargement de la page
updateStoryText();
updateBackground();
