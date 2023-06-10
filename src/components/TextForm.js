import React, { useState } from 'react'

export default function TextForm(props) {
  
  const HandleUpClick=()=>{
    // console.log('i m lowercase'+ text)
    const convert =text.toUpperCase()
    setText(convert)
    props.showAlert("Converted to uppercase","success")
  }
  
  const HandleLowClick=()=>{
    // console.log('i m lowercase'+ text)
    const convert =text.toLowerCase()
    setText(convert)
    props.showAlert("Converted to lowercase","success")
  }
  const HandleClear=()=>{
    // console.log('i m lowercase'+ text)
    const convert =""
    setText(convert)
  }
  const HandleOnChange=(event)=>{
    // console.log('i m CHANGED')
    setText(event.target.value)
  }
  const [text, setText] = useState(" Chiya enter text here")
  // console.log(text,setText)
  return (
    <>
    <div  style={{color: props.mode==='dark'?'white':'black'}} >
      <h2>{props.heading}</h2>
  <div className="mb-3"  >
    <textarea className="form-control" onChange={HandleOnChange}  style={{backgroundColor: props.mode==="dark"?"grey":"white",
  color: props.mode==='dark'?'white':'black'}} value={text} id="myBox" rows="6"></textarea>
  </div>
  <button className="btn btn-primary mx-2" id='btn' onClick={HandleUpClick}  >Convert to Uppercase</button>
  <button className="btn btn-secondary mx-2" onClick={HandleLowClick} >Convert to Lowercase</button>
  <button className="btn btn-success mx-2" onClick={HandleClear}   >Clear</button>
  
  
</div>
<div className="container" my-2="true" style={{color: props.mode==='dark'?'white':'black'}} >
  <h2>Your text summary</h2>
  <p>{(text.split(' ').length-1) } words and {text.length} characters</p>
  <p>{0.008*text.split(' ').length} Minutes reading time</p>
</div>
    </>
  )
}
