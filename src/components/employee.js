import React from 'react';

export  default class Employee extends React.Component {
  data() {
    this.props.childCB(700)
  }
    render () {
        return (
             <div>
                <button type="button" onClick={this.data.bind(this)}>child click</button>
                <h1> i am here employee</h1>
             </div>
        )
    }
}