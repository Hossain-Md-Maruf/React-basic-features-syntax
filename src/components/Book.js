import React from "react";

const Book = props =>
{
    return(
    <div>
        <h2 onClick={props.change}>Book: {props.bookName}</h2>
        <h3>Writer: {props.writer}</h3>
        <input type = 'text' onChange = {props.inputName} value = {props.bookName}/>
    </div>
    );
    
}

export default Book;