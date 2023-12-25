// Write your code here
import './index.css'
import {Component} from 'react'

class Login extends Component {
  render() {
    const {login} = this.props
    console.log(login)

    return (
      <button onClick={login} className="login_in" type="button">
        Login
      </button>
    )
  }
}

export default Login
