import React, { Component } from 'react';
import Button from './../button/button.jsx';
export default class filpPage extends Component{
    static defaultProps={
        pre:true,
        next:true,
        onClick:null,
    };
    _onClick(type){

    }
    render(){
        return (
            <div>
                <Button label='上一页' onClick={this._onClick.bind(this,'pre')}/>
                <Button label='下一页' onClick={this._onClick.bind(this,'pre')}/>
            </div>
        )
    }
}