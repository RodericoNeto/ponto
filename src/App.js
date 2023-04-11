
import './App.css';
import { useState } from 'react';
import Contato from './components/Contato';
import Header from './components/Header';
import Projetos from './components/Projetos';
import QuemSomos from './components/QuemSomos';
import ModalMenu from './components/ModalMenu/ModalMenu';
import AbaContatoLateral from './components/AbaContatoLateral/AbaContatoLateral';

function App() {


  const [modalStatus, setModalStatus] = useState(false)

  const changeModalStatus = () =>{
    if(modalStatus === false){
      setModalStatus(true)
    } else {
      setModalStatus(false)
    }
  }

  return (
    <div className="App">
      <Header changeModalStatus={changeModalStatus}/>
      <ModalMenu modalStatus={modalStatus ? 'modalmenu-container-open' : 'modalmenu-container-closed'} changeModalStatus={changeModalStatus} />
      
      
      <div id="quemsomos"><QuemSomos/></div>
      <div id="projetos"><Projetos/></div>
      <div id="contato"><Contato/></div>
      <AbaContatoLateral/>
    </div>
  );
}

export default App;
