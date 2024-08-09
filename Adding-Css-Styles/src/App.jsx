//Adding css with no external frameworks or preprocessors!

// covering -  
// External - can lead to conflicts upon more components to work with
// Modules - good for unique styling for different components, but requires additional setup
// global styling is not applied(have to import from different files)
// Inline! - convenient, prevents global style conflicts, not great for complex stlying and adds up more styling later 



import Button from './Button.jsx';

export default function App(){
  return (
    <Button/>
  )
}