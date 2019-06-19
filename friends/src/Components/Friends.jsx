import React from 'react';
import styled from 'styled-components'

class Friends extends React.Component{
constructor(props){
    super(props)
}

    render(){
        return (<StyledDiv>
            <ul>
            {this.props.firendsList.map(elm => <li>NAME: {elm.name}<br/> Age: {elm.age}<br/> Email: {elm.email}</li>)}
            </ul>
        </StyledDiv>)
    }
}

export default Friends



//Styled component


const StyledDiv = styled.div`
    background-color:gray;

   ul {
       max-width:30%;
       margin:20px auto;
       padding:10px;
       li {
           border-bottom:1px solid black
       }
   }
`