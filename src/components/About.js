import React, { useContext, useEffect } from 'react';
import textContext from './context/textContext';

export default function About() {
    const a = useContext(textContext);

    // useEffect(
    // ()=>{
    //     a.update();
    //      // eslint-disable-next-line
    // }, [] )

    const haldleClick = ()=>{
       a.update();
    }

  return (
    <div>
      <h1>This is About Component</h1>

      <h2>Hello My Name is {a.state.name}, and I'm in class {a.state.class} </h2>
      <button type="button" className="btn btn-primary" onClick={haldleClick} >Click Me</button>
    </div>
  )
}
