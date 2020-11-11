import React, { useState } from "react";
import { Router, navigate } from "@reach/router";

import "./App.css";

import People from "./views/People";
import Planets from "./views/Planets";
import NotFound from "./views/NotFound";

function App() {
  // since "people" is the first <option> it will be selected already
  // but it wasn't "changed" to that, so the onChange didn't trigger
  // meaning we need to default the state to the matching option to start with
  const [resource, setResource] = useState("people");
  const [selectedId, setSelectedId] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const url = `/${resource}/${selectedId}`;

    console.log(url);
    navigate(url);
  }

  return (
    <div className="App">
      <header>
        <form
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <div>
            <label>Search for: </label>
            <select
              onChange={(event) => {
                setResource(event.target.value);
              }}
              name="select resource"
            >
              <option value="people">People</option>
              <option value="planets">Planets</option>
            </select>
          </div>

          <div>
            <label>ID: </label>
            <input
              onChange={(event) => {
                setSelectedId(event.target.value);
              }}
              type="number"
              name="id input box"
            />
          </div>

          <button>Search</button>
        </form>
      </header>

      <Router>
        <People path="/people/:id" />
        <Planets path="/planets/:id" />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
