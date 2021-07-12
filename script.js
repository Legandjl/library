let localLib = JSON.parse(localStorage.getItem("myLibrary"));
let myLibrary = [];
checkForLocal();
let menu = document.querySelector("#menu");
let sideBar = document.querySelector("#sideBar")
menu.addEventListener("click", toggleSidebar);
let form = document.querySelector("#bookInfo");
form.addEventListener("submit", formSubmitted);

function Book(title, author, pages, readValue) {

    this.title = title;
    this.pages = pages;
    this.author = author;
    this.readStatus = readValue;

}

Book.prototype.info = function () {
    return this.title + ", " + this.pages + " pages";
}

function addBook(title, author, pages, readValue) {

    let book = new Book(title, author, pages, readValue);
    myLibrary.push(book);
    updateLocalStorage();
    return book;
}

function formSubmitted(e) {
  
    let checkBox = document.querySelector("#read");
    let readValue;

    if (checkBox.checked == true) {

        readValue = "Read";

    } else {

        readValue = "Unread";
    }

    let title = form.elements[0].value;
    let author = form.elements[1].value;
    let length = form.elements[2].value;
    let readStatus = readValue;
    let book = addBook(title, author, length, readValue);
    updateLibrary(book);
    form.reset();
    e.preventDefault();
}

function updateLibrary(book) {

    let table = document.querySelector("#displayTable");
    let row = document.createElement("tr");
    let binIcon = document.createElement("img");    
    let cells = [];
    binIcon.src = "images/bin.png";

    for (x = 0; x < 5; x++) {

        cells.push(document.createElement("th"));
    }

    cells[0].appendChild(document.createTextNode(book.title));
    cells[1].appendChild(document.createTextNode(book.author));
    cells[2].appendChild(document.createTextNode(book.pages));
    cells[3].appendChild(document.createTextNode(book.readStatus));
    cells[3].classList.add("readState");
    cells[3].addEventListener("click", readStatusClick);
    cells[4].appendChild(binIcon);  

    cells.forEach(cell => {
        row.appendChild(cell);
    })
    //need to add classes so hover works   
   
    row.setAttribute("data-id", myLibrary.indexOf(book));
    table.appendChild(row);
    row.addEventListener("click", binClick);
}

function readStatusClick(e) {

    let id = e.target.parentElement.dataset.id;

    if (e.target.innerText == "Read") {
        e.target.innerText = "Unread";
        myLibrary[id].readStatus = "Unread";        
        updateLocalStorage();
        return;
    }

    e.target.innerText = "Read";
    myLibrary[id].readStatus = "Read"
    updateLocalStorage();
}

function binClick(e) {   

    if (e.target.src != undefined) {

        let toRemove = e.target.parentElement.parentNode.dataset.id;        
        myLibrary.splice(toRemove, 1);        
        let row = e.target.parentElement.parentNode;       
        row.remove();
        updateLocalStorage();
    }
}

function checkForLocal() {

    if (localLib == null) {

        return;

    } else {
        
        localLib.forEach(element => {
            myLibrary.push(element);
            updateLibrary(element);
        })
    }
}

function toggleSidebar(e) {

    let body = document.querySelector("#wrapper");
    body.classList.toggle("bodyToggle");
    let display = document.querySelector("#bookDisplay");
    display.classList.toggle("bookDisplayToggle");
    sideBar.classList.toggle("sideBarToggle");
    return;
}

function updateLocalStorage() {

    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
    localLib = JSON.parse(localStorage.getItem("myLibrary"));

}