import React, { Component} from "react";
import ReactDOM from "react-dom/client";



class App extends Component {
    constructor() {
        super()
        this.state = {
            name: ""

        }

    }
    funqcia = () => {
        this.setState(
            {
                name: "zura"
            },  
        );
         window.alert(this.state.name);
    }
    render() {
        return (

            <button type="button" className="btn btn-primary" onClick={this.funqcia}>დააკლიკე</button>

        );
    }

}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />)
