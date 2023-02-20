import React, { Component } from 'react';
import Navbar from './navbar';
import Boxes from './boxes';

class App extends Component {
    state = {  
        boxes: [
            {id: 1, x: 1},
            {id: 2, x: 2},
            {id: 3, x: 3},
            {id: 4, x: 4},
        ]
    } 

    componentDidMount() {
        console.log("App - Mounted");
    }

    constructor() {
        super();
        console.log("App - Constructor")
    }

    handleDelete = (boxId) => {
        const boxes = this.state.boxes.filter(
            b => b.id !== boxId
        );
        this.setState({boxes});
    }

    handleReset = () => {
        const boxes = this.state.boxes.map(b => {
          return {
            id: b.id,
            x: 0,
          }
        });

        this.setState({boxes});
    }

    handleClickLeft = (box) => {     
        const boxes = [...this.state.boxes];
        const k = boxes.indexOf(box);
        boxes[k] = {...boxes[k]};
        boxes[k].x--;
        this.setState({boxes});
    }

    handleClickRight = (box) => {

        const boxes = [...this.state.boxes];
        const k = boxes.indexOf(box);
        boxes[k] = {...boxes[k]};
        boxes[k].x++;
        this.setState({boxes});
    }

    render() { 
        console.log("App - Rendered");

        return (
            <React.Fragment>
                <Navbar boxesCount={this.state.boxes.filter(b => b.x !== 0).length} />
                <div className='container'>
                    <Boxes
                        boxes={this.state.boxes}
                        onReset={this.handleReset}
                        onClickLeft={this.handleClickLeft}
                        onClickRight={this.handleClickRight}
                        onDelete={this.handleDelete}
                     />
                </div>
                
            </React.Fragment>
        );
    }
}
 
export default App;