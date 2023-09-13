// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {isEven: 0}

  onIncrement = () => {
    this.setState(() => ({
      isEven: Math.round(Math.random() * 100),
    }))
  }

  render() {
    const {isEven} = this.state
    const counterText = isEven % 2 === 0 ? 'Count is Even' : 'Count is Odd'
    return (
      <div className="bg-container">
        <div className="content-box-container">
          <h1 className="heading">Count {isEven}</h1>
          <p className="counter-text">{counterText}</p>
          <button type="button" className="btn" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
