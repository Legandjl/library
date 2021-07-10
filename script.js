let myLibrary = [];
let menu = document.querySelector("#menu");
let sideBar = document.querySelector("#sideBar")
menu.addEventListener("click", toggleSidebar);
let form = document.querySelector("#bookInfo");
form.addEventListener("submit", formSubmitted);


function Book(title, author, pages) {

    this.title = title;
    this.pages = pages;
    this.author = author;


}

Book.prototype.info = function () {

    return this.title + ", " + this.pages + " pages";
}

function addBookToLIbrary(title, author, pages) {

    let book = new Book(title, author, pages);
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

    console.log(e);
    let title = form.elements[0].value;
    let author = form.elements[1].value;
    let length = form.elements[2].value;

    addBookToLIbrary(title, author, length);
    e.preventDefault();


}