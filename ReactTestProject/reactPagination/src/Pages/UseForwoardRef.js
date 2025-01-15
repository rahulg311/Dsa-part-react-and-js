import React, { forwardRef } from 'react';
import { useRef } from 'react';

const UseForwoardRef = () => {
    let ref = useRef()
    const HandleClick = ()=>{
        ref.current.focus()

    }
  return (
    <div>

      <ChildComonent ref={ref}/>
      <button onClick={HandleClick}> focus button</button>
    </div>
  );
}

export default UseForwoardRef;

const ChildComonent = forwardRef((ref)=>{
    return (
        <>
            <input  type='text' ref={ref}/>
        </>
    )
    
})
