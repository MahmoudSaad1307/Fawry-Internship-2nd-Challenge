// const pName: string = "tv"
// console.log("hello", pName)

enum BookType {
  PAPER_BOOK,
  E_BOOK,
  DEMI
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