import './App.css';
import cloud from './assets/fluffy-cloud.png';
import background from './assets/neon-city.jpg';
import { TransitionGroup } from 'react-transition-group';


function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <div className="Clouds-Section">
        <img 
          src={cloud} 
          className="Cloud" 
          alt="cloud" 
          height="60%"
          width="auto"
        />
      </div>
      <div className="Header">
        Branko Bajic
        <br/>
        Full Stack Software Developer
      </div>
      <div className="Body" />
      <div className="Footer" />
    </div>
  );
}

export default App;
