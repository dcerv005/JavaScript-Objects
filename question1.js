// Task 1
function Book(title, author, pages) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    // Task 2
    this.display=function() {
        console.log("Book title: "+this.title)
        console.log("Book author: "+this.author)
        console.log("Book page count: "+this.pages)
    }

}
let book1=new Book("Title", "Author", 150)
book1.display();
console.log(book1.title)


// Task 3
let books= [];

function newBooks (title, author, pageCount) {
    let book = new Book(title, author, pageCount);
    console.log(book)
    books.push(book)
}

function searchbook (title) {
    bookFound=false;
    books.forEach(Book => {
        if (Book.title==title){
            
            bookFound=true;
        } 
    });
    if (bookFound) {
        console.log("Book found")
    } else {
        console.log("Book not found")
    }

    
}

newBooks("try", "author", 105);
newBooks("check", "author2", 200);
newBooks("example", "author3", 10)

console.log(books[0].title)

searchbook("try");
searchbook("check")
searchbook("why")

//Task 4

function filterBook () {
    
    let filtered = books.filter(book => book.pages>=100);
    console.log(filtered);
    
}


filterBook();