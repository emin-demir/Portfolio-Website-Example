import "../App.css"
import React, { useState } from 'react';
function Checkbox({isDarkMode,setDarkMode}) {
    const [checked, setChecked] = useState(false);
    return(
        <div>
            <label>
            <input onClick={()=> {setChecked(!checked);setDarkMode(!isDarkMode)}}
            type="checkbox"/>
            <span onClick={()=> setChecked(!checked)}></span>
            <text>Off</text>
            <text>On</text>
            </label>
        </div>
    )
}

export default Checkbox