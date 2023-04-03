function Book(title, authour, pages, read){
    this.title=title;
    this.authour=authour;
    this.pages =pages
    this.read=read;
}


Book.prototype.info = function(){
 return `${this.title}, by ${this.authour}, ${this.pages}, ${this.read}`;
   
   
}

const books = new Book('The Hobbit', 'by J.R.R Tolkien', '295 pages', 'not read')

console.log(books.info())