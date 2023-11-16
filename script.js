document.addEventListener('DOMContentLoaded', function () {
    const newDocumentBtn = document.getElementById('newDocumentBtn');
    const saveDocumentBtn = document.getElementById('saveDocumentBtn');
    const editor = document.getElementById('editor');
  
    newDocumentBtn.addEventListener('click', function () {
      // Créer un nouveau document
      editor.innerHTML = '';
    });
  });
  