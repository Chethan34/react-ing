export default function Button(){
    
    // let count = 0;

    // const handleClick = ()=>{
    //     console.log("Ouch!")
    // }
    // const handleClick2 = (name)=>{
    //     console.log(`${name} stop clicking me`)
    // }
            

    //Event handling with conditions;

    // const handleClick =(name)=>{
    //  if(count < 3){
    //     count++;
    //     console.log(`${name} you clicked me ${count} time/s `)
    //  }
    //  else{
    //     console.log(`${name} stop clicking me!`)
    //  }
    // }
     
    //changing text content;
    const handleClick = (e) =>
        e.target.textContent = "OUCH! 🤕"

    //just like targeting textContent, we can target profile as e.target.style.display = "none";
    return (
    <button onClick={(e)=> handleClick(e)}>Click me😀</button>
    )
    //handle double click use onDoubleClick
}