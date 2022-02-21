import { Link } from "react-router-dom/cjs/react-router-dom.min";
import dead from "../images/skull-crossbones-solid.svg";
import Alive from "../images/heartbeat-solid.svg";
import Arrow from "../images/chevron-circle-left-solid.svg";
import griffindor from "../images/pngegg.png";
import slytherin from "../images/pngeggh.png";
import hufflepuff from "../images/pngegg (1).png";
import ravenclaw from "../images/pngegg (2).png";

const CharacterDetail = (props) => {
  props.setSearchByName("");
  const data = props.getRoute;

  const species = () => {
    if (data.species === "human" && data.gender === "female") {
      return "Humana";
    } else if (data.species === "human" && data.gender === "male") {
      return "Humano";
    } else if (data.species === "half-giant") {
      return "Mitad Gigante";
    } else if (data.species === "werewolf") {
      return "Hombre Lobo";
    } else if (data.species === "ghost") {
      return "Fantasma";
    }
  };

  const alive = () => {
    if (data.alive === true && data.gender === "female") {
      return (
        <li className="aliveList">
          Estatus: Viva
          <img className="aliveList__icon" src={Alive} alt="calavera" />
        </li>
      );
    } else if (data.alive === true && data.gender === "male") {
      return (
        <li className="aliveList">
          Estatus: Vivo
          <img className="aliveList__icon" src={Alive} alt="calavera" />
        </li>
      );
    } else if (data.alive === false && data.gender === "female") {
      return (
        <li className="aliveList">
          Estatus: Muerta
          <img className="aliveList__icon" src={dead} alt="calavera" />
        </li>
      );
    } else if (data.alive === false && data.gender === "male") {
      return (
        <li className="aliveList">
          Estatus: Muerto
          <img className="aliveList__icon" src={dead} alt="calavera" />
        </li>
      );
    }
  };

  const otherNames = () => {
    if (data.otherNames.length >= 1) {
      return data.otherNames.map((otherName, index) => {
        return <li key={index}>Otro nombre: {otherName}</li>;
      });
    } else if (data.otherName === undefined) {
      return false;
    }
  };
  const Icons = () => {
    if (data.house === "Gryffindor") {
      return <img className="icon" src={griffindor} alt="logo" />;
    } else if (data.house === "Hufflepuff") {
      return <img className="icon" src={hufflepuff} alt="logo" />;
    } else if (data.house === "Slytherin") {
      return <img className="icon" src={slytherin} alt="logo" />;
    } else if (data.house === "Ravenclaw") {
      return <img className="icon" src={ravenclaw} alt="logo" />;
    }
  };
  if (data === undefined) {
    return (
      <Link className="link" to="/">
        <span>Volver</span>
        <div className="carddetail notfound">
          <p className="detailNotFound"> Lo siento, este personaje no existe</p>
        </div>
      </Link>
    );
  } else
    return (
      <Link className="link" to="/">
        <img className="iconBack" src={Arrow} alt="back"></img>
        <div className="carddetail">
          <img
            className="carddetail__img"
            src={
              data.image
                ? data.image
                : "https://cdn0.iconfinder.com/data/icons/some-avatars/200/hpotter-512.png"
            }
            alt={data.name}
          />

          <ul className="carddetail__list">
            <h2 className="carddetail__list--title">{data.name}</h2>
            {otherNames()}
            {alive()}
            <li>Especie: {species()}</li>
            <li>Género: {data.gender === "female" ? "Mujer" : "Hombre"}</li>
            <li> Casa: {data.house}</li>
          </ul>
          {Icons()}
        </div>
      </Link>
    );
};

export default CharacterDetail;
