import React from 'react';

import Employee from './employee';

import Student from './student';
class Home extends React.Component {
  constructor(){
          super();
          this.state = {
              message: "",
              child: [1,2,3,4,5,6,7]
          };
      }
      done() {
        console.log("reached", this.state.message)
      }
      childFun(evt) {
        console.log("i am child", evt)
      }
      studentClick(e) {
        console.log("student:", e)
      }
      render() {
        let d = [];
        for (var i=0; i < this.state.child.length; i++) {
          d.push(<Student key={i} data={this.state.child[i]} childClick={this.studentClick}> </Student>);
        } 
          return (
             <div class="shopping-list">
              <h1>Hello {this.state.message} { this.props.title }!</h1>
              <input type="text" value={this.state.message}/>
              <input type="button" value="submit" onClick= {this.done.bind(this)}/>
              <Employee childCB={this.childFun.bind(this)}></Employee>
              <hr/>

                {d}
            
            </div>
          );
        }

}




export { Home };
