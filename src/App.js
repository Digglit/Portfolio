import React, { Component } from 'react'
import './css/App.css';
import background from './assets/background.jpg'
import Gem from './Components/Gem'
import Gem2 from './Components/Gem2'
import Gem3 from './Components/Gem3'
import Gem4 from './Components/Gem4'
import Gem5 from './Components/Gem5'
import throttle from 'lodash.throttle'
import debounce from 'lodash.throttle'
import csopticImage from './assets/favicon.png'
import byteDesignsImage from './assets/ByteDesigns.png'
import byteDesigns2Image from './assets/ByteDesigns2.png'
import bigMImage from './assets/BIGmPIZZAredrevised.png'
import images from './assets/Images'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollY: 0,
      pageLoader: true,
      loaded: false,
      landed: false,
      parallax: 0,
      sectionBText: 0,
      projectDisplayed: 0,
      currentPhotos: [
        [],
        [],
        [
          images[1][0].src,
          images[1][1].src,
          images[1][2].src,
          images[1][3].src,
          images[1][4].src,
        ],
        [
          images[2][0].src,
          images[2][1].src,
          images[2][2].src,
          images[2][3].src,
          images[2][4].src,
        ],
        [
          images[3][0].src,
          images[3][1].src,
          images[3][2].src,
          images[3][3].src,
        ]
      ],
      currentPhotoDisplayed: 0,
      mobileMode: window.innerWidth <= 800 ? true : false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.scrollHandler()
    })
    window.addEventListener('resize', () => {
      this.resizeHandler()
    })
    if (!this.state.mobileMode) {
      setTimeout(() => this.setState({ pageLoader: false }), 1500)
      setTimeout(() => this.setState({ loaded: true }), 3500)
      setTimeout(() => this.setState({ landed: true }), 5000)
    } else {
      this.setState({ loaded: true, landed: true })
      setTimeout(() => this.setState({ pageLoader: false }), 1000)
    }
  }

  resizeHandler = debounce(() => {
    if (window.innerWidth > 800) this.setState({ mobileMode: false })
    else this.setState({ mobileMode: true })
  }, 800)

  scrollHandler = throttle(() => {
    this.setState({ scrollY: window.scrollY, parallax: window.scrollY / 8 })
    this.sectionBTextHandler()
  }, 200)

  sectionBTextHandler = () => {
    if (!this.state.mobileMode) {
      if (window.scrollY >= 850 && this.state.sectionBText === 2) {
        this.setState({ sectionBText: 3 })
      } else if (window.scrollY >= 625 && this.state.sectionBText === 1) {
        this.setState({ sectionBText: 2 })
      } else if (window.scrollY >= 400 && this.state.sectionBText === 0) {
        this.setState({ sectionBText: 1 })
      }
    } else {
      if (window.scrollY >= 650 && this.state.sectionBText === 2) {
        this.setState({ sectionBText: 3 })
      } else if (window.scrollY >= 400 && this.state.sectionBText === 1) {
        this.setState({ sectionBText: 2 })
      } else if (window.scrollY >= 250 && this.state.sectionBText === 0) {
        this.setState({ sectionBText: 1 })
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll')
  }

  printHandler = () => {
    window.print()
  }

  changeProjectHandler = (project) => {
    this.setState({ projectDisplayed: project, currentPhotoDisplayed: 0 })
  }

  changeImageHandler = (index) => {
    this.setState({ currentPhotoDisplayed: index })
  }

  changePictureHandler = (change) => {
    if (change === -1) {
      if (this.state.currentPhotoDisplayed - 1 < 0) {
        this.setState({ currentPhotoDisplayed: this.state.currentPhotos[this.state.projectDisplayed].length - 1 })
      } else {
        this.setState({ currentPhotoDisplayed: this.state.currentPhotoDisplayed - 1 })
      }
    } else {
      if (this.state.currentPhotoDisplayed + 1 >= this.state.currentPhotos[this.state.projectDisplayed].length) {
        this.setState({ currentPhotoDisplayed: 0 })
      } else {
        this.setState({ currentPhotoDisplayed: this.state.currentPhotoDisplayed + 1 })
      }
    }
  }

  render() {
    return (
      <div className="App" style={!this.state.landed ? { height: '100vh', overflow: 'hidden' } : null}>
        <div className={`pageLoaderContainer ${!this.state.pageLoader ? 'pageLoaderHidden' : null}`} />
        <Gem
          top={!this.state.mobileMode ? 4 : 1}
          scrollY={!this.state.mobileMode ? this.state.parallax : 0}
          loaded={this.state.loaded}
          landed={this.state.landed}
        />
        <Gem2
          top={!this.state.mobileMode ? 30 : 68}
          scrollY={!this.state.mobileMode ? this.state.parallax : 0}
          loaded={this.state.loaded}
          landed={this.state.landed}
        />
        <Gem3
          top={!this.state.mobileMode ? 80 : 80}
          scrollY={!this.state.mobileMode ? this.state.parallax : 0}
          loaded={this.state.loaded}
          landed={this.state.landed}
        />
        <Gem5
          top={!this.state.mobileMode ? 100 : 118}
          scrollY={!this.state.mobileMode ? this.state.parallax : 0}
          loaded={this.state.loaded}
          landed={this.state.landed}
          mobileMode={this.state.mobileMode}
        />
        <Gem4
          top={!this.state.mobileMode ? 130 : 150}
          scrollY={!this.state.mobileMode ? this.state.parallax : 0}
          loaded={this.state.loaded}
          landed={this.state.landed}
        />
        <Gem4
          top={!this.state.mobileMode ? 275 : 297}
          scrollY={!this.state.mobileMode ? this.state.parallax : 0}
          loaded={this.state.loaded}
          landed={this.state.landed}
        />
        <Gem5
          top={!this.state.mobileMode ? 250 : 350}
          scrollY={!this.state.mobileMode ? this.state.parallax : 0}
          loaded={this.state.loaded}
          landed={this.state.landed}
        />
        <div className='navButtonContainer' style={{ top: this.state.scrollY }}>
          <button className={`navButton ${!this.state.loaded ? 'landingBefore' : ''}`} onMouseDown={this.printHandler}>Work With Me</button>
        </div>
        <section className='sectionA'>
          <img className='sectionABackgroundImage' src={background} />
          <div className='sectionABackgroundOverlay' />
          <p className={`sectionAPrimaryText ${this.state.pageLoader ? 'landingBefore' : ''}`}>Hi, <span className='sectionASecondaryText'>I'm Joseph</span></p>
        </section>
        <section className='sectionB'>
          <div className='sectionBWrapper'>
            <div className={`sectionBTextContainer ${this.state.sectionBText < 1 ? 'textHidden' : null}`}>
              <h1>About Me</h1>
              <p className='sectionBTextSize'>I am a junior computer science student at the University of Akron. I build interactive, responsive interfaces aimed at creating memorable and exciting user experiences.</p>
            </div>
            <div className={`sectionBTextContainer ${this.state.sectionBText < 2 ? 'textHidden' : null} sectionBTextContainer2 `}>
              <h1>My Skillset</h1>
              <p className='sectionBTextSize'>I have experience developing a range of web applications from static web pages to fully responsive, dynamic web apps. I am a frontend developer with a passion for all things web.</p>
            </div>
            <div className={`sectionBTextContainer ${this.state.sectionBText < 3 ? 'textHidden' : null}`}>
              <h1>Technologies</h1>
              <p className='sectionBTextSize'>JavaScript (ES6), ReactJs, VueJs, NodeJs, ExpressJs, HTML5, JSX, CSS3, SCSS, Git, NPM, Firebase, Adobe Xd, Illustrator, Photoshop, Lightroom, C, C++, Python, Django</p>
            </div>
          </div>
        </section>
        <section className='sectionC'>
          <div className='sectionCWrapper'>
            <div className='sectionCPhotoContainer'>
              <button className={`sectionCChangePhotoButtonLeft ${this.state.projectDisplayed === 0 ? 'sectionCButtonInactive' : ''}`} onMouseDown={() => this.changePictureHandler(-1)}>{'<'}</button>
              <button className={`sectionCChangePhotoButtonRight ${this.state.projectDisplayed === 0 ? 'sectionCButtonInactive' : ''}`} onMouseDown={() => this.changePictureHandler(1)}>{'>'}</button>
              {this.state.currentPhotos[this.state.projectDisplayed].map((currentPhoto, index) => (
                <img src={null} key={index} className={`sectionCPhoto ${this.state.currentPhotoDisplayed !== index ? 'sectionCTextHidden' : ''}`} src={currentPhoto}></img>
              ))}
            </div>
            <div className='sectionCContentContainer'>
              <div className={`sectionCTextContainer ${this.state.projectDisplayed === 0 ? '' : 'sectionCTextHidden'}`}>
                <h1 className='sectionCHeader'>Some of my work</h1>
                <p className='sectionCText'>I've worked on a lot of projects during my days as a developer but I've gotten together a few of my favorites here for you. Go ahead and select a project to learn more about it.</p>
              </div>
              <div className={`sectionCTextContainer ${this.state.projectDisplayed === 1 ? '' : 'sectionCTextHidden'}`}>
                <h1 className='sectionCHeader'>CsOptic</h1>
                <p className='sectionCText'>My experience building web pages and apps began when a friend and I built CsOptic. The objective? A skin trading/betting platform for the game Counter Strike. The site utilized a series of bots as middlemen for trading and used SHA-256 encryption technology to generate random and fair outcomes.</p>
              </div>
              <div className={`sectionCTextContainer ${this.state.projectDisplayed === 2 ? '' : 'sectionCTextHidden'}`}>
                <h1 className='sectionCHeader'>Byte Designs</h1>
                <p className='sectionCText'>Byte designs LLC was founded with the goal of providing high quality websites for a low price to local clientele. My partners and I wanted to help small businesses stand out in a world of cookie cutter websites.</p>
              </div>
              <div className={`sectionCTextContainer ${this.state.projectDisplayed === 3 ? '' : 'sectionCTextHidden'}`}>
                <h1 className='sectionCHeader'>Byte Designs 2</h1>
                <p className='sectionCText'>Unsatisfied with the first site for Byte designs, I decided to put together another site which included a bit more dynamic content and used a brighter and warmer color scheme to give the site more character.</p>
              </div>
              <div className={`sectionCTextContainer ${this.state.projectDisplayed === 4 ? '' : 'sectionCTextHidden'}`}>
                <h1 className='sectionCHeader'>BigM</h1>
                <p className='sectionCText'>BigM is a new pizza and burger restaurant in Avon Lake, Ohio. This site features a cart/shopping system; dynamic menu display with administrator interface for adding, removing and modifying current menu items; Bar portal for displaying current orders and a driver portal page to display orders to drivers.</p>
              </div>
              <div className='sectionCOptionsContainer'>
                <div className={`sectionCButtonOption ${this.state.projectDisplayed === 1 ? 'sectionCButtonOptionSelected ' : ''}`} onMouseDown={() => this.changeProjectHandler(1)}>
                  <img src={csopticImage} style={{ height: '55%', width: '55%' }} />
                </div>
                <div className={`sectionCButtonOption ${this.state.projectDisplayed === 2 ? 'sectionCButtonOptionSelected ' : ''}`} onMouseDown={() => this.changeProjectHandler(2)}>
                  <img src={byteDesignsImage} style={{ height: '55%', width: '55%' }} />
                </div>
                <div className={`sectionCButtonOption ${this.state.projectDisplayed === 3 ? 'sectionCButtonOptionSelected ' : ''}`} onMouseDown={() => this.changeProjectHandler(3)}>
                  <img src={byteDesigns2Image} style={{ height: '55%', width: '55%' }} />
                </div>
                <div className={`sectionCButtonOption ${this.state.projectDisplayed === 4 ? 'sectionCButtonOptionSelected ' : ''}`} onMouseDown={() => this.changeProjectHandler(4)}>
                  <img src={bigMImage} style={{ height: '50%', width: '60%' }} />
                </div>
              </div>
            </div>
            <div className='sectionCDotContainer' style={{ gridTemplateColumns: `repeat(${this.state.currentPhotos[this.state.projectDisplayed].length}, 1fr)` }}>
              {this.state.currentPhotos[this.state.projectDisplayed].map((value, index) => (
                <div className={`dot ${this.state.currentPhotoDisplayed === index ? 'dotActive' : ''}`} key={index} onMouseDown={() => this.changeImageHandler(index)} />
              ))}
            </div>
            <button className={`sectionCButton ${this.state.projectDisplayed === 0 ? 'sectionCButtonInactive' : ''}`}>Launch Website</button>
          </div>
        </section>
        <section className='sectionD'>
          <div className='sectionDContentContainer'>
            <div className='sectionDTextContainer'>
              <h1>Why hire me?</h1>
              <p className='sectionDHireText'>I'm a self-starting, go getter who loves to create useful and exciting products. I strive to demonstrate my self driven desires to learn through continued personal education and freelance opportunity with BigM Pizza.</p>
              <p>I enjoy the journey of learning and aspire to convey visions for brand representation through the web in unique and inspiring ways.</p>
            </div>
            <div className='sectionDContactContainer'>
              <h1 className='sectionDContactText'>Contact Me</h1>
              <form className='sectionDContactForm' autoComplete='off'>
                <input className='sectionDContactInput' type='text' name='cc' placeholder='Name'></input>
                <input className='sectionDContactInput' type='text' name='cc' placeholder='Email'></input>
                <input className='sectionDContactInput' type='text' name='cc' placeholder='Subject'></input>
                <textarea className='sectionDContactInput' type='text' name='cc' placeholder='Message'></textarea>
              </form>
              <button className='sectionDContactButton'>Send -></button>
            </div>
          </div>
        </section>
        <section className='footer'>
          <div className='footerBoxOne' />
          <p className='footerText'>© Joseph Marella</p>
          <div className='footerBoxTwo' />
        </section>
      </div>
    );
  }
}

export default App;
