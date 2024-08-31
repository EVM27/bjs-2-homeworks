class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this._state = 100; 
      this.type = null; 
    }
  
    fix() {
      this.state *= 1.5; 
    }
  
    get state() {
      return this._state;
    }
  
    set state(newState) {
      if (newState < 0) {
        this._state = 0;
      } else if (newState > 100) {
        this._state = 100;
      } else {
        this._state = newState;
      }
    }
  }
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount); 
      this.type = "magazine"; 
    }
  }
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount); 
      this.author = author; 
      this.type = "book"; 
    }
  }
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount); 
      this.type = "novel"; 
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount); 
      this.type = "fantastic"; 
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount); 
      this.type = "detective";
    }
  }
  
  class Library {
    constructor(name) {
      this.name = name;  
      this.books = [];  
    }
  
  
    addBook(book) {
      if (book.state > 30) {  
        this.books.push(book);
      }
    }
  
    
    findBookBy(type, value) {
      for (let book of this.books) {
        if (book[type] === value) {
          return book;  
        }
      }
      return null;  
    }
  
    
    giveBookByName(bookName) {
      const bookIndex = this.books.findIndex(book => book.name === bookName);
      if (bookIndex !== -1) {
        return this.books.splice(bookIndex, 1)[0]; 
      }
      return null;  
    }
  }
  const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);
const sherlock = new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
const magazine = new Magazine("Forbes", 2020, 50);


const library = new Library("Районная библиотека");

library.addBook(picknick);
library.addBook(sherlock);
library.addBook(magazine);
console.log(library.books.length); 
let oldBook = library.findBookBy("releaseDate", 1919);
console.log(oldBook); 

const ancientBook = new NovelBook("Николай Островский", "Как закалялась сталь", 1919, 400);
library.addBook(ancientBook);

oldBook = library.findBookBy("releaseDate", 1919);
console.log(oldBook); 

const issuedBook = library.giveBookByName("Пикник на обочине");
console.log(issuedBook.name); 
console.log(library.books.length); 

issuedBook.state = 20;
console.log(issuedBook.state); 

issuedBook.fix();
console.log(issuedBook.state); 

library.addBook(issuedBook);
console.log(library.books.length); 