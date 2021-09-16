import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import { Hero, Categories } from './components'

export default class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Categories />
      </div>
    )
  }
}
