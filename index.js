let myLibrary =[];

function Book(title, authour, pages, read){
    this.title=title;
    this.authour=authour;
    this.pages =pages
    this.read=read;
}


Book.prototype.info = function(){
 return `${this.title}, by ${this.authour}, ${this.pages}, ${this.read}`;
   
   
}


function addBookToLibrary(){
let title =prompt('Please enter the Title of the Book')
let authour = prompt('Please enter the authour of the book')
let pages = prompt("Please enter the books pages")
let read =prompt('Please enter if you have read the book')
const book = new Book(title, authour, pages, read)
myLibrary.push(book)
}


function displayBook(){
  for(let book of myLibrary){
    console.log(book.name, book.authour, book.pages, book.read)
  }
}

