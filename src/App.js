import './App.css';
import Header from './components/Header';
import CalculatorIMC from './components/IMC';
import Form from './components/Form/Form'
import Login from'./components/Login/LoginControl'

function App() {
  return (
    <div className="App">
      {/*<Header title="Título do app" />
      <CalculatorIMC />*/} 
   
   
   <Form title="props" />

   <Login name={'Luciana'}/>
    
    </div>

    
  );
}

export default App;
