import React, { useEffect, useState } from "react";
import axios from "axios";

const People = (props) => {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${props.id}/`)
      .then((res) => {
        console.log(res.data);
        setPerson(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.id]);

  if (person === null) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <h2>Name: {person.name}</h2>
      <p>Height: {person.height}</p>
      <h3>Films:</h3>
      <ul>
        {person.films.map((film, i) => {
          return (
            <li>
              <a href={film}>{film}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default People;
