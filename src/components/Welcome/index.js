// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false}

  onClickSubscribe = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }
  getButtonText = () => {
    const {isSubscribe} = this.state

    return isSubscribe ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="welcome-container">
        <h1 className="welcome-heading">Welcome</h1>
        <p className="welcome-paragraph">Thank you! Happy Learning</p>
        <button
          type="button"
          className="welcome-button"
          onClick={this.onClickSubscribe}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}
export default Welcome
