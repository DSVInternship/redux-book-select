import React from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/ActiveBookAction.js'

@connect((state) => {
  return {
    books: state.books,
  }
})
export default class BookList extends React.Component{

  handleListItemClick(book){
    this.props.dispatch(selectBook(book));
  }
  renderList(){
    return this.props.books.map((book) => {
      return(
        <li class="list-group-item" key={book.title}
        onClick={this.handleListItemClick.bind(this, book)}>{book.title}</li>
      )
    })
  }

  render(){
    return (
      <ul class="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}
