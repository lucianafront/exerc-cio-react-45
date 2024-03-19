import React from 'react'

function UserGreetingLogado(props) {
    return <h3>Olá,{props.name}.Bem vindo(a)de volta!</h3>
}
function UserGreetingDeslogado(props) {
    return <h3>Por favor,faça o login para continuar</h3>
}

function UserGreeting(props) {
    
    const isLoggedIn = props.isLoggedIn
    console.log(props.name)
    
    return isLoggedIn ? <UserGreetingLogado name={props.name} /> : <UserGreetingDeslogado/>
}

export default UserGreeting