import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up
    // as props inside of BookList 
    return {
        books: state.books
    }
}

    // Whatever is returned from this function
    // will also show up as
    // props inside of BookList 
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be
    // passed to all our reducers
    return bindActionCreators({ selectBook }, dispatch)
}

// Promotes BookList from a dumb comoponent to smart container cause it
// needs to know about the dispatch method - selectBook and make it
// available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList)