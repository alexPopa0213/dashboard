import React from 'react';

class LogEntry extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="log-entry">
            <p id="entry-text">T: <span id="term-value">{this.props.term}</span>, C: <span
                id="cmd-value">{this.props.cmd}</span></p>
        </div>
    }

}

export default LogEntry;
