import React, { Component } from 'react';
import './style.css';
export default class button extends Component{
    static defaultProps={
        label:'button',
        onClick:null,
    }
    render(){
        return (
            <div>
                <div className='btn' onClick={this.props.onClick}>{this.props.label}</div>
            </div>
        )
    }
}