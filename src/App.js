import React from 'react';
import NavBar from './components/nav.js';
import './css/app.css';
import springFrame from './assets/section1-frame.png';
import prevBtn from './assets/prev-btn.svg';
import nextBtn from './assets/next-btn.svg';
import startFarmingBtn from './assets/start-farming-btn.svg';

function App() {
  return (
    <div className="app">
      <NavBar/>
      <br/>
      <br/>
      <div className="row" style={{margin: '0 40px'}}>
        <div className="col-sm-7">
          <img src={springFrame} style={{width: '100%'}}></img>
          <img src={prevBtn} style={{position: 'absolute', width: '40px', right: '14px', bottom: '46px'}}></img>
          <img src={nextBtn} style={{position: 'absolute', width: '40px', right: '14px', bottom: '0'}}></img>
        </div>
        <div className="col-sm-5" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <p className="text-left" style={{color: '#112d46', fontWeight: 'bold', fontSize: '40px'}}>A NEW APPROACH TO CUSTOM FRAME</p>
          <div style={{width: '100%', display: 'flex'}}>
            <div className="text-left" style={{width: '85%'}}>
              <p style={{color: 'gray', padding: '0 14px 0 20px', margin: '10px 0 0 10px', borderLeft: '3px solid #112d46'}}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.</p>
              <img src={startFarmingBtn} style={{margin: '20px 0 0 10px', width: '230px'}}></img>
            </div>
            <div style={{width: '15%', marginTop: '24px'}}>
              <div style={{transform: 'rotate(90deg)', fontSize: '11px', color: '#bbbbbb', fontWeight: '400'}}>
                <span className="mr-2">FACEBOOK</span>
                <span className="mr-2">INSTAGRAM</span>
                <span>TWITTER</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
