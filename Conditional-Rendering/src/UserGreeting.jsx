/* eslint-disable react/prop-types */


export default function UserGreeting(props){

//one way
//     if(props.isLoggedIn){
//     return (

//       <h2> Welcome {props.username}</h2>
//     );
// }else{
//     return (
//        <h2>Please log in to continue</h2>
//     );
// }

//2nd way- mostly good using ternery operator
  const welcomeMessage = <h1 className="welcome-message">
                         Welcome, {props.username} !
                       </h1>
  const loginMessage = <h1 className="login-prompt">
                        Please log in to Continue
                       </h1>
   return(
      props.isLoggedIn ? welcomeMessage : loginMessage
   );

}