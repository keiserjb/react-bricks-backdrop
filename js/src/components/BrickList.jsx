import React, { useState } from 'react';
import { useBricks } from "./context/BrickProvider";
import Brick from "./Brick";


const BrickList = () => {



  const bricks = useBricks()
  //console.log(bricks);
  return (
    <>
      {bricks && (

        /*<div className="mx-auto row row-cols-1 row-cols-md-3 g-4">*/
        <div className="brick-container">
          {bricks.map(brick => (<Brick key={brick.id} {...brick} />))}
        </div>

      )}

    </>


  )
}


export default BrickList
