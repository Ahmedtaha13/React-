import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'Software Engineer',
        imgSrc: 'https://example.com/image.jpg',
        profession: 'Software Engineer'
      },
      shows: false,
      lastMounted: null
    };
    this.toggleProfile = this.toggleProfile.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ lastMounted: new Date() });
    }, 1000);
  }

  componentDidUpdate() {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      this.setState({ lastMounted: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleProfile() {
    this.setState(prevState => ({ shows: !prevState.shows }));
  }

  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <button onClick={this.toggleProfile}>Toggle Profile</button>
        {this.state.shows && (
          <div>
            <h2>{this.state.person.fullName}</h2>
            <img src={this.state.person.imgSrc} alt={this.state.person.fullName} />
            <p>{this.state.person.bio}</p>
            <p>{this.state.person.profession}</p>
          </div>
        )}
        <p>Last mounted: {this.state.lastMounted ? this.state.lastMounted.toLocaleTimeString() : 'Never'}</p>
      </div>
    );
  }
}

export default App;