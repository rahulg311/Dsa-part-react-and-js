import React, { useState } from 'react';

const Hoc = (Component) => {
    // console.log("component",component)
  return function Troglefunc(props){
    const [show,setShow]= useState(false)

    // console.log("component",props)
    return (
        <>
            <button onClick={()=>setShow(!show)}> {show ==false?"show":"hide"}</button>
            {
                show && <Component {...props} />
            }

        </>
    )
    
  }
  
}

export default Hoc;
