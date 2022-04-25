import './App.css';
import { useState } from "react";
import  Menu  from './page/Menu.js';
import  Checkbox  from './page/Checkbox.js';
import  Home  from './page/Home.js';
import  About  from './page/About.js';
import  Contact  from './page/Contact.js';
import  Skills from './page/Skills.js';
function App() {
  const [isDarkMode, setDarkMode] = useState(false)
  console.log(isDarkMode)
  return (
    <div className={isDarkMode ? 'dark-theme' : 'light'}>
       <Menu/>
       <Checkbox setDarkMode={setDarkMode} isDarkMode={isDarkMode}/>
       <Home/>
       <About/> 
       <Skills/> 
       <Contact/>
    </div>
  );
}

export default App;
