import { PaperBook } from "../models";

export function ShippingService(address: string, book: PaperBook, quantity: number) {
  console.log(`Quantum book store: Shipping ${quantity} copy(ies) of '${book.title}' to ${address}`);
}