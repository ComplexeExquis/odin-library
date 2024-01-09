const addBookBtn = document.querySelector("#add-book-btn");
const dialog = document.querySelector("dialog");
const closeAddBookBtn = document.querySelector("#close-add-book-btn");

addBookBtn.addEventListener("click", () => {
    dialog.showModal();
});
closeAddBookBtn.addEventListener("click", () => {
    dialog.close();
});

const myLibrary = [];

function Book(name, author, pages, readStatus) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function getUserInputAndCreateBook() {
    
}

function addBookToLibrary() {
    // handle user input
    
    
    const book = new
    
    
    myLibrary.push(book);
}

function displayBooks() {
    myLibrary.forEach(book => {
        
    });
}