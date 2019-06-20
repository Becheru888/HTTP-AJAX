import React from 'react';
import PostFriends from './Components/PostFriend'
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';


const data = "http://localhost:5000/friends/";


class App extends React.Component{
  constructor() {
    super()

    this.state ={
      friends: []
    }
  }


  fetchData  = () => {
    axios.get(data)
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {console.log(error.message);
      })
  }

  componentDidMount() {
    this.fetchData();
  }

  putFriend = (id, updatedFriend) => {
    axios.put(`http://localhost:5000/friends/${id}`, updatedFriend)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

 



  render(){
    
    return <>
          <PostFriends firendsList={this.state.friends} postFriend={this.postFriend} putFriend={this.putFriend}/>
          </>
  }
}

export default App;
