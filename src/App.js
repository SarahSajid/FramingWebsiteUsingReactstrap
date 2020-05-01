import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavBar from './components/nav.js';
import './css/app.css';
import springFrame from './assets/section1-frame.png';
import prevBtn from './assets/prev-btn.svg';
import nextBtn from './assets/next-btn.svg';
import startFarmingBtn from './assets/start-farming-btn.svg';
import separator from './assets/separator.svg';
import art from './assets/art.png';
import jersey from './assets/jersey.png';
import keychain from './assets/keychain.png';
import minion from './assets/minion.png';
import photography from './assets/photography.png';
import textile from './assets/textile.png';

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
      <br/>
      <br/>
      <div className="text-center" style={{margin: '0 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <p style={{color: '#112D46', fontWeight: '500', fontSize: '30px', marginBottom: '0'}}>What Are You Framing?</p>
        <div><img src={separator} style={{width: '200px'}}></img></div>
        <p style={{color: 'gray'}}>Design A Custom Frame For Photos, Art, And More.</p>
        <Container>
          <Row>
            <Col xs="6" sm="4" lg="3" xl="2" className="framing-element-container">
              <div className="framing-element">
                <img src={art} className="framing-element-img"></img>
              </div>
              <p className="text-left framing-element-desc">Original Art</p>
            </Col>
            <Col xs="6" sm="4" lg="3" xl="2" className="framing-element-container">
              <div className="framing-element">
                <img src={keychain} className="framing-element-img"></img>
              </div>
              <p className="text-left framing-element-desc">Object</p>
            </Col>
            <Col xs="6" sm="4" lg="3" xl="2" className="framing-element-container">
              <div className="framing-element">
                <img src={textile} className="framing-element-img"></img>
              </div>
              <p className="text-left framing-element-desc">Textile</p>
            </Col>
            <Col xs="6" sm="4" lg="3" xl="2" className="framing-element-container">
              <div className="framing-element">
                <img src={jersey} className="framing-element-img"></img>
              </div>
              <p className="text-left framing-element-desc">Jersey</p>
            </Col>
            <Col xs="6" sm="4" lg="3" xl="2" className="framing-element-container">
              <div className="framing-element">
                <img src={photography} className="framing-element-img"></img>
              </div>
              <p className="text-left framing-element-desc">Photography</p>
            </Col>
            <Col xs="6" sm="4" lg="3" xl="2" className="framing-element-container">
              <div className="framing-element">
                <img src={minion} className="framing-element-img"></img>
              </div>
              <p className="text-left framing-element-desc">Something Else</p>
            </Col>
          </Row>
        </Container>
      </div>
      <br/>
      <br/>
    </div>
  );
}

export default App;
