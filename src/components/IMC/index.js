import React, {useState} from 'react'
import './style.css'

function IMC() {

    const [peso, setWeight] = useState()
    const [altura, setheight] = useState()
    const[imc,setImc] = useState(0)
    const[msg,setMsg]= useState('')

    function calculator() {
        
        var resultado = peso / (altura * altura)
        setImc(parseFloat(resultado))
        
        console.log(imc)
        mostrarmensagem(resultado)

    }

    function mostrarmensagem(resultado){

        console.log(imc)
        var msg='';
        
        if (resultado < 18.5) {
          msg='Abaixo do peso'  
        }

        if (resultado > 18.6 && imc < 24.9) {
            msg='Peso ideal, parabéns'  
          }

          if (resultado > 25.0 && imc < 29.9) {
            msg='Levemente acima do peso'  
          }
          
          if (resultado> 30.0 && imc < 34.9) {
            msg='Obesidade grau 1'  
          }

          if (resultado > 35.0 && imc < 39.9) {
            msg='Obesidade grau 2, severa'  
          }


          if (resultado>40.0) {
            msg='Obesidade grau 3, morbida'  
          }




        setMsg(msg)
    }

    return (
        <div className='IMC'>
            <h2>Calculo IMC</h2>

            <input type='text'
                placeholder='digite seu peso'
                value={peso}
                onChange={e=>setWeight(e.target.value)}
                />

            <input type='text'
                placeholder='digite sua altura'
                value={altura}
                onChange={e=> setheight(e.target.value)}
            />
           
            <button onClick={calculator}>Calcular</button>

            <h2>Resultado: {imc}</h2>
            <h3>{msg}</h3>


        </div>
    )

}   

export default IMC;