export class Bookstore {
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
      shippingService(address, book, quantity);
      return quantity * book.price;
    }

    if (book instanceof EBook) {
      mailService(email, book);
      return quantity * book.price;
    }

    throw new Error("Quantum book store: Cannot buy this type of book");
  }
}