// {import logo from './logo.svg';}
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import {useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {
  const [darkmode, setdarkmode] = useState("light");
  const toggleButton=()=>{
    if(darkmode==="light"){
      setdarkmode("dark");
      document.body.style.backgroundColor="#31386c";
      showalert("Dark mode has been enabled.","success");
      document.title="TextUtils - DarkMode";
    }
    else{
      setdarkmode("light");
      document.body.style.backgroundColor="white";
      showalert("Light mode has been enabled.","success");
      document.title="TextUtils - Home";
    }
  }

  const [alert, setalert] = useState(null);
  const showalert=(message,type)=>{
    setalert({
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  return (
    <>
      {/* <Navbar/> */}
        {/* <Router> */}
      <Navbar title="TextUtils" about="About TextUtils" mode={darkmode} togglemode={toggleButton}/>
      <Alert alert={alert}/>
      <div className="container">
        {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
            <TextForm heading="Enter the Text to analyse" mode={darkmode} showAlert={showalert}/>
          {/* </Route>
        </Switch> */}
      </div>
        {/* </Router> */}
      
        {/* <div className="container">
          <About/>
        </div> */}
    </>
  );
}

export default App;
