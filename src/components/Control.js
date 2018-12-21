import React, { Component } from 'react';
import propTypes from 'prop-types';

function creatWarning(funcName) {
    return ()=> console.warn(funcName + 'is not defined')
};

class Control extends Component {

    static defaultProps={
        onPlus:()=>creatWarning('onPlus'),
        onSubtrack:()=>creatWarning('onSubtrack'),
        onRandomizeColor:()=>creatWarning('onRandomizeColor'),
    }
 

    render() {
        return (
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtrack}>-</button>
                <button onClick={this.props.onRandomizeColor}>color change</button>
            </div>
            )
        }
    }

Control.propTypes = {
    onPlus:propTypes.func,
    onSubtrack:propTypes.func,
    onRandomizeColor:propTypes.func
};

export default Control;