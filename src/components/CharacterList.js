import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const renderList = () => {
    if (props.data.length === 0) {
      return (
        <section className="containerNotFound">
          <p>ERROR 404 </p>
          <p>NOT FOUND</p>
        </section>
      );
    } else
      return props.data.map((oneUser, index) => {
        return (
          <li key={index} className="card">
            <CharacterCard
              name={oneUser.name}
              species={oneUser.species}
              image={oneUser.image}
              id={oneUser.id}
              gender={oneUser.gender}
            />
          </li>
        );
      });
  };
  return (
    <section className="list_container">
      <ul className="list">{renderList()}</ul>;
    </section>
  );
};

export default CharacterList;
