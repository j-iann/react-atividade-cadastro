import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="cadastro">
        <form>
          <h1>Cadastro</h1>
          <p>Preencha os dados abaixo para começar</p>
           <input type="text" placeholder="Nome" name="nome" />
           <input type="text" placeholder="Sobrenome" name="sobrenome" />
           <input type="email" placeholder="E-mail" name="email" />
           <input type="password" placeholder="Senha" name="senha" />
           <button>Concluir cadastro</button>
        </form>
      </div>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          App React
        </h1>
      </div>
    </div>
  );
}

export default App;
