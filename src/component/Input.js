import React, { Component } from 'react'
import List from './List.js'
export default class Input extends Component {
    constructor(){
        super()
            this.state = {
                value: '',
                result: []
            };

        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
      }

      change(event) {
        this.setState({value: event.target.value});
      }

      submit(event) {
          alert(this.state.value)
        /*this.state.result.push(<List todo = {this.state.value}/>)
        event.preventDefault();
        this.setState({
            result: this.state.result
        })*/
      }
      

      render() {
        return (
        <div>
          <form onSubmit={this.submit}>
            <label>
              Todo:
              <input type="text" value={this.state.value} onChange={this.change} />
            </label>
            <input type="submit" value="Submit" />
          </form>
          {this.state.result}
        </div>
        );
      }
}
