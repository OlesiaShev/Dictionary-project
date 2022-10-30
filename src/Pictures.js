import React from "react";
export default function Pictures(props)
{
    if (props.pictures) {
       // console.log(props.pictures);
        return (
          <div>
            {props.pictures.map(function (pictures, index) {
              return (
                <div key={index} className="row">
                  <div className="col">
                    <img
                      src={pictures.src.medium}
                      alt={pictures.alt}
                      className="img-fluid rounded"
                    ></img>
                  </div>
                </div>
              );
            })}
          </div>
        );
        

    } else {
        return null;
}
    
    
}