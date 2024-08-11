import Profilepic from './assets/profile.jpg';

export default function Card(){
  return (
    <div className="card">
     <img className="card-image" src={Profilepic} alt="profile picture"></img>
     <h2 className="card-title">Chethan</h2>
     <p className="card-text"> I Code and play video games.</p>
    </div>
  );
}