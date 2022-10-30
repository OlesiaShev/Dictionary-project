import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Logo from "./images/undraw_typewriter_re_u9i2.svg";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function showResponse(response) {
    setLoaded(true);
    setResults(response.data);

  }
  function showPictures(response) {
    console.log(response);
  }

  function Search(event) {
    event.preventDefault();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(showResponse);

    let pexelAPIKey =
      "563492ad6f917000010000018dcbb3ad01384925946d0b10051a1a75";
    let pexelUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    axios
      .get(pexelUrl, { headers: { Authorization: `Bearer ${pexelAPIKey}` } })
      .then(showPictures);
  }
  function ChangeKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div>
      <img
        src={Logo}
        className="logo img-fluid mt-3"
        alt="logo"
      ></img>
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
                <small
                  id="emailHelp"
                  className="form-text text-muted text-left"
                ></small>
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
    </div>
  );
}
