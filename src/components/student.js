import React from 'react';

export default class Student extends React.Component {
    constructor () {
        super();
        this.data = this.data.bind(this);
    }
   data (event) {
       this.props.childClick( this.props.data ) ;
   }
    render () {
        return (
            <div>
                    <h1 onClick={ this.data.bind(this) }> { this.props.data }</h1>
            </div>
        );
    }
}