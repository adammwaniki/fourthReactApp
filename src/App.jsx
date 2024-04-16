//in this example, App.jsx is a parent component of Student.jsx
//if we're not inserting code that is not a string literal, we must use curly braces
//for the isStudent key/value pair we're going to use a boolean to show what happens when we introduce conditions
//when we declare the boolean here, in this case stating that it's true that Spongebob is a student, we need to introduce a corresponding conditional that will return an answer based on this boolean.
//in this case we want it to return either Yes or No so we'll use a ternary operator


import Student from "./Student.jsx"


function App() {
  return(
  <>
    <Student name="Spongebob" age={30} isStudent={true} />
    <Student name="Patrick" age={42} isStudent={false} />
    <Student name="Squidward" age={50} isStudent={false} />
    <Student name="Sandy" age={27} isStudent={true} />
    <Student />

  </>  
  );
}

export default App
