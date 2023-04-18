import './IconeENome.css'

import React from 'react'

export default function IconeENome(props) {

  return (
    <div className='iconeenome-container'>
        <div className='iconeenome-icone'><img src={props.icone}/></div>
        <div className='iconeenome-name'>{props.nome}</div>
    </div>
  )
}
