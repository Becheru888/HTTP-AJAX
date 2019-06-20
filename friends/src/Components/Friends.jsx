import React from 'react';
import styled from 'styled-components'

class Friends extends React.Component{
constructor(props){
    super(props)
    this.state = {
       friend: {
        name: '',
        age:'',
        email:''
       }
    }
}

handleChange2 = e => {
    this.setState({
        friend: {
            ...this.state.friend,
            [e.target.name]: e.target.value
        }
    })
}



postFriend = (e) => {
    this.props.postFriend(this.state.friend)
}

putFriend = (e) => {
    this.props.putFriend(1, this.state.friend)
}

deleteFriend = (e) => {
    this.props.deleteFriend(1, this.state.friend)
}

    render(){
        return (<>  
        <StyledDiv>
            <ul>
            {this.props.firendsList.map(elm => <li>NAME: {elm.name}<br/> Age: {elm.age}<br/> Email: {elm.email} <button onClick={this.deleteFriend}>Delete</button></li>)}
            </ul>
        </StyledDiv>
        <StyledFormWrapper>
        <StyledForms onSubmit={this.postFriend}>
            <input 
            type="text" 
            name='name' 
            placeholder='Name' 
            onChange={this.handleChange2}
            value={this.state.friend.name}
            />
            <br/>
            <input 
            type="text" 
            name='age' 
            placeholder='Age'
            onChange={this.handleChange}
            value={this.state.friend.age}
            />
            
            <br/>
            <input 
            type="text" 
            name='email' 
            placeholder='Email' 
            onChange={this.handleChange}
            value={this.state.friend.email}
            />
            <br/>
            <button type='submit'>Post</button>
        </StyledForms>
        <StyledForms onSubmit={this.putFriend}>
            <input 
            type="text" 
            name='name' 
            placeholder='Name' 
            onChange={this.handleChange}
            value={this.state.friend.name}
            />
            <br/>
            <input 
            type="text" 
            name='age' 
            placeholder='Age'
            onChange={this.handleChange}
            value={this.state.friend.age}
            />
            
            <br/>
            <input 
            type="text" 
            name='email' 
            placeholder='Email' 
            onChange={this.handleChange}
            value={this.state.friend.email}
            />
            <br/>
            <button type='submit'>Put</button>
        </StyledForms>
        </StyledFormWrapper>
             </>)
        
    }
}

export default Friends



//Styled component


const StyledDiv = styled.div`
    background-color:#0E73EE;

   ul {
       max-width:30%;
       margin:20px auto;
       padding:10px;
       li {
           border-bottom:1px solid black
           border-color:white;
           color:white;
       }
   }
`

const StyledForms = styled.form`
    display:flex;
    align-content:center;
    flex-flow:column;
    width:200px;
    margin:0 auto;
`

const StyledFormWrapper = styled.div`
    display:flex;
   flex-flow:row;
`