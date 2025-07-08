// const pName: string = "tv"
// console.log("hello", pName)

enum BookType {
  PAPER_BOOK,
  E_BOOK,
  DEMIO
}
interface Book {
  title: string;
  price: number;
  publishedAt: Date;
  isbn: string;
  bookType: string;
}
interface BooksStore{

}