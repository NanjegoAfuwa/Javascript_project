// References to elements
const bookForm = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");
const favoriteList = document.getElementById("favoriteList");
const unreadList = document.getElementById("unreadList");
const readList = document.getElementById("readList");
const modal = document.getElementById("addbook");

// opening the modal when the button is clicked
document.getElementById("openModalBtn").addEventListener("click", () => {
    var modalElement = new bootstrap.Modal(modal);
    modalElement.show();
});

