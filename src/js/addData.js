import bookData from "./bookData.js";
import appendBook from "./books.js";
const addData = () => {
  let count = 0;
  let subArray = [];
  let rows = bookData.split('\n');
  rows.shift();
  // for (let index in dataArray) {
    
  // }
  rows.forEach ((row) => {
    const column = row.split(',');
    appendBook(column);
  });
};
window.onload = addData;