interface Library {
	id: number;
	name: string;
	address: string;
	phone: string;
	email: string;
	schedule: string;
	image: string;
	description: string;
	books: Book[];
}

interface Book {
	id: number;
	title: string;
	author: string;
	genre: string;
	description: string;
}

interface LibraryRepository {
	addLibrary(library: Library): void;
	getLibraries(): Library[];
	getLibraryById(id: number): Library | undefined;
	updateLibrary(library: Library): void;
	removeLibrary(id: number): void;
}

class InMemoryLibraryRepository implements LibraryRepository {
	private libraries: Library[] = [];

	public addLibrary(library: Library): void {
		this.libraries.push(library);
	}

	public getLibraries(): Library[] {
		return this.libraries;
	}

	public getLibraryById(id: number): Library | undefined {
		return this.libraries.find(library => library.id === id);
	}

	public updateLibrary(library: Library): void {
		const index = this.libraries.findIndex(l => l.id === library.id);
		if (index !== -1) {
			this.libraries[index] = library;
		} else {
			throw new Error(`Library with id ${library.id} not found.`);
		}
	}

	public removeLibrary(id: number): void {
		const index = this.libraries.findIndex(library => library.id === id);
		if (index !== -1) {
			this.libraries.splice(index, 1);
		} else {
			throw new Error(`Library with id ${id} not found.`);
		}
	}
}

interface LibraryService {
	addBookToLibrary(libraryId: number, book: Book): void;
	updateBookFromLibrary(libraryId: number, book: Book): void;
	removeBookFromLibrary(libraryId: number, bookId: number): void;
	getBooksByLibraryId(libraryId: number): Book[] | undefined;
}

class DefaultLibraryService implements LibraryService {
	constructor(private repository: LibraryRepository) {}

	public addBookToLibrary(libraryId: number, book: Book): void {
		const library = this.repository.getLibraryById(libraryId);
		if (!library) {
			throw new Error(`Library with id ${libraryId} not found.`);
		}
		library.books.push(book);
		this.repository.updateLibrary(library);
	}

	public updateBookFromLibrary(libraryId: number, book: Book): void {
		const library = this.repository.getLibraryById(libraryId);
		if (!library) {
			throw new Error(`Library with id ${libraryId} not found.`);
		}
		const bookIndex = library.books.findIndex(b => b.id === book.id);
		if (bookIndex === -1) {
			throw new Error(`Book with id ${book.id} not found.`);
		}
		library.books[bookIndex] = book;
		this.repository.updateLibrary(library);
	}

	public removeBookFromLibrary(libraryId: number, bookId: number): void {
		const library = this.repository.getLibraryById(libraryId);
		if (!library) {
			throw new Error(`Library with id ${libraryId} not found.`);
		}
		library.books = library.books.filter(book => book.id !== bookId);
		this.repository.updateLibrary(library);
	}

	public getBooksByLibraryId(libraryId: number): Book[] | undefined {
		const library = this.repository.getLibraryById(libraryId);
		return library?.books;
	}
}
