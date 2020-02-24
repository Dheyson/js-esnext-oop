function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

function triggerAddNode() { }

(function () {
  let elem = document.getElementById('book-form');
  elem.addEventListener('submit',
    function (e) {
      const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;
      const nodeBook = new Book(title, author, isbn);
      const list = new triggerAddNode();
      list.addBookToList(nodeBook);
      list.clearFields();
      e.preventDefault();
    }
  );
})();


triggerAddNode.prototype.addBookToList = function (book) {
  const list = document.getElementById('book-list');
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.title}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `
  list.appendChild(row);

}

triggerAddNode.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}



