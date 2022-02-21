const CheckInputsByGender = (props) => {
  const handleGender = (ev) => {
    props.handleGender(ev.currentTarget.value);
  };

  return (
    <section className="checkRadios">
      <label className="checkRadios__label">
        <input
          className="checkRadios__input"
          type="radio"
          name="gender"
          value="female"
          checked={props.selectGender === "female"}
          onChange={handleGender}
        />
        Mujer
      </label>
      <label className="checkRadios__label">
        <input
          className="checkRadios__input"
          type="radio"
          name="gender"
          value="male"
          checked={props.selectGender === "male"}
          onChange={handleGender}
        />
        Hombre
      </label>
    </section>
  );
};

export default CheckInputsByGender;
