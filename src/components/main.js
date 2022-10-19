import React from "react";
import ReactDOM  from "react-dom";
import '../index.css'


function MainJs(){
    return(
        <div className="content">
            <h1 className="heading">Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was Originally created by Jordan Walke</li>
                <li>has well over 100k stars on GitHub</li>
                <li>is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

export default MainJs