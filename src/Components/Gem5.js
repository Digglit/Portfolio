import React, { Component } from 'react'
import './css/Gem.css'

class Gem5 extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className={`gemContainer gem5 ${!this.props.loaded ? 'gemInitial' : !this.props.landed ? 'gemMover' : ''}`} style={{ top: `${this.props.top}%`, transform: `translate(0%, ${this.props.scrollY}%)`, display: `${this.props.mobileMode ? 'none' : ''}` }}>
        <div className='gemWrapper'>
          <div className='mainGem' />
        </div>
        <div className='gemWrapper'>
          <div className='secondaryGem' style={{ top: `-68px`, left: `-25px` }} />
        </div>
        <div className='gemWrapper'>
          <div className='secondaryGem' style={{ top: `68px`, left: `25px` }} />
        </div>
        <div className='gemWrapper'>
          <div className='secondaryGem colorGem' style={{ top: `43px`, left: `-43px` }} />
        </div>
        <div className='gemWrapper'>
          <div className='tertiaryGem' style={{ top: `65px`, left: `-18px` }} />
        </div>
        <div className='gemWrapper'>
          <div className='tertiaryGem colorGem' style={{ top: `-65px`, left: `18px` }} />
        </div>
      </div>
    )
  }
}

export default Gem5