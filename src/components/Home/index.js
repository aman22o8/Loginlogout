// Write your code here
import './index.css'
import {Component} from 'react'

import Login from '../Login/index'
import Logout from '../Logout/index'
import Message from '../Message/index'

class Home extends Component {
  state = {isloggedIn: true}

  onClickButton = () => {
    this.setState(prevState => ({isloggedIn: !prevState.isloggedIn}))
  }

  render() {
    const {isloggedIn} = this.state
    return (
      <div className="main_container">
        <div className="card_container">
          <h1>
            {' '}
            this my my second commit i made in the same file 25/12/2023 00:00
          </h1>
          <Message display={isloggedIn} />
          <div>
            {isloggedIn ? (
              <Login login={this.onClickButton} />
            ) : (
              <Logout logout={this.onClickButton} />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
