import React from "react";
import CardProjetoMobile from "./CardProjetoMobile";
import assets from "../importAssets";

export default function Projetos() {
  return (
    <>
      <div className="projetos-container">
        <div className="projetos-title">
          <h3>PROJETOS</h3>
          <div className="projetos-title-line"></div>
        </div>
        <CardProjetoMobile
          title={"Cozinha ML"}
          imgCar01={assets.prevCarrossel01}
          imgCar02={assets.prevCarrossel02}
          imgCar03={assets.prevCarrossel03}
        />

        <CardProjetoMobile
          title={"Quarto JP"}
          imgCar01={assets.prevCarrossel04}
          imgCar02={assets.prevCarrossel05}
          imgCar03={assets.prevCarrossel06}
        />

        <CardProjetoMobile
          title={"Cozinha ML"}
          imgCar01={assets.prevCarrossel01}
          imgCar02={assets.prevCarrossel02}
          imgCar03={assets.prevCarrossel03}
        />

        <CardProjetoMobile
          title={"Quarto JP"}
          imgCar01={assets.prevCarrossel04}
          imgCar02={assets.prevCarrossel05}
          imgCar03={assets.prevCarrossel06}
        />
      </div>
    </>
  );
}
