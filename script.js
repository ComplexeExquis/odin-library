const addBookBtn = document.querySelector("#add-book-btn");
const confirmAddBookBtn = document.querySelector("#confirm-add-book-btn");
const dialog = document.querySelector("dialog");
const closeAddBookBtn = document.querySelector("#close-add-book-btn");

addBookBtn.addEventListener("click", () => {
    dialog.showModal();
});

confirmAddBookBtn.addEventListener("click", getUserInputAndCreateBook);

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

function getUserInputAndCreateBook(event) {
    // get html elements
    const bookName = document.querySelector("#book-name-input");
    const bookAuthor =  document.querySelector("#book-author-input");
    const bookPages = document.querySelector("#book-pages-input");
    const readStatus = document.querySelector('input[name="read-or-not-input"]:checked');

    const newBook = new Book(bookName.value,
                             bookAuthor.value,
                             bookPages.value,
                             readStatus.value);

    addBookToLibrary(newBook);
    
    // clearInputs(); ***************8888
    // emptying the html input element
    bookName.value = "";
    bookAuthor.value = "";
    bookPages.value = "";
    // unchecking the radio button
    const radioButtons = document.getElementsByName('read-or-not-input');
    for (const radio of radioButtons) {
        radio.checked = false;
    }

    // TODO build the card and display it
    displayCard( buildCard(newBook) );
    

    // so the page does not refresh
    event.preventDefault();

    dialog.close(); 
}

function buildCard(book) {
    const newCard = document.createElement("div");
    newCard.classList.add("card");

    if(newCard){
        // creating all the html element
        const bookInfo = document.createElement("div");
        const bookName = document.createElement("p");
        const bookAuthor = document.createElement("p");
        const bookPages = document.createElement("p");
        
        const bookBtnContainer = document.createElement("div");
        const readOrNotBtn =  document.createElement("button");
        const deleteBtn = document.createElement("button");

        // assigning values to them
        bookName.innerText = book.name;
        bookAuthor.innerText = book.author;
        bookPages.innerText = book.pages;

        readOrNotBtn.innerText = book.readStatus;
        deleteBtn.innerText = "delete";

        // applying class
        bookInfo.classList.add("book-info");
        bookName.classList.add("book-name");
        bookAuthor.classList.add("book-author");
        bookPages.classList.add("book-pages");

        bookBtnContainer.classList.add("book-btn-container");
        readOrNotBtn.classList.add("read-or-not-btn");
        deleteBtn.classList.add("delete-btn");

        // append
        bookInfo.appendChild(bookName);
        bookInfo.appendChild(bookAuthor);
        bookInfo.appendChild(bookPages);

        bookBtnContainer.appendChild(readOrNotBtn);
        bookBtnContainer.appendChild(deleteBtn);

        newCard.appendChild(bookInfo);
        newCard.appendChild(bookBtnContainer);
    }

    return newCard;
}

function displayCard(card) {
    const cardGrid = document.querySelector(".content-grid");
    
    cardGrid.appendChild(card);
}

function clearInputs() {
    // TODO make it modular?
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    console.log(book);
}

function displayBooks() {
    myLibrary.forEach(book => {
        
    });
}