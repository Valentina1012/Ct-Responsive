import React from "react";
import "../styles/footer.css";
import Integrante from "../components/Integrante";


function Footer() {
  return (
    <>
      
      <section className="container text-center">
        <div className="row">
          <div className="col" id="col1">
            <span>Integrantes</span>
            <span>Github</span>
          </div>
          <div className="col">
            <Integrante name="Aurelio Gareca" userName="WalterAurelio" />
          </div>
          <div className="col">
            <Integrante name="Lautaro Uriona" userName="LautaroUriona" />
          </div>
          <div className="col">
            <Integrante name="Ignacio Palmier" userName="Palmier-Ignacio" />
          </div>
          <div className="col">
            <Integrante name="Valentina Alvarez" userName="Valentina1012" />
          </div>
        </div>
          
      </section>
    </>
  );
}

export default Footer;
