import { Book, DemoBook, EBook, PaperBook } from "../models";
// got this books list from AI model ☺️
export const books: Book[] =
  [
    new PaperBook("PB001", "Clean Code", "Robert C. Martin", 2008, 45.99, 10),
    new PaperBook("PB002", "The Pragmatic Programmer", "Andrew Hunt", 1999, 39.99, 5),
    new PaperBook("PB003", "You Don’t Know JS", "Kyle Simpson", 2014, 29.99, 8),
    new EBook("EB001", "Atomic Habits", "James Clear", 2018, 19.99, "PDF"),
    new EBook("EB002", "Deep Work", "Cal Newport", 2016, 14.99, "EPUB"),
    new EBook("EB003", "Zero to One", "Peter Thiel", 2014, 13.99, "MOBI"),
    new DemoBook("SB001", "The Art of War", "Sun Tzu", -500),
    new DemoBook("SB002", "Principia Mathematica", "Isaac Newton", 1687),
    new DemoBook("SB003", "On the Origin of Species", "Charles Darwin", 1859),
    new PaperBook("PB004", "Design Patterns", "Erich Gamma", 1994, 49.99, 4),
  ];