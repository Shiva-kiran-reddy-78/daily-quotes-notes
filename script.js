const quotes = [
  "Believe in yourself!",
  "You are stronger than you think.",
  "Stay positive, work hard.",
  "Success is no accident.",
  "Small steps every day."
];

function showQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
}

function addNote() {
  const input = document.getElementById("noteInput");
  const note = input.value;
  if (note.trim() === "") return;

  let notes = JSON.parse(localStorage.getItem("notes") || "[]");
  notes.push(note);
  localStorage.setItem("notes", JSON.stringify(notes));

  input.value = "";
  showNotes();
}

function showNotes() {
  let notes = JSON.parse(localStorage.getItem("notes") || "[]");
  const list = document.getElementById("noteList");
  list.innerHTML = "";

  notes.forEach((note, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${note} <button onclick="deleteNote(${index})">❌</button>`;
    list.appendChild(li);
  });
}

function deleteNote(index) {
  let notes = JSON.parse(localStorage.getItem("notes") || "[]");
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}

showNotes(); // Show saved notes on load
