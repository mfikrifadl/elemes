import React, { Component } from 'react'
import { Hero, Categories, Trendings, Footer } from './components'

export default class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Categories />
        <Trendings />
        <Footer />
      </div>
    )
  }
}
