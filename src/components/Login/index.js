import React from 'react'

function UserGreeting(props) {
    return <h3>Olá,{props.name}.Bem vindo(a)de volta!</h3>
}
// function UserGreeting(props) {
//     return <h3>Por favor,faça o login para continuar</h3>
// }

function UserGreeting(props) {
    const isLoggedIn = props.isLoggedIn
    return isLoggedIn ? <UserGreeting name={props.name} /> : <GuestGreeting/>
}

export default Greeting