import "./productList.css";
import Trabalho1 from "../../img/trabalho1.png";
import Trabalho2 from "../../img/trabalho2.png";
import Trabalho4 from "../../img/trabalho4.png";
import cofeeShop from "../../img/cofeshoppCss.png";
import seta from "../../img/seta.png";
import pomodorePic from "../../img/PomodoreTodo.png";

import { useState } from "react";
const About = () => {
const [open, setOpen]=useState(false)

  function openDiv(){
    (open === false ? setOpen(true) : setOpen(false))
  }
  
  return (
      <div className="projetos-div">
        <h1 className="projetos-title">Meus Projetos</h1>
        <p className="a-sub">
         Clique aqui para ver um pouco sobre meus projetos desenvolvidos em <br/> JavaScript, React, Html, Css & Node.js.
        </p>
    
    <div className="div-link">

    </div>
    <div  className={open === false?  'div-galeria' : 'div-galeria-aberta'}>
        <div className="galeria">

          <a href="https://gabriel-takaki.github.io/choqueFlix/">
          <img
            src={Trabalho1}
            alt=""
           className={open === false?  'projeto-img' : 'projeto-img-open'}
            />
          </a>

      <a href="https://gabriel-takaki.github.io/pomodoreTodo/">
           <img
            src={Trabalho2}
            alt=""
           className={open === false?  'projeto-img' : 'projeto-img-open'}
          />
          </a>

          <a href="https://gabriel-takaki.github.io/trybeTunes/">
           <img
            src={pomodorePic}
            alt=""
           className={open === false?  'projeto-img' : 'projeto-img-open'}
          />
          </a>

          <a href="https://gabriel-takaki.github.io/cafeshoppCss/">
           <img
            src={cofeeShop}
            alt=""
           className={open === false?  'projeto-img' : 'projeto-img-open'}
          />
          </a>
           <img
            src={Trabalho1}
            alt=""
           className={open === false?  'projeto-img' : 'projeto-img-open'}
          />

        </div>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<button onClick={openDiv} className="button-open-div">
        <img className="seta-watch-more" src={seta} alt="" />
        </button>
        </div>
        </div>
  );
};

export default About;