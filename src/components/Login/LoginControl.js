import React from 'react'
import Login from'.index'
import UserGreeting from './index'

export default class LoginControl extends React.Component{

    constructor(props){
        super(props)
        this.handleLogin=this.handleLogin.bind(this)

        this.handlogout=this.handlogout(this)
        this.state={
            isLoggegIn:false
        }


    }
    handleLogin(){
        this.setState({isLoggegIn:true})

    }
    handlogout(){
        this.setState({isLoggegIn:false})

    }

    render(){
        const isLoggedIn =this.state.isLoggegIn

        let button

        if (isLoggedIn) {
            button= <button onClick={this.handlogout}>sair</button>    
        }else{
            button=<button onClick={this.handlogout}>Acessar</button>
        }
        return(
            <div>
                <UserGreeting isLoggedIn={isLoggedIn}/>
                {button}

            </div>
        )
        
    }
}