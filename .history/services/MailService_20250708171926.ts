import { EBook } from "../models/Book";


export function MailService(email: string, book: EBook) {
  console.log(`Sending eBook '${book.title}' as ${book.filetype} to ${email}`);
}