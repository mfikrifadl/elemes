import React, { Component } from 'react'
import { Hero, Categories, Trendings } from './components'

export default class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Categories />
        <Trendings />
      </div>
    )
  }
}
