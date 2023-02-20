import React, {Component } from "react";

class Box extends Component {


    render() {
        return (    
        <React.Fragment>
            <div style={this.getStyles()}>x:{this.toString()}</div>
            <button onClick={this.props.onClickLeft} className="btn btn-primary m-2">left</button>
            <button onClick={this.props.onClickRight} className="btn btn-success m-2">right</button>
            <button
             onClick={() => this.props.onDelete(this.props.box.id) } 
             className="btn btn-danger"
             >Delete</button>
            
        </React.Fragment>   
        );
    }

    toString() {
        const {x} = this.props.box;

        return <h2>x:{x}</h2>
    }

    getStyles() {
        let styles = {
            width: "100px",
            height: "50px",
            backgroundColor: "lightblue",
            color: "white",
            textAlign: "center",
            lineHeight: "50px",
            borderRadius: "5px",
            marginLeft: this.props.box.x  
        };

        if(this.props.box.x === 0) {
            styles.backgroundColor = 'orange';
        }

        return styles;

    }
}

export default Box;