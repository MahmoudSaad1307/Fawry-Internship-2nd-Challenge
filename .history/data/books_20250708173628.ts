import { Book, DemoBook, EBook, PaperBook } from "../models/Book";

// Note: got this books list from AI model ☺️
export const books: Book[] = [
  new PaperBook("PB001", "Clean Code", "Robert C. Martin", new Date("2008-08-11"), 45.99, 10),
  new PaperBook("PB002", "The Pragmatic Programmer", "Andrew Hunt", new Date("1999-10-20"), 39.99, 5),
  new PaperBook("PB003", "You Don’t Know JS", "Kyle Simpson", new Date("2014-12-28"), 29.99, 8),
  new EBook("EB001", "Atomic Habits", "James Clear", new Date("2018-10-16"), 19.99, "PDF"),
  new EBook("EB002", "Deep Work", "Cal Newport", new Date("2016-01-05"), 14.99, "EPUB"),
  new EBook("EB003", "Zero to One", "Peter Thiel", new Date("2014-09-16"), 13.99, "MOBI"),
  new DemoBook("SB001", "The Art of War", "Sun Tzu", new Date("-0500-01-01")),
  new DemoBook("SB002", "Principia Mathematica", "Isaac Newton", new Date("1687-07-05")),
  new DemoBook("SB003", "On the Origin of Species", "Charles Darwin", new Date("1859-11-24")),
  new PaperBook("PB004", "Design Patterns", "Erich Gamma", new Date("1994-10-21"), 49.99, 4),
  
];
