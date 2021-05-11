import React, { Component } from 'react'

export default class CounterPoo extends Component {
    state = {
        score: 0
    }

    render() {
        return (
            <button>Cliquez moi {this.state.score} fois</button>
        )
    }
}
