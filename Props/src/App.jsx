//Props - parent can directly send the data to child component
//<Component key=value/>

import Student from './Student.jsx';


export default function App(){
  return (
  <>
  <Student name="Spongebob" age={30} isStudent={true}/>
  <Student name="Raj" age={31} isStudent={false}/>
  <Student name="Ram" age={37} isStudent={false}/>
  <Student name="Krish" age={23} isStudent={true}/>
  <Student/>

  </>
  );

}