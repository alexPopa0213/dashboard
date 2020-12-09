import React, {Component} from 'react';

class ServerInstance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logEntries: [],
            contacts: 'empty',
            errorState: true
        }
    }

    render() {
        return <div className="serverInstance"
                    style={{
                        backgroundColor: this.state.errorState ? '#fac9d0' : '#d5fbcf',
                    }}>
            <h3>server {this.props.name}</h3>
            <div className="data">
                <p>{this.state.contacts.substr(0, 100)}</p>
            </div>
        </div>
    }

    async componentDidMount() {
        setInterval(async => this.callAPI(), 1000);
    }

    async callAPI() {
        return await fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.text())
            .then((data) => {
                this.setState({errorState: false})
                this.setState({contacts: data})
            })
            .catch(reason => {
                this.setState({errorState: true})
                console.log(reason);
            });
    }
}

export default ServerInstance;