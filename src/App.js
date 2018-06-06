import React, {Component} from 'react';
import './App.css';
import moment from "moment";

class App extends Component {
    state = {
        time: new Date().getTime()
    };

    componentDidMount() {
        this.interval = setInterval(this.tickDown, 1000);
    };

    tickDown = () => {
        this.setState(prevState =>  {return {time: prevState.time - 1000}});
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    };

    render() {
        return (
            <div className="App">
                {moment(this.state.time).format(`LTS`)}
            </div>
        );
    }
}

export default App;
