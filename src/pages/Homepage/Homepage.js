import React, {PureComponent} from 'react'
import './Homepage.scss'
import ClickableCard from '../../components/ClickableCard'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import HiitTimer from '../HiitTimer'

export default class Homepage extends PureComponent {
  
  handleOnClick() {
    console.log('hello')
  }

  render() {
    return (
      <div>
    

    <Link to="/hiit-timer"> <ClickableCard text='HIIT Workout' onClick={this.handleOnClick}/> </Link>
       <ClickableCard text='Circuit Training'/>
          <ClickableCard text='Random Timer'/> 
          <ClickableCard text='Custom Workout'/> 

       
      </div>
    )
  }
}