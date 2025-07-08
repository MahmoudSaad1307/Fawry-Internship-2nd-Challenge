import { books } from "./data/books";
import { Bookstore } from "./store/BooksStore";

function fullTestFunction() {
  const store = new Bookstore();
  books.forEach(book => store.addBook(book));
  console.log("\n--- Buying a paper book ✅ ---");
  try {

    const amount1 = store.buyBook("PB001", 2, "user@example.com", "123 Main St");
    console.log("Paid $" + amount1);

  } catch (e: any) {
    console.log("Error:", e.message);
  }

  console.log("\n--- Not Found book ❌ ---");
  try {
    const amount2 = store.buyBook("PB001xxxx", 2, "user@example.com", "123 Main St");
    console.log("Paid $" + amount2);

  } catch (e: any) {
    console.log("Error:", e.message);



  }

  console.log("\n--- Not enough in stock ❌ ---");
  try {
    const amount3 = store.buyBook("PB003", 3, "user@example.com", "");
    console.log("Paid $" + amount3);
  } catch (e: any) {
    console.log("Error:", e.message);


  }
  console.log("\n--- Removing outdated books  ✅ ---");
  try {
    const maxBookAgeInYears = 30;
    const outdatedBooks = store.removeOutdatedBooks(maxBookAgeInYears);

    console.log(
      `Removed ${outdatedBooks.length} book(s) older than ${maxBookAgeInYears} years.`,
      outdatedBooks
    );


  } catch (e: any) {
    console.log("Error:", e.message);


  }
  try {
    
    
  } catch (e: any) {
    console.log("Error:", e.message);
    
  }


}

fullTestFunction();