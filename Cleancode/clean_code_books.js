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
function addNewBook(books, title, price) {
  let maxId = 0;
  for (let book of books) {
    if (book.id > maxId) {
      maxId = book.id;
    }
  }

  const newBooks = [...books, { id: maxId + 1, booktitle: title, price: price }];

  return newBooks;
}

function listAllBooks() {
  for (let book of books) {
    console.log(book.booktitle + " - " + book.price + "€");
  }
}

let myBook = getBookById(2);
console.log(myBook);
const updatedBooks= addNewBook(books, "Fahrenheit 451", 9.2);
console.log(updatedBooks);
listAllBooks();
