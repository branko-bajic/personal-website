import './App.css';
import cloud from './assets/fluffy-cloud.png';
import background from './assets/neon-city.jpg';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <div className="App-header">
        Branko Bajic
      </div>
      <div className="App-footer">
        Branko Bajic
      </div>
    </div>
  );
}

export default App;
