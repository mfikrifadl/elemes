import React, { Component } from "react";
import { Hero, Categories, Trendings, Footer, Navbar } from "./components";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <Categories />
        <Trendings />
        <Footer />
      </div>
    );
  }
}
