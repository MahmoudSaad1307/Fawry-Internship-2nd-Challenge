// const pName: string = "tv"
// console.log("hello", pName)

export enum BookType {
  PAPER_BOOK,
  E_BOOK,
  DEMO_BOOK
}
 export interface Customer {
  name: string;
  address: string;
  email: string;
  balance: number;
}
export interface Book {
  title: string;
  price: number;
  publishedAt: Date;
  isbn: string;
  bookType: BookType;
  quantity: number;
}
interface BooksStore {
  revenue: number;
  books: Book[];
  addBook(book: Book): void;
  getBookByIsbn(isbn: string): Book;

}