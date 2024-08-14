//Conditional Rendering - allows you to control what gets rendered in
//                         your application based on certain conditions.                          
//                        (show, hide, or change components)

import UserGreeting from "./UserGreeting";

export default function App(){
  return (
    <>
    
    <UserGreeting isLoggedIn={true} username="Raj"/>
    
    </>
  )
}