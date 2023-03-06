let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
};

Book.prototype.read_info = function(read) {
  if (read) {
      return 'Yes'
  } else {
      return 'No'
  }
};

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read_info(this.read)}`
};

//Example books
const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, 0)
const warAndPeace = new Book("War and Peace", "Leo Tolstoy", 310, 0)
const greatGatsby = new Book("The Great Gatsby", "F. Scott Fitzgerald", 275, 1)
const mobyDick = new Book("Moby Dick", "Herman Melville", 125, 0)

//Library Functions
function addBookToLibrary(newBook) {
    return myLibrary.push(newBook)
}

function deleteBookToLibrary() {
  // pass
}

function openForm() {
  console.log("Hello");
  // document.getElementById("popupForm").style.display = "block";
}

function displayLibrary() {
  var table = document.getElementById("datas");
  table.innerHTML="";
  var tr="";
  myLibrary.forEach(book=>{
     tr+='<tr>';
     tr+='<td>'+book.title+'</td>'+'<td>'+book.author+'</td>'+'<td>'+book.pages+'</td>'+'<td>'+book.read_info(book.read)+'</td>'
     tr+='</tr>'
  })
  table.innerHTML+=tr;
}

addBookToLibrary(theHobbit);
addBookToLibrary(greatGatsby);
addBookToLibrary(warAndPeace);
addBookToLibrary(mobyDick);

displayLibrary(myLibrary);

const open_popup = document.querySelector('.openButton');
open_popup.addEventListener('click', openForm);
