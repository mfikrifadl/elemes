import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import { Hero } from './components'

export default class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Row>
          <h5>ok</h5>
        </Row>
      </div>
    )
  }
}
