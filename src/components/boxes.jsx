import React, { Component } from 'react';
import Box from './box';

const Boxes = (props) => {
    return (  
        <React.Fragment>
                <button 
                    onClick={props.onReset} 
                    style={{marginBottom: "10px"}} 
                    className='btn btn-info'
                >Reset</button>
                {props.boxes.map(box => (
                    <Box 
                    key={box.id}
                    box={box}
                    onClickLeft={() =>props.onClickLeft(box)}
                    onClickRight={() =>props.onClickRight(box)}
                    onDelete={props.onDelete}
                    />
                ))};
            </React.Fragment>
);
}
 
export default Boxes;
