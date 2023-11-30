import logo from './peixelogo1.png';
import textologo from './textologo1.png'
// import peixechamando from './PeixeCapaChamando.png'
// import Banner from './componentes/Banner/index';
import CampoTexto from './componentes/CampoTexto';
import './App.css';



function App() {
  return (
    <div className="App">
      {/* <Banner/> */}
      <body className="App-body">
        <img src={logo} className="App-logo" alt="logo" />
          <img src={textologo} className="Texto-logo"alt="Peixe Personal - Texto Logo"/>
          <p className='texto'>
          Peixe Personal Consultoria
          </p>
          <p className='texto-alerta'>
          Site em Construção!
          </p>
        <a
          className="App-link"
          href="home"
          target="_blank"
          rel="noopener noreferrer"
          >
          Espero por vocês!
        </a>
          {/* <div className="Div-foto-call">
          <img src={peixechamando} className="Foto-Call" alt="Peixe braço esticado chamando"/>
        </div> */}
      </body>
        <CampoTexto label="Nome" placeholder="Digite seu nome"/>
        <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
        <CampoTexto label="Imagem"placeholder="Digite o endereço da imagem"/>


    </div>
  );
}

export default App;
