let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read

  this.read_info = function(read) {
    if (read == true) {
        return 'have read'
    } else {
        return 'not read yet'
    }
  };

  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${this.read_info(read)}`
  };
};

function addBookToLibrary(newBook) {
    return myLibrary.push(newBook)
  }

  function deleteBookToLibrary() {
    // pass
  }

  function displayLibrary() {
    // pass
  }