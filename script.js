const btnEle = document.querySelector("button");
const textArea = document.querySelector(".note-input");
const colrPick = document.querySelector(".color input");
const emptyP = document.querySelector(".empty-msg");
const deleteAllBtn = document.getElementById("deleteAllBtn");

btnEle.addEventListener("click", () => {
  if (textArea.value === "") {
    alert("Enter some Note");
  } else {
    addNoteCOlor(colrPick.value, textArea.value);
    updateEmptyMessage();
    toggleDeleteAllButton();
  }
  removeNotes();
});

deleteAllBtn.addEventListener("click", () => {
  removeAllNotes();
  updateEmptyMessage();
  toggleDeleteAllButton();
});

function addNoteCOlor(color, note) {
  const newNote = document.createElement("div");
  newNote.classList.add("note");

  newNote.style.width = "fit-content";
  newNote.style.height = "9rem";
  newNote.innerHTML = `<p>${note}</p> <button class="clsBtn"></button>`;
  newNote.style.backgroundColor = `${color}`;

  const pinBtn = document.createElement("span");
  pinBtn.classList.add("pinBtn");
  pinBtn.innerHTML = "&#x1F4CC";
  newNote.querySelector(".clsBtn").appendChild(pinBtn);

  const noteDivElement = document.querySelector(".sticky-notes");
  noteDivElement.appendChild(newNote);
}

function removeNotes() {
  const stickyNotesContainer = document.querySelector(".sticky-notes");

  stickyNotesContainer.addEventListener("click", (event) => {
    const btn = event.target.closest(".clsBtn");

    if (btn) {
      const noteToRemove = btn.parentElement;

      btn.style.transform = "translateY(-50px)";
      setTimeout(() => {
        noteToRemove.remove();
        updateEmptyMessage();
        toggleDeleteAllButton();
      }, 300);
    }
  });
}
function removeAllNotes() {
  const stickyNotesContainer = document.querySelector(".sticky-notes");
  stickyNotesContainer.innerHTML = ""; // Remove all child elements
}

function toggleDeleteAllButton() {
  const notes = document.querySelectorAll(".note");
  deleteAllBtn.style.display = notes.length > 0 ? "inline-block" : "none";
}

function updateEmptyMessage() {
  const notes = document.querySelectorAll(".note");
  if (notes.length === 0) {
    emptyP.style.display = "flex";
  } else {
    emptyP.style.display = "none";
  }
}
