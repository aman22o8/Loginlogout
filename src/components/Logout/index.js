// Write your code here
import './index.css'
import {Component} from 'react'

class Login extends Component {
  render() {
    const {logout} = this.props
    return (
      <button onClick={logout} className="login_out" type="button">
        Logout
      </button>
    )
  }
}

export default Login
