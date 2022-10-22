import React from "react";

export default function Results(props) {
  console.log(props.results);
  if (props.loaded === true) {
    return (
      <div className="border-top border-primary mt-2">
        <h1 className="text-left">{props.results.word}</h1>
        <p>
          {props.results.meanings.map(function (meaning, index) {
            return meaning.definitions[0].definition;
          })}
        </p>
      </div>
    );
  } else {
    return null;
  }
}
