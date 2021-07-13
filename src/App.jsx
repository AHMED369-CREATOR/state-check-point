import { React, Component } from 'react'
import logo from './logo.svg'
import './App.css'
class App extends Component {
  state = {
    Person: {
      fullName: 'Ahmed amine jaoua ',
      bio: 'bio',
      imgSrc: logo,
      profession: 'accounting and full stack js',
    },
    shows: 'true',
    date: new Date()

  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }


  render() {
    const handleClick = () => {
      this.setState({ 'shows': !this.state.shows })
    }
    const { fullName, bio, imgSrc, profession } = this.state.Person

    return (
      <div className="App">
        {
          this.state.shows ? (<div> <h1>{fullName}</h1>
            <h2>{bio}</h2>
            <h2>{profession}</h2>
            <img style={{ width: "150px", height: "150px" }} src={imgSrc} alt="defaultImg" />
            <button onClick={handleClick}>toggle</button></div>) :
            <div><button onClick={handleClick}>toggle</button></div>
        }
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>

    )
  }
}


export default App;
