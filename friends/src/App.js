import React from 'react';
import Friends from './Components/Friends'
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';





class App extends React.Component{
  constructor() {
    super()

    this.state ={
      friends: []
    }
  }

  postFriend = friend => {
    axios.post('http://localhost:5000/friends', friend)
    .then(response => {console.log(response)})
    .catch(error => {console.log(error)})
  }


  fetchItemsWithAxios = () => {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {console.log(error.message);
      })
  }

  componentDidMount() {
    this.fetchItemsWithAxios();
  }

  render(){
    
    return <>
          <Friends firendsList={this.state.friends} postFriend={this.postFriend}/>
          </>
  }
}

export default App;