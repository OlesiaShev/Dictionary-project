import React, { useState } from "react";

export default function Results(props) {
  let resultObject = props.results;

  console.log(resultObject);
  if (props.loaded === true) {
    return resultObject.map(function (array, index) {
    //  console.log(array);
      let word = array.word;
      return (
        <div key={index}>
          <div>
            <h1 className="border border-primary p-2">{word}</h1>
            { array.meanings.map(function (meaning, index)
            {
           //   console.log(meaning);
              let definitions = meaning.definitions;
              let synonyms = meaning.synonyms;
              return (
                <div key={index}>
                  {" "}
                  <strong>{meaning.partOfSpeech}</strong>{" "}
                  {definitions.map(function (definition, index) {
                    //  console.log(definition);
                    return (
                      <ul key={index} className="text-left">
                        <li>{definition.definition}</li>
                      </ul>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  } else {
    return     null
  }
}
