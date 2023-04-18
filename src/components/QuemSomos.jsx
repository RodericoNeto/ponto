import React from "react";
import ImgBanner01 from "../assets/images/imgbanner01prev.png";
import ImgFoto from "../assets/images/quemsomosteste01semfundo.png";
import IconArq01 from '../assets/icons/noun-architecture-2864041.png'

import HolidayVillageOutlinedIcon from '@mui/icons-material/HolidayVillageOutlined';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import GiteIcon from '@mui/icons-material/Gite';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import HouseIconPng from '../assets/icons/house.png'
import IconeENome from "./IconeENome/IconeENome";

export default function QuemSomos() {
  return (
    <>
      <div className="quemsomos-container">
        <div
          className="quemsomos-banner"
          style={{ backgroundImage: `url(${ImgBanner01})` }}
        ></div>
        <div className="quemsomos-descricao">
          <div>
            <div className="quemsomos-descricao-title">A PONTO</div>
            <img src={ImgFoto} className="quemsomos-descricao-foto"></img>
            <div className="quemsomos-descricao-texto">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
              facere cum eos aliquam, laudantium ratione odio, dolorum illum
              earum nostrum esse, illo animi quae velit. Deleniti voluptatum
              maxime eligendi dignissimos?
            </div>
            <div className="quemsomos-descricao-title-icons">SERVIÇOS</div>
            <div className="quemsomos-icons-container">
              <IconeENome icone={HouseIconPng} nome='Arquitetura'/>
              <IconeENome icone={HouseIconPng} nome='Interiores'/>
              <IconeENome icone={HouseIconPng} nome='Consultoria'/>
            </div>
            <div className="quemsomos-descricao-title-icons">TIPOLOGIAS</div>
            <div className="quemsomos-icons-container">
            <IconeENome icone={HouseIconPng} nome='Residencial'/>
            <IconeENome icone={HouseIconPng} nome='Comercial'/>
            <IconeENome icone={HouseIconPng} nome='Corporativo'/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
