//the library will be visually displayed as a bunch of cards or a table,
//not sure yet
// let myLibrary = []
//
// function Book(title, author, pages, haveRead) {
//   this.title = title
//   this.author = author
//   this.pages = pages
//   this.haveRead = haveRead
//
//   this.info = function(){
//     return `${title} by ${author}, ${pages}, ${haveRead}`
//   }
// }

// function displayBooks(){
//   for(Book:myLibrary){
//
//   }
// }

//add button logic
let addButton = document.getElementById("addBookButton")
if(addButton.addEventListener)
  addbutton.addEventListener("click", addBookToLibrary, false)
else if(addButton.attachEvent)
  addButton.attachEvent('onclick', addBookToLibrary)

// function addBookToLibrary(){
//   alert("test")
// }
