import React from "react";
import ImgBanner01 from "../assets/images/imgbanner01prev.png";
import ImgFoto from "../assets/images/quemsomosteste01semfundo.png";

import HolidayVillageOutlinedIcon from '@mui/icons-material/HolidayVillageOutlined';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import GiteIcon from '@mui/icons-material/Gite';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';

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
              <div>
                <HolidayVillageOutlinedIcon style={{fontSize: '48px', color: 'gray'}}/>
                <div>Arquitetura</div>
              </div>
            </div>
            <div className="quemsomos-descricao-title-icons">PROJETOS</div>
            <div className="quemsomos-icons-container"></div>
          </div>
        </div>
      </div>
    </>
  );
}
