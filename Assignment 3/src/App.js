import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 'page1'
    };
    this.page1Ref = React.createRef();
    this.page2Ref = React.createRef();
    this.page3Ref = React.createRef();
    this.page4Ref = React.createRef();
    this.page5Ref = React.createRef();
    this.page6Ref = React.createRef();
  }

  componentDidMount() {
    this.handleScroll = () => {
      const { page1Ref, page2Ref, page3Ref, page4Ref, page5Ref, page6Ref } = this;
      const page1Top = page1Ref.current.getBoundingClientRect().top + 100;
      const page2Top = page2Ref.current.getBoundingClientRect().top + 100;
      const page3Top = page3Ref.current.getBoundingClientRect().top + 100;
      const page4Top = page4Ref.current.getBoundingClientRect().top + 100;
      const page5Top = page5Ref.current.getBoundingClientRect().top + 100;
      const page6Top = page6Ref.current.getBoundingClientRect().top + 100;
      const windowHeight = window.innerHeight;

      if (page1Top >= 0 && page1Top < windowHeight) {
        this.setState({ activePage: 'page1' });
      } else if (page2Top >= 0 && page2Top < windowHeight) {
        this.setState({ activePage: 'page2' });
      } else if (page3Top >= 0 && page3Top < windowHeight) {
        this.setState({ activePage: 'page3' });
      } else if (page4Top >= 0 && page4Top < windowHeight) {
        this.setState({ activePage: 'page4' });
      } else if (page5Top >= 0 && page5Top < windowHeight) {
        this.setState({ activePage: 'page5' });
      } else if (page6Top >= 0 && page6Top < windowHeight) {
        this.setState({ activePage: 'page6' });
      }
    };

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  scrollToPage = (ref, page) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      this.setState({ activePage: page });
    }
  };

  render() {
    const { activePage } = this.state;

    return (
      <div className="App">
        <div className="navbar">
          <button
            onClick={() => this.scrollToPage(this.page1Ref, 'page1')}
            style={{ opacity: activePage === 'page1' ? 1.0 : 0.5 }}
          >
            ABOUT
          </button>
          <button
            onClick={() => this.scrollToPage(this.page2Ref, 'page2')}
            style={{ opacity: activePage === 'page2' ? 1.0 : 0.5 }}
          >
            EXPERIENCE
          </button>
          <button
            onClick={() => this.scrollToPage(this.page3Ref, 'page3')}
            style={{ opacity: activePage === 'page3' ? 1.0 : 0.5 }}
          >
            EDUCATION
          </button>
          <button
            onClick={() => this.scrollToPage(this.page4Ref, 'page4')}
            style={{ opacity: activePage === 'page4' ? 1.0 : 0.5 }}
          >
            SKILLS
          </button>
          <button
            onClick={() => this.scrollToPage(this.page5Ref, 'page5')}
            style={{ opacity: activePage === 'page5' ? 1.0 : 0.5 }}
          >
            INTERESTS
          </button>
          <button
            onClick={() => this.scrollToPage(this.page6Ref, 'page6')}
            style={{ opacity: activePage === 'page6' ? 1.0 : 0.5 }}
          >
            AWARDS
          </button>
        </div>
        <div className="content">
          <div className="Page" ref={this.page1Ref}>
            <h1>ABOUT</h1>
            <p>My Name Leon</p>
          </div>
          <div className="Page" ref={this.page2Ref}>
            <h1>EXPERIENCE</h1>
            <p>React Native Bootcamp</p>
          </div>
          <div className="Page" ref={this.page3Ref}>
            <h1>EDUCATION</h1>
            <p>Hacktiv8 Bootcamp</p>
          </div>
          <div className="Page" ref={this.page4Ref}>
            <h1>SKILLS</h1>
            <p>REACT</p>
          </div>
          <div className="Page" ref={this.page5Ref}>
            <h1>INTERESTS</h1>
            <p>REACT</p>
          </div>
          <div className="Page" ref={this.page6Ref}>
            <h1>AWARDS</h1>
            <p>Hacktiv8 Bootcamp</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
