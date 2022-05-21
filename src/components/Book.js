import React from "react";
import '../stylesheets/Book.css';
import '../App'

const Book = props =>
{
    return(
    <div className="Book">
        <h2 onClick={props.change}>Book: {props.bookName}</h2>
        <h3>Writer: {props.writer}</h3>
        <input type = 'text' onChange = {props.inputName} value = {props.bookName}/>
    </div>
    );
    
}

export default Book;