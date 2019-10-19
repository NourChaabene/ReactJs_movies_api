import React, { Component } from 'react'
import { Header } from './Components/Shared'
import Router from './Routers';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router/>
      </div>
    )
  }
}
export default App
