const SelectByHouse = (props) => {
  const handleSelect = (ev) => {
    props.handleFilters({
      key: "house",
      value: ev.currentTarget.value,
    });
  };
  return (
    <section>
      <label className="form__labelHouse" htmlFor="houses">
        {" "}
        Selecciona la casa:
      </label>
      <select
        className="form__select"
        id="houses"
        name="houses"
        value={props.selectHouse}
        onChange={handleSelect}
      >
        <option value="gryffindor">Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
    </section>
  );
};

export default SelectByHouse;
