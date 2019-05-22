import React from 'react';

class Home extends React.Component {
  constructor(){
          super();
          this.state = {
              message: "my friend (from state)!"
          };
      }
      done() {
        console.log("reached", this.state.message)
      }
      render() {
          return (
             <div class="shopping-list">
              <h1>Hello {this.state.message} { this.props.title }!</h1>
              <input type="text" value={this.state.message}/>
              <input type="button" value="submit" onClick= {this.done.bind(this)}/>
            </div>
          );
        }

}




export { Home };
