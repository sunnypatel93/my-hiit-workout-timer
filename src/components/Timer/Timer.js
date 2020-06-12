import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Timer extends Component {
  static props = {
    minutes: PropTypes.number,
    seconds: PropTypes.seconds
  }

  constructor(props) {
    super(props)
    this.state = {
      minutes: props.minutes,
      seconds: props.seconds
    }
  }

  state = {
    minutes: this.props.minutes,
    seconds: this.props.seconds
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { minutes, seconds } = this.state
      
      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }))
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval)
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59
          }))
        }
      }
     
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
}

  render() {
    const {minutes, seconds} = this.state
    return (
      <div>
        <h1> Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds} </h1>
      </div>
    )
  }
}