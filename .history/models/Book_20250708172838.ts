export abstract class Book {
  constructor(
    public isbn: string,
    public title: string,
    public author: string,
    public publishedAt: Date,
    public price: number
  ) { }
}

// Subclasses
export class PaperBook extends Book {
  constructor(
    isbn: string,
    title: string,
    author: string,
    publishedAt: number,
    price: number,
    public stock: number
  ) {
    super(isbn, title, author, publishedAt, price);
  }
}

export class EBook extends Book {
  constructor(
    isbn: string,
    title: string,
    author: string,
    publishedAt: number,
    price: number,
    public filetype: string
  ) {
    super(isbn, title, author, publishedAt, price);
  }
}

export class DemoBook extends Book {
  constructor(
    isbn: string,
    title: string,
    author: string,
    publishedAt: number
  ) {
    super(isbn, title, author, publishedAt, 0);
  }
}