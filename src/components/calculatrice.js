import React, { useState } from 'react';
import OpButton from './OpButton';
import Display from './Display';

 function Calculatrice() {
    const [res, setRes] = useState("");
    
    const [x, setX] = useState(true); 

    const appendVal=(val)=>{
      console.log(x);
      if( x === true ){
        setX(false);
        setRes( val);
        
      }else{
        setRes( res + val);
        console.log(res );
    }
  }

    let validate = ()=>{
      setRes(eval(res));
      setX(true);
    }
    let L = ["7","8","9", "/", "4", "5", "6","*","1","2","3","-","0",".","=","+"];
  return <div className="calculatrice">
     {L.map((elem)=>{
       if(elem != "=")
         return<OpButton key={elem} val={elem} name={elem} action={appendVal}  />
      else
        return <button onClick={validate} className="nb-btn"> = </button>
      })
    }
    <Display val={res} className="display"/>
  </div>;



}

export default Calculatrice;