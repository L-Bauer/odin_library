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

function deleteBookToLibrary(book_number) {
  myLibrary.splice(book_number, 1);
  displayLibrary();
 }

function openForm() {
  document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
  document.getElementById("popupForm").style.display = "none";
  submit_Book.reset();
}

function submitBook(e) {
  e.preventDefault();
  const formData = new FormData(submit_Book)
  let newBookInfo = []
  for (const info of formData.values()) {
    newBookInfo.push(info)
  }
  const submitedBook = new Book(newBookInfo[0], newBookInfo[1], newBookInfo[2], Number(newBookInfo[3]));
  addBookToLibrary(submitedBook);
  displayLibrary();
  submit_Book.reset();
  closeForm();
};

function toggleCheck () {
  myLibrary.forEach((book, index)=>{
    if (book.read) {
      console.log(book.read);
      console.log(`book_read_${index}`);
      document.getElementById(`book_read_${index}`).checked = true;
    }
  })
}

function displayLibrary() {
  var table = document.getElementById("library_body");
  table.innerHTML="";
  var tr="";
  myLibrary.forEach((book, index)=>{
    tr+=`<tr class="row book" id=${index}>`;
    tr+='<td>'+book.title+'</td>'+
    '<td>'+book.author+'</td>'+
    '<td>'+book.pages+'</td>'+
    '<td>'+book.read_info(book.read)+
      '<label class="switch">'+
        `<input type="checkbox" class="check read" id="book_read_${index}">`+
        `<span class="slider round" id=${index}>`+'</span>'+
      '</label>'+
    '</td>'+
    '<td>'+`<button class="btn delete" id=${index}><strong>Delete</strong></button>`+'</td>'
    tr+='</tr>'
  })
  table.innerHTML+=tr;
  toggleCheck();
  placeEventListener();
}

function clickCheck (book_number) {
  if (myLibrary[book_number].read) {
    myLibrary[book_number].read = 0;
  } else {
    myLibrary[book_number].read = 1;
  }
  displayLibrary();
}

addBookToLibrary(theHobbit);
addBookToLibrary(greatGatsby);
addBookToLibrary(warAndPeace);
addBookToLibrary(mobyDick);

displayLibrary(myLibrary);

const open_Popup = document.querySelector('.open');
const close_Popup = document.querySelector('.cancel');
const submit_Book = document.querySelector('#newBook');


open_Popup.addEventListener('click', openForm);
close_Popup.addEventListener('click', closeForm);
submit_Book.addEventListener('submit', (e) => {submitBook(e)});

function placeEventListener () {
  let delete_Book = document.querySelectorAll('.delete');
  delete_Book.forEach((row, index) => {
  row.addEventListener('click', () => deleteBookToLibrary(index));
  });

  let read_book = document.querySelectorAll('.read');
  read_book.forEach((row, index) => {
  row.addEventListener('click', () => clickCheck(index));
  })
}

