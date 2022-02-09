import React from 'react';

export default function OpButton(props) {
  return <div>
      <button onClick={()=>{
        props.action(props.val)}} className="nb-btn" > 
        {props.name}
      </button>
  </div>
}
