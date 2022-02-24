import './App.css';
import background from './assets/neon-city.jpg';
import './Clouds.css';


function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <div className="Clouds-Section">
        <div className="shadowed-cloud-container">
          <div className="shadowed-cloud-sprite"/>
        </div>
        <div className="cloud-container">
          <div className="cloud-sprite"/>
        </div>
        <div className="small-cloud-container">
          <div className="small-cloud-sprite"/>
        </div>
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
