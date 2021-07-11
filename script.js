let myLibrary = [];
let menu = document.querySelector("#menu");
let sideBar = document.querySelector("#sideBar")
menu.addEventListener("click", toggleSidebar);
let form = document.querySelector("#bookInfo");
form.addEventListener("submit", formSubmitted);
let binLogo = document.querySelector("")


function Book(title, author, pages, readValue) {

    this.title = title;
    this.pages = pages;
    this.author = author;
    this.readStatus = readValue;


}

Book.prototype.info = function () {

    return this.title + ", " + this.pages + " pages";
}

function addBookToLIbrary(title, author, pages, readValue) {

    let book = new Book(title, author, pages, readValue);
    myLibrary.push(book);
    console.log(myLibrary);
    return;

}

function toggleSidebar(e) {

    console.log(sideBar);
    let body = document.querySelector("#wrapper");
    body.classList.toggle("bodyToggle");
    let display = document.querySelector("#bookDisplay");
    display.classList.toggle("bookDisplayToggle");
    sideBar.classList.toggle("sideBarToggle");
}

function formSubmitted(e) {

    let checkBox = document.querySelector("#read");
    let readValue;
    console.log(checkBox.checked);

    if(checkBox.checked == true) {

        readValue = "read";
    }

    else {

        readValue = "unread";
    }

   
    let title = form.elements[0].value;
    let author = form.elements[1].value;
    let length = form.elements[2].value;
    let readStatus = readValue;

    console.log(form.elements[3].value); //need to check if checkbox is checked

    //if checked add read
    //else add unread

    addBookToLIbrary(title, author, length, readValue);
    
    updateLibrary();
    e.preventDefault();
    

}

function updateLibrary() {

    let table = document.querySelector("#displayTable");


    myLibrary.forEach(function(book) {

        let row = document.createElement("tr");
        let cell = document.createElement("th");
        let cell2 = document.createElement("th")
        let cell3 = document.createElement("th");
        let cell4 = document.createElement("th");
        let cell5 = document.createElement("th");

        cell.appendChild(document.createTextNode(book.title));
        cell2.appendChild(document.createTextNode(book.author));
        cell3.appendChild(document.createTextNode(book.pages));
        cell4.appendChild(document.createTextNode(book.readStatus));
        
        let binIcon = document.createElement("img");
        binIcon.src = "images/bin.png";

        cell5.appendChild(binIcon);

        row.appendChild(cell);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);
        row.appendChild(cell5);
        //need to append bin icon
        row.setAttribute("data-id",myLibrary.indexOf(book) );
        console.log(row)

        table.appendChild(row);



        console.log(book);
    })
}