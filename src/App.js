import React, { Component } from 'react'
import { Header } from './Components/Shared'
import Router from './Routers';
import { Footer } from './Components/Shared'
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router />
        <Footer />
      </div>
    )
  }
}
export default App
