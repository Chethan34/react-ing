import { useState } from 'react'; 

export default function MyComponent() {
    const [name, setName] = useState('Guest'); //initial state set to Guest;
    const [age, setAge] = useState(0); //initial state set to 0;
    const [isEmployed, setEmployed] = useState(false); //initial state set to false;


    const updateName = () => {
        setName("Raj");
    };

    const increamentAge = ()=> {
        setAge(age+1);  //can  increment by any number. i.e. +2 per click , +5 per click etc;
    };

    const toggleEmployedStatus = () => {
        setEmployed(!isEmployed); //toggling to true to false and vice versa;
    };


    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={increamentAge}> Increment Age</button>

            <p> Is Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}> Toggle Status</button>

        </div>
    );
}
