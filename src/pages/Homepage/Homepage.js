import React, {PureComponent} from 'react'
import './Homepage.scss'
import ClickableCard from '../../components/ClickableCard'
import {Link} from 'react-router-dom'

export default class Homepage extends PureComponent {
  
  handleOnClick() {
    console.log('hello')
  }

  render() {
    return (
      <div>
    

    <Link to="/my-workout"> <ClickableCard text='My Workout' /> </Link>
    <Link to="/random-workout"> <ClickableCard text='Random Workout' /> </Link>
      </div>
    )
  }
}