import React from 'react';
import './App.css';


class App extends React.Component {
  state = {
    
    Person: {
      fullName: "My Name: Soulayma Bouchiba",
      bio: "My bio: life support",
      imgSrc: "./myImage.jpg",
      profession: "My profession: Future Developer"
    },
    show: true,
    date: new Date()
  };


  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };
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
    return (
      <div className="App">
        {this.state.show && (
          <div>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={this.state.Person.imgSrc} alt="myimage"/>
            <h1>{this.state.Person.profession}</h1>
            
            <br></br>
          </div>
        )}
        <p>It is {this.state.date.toLocaleTimeString()}</p>
        <button onClick={this.handleShowPerson} style={{borderRadius:"30px",backgroundColor:"revert" ,padding:"20px 30px"}}>click here</button>
      </div>
    );
  }
}

export default App;