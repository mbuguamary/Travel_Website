
import './App.css';
import LandingPage from './Components/LandingPage';
import Navbar from './Components/Navbar';
import background from './Assests/1.jpg'

function App() {
  const myStyle={
    backgroundImage: `url(${background})` ,
    height:'100vh',
    marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  return (
    <div className="App" style={myStyle}>

      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
