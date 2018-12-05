import React, { Component } from 'react'

export default class List extends Component {
    state = {todo: this.props.todo}
    constructor(){
        super()
        
    }
    render() {
        return (
        <div>
            <span>{this.state.todo}</span>
        </div>
        )
    }
}
