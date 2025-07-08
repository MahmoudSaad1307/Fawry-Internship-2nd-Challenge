export abstract class Book {
  constructor(
    public isbn: string,
    public title: string,
    public author: string,
    public published: Date,
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