import { useState } from "react";
//updater function - A function passed as an argument to setState() usually
//                    ex. setYear(year + 1) = arrow function.
//                   Allow for safe updates based on the previous state.
//                   Used with multiple state updates and asynchronous functions
//                   Good practice to use updater functions
// **use whenever necessary!
export default function MyComponent(){
    const [year, setYear] = useState(0);
    

    const handleIncrement = () => {
        setYear(y => y+1);
        setYear(y => y+1);
        setYear(y => y+1);
        //Takes the PENDING state to calculate NEXT state.
        // React puts your updater function in a queue (waiting in line)
        // During the next render, it will call them in the same order.
        // setYear( year + 1);
        // setYear (year+1);
        // setYear (year+1); //these doesn't work , we use updater function rather
    };

    const handleDecrement = () => {
        setYear( y=> y-1);
        setYear( y=> y-1);
        setYear( y=> y-1);
    };

    const handleReset = () => {
        setYear(0);
    };


    return (
        <div>
            <p>{year}</p>
            <button onClick ={handleIncrement}>Increment</button>
            <button onClick ={handleDecrement}>Decrement</button>
            <button onClick ={handleReset}>Reset</button>

        </div>
    )
}