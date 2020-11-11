import React, { useEffect, useState } from "react";
import axios from "axios";

const Planets = (props) => {
  const [planets, setPlanets] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/planets/${props.id}/`)
      .then((res) => {
        console.log(res.data);
        setPlanets(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.id]);

  if (planets === null) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <h2>Name: {planets.name}</h2>
      <p>Height: {planets.rotation_period}</p>
      <h3>Residents:</h3>
      <ul>
        {planets.residents.map((resident, i) => {
          return (
            <li key={i}>
              <a href={resident}>{resident}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Planets;
