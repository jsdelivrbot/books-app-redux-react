export function selectBook(book) { 
    // selectBook is an ActionCreator and it needs to return and Action
    // which is an object with a type property and a payload
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}