import React, { Component } from 'react';
import Value from './Value';
import Control from './Control';
import {connect} from 'react-redux';
// import {connect, bindActionCreators} from 'react-redux'; // 29번째줄 주석과 연동  
import * as actions from '../actions';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.setRandomColor = this.setRandomColor.bind(this);

    }

    setRandomColor(){
        const color =[
            Math.floor(Math.random()*55 +200),
            Math.floor(Math.random()*55 +200),
            Math.floor(Math.random()*55 +200)
        ];

        this.props.handleSetColor(color);
    }
    render() {
        const color = this.props.color;
        const style ={
            // backgraound : `rgb(${color.join(',')})` // templete literals
            background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`

        };

        return (
            <div style={style}>
                <Value number = {this.props.number}/>
                <Control
                    onPlus={this.props.handleIncrement}
                    onSubtrack={this.props.handleDecrement}
                    onRandomizeColor={this.setRandomColor}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        number: state.counter.number,
        color : state.ui.color
    };
};

const mapDisPatchProps = (dispatch) =>{
    // return bindActionCreators(actions, dispatch);
    return {
        handleIncrement: ()=>{dispatch(actions.increment())},
        handleDecrement: ()=>{dispatch(actions.decrement())},
        handleSetColor: (color)=>{dispatch(actions.setcolor(color))},
    };
};

export default connect(mapStateToProps, mapDisPatchProps)(Counter);