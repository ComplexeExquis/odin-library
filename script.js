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
    
    clearInputs(); 

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

        if (book.readStatus === "read") 
            readOrNotBtn.classList.add("read");
        else
            readOrNotBtn.classList.add("unread");
           
        deleteBtn.classList.add("delete-btn");

        // adding functionality to the buttons
        addReadOrNotBtnFunctionality(readOrNotBtn);
        addDeleteBtnFunctionality(deleteBtn);

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
    const bookName = document.querySelector("#book-name-input");
    const bookAuthor =  document.querySelector("#book-author-input");
    const bookPages = document.querySelector("#book-pages-input");

    // emptying the html input element
    bookName.value = "";
    bookAuthor.value = "";
    bookPages.value = "";
    // unchecking the radio button
    const radioButtons = document.getElementsByName('read-or-not-input');
    for (const radio of radioButtons) {
        radio.checked = false;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function addReadOrNotBtnFunctionality(readOrNotBtn) {
    readOrNotBtn.addEventListener("click", markReadOrUnread);
}

function addDeleteBtnFunctionality(deleteBtn) {
    
}

function markReadOrUnread(event) {
    if (event.target.classList[1] === "read") {
        event.target.classList.remove("read");
        event.target.classList.add("unread");   
    }
    else {
        event.target.classList.remove("unread");
        event.target.classList.add("read");
    }
}

// ???
// i have no clue
function displayBooks() {
    myLibrary.forEach(book => {
        
    });
}