import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Contato() {
  return (
    <div className="contato-container">
      <div className="contato-ponto">
        <p>Quer saber mais?</p>
        <p>
          Confira em
          <a href="https://www.instagram.com/ponto_projeta/" target="blank">
            {" "}
            @ponto_projeta
          </a>
        </p>
        <div className="contato-ponto-iconscontainer">
          <a href="https://www.google.com" target="blank">
            <WhatsAppIcon />
          </a>
          <a href="https://www.google.com" target="blank">
            <InstagramIcon />
          </a>
        </div>
      </div>

      <div className="contato-createdby-container">
        <p>Site criado por Roderico Neto</p>
        <p>
          <a href="https://www.google.com">Whatsapp</a> /{" "}
          <a href="https://www.google.com">GitHub</a>
        </p>
      </div>
    </div>
  );
}
