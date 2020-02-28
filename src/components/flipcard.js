import React, { useState, useEffect } from "react"

import "./flipcard.css";

const FlipCard = ( props, { className, data, onChildClick }) => {
  const [ flipClass, setFlipClass ] = useState("");
  const onClick = (e) => {
    e.preventDefault();
    flip();
    return false;
  };

  const flip = () => {
    //e.target.classList.toggle("flip");
    setFlipClass("flip");
  }

  React.useEffect(() => {
    setFlipClass(props.show ? "" : "flip");
  }, [props.show]);

  return (
    <div className={"flip-container " + flipClass} id="myCard" onClick={props.onClick ? props.onClick : () => {}}>
	    <div className="flipper">
    		<div className="front">
    			{React.Children.map(props.children, (child, i) => {
            if (i == 0){
    			    return child;
    			  }
          })}
    		</div>
    		<div className="back">
    			{React.Children.map(props.children, (child, i) => {
            if (i == 1){
    			    return child;
    			  }
          })}
    		</div>
    	</div>
    </div>
  )
}

export default FlipCard;
