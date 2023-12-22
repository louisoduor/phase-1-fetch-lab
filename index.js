function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
    return response.json();
    })
    .then(data => {
      const booksArray = Array.isArray(data) ? data : data.books || [];
      renderBooks(booksArray);
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}


document.addEventListener('DOMContentLoaded', function() {
  try {
    fetchBooks();
  } catch (error) {
    console.error('There was an error:', error);
  }
});