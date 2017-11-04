// State argument is not the entire application state
// only the state this reducer is responible for
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload
    }

    return state
}