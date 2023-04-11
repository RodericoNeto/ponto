import React from "react";
import "./ModalMenu.css";

export default function ModalMenu(props) {
  return (
    <>
      <div className={props.modalStatus}>
        <div className="modal-button-container">
          <button className="modal-button-close" onClick={props.changeModalStatus} >X</button>
        </div>
        
        <a href="#quemsomos" onClick={props.changeModalStatus}>Quem somos</a>
        <a href="#projetos" onClick={props.changeModalStatus}>Projetos</a>
        <a href="#contato" onClick={props.changeModalStatus}>Contato</a>
        <a href="#depoimentos" onClick={props.changeModalStatus}>Depoimentos</a>
      </div>
    </>
  );
}
