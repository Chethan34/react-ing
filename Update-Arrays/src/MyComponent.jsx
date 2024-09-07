import { useState } from 'react';

export default function MyComponent() {
    const [foods, setFoods] = useState(['Apples', 'Oranges', 'Bananas']);

    function handleAddFood() {
        const newFood = document.getElementById("foodInput").value.trim(); // Trim to remove any leading/trailing spaces
        if (newFood) {
            setFoods(f => [...f, newFood]); // Add the new food to the array
            document.getElementById("foodInput").value = ""; // Reset input after adding
        }
    }

    function handleRemoveFood(index) {
        setFoods(f => f.filter((_, i) => i !== index)); // Remove food at the specified index
    }

    return (
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => (
                    <li key={index}>
                        {food}
                        <button onClick={() => handleRemoveFood(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <input type="text" id="foodInput" placeholder='Enter food name' />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
}
