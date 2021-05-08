import React, {Component} from 'react';
import LogEntry from "./LogEntry";

class ServerInstance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logEntries: [],
            errorState: true,
        }
    }

    render() {
        return <div className="serverInstance"
                    style={{
                        backgroundColor: this.state.errorState ? '#ffeff3' : '#e2ffdc',
                    }}>
            <h3>server {this.props.name}</h3>
            <div className="log-size">size: {this.state.logEntries.length}</div>
            <div className="data">
                {this.state.logEntries.map((logEntry) => {
                    return <LogEntry term={logEntry.term} cmd={logEntry.command} index={logEntry.index}/>
                })}
            </div>
        </div>
    }

    async componentDidMount() {
        setInterval(() => this.callAPI(), 100);
    }

    async callAPI() {
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