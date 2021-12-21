import "./about.css";
import Me from "../../img/me.png";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Me}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Sobre mim.</h1>
        <p className="a-sub">
          Estudante de Engenharia de Software bacharelado e estudante de desenvolvimento Full Stack Web pela melhor academia de programação Web do Brasil (trybe).
        </p>
        <p className="a-desc">
        Entusiasta por conhecimento e novos desafios, apreciador de dificuldades que elevam de alguma forma o meio em que se foi instaurada, buscando sempre uma forma de tornar as ações necessárias mais simples e automatizadas através da ciência e tecnologia. <br /> Organizado, comprometido e disposto a sempre ouvir para melhorar.
        </p>
        </div>
      </div>
  );
};

export default About;
