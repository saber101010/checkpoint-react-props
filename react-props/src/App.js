
import './App.css';
import Profil from './component/Profil'
import photo from './myphoto.jpg'
function App() {
 
  const handleName=(name)=>alert(`hello my name is ${name}`)




  return (
    <div className="App">
     <Profil   fullname="saber  saad" bio="I'm a web developer" profession="web developer" handleName={handleName}>
       <img src={photo} alt="myphoto" />
      
     </Profil>
 <alert>

 </alert>
    </div>
  );
}

export default App;
