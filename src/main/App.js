import './App.css';
import React from "react";
import ServerInstance from "../server/ServerInstance";

function App() {
    return (
        <div className="App">
            <h1>Dashboard</h1>
            <div className="dashboard">
                <ServerInstance name="1"/>
                <ServerInstance name="2"/>
                <ServerInstance name="3"/>
                <ServerInstance name="4"/>
                <ServerInstance name="5"/>
                <ServerInstance name="6"/>
                <ServerInstance name="7"/>
                <ServerInstance name="8"/>
                <ServerInstance name="9"/>
            </div>
        </div>
    );
}

export default App;
