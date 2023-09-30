import React, { Component, Fragment } from "react";



class Buttons extends Component {
    constructor() {
        super()
        this.state = {
            saxeli:"zuraba",
            gvari : "chubinouri",
            erovneba: "gorginio"
        }
        

    }
    render() {
        return (
            <Fragment>
                <p>
                    {
                        this.state.saxeli + " " + this.state.gvari + " "  + this.state.erovneba
                    }
                </p>
        
            </Fragment>
        );
    }
}

export default Buttons