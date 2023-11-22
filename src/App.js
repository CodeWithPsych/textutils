import './App.css';
import PropTypes from 'prop-types';

import Navbar from './components/Navbar.js';
// import About from './components/About.js';
import TextForm from './components/textForm.js';
import React, { useState } from 'react';
import Alert from './components/Alert.js';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

const showAlert=(message,type)=>{
     setAlert({
      msg: message,
      type: type,
     })
     setTimeout(() => {
      setAlert(null)
     }, 1500);
}
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#000455';
      showAlert("Dark mode is Enable","success")
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is Enable","success")
    }
  };

  return (
    <>
      <Navbar title='TextUtils' About='About TextUtils'  mode={mode} toggleMode={toggleMode} />
      <Alert  alert={alert}/>
      {/* <Navbar /> */}
      <TextForm showalert={showAlert} text='Enter your text Here' mode={mode} />
      {/* <About/> */}
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  About: PropTypes.string
}
Navbar.defaultProps = {
  title: 'Set Title',
  About: 'here is about'
}
export default App;