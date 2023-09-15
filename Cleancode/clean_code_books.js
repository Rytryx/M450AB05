let books = [
  { id: 1, booktitle: "Der alte Mann und das Meer", price: 10.5 },
  { id: 2, booktitle: "Moby Dick", price: 12.3 },
  { id: 3, booktitle: "1984", price: 8.5 },
];

function getBookById(id) {
  for (let book of books) {
    if (book.id === id) {
      return book;
    }
  }
  return null; 
}
function addNewBook(title, price) {
  let maxId = 0;
  for (let book of books) {
    if (book.id > maxId) {
      maxId = book.id;
    }
  }
  books.push({ id: maxId + 1, booktitle: title, price: price });
}

function listAllBooks() {
  for (let book of books) {
    console.log(book.booktitle + " - " + book.price + "€");
  }
}

let myBook = getBookById(2);
console.log(myBook);
addNewBook("Fahrenheit 451", 9.2);
listAllBooks();
