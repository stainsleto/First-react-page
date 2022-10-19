import React from "react";
import ReactDOM from 'react-dom';
import MainJs from "./components/main";
import NavBar from "./components/navbar";

function App(){
    return(
        <div>
            <NavBar />
            <MainJs />
        </div>
    )
}

export default App