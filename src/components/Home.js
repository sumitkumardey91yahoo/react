import React from 'react';

import Employee from './employee';
class Home extends React.Component {
  constructor(){
          super();
          this.state = {
              message: ""
          };
      }
      done() {
        console.log("reached", this.state.message)
      }
      childFun() {
        console.log("i am child")
      }
      render() {
          return (
             <div class="shopping-list">
              <h1>Hello {this.state.message} { this.props.title }!</h1>
              <input type="text" value={this.state.message}/>
              <input type="button" value="submit" onClick= {this.done.bind(this)}/>

              <Employee childCB={this.childFun}></Employee>
            </div>
          );
        }

}




export { Home };
