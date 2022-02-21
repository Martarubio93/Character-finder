const InputByName = (props) => {
  const handleInput = (ev) => {
    props.handleFilters({
      key: "name",
      value: ev.currentTarget.value,
    });
  };
  return (
    <section>
      <label className="form__labelName" htmlFor="name">
        Busca por personaje:
      </label>
      <input
        className="form__inputName"
        type="text"
        id="name"
        name="name"
        onChange={handleInput}
        value={props.searchByName}
      />
    </section>
  );
};

export default InputByName;
