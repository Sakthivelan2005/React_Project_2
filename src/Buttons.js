import React, { useState } from 'react'
import './Buttons.css'

export const Buttons = ({SetRequest_url},) => {
    const [ActiveButton, SetActiveButton] = useState("users");
    const buttons = ["users","posts","comments"];
    return (
    <div className='buttons'>
        {buttons.map((btn) => 
        <button key={btn}
        style={{
            backgroundColor: ActiveButton === btn? "black" : "white",
            color: ActiveButton === btn? "white" : "black"}} 
            onClick={() => {SetActiveButton(btn);
                             SetRequest_url(btn)} }>
        {btn}
        </button>
        )}
    
    </div>
  )
}
