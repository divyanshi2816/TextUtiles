
import React, { useState } from 'react'

export default function Color(props) {
    const [mode, setMode] = useState('light')
    const toggleMode=()=>{
        if(mode==="yellow"){
           
            setMode('red');
            document.body.style.backgroundColor='red'
            // showAlert("RED mode enabled","success")
        }
        else{
       
            setMode('yellow')
            document.body.style.backgroundColor='yellow'
        }
    }
  return (
    <div className="form-check form-switch" style={{
        color:props.color,
        
    }}>
  <input className="form-check-input danger" onClick={toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">mode enabled</label>
</div>
  )
}
