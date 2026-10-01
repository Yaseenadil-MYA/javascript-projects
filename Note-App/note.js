const title = document.getElementById("title");
const text = document.getElementById("text");
const addBtn = document.getElementById("addBtn");
const notesDiv = document.getElementById("notes");
const noteCount = document.getElementById("noteCount");
const searchInput = document.getElementById("search");
const clearBtn = document.getElementById("clearBtn");

let notes = JSON.parse(localStorage.getItem("notes")) || [];
let editIndex = null;

function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function updateNoteCount() {
    const count = notes.length;
    noteCount.textContent = count === 1 ? "1 note" : `${count} notes`;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString([], {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
}

function displayNotes(filter = "") {
    const normalizedFilter = filter.trim().toLowerCase();
    notesDiv.innerHTML = "";

    const filteredNotes = notes.filter((note) => {
        if (!normalizedFilter) return true;
        return (
            note.title.toLowerCase().includes(normalizedFilter) ||
            note.text.toLowerCase().includes(normalizedFilter)
        );
    });

    if (filteredNotes.length === 0) {
        notesDiv.innerHTML = `
            <div class="empty-state">
                <p>No notes found.</p>
                <span>Use the form above to add a new note.</span>
            </div>
        `;
        updateNoteCount();
        return;
    }

    filteredNotes.forEach((note, index) => {
        const noteIndex = notes.indexOf(note);
        const previewText = note.text.length > 140 ? note.text.slice(0, 140) + "..." : note.text;

        notesDiv.innerHTML += `
            <article class="note-card">
                <div class="note-header">
                    <div>
                        <h3>${note.title || "Untitled"}</h3>
                        <time>${formatDate(note.date)}</time>
                    </div>
                    <div class="note-actions">
                        <button class="secondary-btn" onclick="editNote(${noteIndex})">Edit</button>
                        <button class="danger-btn" onclick="deleteNote(${noteIndex})">Delete</button>
                    </div>
                </div>
                <p>${previewText || "No content available."}</p>
            </article>
        `;
    });

    updateNoteCount();
}

function clearForm() {
    title.value = "";
    text.value = "";
    editIndex = null;
    addBtn.textContent = "Add Note";
}

addBtn.addEventListener("click", () => {
    const noteTitle = title.value.trim();
    const noteText = text.value.trim();

    if (!noteTitle && !noteText) {
        alert("Please enter a title or note text before adding.");
        return;
    }

    const note = {
        title: noteTitle,
        text: noteText,
        date: new Date().toISOString(),
    };

    if (editIndex !== null) {
        notes[editIndex] = note;
        editIndex = null;
        addBtn.textContent = "Add Note";
    } else {
        notes.unshift(note);
    }

    saveNotes();
    displayNotes(searchInput.value);
    clearForm();
});

function deleteNote(index) {
    notes.splice(index, 1);
    saveNotes();
    displayNotes(searchInput.value);
}

function editNote(index) {
    const note = notes[index];
    title.value = note.title;
    text.value = note.text;
    editIndex = index;
    addBtn.textContent = "Update Note";
    title.focus();
}

clearBtn.addEventListener("click", () => {
    if (!notes.length) return;
    const confirmed = confirm("Delete all notes permanently?");
    if (!confirmed) return;
    notes = [];
    saveNotes();
    displayNotes(searchInput.value);
});

searchInput.addEventListener("input", () => {
    displayNotes(searchInput.value);
});

window.deleteNote = deleteNote;
window.editNote = editNote;

displayNotes();