// Base abstract class
abstract class Book {
  constructor(
    public isbn: string,
    public title: string,
    public author: string,
    public year: number,
    public price: number
  ) { }
}

// Subclasses
class PaperBook extends Book {
  constructor(
    isbn: string,
    title: string,
    author: string,
    year: number,
    price: number,
    public stock: number
  ) {
    super(isbn, title, author, year, price);
  }
}

class EBook extends Book {
  constructor(
    isbn: string,
    title: string,
    author: string,
    year: number,
    price: number,
    public filetype: string
  ) {
    super(isbn, title, author, year, price);
  }
}

class DemoBook extends Book {
  constructor(
    isbn: string,
    title: string,
    author: string,
    year: number
  ) {
    super(isbn, title, author, year, 0);
  }
}

function ShippingService () {
  static ship() {
    console.log(`Quantum book store: Shipping ${quantity} copy(ies) of '${book.title}' to ${address}`);
  }
}

class MailService {
  static send(email: string, book: EBook) {
    console.log(`Quantum book store: Sending eBook '${book.title}' as ${book.filetype} to ${email}`);
  }
}

// Bookstore class
class Bookstore {
  private books: Book[] = [];

  addBook(book: Book) {
    this.books.push(book);
    console.log("Quantum book store: Book added ->", book);
  }

  removeOutdatedBooks(maxAge: number): Book[] {
    const currentYear = new Date().getFullYear();
    const outdated = this.books.filter(b => currentYear - b.year > maxAge);
    this.books = this.books.filter(b => currentYear - b.year <= maxAge);
    console.log("Quantum book store: Removed outdated books");
    return outdated;
  }

  buyBook(isbn: string, quantity: number, email: string, address: string): number {
    const book = this.books.find(b => b.isbn === isbn);
    if (!book) throw new Error("Quantum book store: Book not found");

    if (book instanceof PaperBook) {
      if (book.stock < quantity) throw new Error("Quantum book store: Not enough stock");
      book.stock -= quantity;
      ShippingService.ship(address, book, quantity);
      return quantity * book.price;
    }

    if (book instanceof EBook) {
      MailService.send(email, book);
      return quantity * book.price;
    }

    throw new Error("Quantum book store: Cannot buy this type of book");
  }
}

// Test class
class QuantumBookstoreFullTest {
  static run() {
    const store = new Bookstore();

    // get this books list from AI model ☺️
    const books: Book[] = [
      new PaperBook("PB001", "Clean Code", "Robert C. Martin", 2008, 45.99, 10),
      new PaperBook("PB002", "The Pragmatic Programmer", "Andrew Hunt", 1999, 39.99, 5),
      new PaperBook("PB003", "You Don’t Know JS", "Kyle Simpson", 2014, 29.99, 8),
      new EBook("EB001", "Atomic Habits", "James Clear", 2018, 19.99, "PDF"),
      new EBook("EB002", "Deep Work", "Cal Newport", 2016, 14.99, "EPUB"),
      new EBook("EB003", "Zero to One", "Peter Thiel", 2014, 13.99, "MOBI"),
      new DemoBook("SB001", "The Art of War", "Sun Tzu", -500),
      new DemoBook("SB002", "Principia Mathematica", "Isaac Newton", 1687),
      new DemoBook("SB003", "On the Origin of Species", "Charles Darwin", 1859),
      new PaperBook("PB004", "Design Patterns", "Erich Gamma", 1994, 49.99, 4),
    ];

    books.forEach(book => store.addBook(book));

    console.log("\n--- Buying a paper book ---");
    const amount1 = store.buyBook("PB001", 2, "user@example.com", "123 Main St");
    console.log("Quantum book store: Paid $" + amount1);

    console.log("\n--- Buying an eBook ---");
    const amount2 = store.buyBook("EB001", 1, "user@example.com", "");
    console.log("Quantum book store: Paid $" + amount2);

    console.log("\n--- Removing outdated books (>30 years) ---");
    const removed = store.removeOutdatedBooks(30);
    console.log("Quantum book store: Removed", removed.length, "book(s)");
  }
}

// Run the test
QuantumBookstoreFullTest.run();
