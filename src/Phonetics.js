import React from "react";

export default function Phonetics(props) {
  if (props.phonetics.length > 0) {
    return (
  <div>
      {props.phonetics.map(function (phonetic, index)
      {
        //console.log(phonetic);
        if (phonetic.audio !== "" || phonetic.text !== "") {
          return (
            <button type="button" className="btn btn-light mr-2" key={index}>
              <span>
                {" "}
                <a
                  href={phonetic.audio}
                  className="text-dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-solid fa-volume-high"></i>
                </a>{" "}
                {phonetic.text}
              </span>
            </button>
          );
        } else {
          return " ";
        }
        
        
    })}
  </div>
    )
  } else {
    return null;
  }
}
