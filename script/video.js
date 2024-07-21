function toggleNotes() {
    var inputContainer = document.getElementById('inputContainer');
    if (inputContainer.style.display === 'none' || inputContainer.style.display === '') {
        inputContainer.style.display = 'block';
    } else {
        inputContainer.style.display = 'none';
    }
}


document.getElementById('saveNote').addEventListener('click', function() {
    const noteArea = document.getElementById('noteArea');
    const savedNotes = document.getElementById('savedNotes');
    
    if (noteArea.value.trim() !== "") {
        const note = document.createElement('div');
        note.className = 'note';
        note.textContent = noteArea.value;
        savedNotes.appendChild(note);
        noteArea.value = ''; // Clear the textarea
    } else {
        alert('Please write a note before saving.');
    }
});

document.getElementById('downloadNotes').addEventListener('click', function() {
    const notesText = document.getElementById('savedNotes').innerText;
    const blob = new Blob([notesText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'my_notes.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
});