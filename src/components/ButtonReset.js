const ButtonReset = (props) => {
  const handleBtn = (ev) => {
    ev.preventDefault();
    props.setSearchByName("");
    props.setSelectHouse("gryffindor");
    props.setSelectGender(false);
  };
  return (
    <button className="btnReset" type="submit" onClick={handleBtn}>
      Eliminar filtros
    </button>
  );
};

export default ButtonReset;
