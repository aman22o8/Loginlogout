// Write your code here
import './index.css'
import {Component} from 'react'

class Message extends Component {
  render() {
    const {display} = this.props
    console.log(display)
    return (
      <h1 className="message">{display ? 'Please Login' : 'Welcome User'}</h1>
    )
  }
}

export default Message
