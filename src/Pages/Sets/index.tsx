import React, { useState } from "react";
import LinkedList from "../../Classes/LinkedList";
import { Link } from "react-router-dom";


const Sets = () => {
  const [ListA, setListA] = useState<LinkedList<string>>(
    new LinkedList<string>()
  );
  const [ListB, setListB] = useState<LinkedList<string>>(
    new LinkedList<string>()
  );
  function intersection(){
  }
  function union(){

  }
  function difference(){

  }

  return (
    <>
      <div>
        <Link to='/'>{"<"} Home</Link>
        
      </div>
    </>
  );
};

export default Sets;
