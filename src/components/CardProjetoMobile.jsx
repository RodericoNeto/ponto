import React, { useEffect, useState } from 'react'
import './CardProjetoMobile.css'

export default function CardProjetoMobile(props) {

  const img01 = props.imgCar01
  const img02 = props.imgCar02
  const img03 = props.imgCar03

  const listImg = [img01, img02, img03]

  const [imgAtual, setImgAtual] = useState(0)
  const [stop, setStop] = useState(false)

  useEffect(()=>{

    if(stop === false){
      setTimeout(()=>{
              nextImg()
            },3000)
    }
  }, [imgAtual])
  
  const nextImg = ()=>{
    setImgAtual(imgAtual === (listImg.length -1) ? 0 : (imgAtual + 1))
  }

  // const nextImgStop = ()=>{
  //   setImgAtual(imgAtual === (listImg.length -1) ? 0 : (imgAtual + 1))
  //   setStop(true)
  // }

  // const prevImgStop = ()=>{
  //   setImgAtual(imgAtual === 0 ? (listImg.length -1) : (imgAtual -1))
  //   setStop(true)
  // }

  const putImg01 = () =>{
    setImgAtual(0)
    setStop(true)
  }

  const putImg02 = () =>{
    setImgAtual(1)
    setStop(true)
  }

  const putImg03 = () =>{
    setImgAtual(2)
    setStop(true)
  }

  return (
    <div className='CardProjetoMob-container'
    style={{backgroundImage: `url(${listImg[imgAtual]})`}}>
      {/* <button onClick={prevImgStop}>1</button>
      <button onClick={nextImgStop}>2</button> */}

      <div className='buttons-photos-container'>
        <button className='button-littleball' 
        style={imgAtual === 0 ? {backgroundColor: 'var(--color-azulclaro)'} : {backgroundColor: 'white'}} onClick={putImg01}></button>
        <button className='button-littleball' style={imgAtual === 1 ? {backgroundColor: 'var(--color-azulclaro)'} : {backgroundColor: 'white'}} onClick={putImg02}></button>
        <button className='button-littleball' style={imgAtual === 2 ? {backgroundColor: 'var(--color-azulclaro)'} : {backgroundColor: 'white'}} onClick={putImg03}></button>
      </div>

    </div>
  )
}

