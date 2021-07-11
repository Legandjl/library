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
    return book;

}

function toggleSidebar(e) {

    let body = document.querySelector("#wrapper");
    body.classList.toggle("bodyToggle");
    let display = document.querySelector("#bookDisplay");
    display.classList.toggle("bookDisplayToggle");
    sideBar.classList.toggle("sideBarToggle");
}

function formSubmitted(e) {

    // if book title not already in library do stuff
    //else return

    let checkBox = document.querySelector("#read");
    let readValue;    

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

    let book = addBookToLIbrary(title, author, length, readValue);
    
    updateLibrary(book);
    e.preventDefault();
    

}

function updateLibrary(book) {

    let table = document.querySelector("#displayTable");

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
        cell4.addEventListener("click", readStatusClick)
        cell5.addEventListener("click", binClick)

        //need to add classes so hover works

        row.appendChild(cell);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);
        row.appendChild(cell5);
        //need to append bin icon

        row.addEventListener("click", binClick) //will log e.target so can check if its the bin
        row.setAttribute("data-id",myLibrary.indexOf(book) );
        table.appendChild(row);
}

function readStatusClick(e) {

    console.log(e.target)

    if(e.target.innerText == "read") {

        e.target.innerText = "unread";
        return;
    }

    e.target.innerText = "read";
}

function binClick(e) {

    //get parent - should be row
    //remove via data tag   

    if(e.target.src != undefined ) {

        let toRemove = e.target.parentElement.parentNode.dataset.id;
        myLibrary.splice(toRemove, 1);
        let row = e.target.parentElement.parentNode;
        row.remove();


    }
} 