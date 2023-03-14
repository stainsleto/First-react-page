import React from "react";
import MainJs from "./components/main";
import NavBar from "./components/navbar";

function App(){

    const[darkMode, setDarkMode] = React.useState(true)

    function toggleDarkMode(){
        setDarkMode(prevMode => !prevMode)
    }

    return(
        <div className="container">
            <NavBar 
                darkMode={darkMode} 
                toggleDarkMode={toggleDarkMode} 
            />
            <MainJs darkMode={darkMode} />
        </div>
    )
}

export default App