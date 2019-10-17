import React, {Component} from 'react'
import {Header, Footer} from './Components/Shared'
import Home from './Components/Home'
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        
        <Home />
        <Footer/>
        
      </div>
    )
  }
}
export default App
