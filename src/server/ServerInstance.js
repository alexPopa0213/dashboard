import React, {Component} from 'react';
import LogEntry from "./LogEntry";

class ServerInstance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logEntries: [],
            serverState: "off",
            electionTimeout: "/",
            errorState: true,
        }
    }

    render() {
        let size = this.state.logEntries.length;
        let dataComponent;
        if(size > 11){
           dataComponent = <div className="data">
                                .....
                              {this.state.logEntries.slice(Math.max(this.state.logEntries.length - 10, 0))
                              .map((logEntry) => {
                                  if(logEntry.term !== 0 && logEntry.cmd !== "")
                                    {
                                        return <LogEntry term={logEntry.term} cmd={logEntry.command} index={logEntry.index}/>
                                    }
                                 })}
                           </div>
        }else{
            dataComponent = <div className="data">
                           {this.state.logEntries.map((logEntry) => {
                            if(logEntry.term !== 0 && logEntry.cmd !== "")
                               {
                                  return <LogEntry term={logEntry.term} cmd={logEntry.command} index={logEntry.index}/>
                               }
                                 })}
                         </div>
        }

        return <div className="serverInstance"
                    style={{
                        backgroundColor: this.state.errorState ? '#f2f2f2' : '#e6ffff',
                    }}>
            <h3>server {this.props.name}</h3>
            <div className="server-state">
                <span className={(this.state.serverState=="LEADER" ? "leader" : "no-lider")}>
                    state: {this.state.serverState}
                </span>
            </div>
            <div className="server-timeout">timeout: {this.state.electionTimeout}</div>
            <div className="log-size">size: {this.state.logEntries.length > 0 ? this.state.logEntries.length - 1 : 0}</div>
            {dataComponent}
        </div>
    }

    async componentDidMount() {
        setInterval(() => this.callGetServerElectionTimeoutEndpoint(), 2000);
        setInterval(() => this.callGetEntriesEndpoint(), 200);
        setInterval(() => this.callGetServerStateEndpoint(), 300);
    }

    async callGetServerStateEndpoint(){
     let url = 'http://localhost:' + this.props.port + '/api/state';
     return await fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    this.setState({serverState: data})
                })
                .catch(reason => {
                    this.setState({serverState: "off"})
                    console.log(reason);
                });
    }

    async callGetServerElectionTimeoutEndpoint(){
        let url = 'http://localhost:' + this.props.port + '/api/timeout';
        return await fetch(url)
                   .then((res) => res.json())
                   .then((data) => {
                       this.setState({electionTimeout: data})
                   })
                   .catch(reason => {
                       this.setState({electionTimeout: "/"})
                       console.log(reason);
                   });
       }

    async callGetEntriesEndpoint() {
        let url = 'http://localhost:' + this.props.port + '/api/entries';
        return await fetch(url)
            .then(res => res.json())
            .then((data) => {
                this.setState({errorState: false})
                this.setState({logEntries: data})
            })
            .catch(reason => {
                this.setState({errorState: true})
                console.log(reason);
            });
    }
}

export default ServerInstance;