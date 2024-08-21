import List from './List.jsx';

export default function App(){
  const fruits = [{name:'apples', calories: 95}, 
    {name:'grapes', calories: 45}, 
    {name:'oranges', calories:35},
    {name: 'bananas', calories: 44}
];
//note: calorie values are RANDOM/PRACTISE.
const vegetables = [{name:'potatoes', calories: 95}, 
  {name:'capsiums', calories: 45}, 
  {name:'tomatoes', calories:35},
  {name: 'carrots', calories: 44}
];

//note: calorie values are RANDOM/PRACTISE.


  return (
    <>
    {/* let's use some ternary operator for conditional rendering */}

    {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null}
    {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"> </List> : null }
    </>
  )
}