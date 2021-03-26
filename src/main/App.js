import './App.css';
import React from "react";
import ServerInstance from "../server/ServerInstance";

function App() {
    return (
        <div className="App">
            <h1>Dashboard</h1>
            <div className="dashboard">
                <ServerInstance name="1" port="8001"/>
                <ServerInstance name="2" port="8001"/>
                <ServerInstance name="3" port="8001"/>
                <ServerInstance name="4" port="8001"/>
                <ServerInstance name="5" port="8001"/>
                <ServerInstance name="6" port="8001"/>
                <ServerInstance name="7" port="8001"/>
                <ServerInstance name="8" port="8001"/>
                <ServerInstance name="9" port="8001"/>
            </div>
        </div>
    );
}

export default App;
