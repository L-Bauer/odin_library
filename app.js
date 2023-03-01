let myLibrary = new Map();

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.read_info = function (read) {
      if (read == true) {
        return 'have read';
      } else {
        return 'not read yet';
      }
    }
  }

  info() {
      return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read_info(this.read)}`;
    }
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

//addBookToLibrary(theHobbit)


console.log(theHobbit.info())

myLibrary.set(`${theHobbit.title}, ${theHobbit.author}`, theHobbit)

console.log(myLibrary.entries())