import React, { Component } from 'react';
import PropTypes from 'prop-types';

function creatWarning(funcName) {
    return ()=>console.log(funcName + 'is not difined')
}

class Control extends Component {

    static defaultProps={
        onPlus:()=>creatWarning('onPlus'),
        onSubtrack:()=>creatWarning('onSubtrack'),
        onRandomizeColor:()=>creatWarning('onRandomizeColor'),
    };
 

render() {
    return (
        <div>
            <button onClick={this.props.onPlus}>+</button>
            <button onClick={this.props.onSubtrack}>+</button>
            <button onClick={this.props.onRandomizeColor}>+</button>
        </div>
        );
    }
};

Control.PropTypes = {
    onPlus:PropTypes.func,
    onSubtrack:PropTypes.func,
    onRandomizeColor:PropTypes.func
};

export default Control;