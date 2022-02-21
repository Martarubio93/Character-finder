import InputByName from "./InputByName";
import SelectByHouse from "./SelectByHouse";
import CheckInputsByGender from "./CheckInputsByGender";
import ButtonReset from "./ButtonReset";

const Filters = (props) => {
  return (
    <form className="form" onSubmit={(ev) => ev.preventDefault()}>
      <InputByName
        handleFilters={props.handleFilters}
        searchByName={props.searchByName}
      />
      <SelectByHouse
        handleFilters={props.handleFilters}
        selectHouse={props.selectHouse}
      />
      <CheckInputsByGender
        handleGender={props.handleGender}
        selectGender={props.selectGender}
      />
      <ButtonReset
        setSearchByName={props.setSearchByName}
        setSelectHouse={props.setSelectHouse}
        setSelectGender={props.setSelectGender}
      />
    </form>
  );
};

export default Filters;
