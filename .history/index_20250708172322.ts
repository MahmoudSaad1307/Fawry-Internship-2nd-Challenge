import { books } from "./data/books";
import { Bookstore } from "./store/BooksStore";

function fullTestFunction() {
  const store = new Bookstore();
  books.forEach(book => store.addBook(book));
  try {
    


  } catch (error) {
    
  }

  
}

fullTestFunction();