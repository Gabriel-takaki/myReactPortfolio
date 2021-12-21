import "./productList.css";
import Trabalho1 from "../../img/trabalho1.png";
import Trabalho2 from "../../img/trabalho2.png";
import Trabalho3 from "../../img/trabalho3.png";
import Trabalho4 from "../../img/trabalho4.png";

const About = () => {
  return (
      <div className="projetos-div">
        <h1 className="projetos-title">Meus Projetos</h1>
        <p className="a-sub">
         Clique aqui para ver um pouco sobre meus projetos desenvolvidos em <br/> JavaScript, React, Html, Css & Node.js.
        </p>
    
        <div className="galeria">
          <img
            src={Trabalho1}
            alt=""
            className="projeto-img"
          />
           <img
            src={Trabalho2}
            alt=""
            className="projeto-img"
          />
           <img
            src={Trabalho3}
            alt=""
            className="projeto-img"
          />
           <img
            src={Trabalho4}
            alt=""
            className="projeto-img"
          />
           <img
            src={Trabalho1}
            alt=""
            className="projeto-img"
          />
        </div>
        </div>
  );
};

export default About;