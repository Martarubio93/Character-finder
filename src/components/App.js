import "../styles/main.scss";
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CallToApi from "../services/api";
import { useState, useEffect } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";
import Footer from "./Footer";

function App() {
  //Info from Api
  const [data, setData] = useState([]);

  //Filters
  const [searchByName, setSearchByName] = useState("");
  const [selectHouse, setSelectHouse] = useState("gryffindor");
  const [selectGender, setSelectGender] = useState(false);

  useEffect(() => {
    CallToApi(selectHouse).then((response) => {
      setData(response);
    });
  }, [selectHouse]);

  //Function manejadora para guardar el value de los inputs
  const handleFilters = (data) => {
    if (data.key === "name") {
      setSearchByName(data.value);
    } else if (data.key === "house") {
      setSelectHouse(data.value);
    }
  };
  const handleGender = (value) => {
    setSelectGender(value);
  };

  //Function para filtrar por casa y por nombre
  const characterFiltered = data
    .filter((character) => {
      return character.name.toLowerCase().includes(searchByName.toLowerCase());
    })
    .filter((character) => {
      if (selectHouse === "gryffindor") {
        return true;
      } else if (selectHouse === character.house) {
        return character.house;
      }
    })
    .filter((character) => {
      if (selectGender === "female") {
        return character.gender === "female";
      } else if (selectGender === "male") {
        return character.gender === "male";
      } else {
        return true;
      }
    });

  const userData = useRouteMatch(`/character/:id`);

  const getRoute = () => {
    if (userData) {
      const routeId = userData.params.id;
      const findId = data.find((character) => {
        return character.id === routeId;
      });

      return findId;
    }
  };

  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/">
          <Filters
            handleFilters={handleFilters}
            searchByName={searchByName}
            selectHouse={selectHouse}
            setSearchByName={setSearchByName}
            setSelectHouse={setSelectHouse}
            handleGender={handleGender}
            selectGender={selectGender}
            setSelectGender={setSelectGender}
          />
          <CharacterList data={characterFiltered} searchByName={searchByName} />
        </Route>
        <Route path="/character/:id">
          <section className="detailContainer">
            <CharacterDetail
              getRoute={getRoute()}
              setSearchByName={setSearchByName}
            />
          </section>
        </Route>
      </Switch>
      <section className="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
