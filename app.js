let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
};

Book.prototype.read_info = function(read) {
  if (read == true) {
      return 'have read'
  } else {
      return 'not read yet'
  }
};

Book.prototype.info = function () {
  return `${title} by ${author}, ${pages} pages, ${this.read_info(read)}`
};

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false)

function addBookToLibrary(newBook) {
    return myLibrary.push(newBook)
}

function deleteBookToLibrary() {
  // pass
}

function displayLibrary() {
  // pass
}

addBookToLibrary(theHobbit)

console.log(theHobbit.info())

