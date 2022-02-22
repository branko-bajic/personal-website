import './App.css';
import cloud from './assets/fluffy-cloud.png';
import background from './assets/neon-city.jpg';
import { TransitionGroup } from 'react-transition-group';
import './Clouds.css';


function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <div className="Clouds-Section">
        <div className="Cloud">
          <div className="shadowed-cloud"/>
        </div>
        <div className="Cloud">
          <div className="cloud"/>
        </div>

        {/* <img 
          src={cloud} 
          className="Cloud" 
          alt="cloud" 
          height="60%"
          width="auto"
        /> */}
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
