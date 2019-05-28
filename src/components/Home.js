import React from 'react';

import Employee from './employee';

import Student from './student';
class Home extends React.Component {
  constructor(props){
    console.log("props", props)
          super(props);
          this.state = {
              message: "",
              child: [1,2,3,4,5,6,7],
              optionData: true
          };
      }
      done() {
        console.log("reached", this.state.message)
      }
      childFun(evt) {
        console.log("i am child", evt)
      }
      handleChange(e) {
        
        this.setState({optionData: e.target.value});
      }
      valueChange(e) {
        console.log(e.target.value)
        this.setState({message: e.target.value});
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

              <hr/>
              <label>test:</label>
  
              <input type="text" placeholder="Enter here" value={this.state.message} onChange={this.valueChange.bind(this)}/>
              <hr/>

               You are selected: { this.state.optionData } <br/>
              <input type="radio" name="gender" value="male" checked={this.state.optionData === "male"}  onChange={this.handleChange.bind(this)}/> Male<br/>
              <input type="radio" name="gender" value="female" checked={this.state.optionData === "female"} onChange={this.handleChange.bind(this)}/> Female<br/>
              <input type="radio" name="gender" value="other"  checked={this.state.optionData === "other"} onChange={this.handleChange.bind(this)}/> Other
              <hr/>


              <input type="button" value="submit" onClick= {this.done.bind(this)}/>
              <Employee childCB={this.childFun.bind(this)}></Employee>
              <hr/>

                {d}
            
            </div>
          );
        }

}




export { Home };
