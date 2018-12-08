function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

function UI() {}

function Store() {}

UI.prototype.addBookToList = function(book) {
  if (document.querySelector("#no_books") != null) {
    document.querySelector("#no_books").remove();
  }
  let list = document.querySelector("#bookList");
  let row = document.createElement('tr');
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><i class="fas fa-times"></i></td>
  `
  list.appendChild(row);
}

UI.prototype.showNoBooks = function() {
  let list = document.querySelector("#bookList");
  let row = document.createElement('tr');
  row.innerHTML = `<td colspan="4" id="no_books">No Books</td>`;
  list.appendChild(row);
}

UI.prototype.clearFields = function() {
  document.querySelector('#title').value = "";
  document.querySelector('#author').value = "";
  document.querySelector('#isbn').value = "";
}

UI.prototype.showAlert = function(message, className) {
  let alertBadge = document.querySelector('#alert');
  alertBadge.className = className;
  alertBadge.textContent = message;
  alertBadge.style.display = "block";
  setTimeout(function() {
    alertBadge.classList.remove(className);
    alertBadge.style.display = "none";
  }, 3000)
}

Store.prototype.getBook = function() {
  let books;
  if (localStorage.getItem('books') == null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }
  return books;
}

Store.prototype.displayBook = function() {
  let books = Store.prototype.getBook();
  let ui = new UI();
  if (books.length > 0) {
    books.forEach(function(book) {
      ui.addBookToList(book);
    });
  } else {
    ui.showNoBooks();
  }
}

Store.prototype.addBook = function(book) {
  let books = Store.prototype.getBook();
  books.push(book);
  localStorage.setItem('books',JSON.stringify(books));
}

Store.prototype.removeBook = function(isbn) {
  let books = Store.prototype.getBook();
  let ui = new UI();
  books.forEach(function(book, index) {
    if (book.isbn == isbn) {
      books.splice(index, 1);
    }
  });
  if (books.length == 0) ui.showNoBooks();
  localStorage.setItem('books',JSON.stringify(books));
}

// Main Program here
let store = new Store();
store.displayBook();

document.querySelector("#bookForm").addEventListener('submit', function(e) {
  e.preventDefault();
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let isbn = document.querySelector('#isbn').value;

  let ui = new UI();

  if (!title || !author || !isbn) {
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    let book = new Book(title, author, isbn);
    let store = new Store();
    ui.addBookToList(book);
    ui.clearFields();
    ui.showAlert('Book added', 'success');
    store.addBook(book);
  }
});

document.querySelector("#bookList").addEventListener('click', function(e) {
  if (e.target.nodeName == "I") {
    e.target.parentElement.parentElement.remove();
    let ui = new UI();
    let store = new Store();
    ui.showAlert('Book deleted', 'success');
    store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  }
});
