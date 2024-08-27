
import {useState} from 'react';

export default function MyComponent(){
    const [name, setName] = useState('Guest'); //initial value;
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState(""); //initial values can vary, keep it as Delivery by default, giving flexibility to users


    const handleNameChange=(event) => {
        setName(event.target.value);
    };

    const handleQuantityChange = (event)=>{
        setQuantity(event.target.value);
    };
    
    const handleCommentChange=(event)=> {
        setComment(event.target.value);
    };
    const handlePaymentChange = (event)=> {
        setPayment(event.target.value);
    };
    const handleShippingChange = (event)=>{
        setShipping(event.target.value)
    }


    return(
    <div>
    <input value={name} onChange={handleNameChange}/>
    <p>Name: {name} </p>

    <input value={quantity} onChange={handleQuantityChange} type="number"/>
    <p>Quantity: {quantity}</p>

    <textarea value={comment} onChange={handleCommentChange} 
    placeholder='Enter delivery instructions'/>

    <p>Comment: {comment} </p>

    <select value={payment} onChange={handlePaymentChange}>
        <option value ="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
        <option value="GiftCard">GiftCard</option>
    </select>
    <p>Payment: {payment}</p>
    
    {/* radio button implementation: */}
    <label>
        <input type="radio" value="Pick up"
        checked={shipping ==="Pick up"}
        onChange={handleShippingChange}
        />
        Pick up
    </label>
    <label>
        <input type="radio" value="Delivery"
        checked={shipping === "Delivery"}
        onChange={handleShippingChange}
        />
        Delivery
    </label>
    <p> Shipping: {shipping} </p>

    </div>
    );
};