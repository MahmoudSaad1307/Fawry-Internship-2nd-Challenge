// const pName: string = "tv"
// console.log("hello", pName)

enum BookType {
  PAPER_BOOK,
  E_BOOK,
  DEMO_BOOK
}
interface Customer {
  name: string;
  address: string;
  email: string;
  balance: number;
}
interface Book {
  title: string;
  price: number;
  publishedAt: Date;
  isbn: string;
  bookType: BookType;
}
interface BooksStore {
  revenue: number;

  books: Book[];
  addBook(book: Book): void;
  getBookByIsbn(isbn: string): Book;

}