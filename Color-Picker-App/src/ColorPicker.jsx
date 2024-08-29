import {useState} from 'react';

export default function ColorPicker(){
    const [color, setColor] = useState('#FFFFFF');
    
    const handleColorChange = (event)=> {
        setColor(event.target.value);
    } //setting a color value to a event
    return (
    <div className = "color-picker-container">
        <h1> Color Picker</h1>
        <div className="color-display" style={{backgroundColor:color}}>
              <p>Selected Color: {color}</p>
        </div>
        <label>Select a Color: </label>
        <input type="color" value={color} onChange={handleColorChange}/>

    </div>


    )
}