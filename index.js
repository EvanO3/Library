let myLibrary = [
  {title:'How to kill a mocking bird', author:' Harper Lee', pages:'342', read:'No'},
  {title:'48 Law of power', author:'Robert Greene', pages:'400', read:'No'},
  {title:'Perfect day to boss up', author:'Rick Ross', pages:'200', read:'No'},
  {title:'Can not hurt me', author:'David Goggins', pages:'340', read:'Yes'}


];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `${this.title}, by ${this.author}, ${this.pages}, ${this.read}`;
};

function addBookToLibrary() {
  let title = prompt("Please enter the Title of the Book");
  let authour = prompt("Please enter the authour of the book");
  let pages = prompt("Please enter the books pages");
  let read = prompt("Please enter if you have read the book");
  const book = new Book(title, authour, pages, read);
  myLibrary.push(book);
}

function displayBook() {


  const container= document.getElementById('card')
  container.innerHTML='';
  myLibrary.forEach(Book => {
     

    const card = document.createElement("div");
    card.classList.add("card")
    
    const title = document.createElement("h1")
    title.textContent=  `${Book.title}`

    const author = document.createElement("p");
    author.textContent =`${Book.author}`;

    const pages = document.createElement("p");
    pages.textContent = `${Book.pages}`;


const read = document.createElement("p");
  read.textContent = Book.read;


  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(read);
  container.appendChild(card)
  });



}

//Add to the table using dom methods in javascript
//add a new book button
displayBook()