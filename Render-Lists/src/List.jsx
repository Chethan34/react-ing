/* eslint-disable react/prop-types */

export default function List(props){

// fruits.sort((a,b) => a.name.localeCompare(b.name)); //ALPHABETICAL
// fruits.sort((a,b) => b.name.localeCompare(a.name)); //REVERSE ALPHABETICAL
// fruits.sort((a,b) => a.calories - b.calories); //NUMERIC
// fruits.sort((a,b) => b.calories - a.calories); //REVERSE NUMERIC

// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
//const highCalFruits = fruits.filter(fruit => fruits.calories >= 100); //FOR HIGH CALORIES FRUITS



const category = props.category;
const itemList = props.items;

const listItems = itemList.map((item, index) => (
<li key={index}> 
    {item.name}: &nbsp;
    <b>{item.calories}</b>

</li>
));
    return(
       <>
        <h3 className="list-category">{category}</h3>
       <ul className="list-items">{listItems}</ul>
       </>
    )
}