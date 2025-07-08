import { books } from "./data/books";

function fullTestFunction () {
    const store = new Bookstore();

    // get this books list from AI model ☺️
  

    books.forEach(book => store.addBook(book));

    console.log("\n--- Buying a paper book ---");
    const amount1 = store.buyBook("PB001", 2, "user@example.com", "123 Main St");
    console.log("Quantum book store: Paid $" + amount1);

    console.log("\n--- Buying an eBook ---");
    const amount2 = store.buyBook("EB001", 1, "user@example.com", "");
    console.log("Quantum book store: Paid $" + amount2);

    console.log("\n--- Removing outdated books (>30 years) ---");
    const removed = store.removeOutdatedBooks(30);
    console.log("Quantum book store: Removed", removed.length, "book(s)",{outdatedBooks:removed});
}

// Run the test
fullTestFunction();