import React, { useState } from 'react';
import './App.css';
import background from './assets/neon-city.jpg';
import './Clouds.css';


function App() {
  const MAINMENU = 0;
  const PROJECTS = 1;
  const CONTACT = 2;
  const [optionSelected, setOptionSelected] = React.useState(MAINMENU);
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <div className="Clouds-Section">

        {/* Shadowed Cloud */}
        <div className="shadowed-cloud-container">
          <div className="shadowed-cloud-sprite"/>
        </div>

        {/* Regular Cloud */}
        <div className="cloud-container">
          <div className="cloud-sprite"/>
        </div>

        {/* Small Cloud */}
        <div className="small-cloud-container">
          <div className="small-cloud-sprite"/>
        </div>
      </div>
      <div className="Header">
        Branko Bajic
        <br/>
        Full Stack Software Developer
      </div>
      <div className="Body">

        {/* Main Menu */}
        {optionSelected === MAINMENU &&
          <React.Fragment>
            <div className="selectable-option" onMouseUp={() => setOptionSelected(PROJECTS)}>
              {"> Projects <"}
            </div>
            <br/>
            <div className="selectable-option" onMouseUp={() => setOptionSelected(CONTACT)}>
              {"> Contact <"}
            </div>
          </React.Fragment>
          }

        {/* Projects */}
        {optionSelected === PROJECTS &&
          <React.Fragment>
            <div className="selectable-option">
              {"> OSRS Castaway <"}
            </div>
            <br/>
            <br/>
            <div className="selectable-option" onMouseUp={() => setOptionSelected(MAINMENU)}>
              {"> Back to Main Menu <"}
            </div>
          </React.Fragment>
        }

        {/* Contact */}
        {optionSelected === CONTACT &&
          <React.Fragment>
            <div className="selectable-option">
              {"> GitHub <"}
            </div>
            <br/>
            <div className="selectable-option">
              {"> LinkedIn <"}
            </div>
            <br/>
            <br/>
            <div className="selectable-option" onMouseUp={() => setOptionSelected(MAINMENU)}>
              {"> Back to Main Menu <"}
            </div>
          </React.Fragment>
        }
      </div>
      <div className="Footer" />
    </div>
  );
}

export default App;
