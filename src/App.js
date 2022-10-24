import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {useState} from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)
  const showAlert =(message,type)=>{
    setalert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode ==='dark'){
    setmode('light')
    document.body.style.backgroundColor ='white'
    showAlert("Light Mode Has Been Enabled","success")
    document.title = 'TiffinX - Home'
    }
  else{
    setmode('dark');
    document.body.style.backgroundColor ='#05022c';
    showAlert("Dark Mode Has Been Enabled","success");
    document.title = 'TiffinX - DarkMode'
  }
  }
  return (
    <Router>
    <Navbar title="Tiffinx" home="Home" toggleMode={toggleMode} mode={mode}/>
    <Alert alert={alert}/>
     <div className='container my-3'>
     <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<TextForm heading="Enter The Text To Edit" mode={mode} alert={alert} showAlert={showAlert}/>}/>
      </Routes>
    </div>
    </Router>
    
  );
}
export default App;


