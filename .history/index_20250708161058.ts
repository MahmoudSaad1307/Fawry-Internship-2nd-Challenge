// const pName: string = "tv"
// console.log("hello", pName)

enum BookType {
  PAPER_BOOK,
  E_BOOK,
  DEMO_
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