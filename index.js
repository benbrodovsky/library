//the library will be visually displayed as a bunch of cards or a table,
//not sure yet
let myLibrary = []

function Book(title, author, pages, haveRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.haveRead = haveRead

  this.info = function(){
    return `${title} by ${author}, ${pages}, ${haveRead}`
  }
}

function displayBooks(){
  for(Book:myLibrary){

  }
}

function addBookToLibrary(){

}
