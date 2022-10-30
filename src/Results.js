import React from "react";
import Synonyms from "./Synonyms";
import Phonetics from "./Phonetics";

export default function Results(props)
{
 // console.log(props);
  let resultObject = props.results;

  //console.log(resultObject);
  if (props.loaded === true) {
    return resultObject.map(function (array, index) {
      //console.log(array);
      let word = array.word;
      return (
        <div key={index}>
          <div>
            <div className="border border-primary p-2 bg-primary text-left rounded">
              <h2 className="text-center">
                {word}{" "}
              </h2>
              <div>
                <Phonetics phonetics={array.phonetics} />
              </div>
            </div>

            {array.meanings.map(function (meaning, index) {
              // console.log(meaning);
              let definitions = meaning.definitions;
              return (
                <div key={index} className="bg-light border rounded mb-3">
                  <strong className="border-bottom border-primary mt-4">
                    {meaning.partOfSpeech}
                  </strong>{" "}
                  {definitions.map(function (definition, index) {
                    //console.log(definition);
                    return (
                      <ul key={index} className="text-left">
                        <li>
                          {definition.definition}
                          <Synonyms synonyms={definition.synonyms} />
                        </li>
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
    return null;
  }
}
