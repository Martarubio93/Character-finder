import { v4 as uuid } from "uuid";

const CallToApi = (selectHouse) => {
  return fetch(
    `https://hp-api.herokuapp.com/api/characters/house/${selectHouse}`
  )
    .then((response) => response.json())
    .then((response) => {
      const cleanData = response.map((character, index) => {
        return {
          id: uuid(),
          name: character.name,
          species: character.species,
          house: character.house,
          alive: character.alive,
          gender: character.gender,
          image: character.image,
          otherNames: character.alternate_names
        };
      });
      return cleanData;
    });
};

export default CallToApi;
