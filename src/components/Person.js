import React, { Component } from "react";

let Person = (props)=>
{
    console.log(props);
    return(
        <div>
            <h2>Name:{props.name} and Age:{props.age}</h2>
            <h2>Extra info:{props.children}</h2>
        </div>
    );
}

// class Person extends Component
// {
//     // constructor(props)
//     // {
//     //     super(props);
//     // }
//         render()
//         {
            
//                 //console.log(this.props);
//                 return (
//                              <div>
//                                  <h2>Name:{this.props.name} and Age:{this.props.age} years</h2>
//                                 <h2>Extra info:{this.props.children}</h2>
//                             </div>
//                   );
            
        
//         }
    
//     }
    

export default Person;