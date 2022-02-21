import { Link } from "react-router-dom/cjs/react-router-dom.min";

const CharacterCard = (props) => {
  const species = () => {
    if (props.species === "human" && props.gender === "female") {
      return "Humana";
    } else if (props.species === "human" && props.gender === "male") {
      return "Humano";
    } else if (props.species === "half-giant") {
      return "Mitad Gigante";
    } else if (props.species === "werewolf") {
      return "Hombre Lobo";
    } else if (props.species === "ghost") {
      return "Fantasma";
    }
  };
  return (
    <Link
      className="link"
      to={`character/${props.id}`}
      style={{ textDecoration: "none" }}
    >
      <img
        className="card__image"
        src={
          props.image
            ? props.image
            : "https://cdn0.iconfinder.com/data/icons/some-avatars/200/hpotter-512.png"
        }
        alt={props.name}
      />
      <h3 className="card__title">{props.name}</h3>
      <h5 className="card__text">{species()}</h5>
    </Link>
  );
};

export default CharacterCard;
