import { PaperBook } from "../models";

export function shippingService(address: string, book: PaperBook, quantity: number) {
  console.log(`Quantum book store: Shipping ${quantity} copy(ies) of '${book.title}' to ${address}`);
}