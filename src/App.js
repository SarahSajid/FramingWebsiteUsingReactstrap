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
import abstractOne from './assets/abstract-1.png';
import abstractTwo from './assets/abstract-2.png';
import abstractThree from './assets/abstract-3.png';
import abstractFour from './assets/abstract-4.png';
import abstractFive from './assets/abstract-5.png';
import abstractSix from './assets/abstract-6.png';
import designOne from './assets/design-1.png';
import designTwo from './assets/design-2.png';
import designThree from './assets/design-3.png';
import designFour from './assets/design-4.png';

function App() {
  return (
    <div className="app">
      <NavBar/>
      <br/>
      <br/>
      <Container>
        <Row>
          <Col sm={7}>
            <img src={springFrame} style={{width: '100%'}}></img>
            <img src={prevBtn} style={{position: 'absolute', width: '40px', right: '14px', bottom: '46px'}}></img>
            <img src={nextBtn} style={{position: 'absolute', width: '40px', right: '14px', bottom: '0'}}></img>
          </Col>
          <Col sm={5} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
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
          </Col>
        </Row>
      </Container>
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
      <div className="text-center" style={{margin: '0 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <p style={{color: '#112D46', fontWeight: '500', fontSize: '30px', marginBottom: '0'}}>Feature Product</p>
        <div><img src={separator} style={{width: '200px'}}></img></div>
        <p style={{color: 'gray'}}>Design A Custom Frame For Photos, Art, And More.</p>
        <Container>
          <Row>
            <Col xs={4} style={{display: 'flex', alignItems: 'center', backgroundColor: '#f0f0ee'}}>
              <img src={springFrame} style={{width: '100%'}}></img>
            </Col>
            <Col xs={8}>
              <Container>
                <Row>
                  <Col xs="4" className="framing-element-container">
                    <div  className="abstract-element">
                      <img src={abstractSix} className="framing-element-img"></img>
                    </div>
                    <p className="text-left abstract-element-desc">Dover</p>
                  </Col>
                  <Col xs="4" className="framing-element-container">
                    <div  className="abstract-element">
                      <img src={abstractTwo} className="framing-element-img"></img>
                    </div>
                    <p className="text-left abstract-element-desc">Marquette</p>
                  </Col>
                  <Col xs="4" className="framing-element-container">
                    <div  className="abstract-element">
                      <img src={abstractThree} className="framing-element-img"></img>
                    </div>
                    <p className="text-left abstract-element-desc">Wren</p>
                  </Col>
                  <Col xs="4" className="framing-element-container">
                    <div  className="abstract-element">
                      <img src={abstractFour} className="framing-element-img"></img>
                    </div>
                    <p className="text-left abstract-element-desc">Mercer</p>
                  </Col>
                  <Col xs="4" className="framing-element-container">
                    <div  className="abstract-element">
                      <img src={abstractFive} className="framing-element-img"></img>
                    </div>
                    <p className="text-left abstract-element-desc">Everette</p>
                  </Col>
                  <Col xs="4" className="framing-element-container">
                    <div  className="abstract-element">
                      <img src={abstractSix} className="framing-element-img"></img>
                    </div>
                    <p className="text-left abstract-element-desc">Mandalay</p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
      <br/>
      <br/>
      <div className="text-center" style={{margin: '0 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <p style={{color: '#112D46', fontWeight: '500', fontSize: '30px', marginBottom: '0'}}>Our Impressive Works</p>
        <div><img src={separator} style={{width: '200px'}}></img></div>
        <p style={{color: 'gray'}}>Design A Custom Frame For Photos, Art, And More.</p>
        <Container>
          <Row>
            <Col xs={6} style={{display: 'flex', alignItems: 'center'}}>
              <img src={designOne} style={{width: '100%'}}></img>
            </Col>
            <Col xs={6}>
              <Container>
                <Row>
                  <Col xs="6" className="framing-element-container">
                    <img src={designTwo} style={{width: '100%'}}></img>
                  </Col>
                  <Col xs="6" className="framing-element-container">
                    <img src={designThree} style={{width: '100%'}}></img>
                  </Col>
                  <Col xs="12" className="framing-element-container">
                    <img src={designFour} style={{width: '100%'}}></img>
                  </Col>
                </Row>
              </Container>
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
