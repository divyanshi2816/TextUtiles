// import React from 'react';
import React, { useState } from 'react';
export default function About() {
    const HandleMode=()=>{
        if(mystyle.color=="white"){
          setMyStyle({
            color:"black",
            backgroundColor:"white"
          })
          setbtnText("Enable dark mode")
        }
        else{
          setMyStyle({
            color:"white",
          backgroundColor:"black"
          })
          setbtnText("Enable light mode")
        }
      }
      const [btntext,setbtnText] = useState("Enable Dark Mode")
  const [mystyle,setMyStyle] = useState({
    color:"white",
    backgroundColor:"black"
  })
  return (
    <>
    <div>
    <button className="btn btn-primary mx-2"  onClick={HandleMode} style={mystyle
  }>{btntext}</button>
    
    </div>
    </>
  )
}
