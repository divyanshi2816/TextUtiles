// cd my-add
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React  from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import { BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom'

// import About from './components/About';
function App() {
    const [mode, setMode] = useState('dark');
    const [alert, setAlert] = useState(null)
    const showAlert=(message,type)=>{
         setAlert({
            msg:message,
            type: type
         })
         
            setTimeout(() => {
                setAlert(null)
            }, 2000);
        
    }   
     const toggleMode=()=>{
        if(mode==="light"){
            setMode('dark');
            document.body.style.backgroundColor='grey'
            showAlert("Dark mode enabled","success")
        }
        else{setMode('light');
        document.body.style.backgroundColor='white'
        showAlert("Light mode enabled","success")
    }
    }
    
    return ( <>
    {/* <Router> */}
    <Navbar mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
    
    <Alert alert={alert}/>
    
    <div className="container">

        {/* <Switch>
         
        
      <Route exact path="/about"> */}
        {/* <About/> */}
      {/* </Route>
      <Route exact path="/" > */}
        <TextForm showAlert={showAlert} heading=" Enter Your text" mode={mode}/>
        {/* </Route>
      
    </Switch>

     */}
        {/* <About/> */}
        
    </div>
    {/* </Router> */}
    </>
    );
}

export default App;