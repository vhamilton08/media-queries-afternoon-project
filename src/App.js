import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = { 
      dropDownVisible: false

    }
  }
  toggleDropDown = () => {
    this.setState({dropDownVisible: !this.state.dropDownVisible})
  }

    render () {
      return (

        <div>
          <div className="main-image">

          <header className="header">
            <img alt="logo" className="logo" src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"/>
            <nav className="desktop-menu">
              <span>SERVICES</span>
              <span>PORTFOLIO</span>
              <span>ABOUT</span>
              <span>TEAM</span>
              <span>CONTACT</span>
            </nav>
            <div className="dropdown" onClick={this.toggleDropDown}>Menu</div>
            {this.state.dropDownVisible ? (
            <nav className="mobile-menu">
            <span>SERVICES</span>
              <span>PORTFOLIO</span>
              <span>ABOUT</span>
              <span>TEAM</span>
              <span>CONTACT</span>
            </nav>
            ) : null }
           </header>
           <div className="main-text">
             <h2>Welcome To Our Studio!</h2>
             <h1>IT'S NICE TO MEET YOU</h1>
             <button>TELL ME MORE</button>
           </div>
          </div>
           <div className="content2">
             <h1>Services</h1>
             <p>Lorem ipsum dolor sit amet consectetur.</p>
           </div>
        </div>

      )
  }
}




export default App;
