import React, { Component } from 'react';
import './../styles/Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {scrolled : false}
    this.navbarScroll = this.navbarScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.navbarScroll);
  }

  navbarScroll = (event) => {
    let distance = document.documentElement.scrollTop;
    if (distance > 100 && !this.state.scrolled) {
      this.setState(prevState => ({
        scrolled: !prevState.scrolled
      }));
    } else if (distance < 100 && this.state.scrolled) {
      this.setState(prevState => ({
        scrolled: !prevState.scrolled
      }));
    }
  }

  render() {
    return (
      <div>
        <nav className={this.state.scrolled ? "navbar navbar-default fixed-top scrolled" : "navbar navbar-default fixed-top"} onScroll={this.navbarScroll}>
          <h1 className="hide">Welcome to my site.</h1>
        </nav>
        <div className="home-main">
          <div className="background">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 item">
                  <h1>Nice to meet you.</h1>
                  <h2>And my name is henri.</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide-pictures">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title">The places I've been to</div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default Home;