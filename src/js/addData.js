import dataArray from "./bookData.js";
import appendBook from "./books.js";
const addData = () => {
  let count = 0;
  let subArray = [];
  for (let index in dataArray) {
    if (count <= 3) {
      subArray.push(dataArray[index]);
      count = count + 1;
    } else {
      count = 0;
      appendBook(subArray);
      subArray = [];
      subArray.push(dataArray[index]);
    }
  }
  appendBook(subArray);
};
window.onload = addData;