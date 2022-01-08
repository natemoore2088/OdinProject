function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        let infostr = title + ', by ' + author + ', ' + pages + ' pages, ' + read;
        return infostr
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet')
console.log(theHobbit.info())
console.log('test')