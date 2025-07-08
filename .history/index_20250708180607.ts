import { books } from "./data/books";
import { Bookstore } from "./store/BooksStore";
function cloneBooks() {
  return books.map(p => ({ ...p }));
}
function fullTestFunction() {
  console.log("\n--- Buying a paper book ✅ ---");
  (() => {
    const booksList = cloneBooks();
    const store = new Bookstore();

    booksList.forEach(book => store.addBook(book));

    try {
  
      const amount1 = store.buyBook("PB001", 2, "user@example.com", "123 Main St");
      console.log("Paid $" + amount1);
  
    } catch (e: any) {
      console.log("Error:", e.message);
    }
  })()

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

  console.log("\n--- Buying an eBook ✅ ---");
  try {

    const amount4 = store.buyBook("EB001", 1, "user@example.com", "123 Main St");
    console.log("Paid $" + amount4);


  } catch (e: any) {
    console.log("Error:", e.message);

  }


  console.log("\n--- Buying Demo book ❌ ---");

  console.log("🧾 Store Inventory ISBNs:", store.getInventory().map(b => b.isbn));

  try {
    const amount5 = store.buyBook(
      "SB002",
      1,
      "user@example.com",
      "123 Main St"
    );
    console.log("Paid $" + amount5);
  } catch (e: any) {
    console.log("Error:", e.message);
  }


}

fullTestFunction();
