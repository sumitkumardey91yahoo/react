import React from 'react';

export  default class Employee extends React.Component {

    render () {
        return (
             <div>
                <button type="button" onClick={this.props.childCB}>child click</button>
                <h1> i am here employee</h1>
             </div>
        )
    }
}