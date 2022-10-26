import React from "react";

export default function Phonetics(props) {
  if (props.phonetics.length > 0) {
    return (
  <div>
      {props.phonetics.map(function (phonetic, index)
      {
        console.log(phonetic.audio);
          return (
            <span key={index}>
              {" "}
              <a
                href={phonetic.audio}
                className="text-dark"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-solid fa-volume-high"></i>
              </a>{" "}
              {phonetic.text}
            </span>
          );
        
    })}
  </div>
    )
  } else {
    return null;
  }
}
