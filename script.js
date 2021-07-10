let myLibrary = [];

function Book(title, author, pages, read) {

    this.title = title;
    this.pages = pages;
    this.author = author;
    this.read = read;
  
  }
  
  book.prototype.info = function() {
  
    return this.title + ", " + this.pages + " pages, " + this.read + "."
  }

  function addBookToLIbrary(title, author, pages, read) {

    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    return;

  }

  