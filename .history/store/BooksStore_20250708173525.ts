import { Book, EBook, PaperBook } from "../models/Book";
import { MailService } from "../services/MailService";
import { ShippingService } from "../services/ShippingService";

export class Bookstore {
  private books: Book[] = [];

  addBook(book: Book) {
    this.books.push(book);
    console.log("Book added ->", book);
  }

  removeOutdatedBooks(maxAge: number): Book[] {
    // const bookYear= 
    const currentYear = new Date().getFullYear();
    const outdated = this.books.filter(b => currentYear - b.publishedAt.getFullYear() > maxAge);
    this.books = this.books.filter(b => currentYear - b.publishedAt.getFullYear() <= maxAge);
    console.log("Removed outdated books");
    return outdated;
  }

  buyBook(isbn: string, quantity: number, email: string, address: string): number {
    const book = this.books.find(b => b.isbn === isbn);
    if (!book) throw new Error(`Not found book with ISBN ${isbn}`);

    if (book instanceof PaperBook) {
      if (book.stock < quantity) throw new Error("Not enough stock");
      book.stock -= quantity;
      ShippingService(address, book, quantity);
      return quantity * book.price;
    }

    if (book instanceof EBook) {
      MailService(email, book);
      return quantity * book.price;
    }

    throw new Error("Cannot buy this type of book");
  }
}