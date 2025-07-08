function ShippingService(address: string, book: PaperBook, quantity: number) {
  console.log(`Quantum book store: Shipping ${quantity} copy(ies) of '${book.title}' to ${address}`);
}

function MailService(email: string, book: EBook) {
  console.log(`Quantum book store: Sending eBook '${book.title}' as ${book.filetype} to ${email}`);
}