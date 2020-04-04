import React from "react";
import "./style.css";

function WorkCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>PROJECT</strong> {props.name}
          </li>
         
        </ul>
      </div>
      
    </div>
  );
}

export default WorkCard;
