//clear input fields
const clearInput = (title, author, year, genre) => {
  title.value = '';
  author.value = '';
  year.value = '';
  genre.value = '';
};
// to toggle modal
const toggleModal = () => {
  document.getElementById('modal').classList.toggle('hide');
  const form = document.querySelector('#modal form');
  form.addEventListener('submit', addBook);
};
//add classes
const addClass = (book, title, author, year, genre, bookInfo, bookData) => {
  book.classList.add('book');
  title.classList.add('title');
  bookInfo.classList.add('bookInfo');
  bookData.classList.add('bookData');
  author.classList.add('author');
  year.classList.add('year');
  genre.classList.add('genre');
};

//create elements to append
const createBookElements = () => {
  const book = document.createElement('div');
  const title = document.createElement('div');
  const bookInfo = document.createElement('div');
  const bookData = document.createElement('div');
  const author = document.createElement('h3');
  const year = document.createElement('h3');
  const genre = document.createElement('h3');
  addClass(book, title, author, year, genre, bookInfo, bookData);
  const elements = [book, title, year, genre, author, bookInfo, bookData];
  return elements;
}
//add data
const addBookData = (elements, bookValues) => {
  for (let index = 1; index < 5; index++) {
    elements[index].innerText = bookValues[index-1];
  }
};
//add buttons to bookData
const addBtn = (element) => {
  const availableBtn = document.createElement('button');
  availableBtn.classList.add('btn', 'green');
  availableBtn.innerText = 'Avaiable';
  const lendBtn = document.createElement('button');
  lendBtn.classList.add('btn');
  lendBtn.innerHTML = `<i class="fa-solid fa-minus"></i> Lend Book`;
  element.append(availableBtn, lendBtn);
}
//append book
const appendBook = (bookValues) => {
  const elements = createBookElements();
  addBookData(elements, bookValues);
  elements[0].append(elements[1], elements[5], elements[6]);
  elements[5].append(elements[2], elements[3], elements[4]);
  addBtn(elements[6]);
  document.querySelector('.booksContainer').appendChild(elements[0]);
};

// add books
const addBook = (event) => {
  const title = document.getElementById('titleInput');
  const author = document.getElementById('authorInput')
  const year = document.getElementById('yearInput');
  const genre = document.getElementById('genreInput');
  const bookValues = [title.value, year.value, genre.value, author.value];
  appendBook(bookValues);
  clearInput(title, author, year, genre);
  event.preventDefault();
  toggleModal();
};
export default appendBook;
