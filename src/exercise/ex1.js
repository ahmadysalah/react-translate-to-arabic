import React, { useState, useEffect } from "react";

function Ex1(props) {

  const [style,setStyle]=useState()
  const [efX, setEfX] = useState();
  const [efY, setEfY] = useState();

  useEffect(() => {
    efX > window.innerWidth/2   
      ? setStyle({backgroundColor : "blue"}) 
      : setStyle({backgroundColor : "red"}) 
  }, [efX]);

  return (
    <>
     <h2> EX1 ! </h2>
      <div
        className="hint"
        style={style}
        onMouseMove={(event) => {
          setEfX(event.clientX);
          setEfY(event.clientY);
        }}
      >
               <h3>
          x : {efX} y :{efY}
        </h3>
      </div>
    </>
  );
}

export default Ex1;
