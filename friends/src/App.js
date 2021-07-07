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


  fetchItemsWithAxios = () => {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {console.log(error.message);
      })
  }

  postFriend = friend => {
    axios.post('http://localhost:5000/friends', friend)
    .then(response => {console.log(response)})
    .catch(error => {console.log(error)})
  }

  putFriend = (id, updatedFriend) => {
    axios.put(`http://localhost:5000/friends/${id}`, updatedFriend)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  deleteFriend = (id) => {

    axios.delete(`http://localhost:5000/friends/${id}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  componentDidMount() {
    this.fetchItemsWithAxios();
  }



  render(){
    
    return <>
          <Friends firendsList={this.state.friends} postFriend={this.postFriend} putFriend={this.putFriend} deleteFriend={this.deleteFriend}/>
          </>
  }
}

export default App;
