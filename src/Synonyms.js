import React from "react";

export default function Synonyms(props)
{
    console.log(props.synonyms);
    if (props.synonyms.length > 0) {
      return (
        <div>
          <strong className="text-primary">
            {" "}
            Synonyms:{" "}
            {props.synonyms.map(function (synonyms, index) {
              return <div key={index}>{synonyms}</div>;
            })}
          </strong>
        </div>
      );
    } else {
      return null;
    }
    
}