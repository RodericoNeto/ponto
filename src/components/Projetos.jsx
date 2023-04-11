import React from 'react'
import CardProjetoMobile from './CardProjetoMobile'
import assets from '../importAssets'

export default function Projetos() {
  return (
    <>
        <div className='projetos-container'>
          <CardProjetoMobile 
          imgCar01={assets.prevCarrossel01}
          imgCar02={assets.prevCarrossel02}
          imgCar03={assets.prevCarrossel03}
          />

          <CardProjetoMobile 
          imgCar01={assets.prevCarrossel01}
          imgCar02={assets.prevCarrossel02}
          imgCar03={assets.prevCarrossel03}
          />
          
          <CardProjetoMobile 
          imgCar01={assets.prevCarrossel01}
          imgCar02={assets.prevCarrossel02}
          imgCar03={assets.prevCarrossel03}
          />
        </div>
    </>
  )
}
