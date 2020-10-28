import React from 'react'

//import axios to get data
import axios from 'axios'

//import styles
import './App.css';
import UserCard from './components/UserCard';

class App extends React.Component {
  constructor() {
    console.log('1. Constructor running...')
    super();
    this.state = {
      UserData: [],
      followerData: []
    } //whats being held in state
  };
  

//component lifecycle method section
// Using this to fetch initial data and set data to state
  componentDidMount () { 
    console.log('component did mount is fetching data')
    axios.get(`https://api.github.com/users/christophercorvo`) //make username dynamic
      .then(response => {
        console.log(response.data)
        this.setState({ //setting the axios get request to state
          UserData: response.data
        })
      })
      .catch(error => {
        console.log(error)
      }) 

    axios.get(`https://api.github.com/users/christophercorvo/followers`)
      .then(res => {
        this.setState({
          followerData: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })   
  }   





// class methods
  
    render() {
      console.log('2. rendering APP...')
      return (
        <div className="App">
          <UserCard data={this.state.UserData} followerData={this.state.followerData}/>
        </div>
      );
    }
}

export default App;
