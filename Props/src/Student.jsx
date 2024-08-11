/* eslint-disable react/prop-types */

//propTypes - ensures a passed value is of correct datatype.
// age: PropsTypes.number
//warning can be seen in console, good for debugging, but application runs.



//defaultProps -default values for props in case they are not passed from
// parent component
//name: "Guest"


import PropTypes from 'prop-types';

export default function Student(props){
    return(
   <div className="student">
    <p>Name: {props.name}</p>
    <p>Age: {props.age}</p>
    <p>Student: {props.isStudent ? "Yes" : "No"}</p>
   </div>
    );

}
Student.protoTypes = {
   name: PropTypes.string,
   age: PropTypes.number,
   isStudent: PropTypes.bool
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}