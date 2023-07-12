const books = [
	{
		bookId: 1,
		bookName: 'Juan',
	},
	{
		bookId: 2,
		bookName: 'Pedro',
	},
];

const getBookById = async id => {
	const book = await books.find(book => book.bookId === id);
	if (book) {
		return book;
	}
	throw new Error(`Book with id ${id} not found`);
};

getBookById(45)
	.then(book => {
		console.log(book);
	})
	.catch(err => {
		console.log(err);
	});
