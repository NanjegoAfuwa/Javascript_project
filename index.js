// References to elements
const bookForm = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");
const favoriteList = document.getElementById("favoriteList");
const unreadList = document.getElementById("unreadList");
const readList = document.getElementById("readList");
const modal = document.getElementById("addbook");

// // opening the modal when the button is clicked
// document.getElementById("openModalBtn").addEventListener("click", () => {
//     var modalElement = new bootstrap.Modal(modal);
//     modalElement.show();
// });

// Selecting elements for the modal and book list
const submitBtn = document.getElementById("submitBtn");
const booklist = document.getElementById("bookList");

// Handling form submission
submitBtn.addEventListener("click", (event) => {
    event.preventDefault();}) // Preventing page reload on form submit