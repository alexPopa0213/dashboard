import './App.css';
import React from "react";
import ServerInstance from "../server/ServerInstance";

function App() {
    return (
        <div className="App">
            <h1>Dashboard</h1>
            <div className="dashboard">
                <ServerInstance name="1" port="8001"/>
                <ServerInstance name="2" port="8002"/>
                <ServerInstance name="3" port="8003"/>
                <ServerInstance name="4" port="8004"/>
                <ServerInstance name="5" port="8005"/>
            </div>
        </div>
    );
}

export default App;
