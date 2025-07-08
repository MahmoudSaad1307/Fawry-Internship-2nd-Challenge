import { books } from "./data/books";
import { Bookstore } from "./store/BooksStore";

function fullTestFunction() {
  const store = new Bookstore();
  books.forEach(book => store.addBook(book));
  try {

    console.log("\n--- Buying a paper book ✅ ---");
    const amount1 = store.buyBook("PB001", 2, "user@example.com", "123 Main St");
    console.log("Paid $" + amount1);

    console.log("\n--- Buying a paper book ✅ ---");
    const amount2 = store.buyBook("PB001", 2, "user@example.com", "123 Main St");
    console.log("Paid $" + amount1);

    console.log("\n--- Buying an eBook ---");
    const amount3 = store.buyBook("EB001", 1, "user@example.com", "");
    console.log("Paid $" + amount3);

    console.log("\n--- Removing outdated books (>30 years) ---");
    const removed = store.removeOutdatedBooks(30);
    console.log("Removed", removed.length, "book(s)", { outdatedBooks: removed });

  } catch (error: any) {
    console.log("Error:", error.message);


  }


}

fullTestFunction();