// Sélectionnez le bouton de téléchargement de document texte
const downloadTextBtn = document.getElementById('downloadTextBtn');

// Ajoutez un écouteur d'événement pour le bouton de téléchargement de document texte
downloadTextBtn.addEventListener('click', function () {
  // Obtenez le contenu de l'éditeur
  const editorContent = editor.innerText;

  // Créez un objet Blob à partir du contenu texte
  const blob = new Blob([editorContent], { type: 'text/plain' });

  // Créez un élément <a> pour le téléchargement
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'document.txt';

  // Ajoutez l'élément <a> au DOM et déclenchez le téléchargement
  document.body.appendChild(a);
  a.click();

  // Supprimez l'élément <a> du DOM
  document.body.removeChild(a);
  // Révoquer l'URL pour libérer la mémoire
  URL.revokeObjectURL(a.href);
});
