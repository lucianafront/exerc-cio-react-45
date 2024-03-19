import React from 'react'
import UserGreeting from './index'

export default class LoginControl extends React.Component{

    constructor(props){
        super(props)

        this.handleLogin=this.handleLogin.bind(this)

        this.handlogout=this.handLogout(this)

        this.state={
            isLoggedIn:false
        }


    }
    handleLogin(){
        this.setState({isLoggedIn:true})

    }
    handlogout(){
        this.setState({isLoggedIn:false})

    }

    render(){
        const isLoggedIn = this.state.isLoggedIn

        let button

        if (isLoggedIn) {
            button= <button onClick={this.handLogout}>sair</button>    
        }else{
            button=<button onClick={this.handLogout}>Acessar</button>
        }
        return(
            <div>
                <UserGreeting isLoggedIn={isLoggedIn}/>
                {button}

            </div>
        )
        
    }
}