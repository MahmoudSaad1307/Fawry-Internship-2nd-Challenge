import { books } from "./data/books";

// Base abstract class
export abstract class Book {
  constructor(
    public isbn: string,
    public title: string,
    public author: string,
    public year: number,
    public price: number
  ) { }
}

// Subclasses
export class PaperBook extends Book {
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

export class EBook extends Book {
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

export class DemoBook extends Book {
  constructor(
    isbn: string,
    title: string,
    author: string,
    year: number
  ) {
    super(isbn, title, author, year, 0);
  }
}

function ShippingService(address: string, book: PaperBook, quantity: number) {
  console.log(`Quantum book store: Shipping ${quantity} copy(ies) of '${book.title}' to ${address}`);
}

function MailService(email: string, book: EBook) {
  console.log(`Quantum book store: Sending eBook '${book.title}' as ${book.filetype} to ${email}`);
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
      ShippingService(address, book, quantity);
      return quantity * book.price;
    }

    if (book instanceof EBook) {
      MailService(email, book);
      return quantity * book.price;
    }

    throw new Error("Quantum book store: Cannot buy this type of book");
  }
}

// Test class
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
