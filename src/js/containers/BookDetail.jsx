import React from 'react';
import { connect } from 'react-redux';

@connect((state) => {
  return {
    activeBook: state.activeBook,
  }
})
export default class BookDetail extends React.Component {
  render(){
    if(!this.props.activeBook)
    return (<h3>Please select book</h3>)

    return (
      <div class="col-sm-8">
        <h3>Detail for: </h3>
        <p>Title: {this.props.activeBook.title}</p>
        <p>Author: {this.props.activeBook.author}</p>
      </div>
    )
  }
}
