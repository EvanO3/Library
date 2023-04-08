let myLibrary = [];


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `${this.title}, by ${this.author}, ${this.pages}, ${this.read}`;
};



function displayBook() {
  const container = document.getElementById("card");
  container.innerHTML = "";
  myLibrary.forEach((Book) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h1");
    title.textContent = `${Book.title}`;

    const author = document.createElement("p");
    author.textContent = `Author: ${Book.author}`;

    const pages = document.createElement("p");
    pages.textContent = `Pages: ${Book.pages}`;

    const read = document.createElement("p");
    read.textContent = `have you read the book: ${Book.read}`;

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    container.appendChild(card);
  });
}

// adding the function that allows the form to show when button is clicked
const btn = document.getElementById("btn")
//this shows the form
function showform(){
  const form = document.getElementById("book-form");
  form.style.display = "block"
  hideBtn()
}

//this hides the buttons when
function hideBtn(){
  document.getElementById("btn").style.display = "none"
}

//shows the button

function showbtn(){
  document.getElementById("btn").style.display = "block"
}

//hides for
function hideForm(){
  document.getElementById("book-form").style.display = "none"
  showbtn()
}

btn.addEventListener('click', showform)
displayBook();

const submit = document.querySelector('.submit-btn');

function submitClick(event){
  event.preventDefault();
  addBookToLibrary()
  displayBook()

}

submit.addEventListener('click', submitClick)

// This is the method that must be edited
function addBookToLibrary() {
  let title = document.getElementById("Title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("Number-of-pages").value;
  let read = document.getElementById("read").value;
  const book = new Book(title, author, pages, read);
  hideForm();
 
  myLibrary.push(book);
}