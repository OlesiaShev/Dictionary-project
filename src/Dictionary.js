import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Pictures from "./Pictures";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [pictures, setPictures] = useState(null);

  function showResponse(response) {
    setLoaded(true);
    setResults(response.data);
    

  }
  function showPictures(response) {
    //console.log(response.data.photos);
    setPictures(response.data.photos);
  }

  function Search(event) {
    event.preventDefault();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(showResponse);
    document.querySelector("#main-picture").classList.add("notActive");

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
      <Pictures pictures={pictures} />
      <img
        src={"https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&h=350"}
        className="logo img-fluid mt-3"
        alt="logo"
        id="main-picture"
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
