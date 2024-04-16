//in this example, Student is a child component of App.jsx
//you need to include the props as a parameter of the function
//props allows us to assign key value pairs
//we declare the key here in the child component while the value gets declared in the parent component
//we can insert all sorts of javascript code into the curly braces. For example in the isStudent property, we can use a ternary operator to check if the student is a student or not
//we can also use propTypes to check if the props are of the correct type
//we do this by importing propTypes and then using the propTypes.<type> method to check if the props are of the correct type e.g. propTypes.string, propTypes.number, propTypes.bool
//we can also declare a default value for the props that will be returned if for some reason the rest of the code doesn't return any value
//we do this by using defaultProps
//now we can go into the parent component and declare an empty <Student/> that will return the default values of the props and then we can pass in the values we want to use later on

import React from "react"

import propTypes from "prop-types"

function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"} </p>
        </div>
    );

}
Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool,
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student