import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react';
import './App.css';
import Book from './components/Book';

class App extends Component
{
  state = {
    books: [
      {bookName:"1984", writer:"George Orwell"},
      {bookName:"The Da Vinci Code", writer:"Dan Brown"},
      {bookName:"The Alchemist", writer:"Paulo Coelho"}
    ],
    otherProp: "I'm some other Prop"
  };

  changeBookState = newBookName =>
  {
    this.setState({
      books: [
        {bookName:newBookName, writer:"George Orwell"},
        {bookName:"The Da Vinci Code", writer:"Da Brown"},
        {bookName:"Metmorphosis", writer:"Franz Kafka"}
      ]
    });
  }

  changeWithInputState = event =>
  {
    this.setState({
      books: [
        {bookName:event.target.value, writer:"George Orwell"},
        {bookName:"The Da Vinci Code", writer:"Da Brown"},
        {bookName:"Metmorphosis", writer:"Franz Kafka"}
      ]
    });
  }
  
  render()
  {
    const style ={
      border: "1px solid red",
      borderRadius: "5px",
      backgroundColor: "black",
      color: "wheat"
    }
    const buttonStyle=
    {
      height: "35px",
      width: "80px",
      border: "1px solid red",
      padding: "2px",
      backgroundColor:"black",
      color:"wheat",
      borderRadius: "5px",
      
      marginBottom: "2px",
    }
    const inputStyle=
    {
      height: "35px",
      width: "230px",
      border: "1px solid yellow",
      backgroundColor:"cyan",
      color:"white",
      borderRadius: "5px",
     
      
    }
    const books = this.state.books.map(book=>
    {
      return(<Book 
        bookName ={book.bookName}
        writer ={book.writer}
        />);
     
    });
    console.log(books);
    return(
      <div className="App">
        <h1 style={style}>Book List</h1>
        <button style={buttonStyle} onClick={()=>this.changeBookState("Nineten Eighty-four")}>Change State</button>
        <input style={inputStyle} type="text" onChange = {this.changeWithInputState} />
      {books}
      </div>
    );
  }
}

export default App;
