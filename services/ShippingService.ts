import { PaperBook } from "../models/Book";

export function ShippingService(address: string, book: PaperBook, quantity: number) {
  console.log(`Shipping ${quantity} copy(ies) of '${book.title}' to ${address}`);
}