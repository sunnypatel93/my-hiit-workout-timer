import React, {PureComponent} from 'react'
import './Homepage.scss'
import ClickableCard from '../../components/ClickableCard'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 


export default class Homepage extends PureComponent {
  
  handleOnClick() {
    console.log('hello')
  }

  render() {
    return (
      <div>
        <Router>
        <Link to={'/hiit-workout'}><ClickableCard text='HIIT Workout' onClick={this.handleOnClick}/></Link>
        <Link to={'/circuit-training'}><ClickableCard text='Circuit Training'/></Link>
        <Link to={'/random-timer'}><ClickableCard text='Random Timer'/> </Link>
        <Link to={'/custom-workout'}><ClickableCard text='Custom Workout'/> </Link>
        </Router>
      </div>
    )
  }
}