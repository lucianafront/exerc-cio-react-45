import React, { useState } from 'react'
import logo from './../../logo.svg'

function Header(props) {

    const [count, setCout] = useState(1);

    function increaseCount() {
        setCout(count + 1);
        console.log(count);
    }

    //render
    return (
        <header>
            <h1>{props.title}</h1>
            <img src={logo} height={100} width={100} />
            <p>Bem vindo(a)!pela{count} vez</p>
            <button onClick={increaseCount}> retorna</button>
        </header>

        )
}