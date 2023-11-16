function insertPropositionProjet() {
    const documentPropositionText = "FLCorporation - Proposition de Projet <br> Document rédigé sur FLCorp. Docs <br> Document rédigé le XO/XO/20XO";
    editor.innerHTML += `<p>${documentPropositionText}</p>`
}

function insertProjectName() {
    const documentProjetText = "Nom du Projet: PROJECT_NAME";
    editor.innerHTML += `<p>${documentProjetText}</p>`;
}

function insertType() {
    const documentTypeText = "Type du Projet: CARTOON / JV / LIVRE / SITE_WEB";
    editor.innerHTML += `<p>${documentTypeText}</p>`;
}

function insertSynopsis() {
    const documentSynopsisText = "Synopsis: SYNOPSIS_TEXT";
    editor.innerHTML += `<p>${documentSynopsisText}</p>`;
}