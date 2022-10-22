import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function showResponse(response) {
    setLoaded(true);
    setResults(response.data[0]);

  }

  function Search(event) {
    event.preventDefault();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(showResponse);
  }
  function ChangeKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary border-top border-primary mt-5">
      <header>
        <div className="container">
          <form onSubmit={Search}>
            <div className="form-group">
              <label for="exampleInputEmail1"></label>
              <input
                type="search"
                className="form-control"
                placeholder="Enter the word that you wish to find in the Dictionary"
                autoFocus={true}
                onChange={ChangeKeyword}
              />
              <small id="emailHelp" className="form-text text-muted text-left">
                We'll try to find information for you..
              </small>
            </div>
            <button type="submit" className="btn btn-primary mb-2">
              Submit
            </button>
          </form>
        </div>
      </header>
      <div>
        <Results results={results} loaded={loaded} />
      </div>
    </div>
  );
}
